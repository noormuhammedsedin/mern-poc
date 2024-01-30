const {brainTreeToken,brainTreePayment}=require("../service/PaymentGatway");
const express=require("express");
const router=express.Router();

router.get("/",async(req,res)=>{
  await brainTreeToken(req,res);
})

router.post("/", async (req, res) => {
  try {
      const { cart, nonce } = req.body; 
      await brainTreePayment(cart, nonce);
      console.log("payment done");
      return res.status(201).send({ message: "Payment done" });
  } catch (error) {
      console.error("Error processing payment:", error);
      return res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports=router;
