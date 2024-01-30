const Order= require("../models/order.model");
const getOrder = async () => {
    try {
      const result = await Order.find();
      return result;
    } catch (error) {
      console.error("Error fetching all books:", error);
    }
};

module.exports={getOrder}