const express=require("express");
const router=express.Router();
const {getBookbyId,updateBook,deleteBook} =require("../service/book")

// get a single book data
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const result = await getBookbyId(id);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching book by ID:", error);
      res.status(500).json({ error: "Failed to fetch book by ID" });
    }
});
  

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const updateBookData = req.body;
  
    try {
      const result = await updateBook(id, updateBookData);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error updating book:", error);
      res.status(500).json({ error: "Failed to update book" });
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const result = await deleteBook(id);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error deleting book:", error);
      res.status(500).json({ error: "Failed to delete book" });
    }
});
  
module.exports=router;