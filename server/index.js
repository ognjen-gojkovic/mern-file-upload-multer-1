require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/connectDB");

/**
 * @desc
 * connect database
 */
connectDB();

const app = express();

/**
 * @desc
 * apply middleware
 */
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

/**
 * @desc
 * routes
 */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", require("./routes/Router.uploadFile"));

/**
 * @desc
 * connect server
 */
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  if (err) console.log(err);
  server.close(() => process.exit(1));
});
