const Books = require("../models/book.model");

const UploadBook = async (data) => {
  try {
    console.log(data)
    const result = await Books.create(data);
    console.log("Book uploaded successfully:", result);
  } catch (error) {
    console.error("Error uploading book:", error);
    throw error;
  }
};

module.exports = { UploadBook };
