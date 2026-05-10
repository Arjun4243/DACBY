import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRouter from "./router/userRouter.js";
import cors from 'cors';
import storyRouter from './router/storyRouter.js';
import scraperRouter from './router/scraperRouter.js';
import {scrapeStories} from './controllers/scraperController.js';


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
app.use("/api/story", storyRouter)
app.use("/api/scraper", scraperRouter)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
