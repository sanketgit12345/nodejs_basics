const mongoose = require("mongoose");

const ProductShema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    categroy: String
});

 module.exports = mongoose.model("products", ProductShema);