const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    products: [{
        title: String,
        price: Number,
    }],
    payment: {},
    status: {
        type: String,
        default: "Not Process",
        enum: ["Not Process", "Processing", "Shipped", "Delivered", "Cancelled"]
    }
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
