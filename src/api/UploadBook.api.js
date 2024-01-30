const express = require("express");
const router = express.Router();
const {UploadBook} = require("../service/UploadBook");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    await UploadBook(data);
    res.status(200).send({ success: true, message: "Book uploaded successfully" });
  } catch (error) {
    console.error("Error uploading book:", error);
    res.status(500).send({ success: false, error: "Failed to upload book" });
  }
});

module.exports = router;
