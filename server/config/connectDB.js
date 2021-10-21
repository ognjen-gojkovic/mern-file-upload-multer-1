require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    console.log("Database connected...");
  });
};

module.exports = connectDB();
