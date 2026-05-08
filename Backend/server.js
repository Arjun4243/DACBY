import express from 'express';
import dotenv from "dotenv/config";
import { connectDB } from './config/db.js';
import userRouter from "./router/userRouter.js";

const app=express();

const port = process.env.PORT

app.use(express.json())

connectDB();

app.use("/api/user",userRouter)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


