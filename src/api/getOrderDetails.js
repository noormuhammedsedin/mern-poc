const express = require("express");
const router = express.Router();
const {getOrder}= require("../service/getOrder");

router.get("/", async (req, res) => {
  try {
    const result = await getOrder();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching order details", error);
    res.status(500).json({ error: "Failed to order details"});
  }
});

module.exports = router;