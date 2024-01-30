const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  bookDescription: {
    type: String,
    unique: true,
  },
  bookPdfUrl: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Books = mongoose.model("Books",bookSchema);

module.exports = Books;
