const dbConnect = require("./mongodb");

const main = async () => {
    let getData = await dbConnect();
    getData = await getData.find().toArray();
    console.log("data",getData);
}

main();



