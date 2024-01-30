const express = require("express");
const router = express.Router();
const {Allbook}= require("../service/allBook");

router.get("/", async (req, res) => {
  try {
    let query = {};
    if (req.query?.category) {
      query = { category: req.query.category };
    }
    const result = await Allbook(query);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching all books:", error);
    res.status(500).json({ error: "Failed to fetch all books" });
  }
});

module.exports = router;
