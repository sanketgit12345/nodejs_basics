const express = require("express");
require("./config");

const Product = require("./productSchema");

const app = express();

app.post("/create",(req,resp)=>{
     resp.send("Done");
})

app.get("/list",async (req,resp)=>{
     let gatData = await Product.find();
     resp.send(gatData);
})

app.listen(3000);