// app.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const expressMongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const { rateLimit } = require("express-rate-limit");

const router = require("./src/routes/api");

const app = express();

app.use(cors());
app.use(helmet());
app.use(expressMongoSanitize());
app.use(hpp());

// 2️⃣ Rate Limiter Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,               // max 100 requests per IP per window
  standardHeaders: "draft-8",
  legacyHeaders: false,
});
app.use(limiter);

app.use("/api/v1", router);

app.use((req, res) => {
  res.status(404).json({ status: "Failed", data: "Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: "Error", message: "Internal Server Error" });
});

module.exports = app;
