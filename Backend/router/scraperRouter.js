import express from 'express';
import { scrapeStories } from '../controller/scraperController.js';
import 'dotenv/config';

const scraperRouter = express.Router();

scraperRouter.post("/scraperPost",async (req, res) => {
    await scrapeStories();
    console.log("Scraping completed");
    res.json({})
})

export default scraperRouter;