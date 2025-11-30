// src/services/stockService.js

// TEMP: mock mapping of company names to symbols
const COMPANY_MAP = [
  { name: "Apple Inc", symbol: "AAPL" },
  { name: "Alphabet Inc", symbol: "GOOGL" },
  { name: "Microsoft Corporation", symbol: "MSFT" },
  { name: "Amazon.com Inc", symbol: "AMZN" },
  { name: "Tesla Inc", symbol: "TSLA" },
  { name: "Reliance Industries", symbol: "RELIANCE.NS" },
  { name: "Tata Consultancy Services", symbol: "TCS.NS" },
];

// 1. Search company
export async function searchCompanyService(query) {
  const lower = query.toLowerCase();

  // search by exact symbol input
  const bySymbol = COMPANY_MAP.find(
    (c) => c.symbol.toLowerCase() === lower
  );
  if (bySymbol) return bySymbol;

  // search by name substring
  const byName = COMPANY_MAP.find((c) =>
    c.name.toLowerCase().includes(lower)
  );
  return byName || null;
}

// 2. Get "real-time" quote (mocked)
export async function getQuoteService(symbol) {
  // In real version, we call external API.
  // For now we fake with random data.

  const basePrice = 1000;
  const randomOffset = Math.random() * 100 - 50; // -50 to +50

  const currentPrice = basePrice + randomOffset;
  const previousClose = basePrice;
  const open = basePrice + (Math.random() * 40 - 20);
  const high = currentPrice + Math.random() * 20;
  const low = currentPrice - Math.random() * 20;
  const volume = Math.floor(1000000 + Math.random() * 500000);

  return {
    symbol,
    currentPrice,
    previousClose,
    open,
    high,
    low,
    volume,
  };
}

// 3. Get intraday data (mocked)
export async function getIntradayService(symbol) {
  const points = [];
  const now = Date.now();
  let price = 1000;

  for (let i = 0; i < 20; i++) {
    const time = new Date(now - (20 - i) * 15 * 60 * 1000); // every 15 minutes
    const change = Math.random() * 20 - 10; // -10 to +10
    price += change;

    points.push({
      time: time.toISOString(),
      close: parseFloat(price.toFixed(2)),
    });
  }

  return points;
}
