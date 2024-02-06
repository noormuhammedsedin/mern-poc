const mongoose = require("mongoose");
const dotenv = require('dotenv')
require('dotenv').config();
const mogoUrl=process.env.MONGO_URL || "mongodb://127.0.0.1:27017/BookInventory"
console.log("*******mongoURL",mogoUrl)
const connect = async () => {
  try {
    await mongoose.connect(mogoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = connect;
