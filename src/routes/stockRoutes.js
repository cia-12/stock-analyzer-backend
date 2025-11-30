// src/routes/stockRoutes.js
import { Router } from "express";
import {
  searchCompany,
  getQuote,
  getIntraday,
} from "../controllers/stockController.js";

const router = Router();

// GET /api/stocks/search?query=apple
router.get("/search", searchCompany);

// GET /api/stocks/quote/AAPL
router.get("/quote/:symbol", getQuote);

// GET /api/stocks/intraday/AAPL
router.get("/intraday/:symbol", getIntraday);

export default router;
