import express from "express";
import shopify from "../config/shopify.js";
import Shop from "../models/Shop.js";

const router = express.Router();

/**
 * Step 1: Start OAuth
 */
router.get("/auth", async (req, res) => {
  const { shop } = req.query;

  if (!shop) {
    return res.status(400).send("Missing shop parameter");
  }

  const authRoute = await shopify.auth.begin({
    shop,
    callbackPath: "/api/auth/callback",
    isOnline: false,
    rawRequest: req,
    rawResponse: res,
  });

  res.redirect(authRoute);
});

/**
 * Step 2: OAuth Callback
 */
router.get("/callback", async (req, res) => {
  try {
    const { session } = await shopify.auth.callback({
      rawRequest: req,
      rawResponse: res,
    });

    // Save shop in DB
    await Shop.findOneAndUpdate(
      { shopDomain: session.shop },
      { shopDomain: session.shop },
      { upsert: true },
    );

    res.redirect(process.env.FRONTEND_ENDPOINT);
  } catch (error) {
    console.error(error);
    res.status(500).send("Auth failed");
  }
});

export default router;
