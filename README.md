# Real-Time Stock Analyzer – Backend

This is the **backend service** for the Real-Time Stock Analyzer project.  
It exposes REST APIs that return stock quotes and intraday price data for a given symbol, and is consumed by a React frontend.

---

## 🧱 Tech Stack

- **Node.js**
- **Express**
- **Axios**
- **dotenv**

---

## 📂 Project Structure

```text
stock-analyzer-backend/
  ├── server.js                  # Entry point (Express app)
  ├── .env                       # Environment variables (NOT committed)
  ├── .gitignore
  ├── package.json
  ├── package-lock.json
  └── src/
      ├── routes/
      │   └── stockRoutes.js     # Route definitions
      ├── controllers/
      │   └── stockController.js # Request handlers (controllers)
      └── services/
          └── stockService.js    # Business logic + API calls (services)
