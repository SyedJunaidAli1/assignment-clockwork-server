import { shopifyApi } from "@shopify/shopify-api";
import dotenv from "dotenv";
import "@shopify/shopify-api/adapters/node"; //

dotenv.config();

const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SHOPIFY_SCOPES,
  hostName: process.env.HOST.replace("https://", ""),
  apiVersion: "2026-01",
  isEmbeddedApp: true,
});

export default shopify;
