const dbConnect = require("./mongodb");

const insertRecords = async () => {
    
    const db = await dbConnect();
    
  // insertOne ==> It is used for store single record means single object to database 
  // insertMany ==> It is used for store multiple records to database

    let result = db.insertMany([{name:"Vivo Y20",brand:"Vivo",price:500,category:"mobiles"},
    {name:"y r20",brand:"oppo",price:600,category:"mobiles"}]);

   console.log("insert",result);
}

insertRecords();