import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRouter from "./router/userRouter.js";
import cors from 'cors';

const app = express();

const port = process.env.PORT

app.use(cors({
    origin: 'http://localhost:3001',
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true  
}))



app.use(express.json())

connectDB();


app.use("/api/user", userRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
