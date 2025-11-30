// src/controllers/stockController.js
import {
  searchCompanyService,
  getQuoteService,
  getIntradayService,
} from "../services/stockService.js";

// /api/stocks/search?query=...
export async function searchCompany(req, res) {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: "query parameter is required" });
  }

  try {
    const result = await searchCompanyService(query);
    if (!result) {
      return res.status(404).json({ error: "Company not found" });
    }
    return res.json(result);
  } catch (err) {
    console.error("Error in searchCompany:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// /api/stocks/quote/:symbol
export async function getQuote(req, res) {
  const { symbol } = req.params;
  if (!symbol) {
    return res.status(400).json({ error: "symbol parameter is required" });
  }

  try {
    const quote = await getQuoteService(symbol);
    if (!quote) {
      return res.status(404).json({ error: "Quote not found" });
    }
    return res.json(quote);
  } catch (err) {
    console.error("Error in getQuote:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// /api/stocks/intraday/:symbol
export async function getIntraday(req, res) {
  const { symbol } = req.params;
  if (!symbol) {
    return res.status(400).json({ error: "symbol parameter is required" });
  }

  try {
    const data = await getIntradayService(symbol);
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Intraday data not found" });
    }
    return res.json(data);
  } catch (err) {
    console.error("Error in getIntraday:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}
