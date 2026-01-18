import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const FRONTEND_ENDPOINT = process.env.FRONTEND_ENDPOINT;

app.use(express.json());
app.use(
  cors({
    origin: FRONTEND_ENDPOINT,
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Shopify App Server Running");
});

import shopRoutes from "./routes/shop.routes.js";
app.use("/api/shop", shopRoutes);

export default app;
