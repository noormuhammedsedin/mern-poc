const Books = require("../models/book.model");
const Allbook = async (query) => {
    try {
      const result = await Books.find(query);
      return result;
    } catch (error) {
      console.error("Error fetching all books:", error);
    }
};

module.exports={Allbook}