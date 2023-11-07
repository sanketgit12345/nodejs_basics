
const mongoose = require("mongoose");

// Database field define in Schemas
// Schemas used for to validate the mongodb field
// Modal used for to connect node js to mongodb using schemas

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

const ProductShema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    categroy: String
});

const saveInDB = async () => {
    const ProductModal = mongoose.model("products", ProductShema);
    let data = new ProductModal({ name: "m8", price: 400, brand: "Mi", categroy: "Mobile" });
    let result = await data.save();
    console.log("result", result);
}

// saveInDB

const updateInDB = async () => {
    const ProductModal = mongoose.model("products", ProductShema);
    let data = await ProductModal.updateOne(
     {name:"apple 13"},
     {$set:{name:"mi note 11"}}
     );
     console.log(data);
}


// updateInDB();

const deleteInDB = async () => {
    const ProductModal = mongoose.model("products", ProductShema);
    let result = await ProductModal.deleteOne({name:"apple 13"});
    console.log("result",result);
}

// deleteInDB();

// Get all the records using find method if you want to get particular record then you can assign in find method 

const finedInDB = async () => {
    const ProductModal = mongoose.model("products", ProductShema);
    let getData = await ProductModal.find({name:"one plus 13"});
    console.log("result",getData);
}

// finedInDB();