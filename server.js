// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import stockRoutes from "./src/routes/stockRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/stocks", stockRoutes);

// health check route
app.get("/", (req, res) => {
  res.send("Stock Analyzer Backend is running");
});

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
