import mongoosh from "mongoose";
import dotenv from "dotenv/config"
import mongoose from "mongoose";

export const connectDB=async()=>{
    try{

        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.log(error);
    }
}