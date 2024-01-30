const Books=require("../models/book.model")
const getBookbyId = async (id) => {
    try {
      // const filter = { _id: new ObjectId(id) };
      const result = await Books.findById(id);
      return result;
    } catch (error) {
      console.error("Error fetching book by ID:", error);
    }
};
  

const updateBook = async (id, updateBookData) => {
  try {
    const options = { upsert: true }; // Include options if needed
    const result = await Books.findByIdAndUpdate(id, updateBookData, options);
    return result;
  } catch (error) {
    console.error("Error updating book:", error);
    // Handle the error or rethrow it if needed
    throw error;
  }
};

const deleteBook = async (id) => {
try {
  const result = await Books.findByIdAndDelete(id);
  return result;
} catch (error) {
  console.error("Error deleting book:", error);
  // Handle the error or rethrow it if needed
  throw error;
}
};
  

module.exports={getBookbyId,updateBook,deleteBook}