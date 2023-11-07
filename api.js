const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");

const app = express();

app.use(express.json());  // For getting the body request from client and convert that data into json format

// 1. GET method --> GET method used for to get the data from server, No we can not pass body in GET method 

app.get("/", async (req, resp) => {
     let data = await dbConnect();
     data = await data.find().toArray();
     console.log("data", data);
     resp.send(data);
})

// 2. POST method --> From client we can pass new data to server using POST method 

app.post("/", async (req, resp) => {
     let data = await dbConnect();
     let result = data.insertOne(req.body);
     resp.send(result)
})

// 3. PUT method --> We can update the data using PUT method 

app.put("/:name", async (req,resp)=>{
   let data = await dbConnect();
   // 1. Using req.body we can update the data 
   // data = data.updateOne({name:req.body.name},{$set:req.body});
   // 2. Using params we can update the data we can take the name from params 
   data = data.updateOne({name:req.params.name},{$set:req.body});
   resp.send({result:"Record updated successfully..."})
})

// 4. DELETE method --> We can delete the data using DELETE method 

app.delete("/:id",async(req,resp)=>{
   let data = await dbConnect();
   const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
   console.log("id",req.params.id);
   resp.send({result:"Record deleted successfully...."})
})

// In mongodb we can not use schema and modal

// Connect nodejs to mongodb using Mongoose 
// Using mongoose we can define the type and we can not insert extra field 


app.listen(3000);