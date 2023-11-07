const dbConnect = require("./mongodb");

const updateRecords = async () => {

    const db = await dbConnect();

    // updateOne ==> It is used for update the single object to database 
    // updateMany ==> It is used for update multiple records to database

    let updateOne = db.updateOne({ name: "apple 13" },
        { $set: { price: 600,name:"one plus 13" } });

    // let updateMany = db.updateMany({ name: "apple 13" },
    //     { $set: { price: 800 } });


    console.log(await updateOne);

}

updateRecords();