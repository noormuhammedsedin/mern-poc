var braintree = require("braintree");
const dotenv = require('dotenv')
require('dotenv').config();
const Order=require("../models/order.model")
var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

//token
exports.brainTreeToken=async(req,res)=>{
    try{
        gateway.clientToken.generate({},function(err,result){
         if(err){
            return err
         }
         else{
           res.status(201).send(result)
         }
        })
    }catch(error){
      return error
    }
}

//payment
// exports.brainTreePayment=(cart,nonce)=>{
//   try {
//     let total=0;
//     cart.map((e)=>total+=e.price);
//     let newTransaction=gateway.transaction.sale({
//         amount:total,
//         paymentMethodNonce:nonce,
//         options:{
//             submitForSettlement:true
//         }
//     },
//     function(err,result) {
//       if(result){
//         const order=new Order({
//             products:cart,
//             payment:result,
//             // buyer:req.user._id
//         }).save();
//       }
//       else{
//         return err
//       }   
//     })
//   } catch (error) {
//     return error
//   }
// }

exports.brainTreePayment = async (cart, nonce) => {
    try {
        let total = 0;
        cart.map((e) => total += e.price);
        gateway.transaction.sale({
            amount: total,
            paymentMethodNonce: nonce,
            options: {
                submitForSettlement: true
            }
        }, async function (err, result) {
            if (result) {
                try {
                    const order = await new Order({
                        products: cart,
                        payment: result,
                    }).save();
                    console.log("*************order",order)
                   return "order created successfully!!"
                } catch (orderError) {
                    console.error("Error saving order:", orderError);
                    return orderError;
                }
            } else {
                console.error("Payment Error:", err);
                return err;
            }
        });
    } catch (error) {
        console.error("Unexpected Error:", error);
        return error;
    }
};

