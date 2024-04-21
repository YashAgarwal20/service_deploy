const mongoose=require("mongoose");
require("dotenv").config();


const URI=process.env.MONGO_URL;

const connectdb=async()=>
{
    try {
        await mongoose.connect(URI);
        console.log("coonection successful to database")

    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports=connectdb;