const dbConnect = require("./mongodb");

const deleteRecords = async () => {
    
    const db = await dbConnect();

    // deleteOnce ==> It is used for delete the single record 
    // deleteMany ==> It is used for multiple records 
    // If the current record is not present then not getting error we can check deleteCount 
    let result = db.deleteOne({name:"Vivo Y20"});

   console.log("insert",await result);
}

deleteRecords();