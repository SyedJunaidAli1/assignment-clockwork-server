import express from "express";
import { saveMessage, getMessage } from "../controllers/shop.controller.js";

const router = express.Router();

router.post("/message", saveMessage);
router.get("/message/:shopDomain", getMessage);

export default router;
