import express from 'express';
import { scrapeStories } from '../controllers/scraperController.js';
import 'dotenv/config';

const screaperRouter = express.Router();

screaperRouter.post("scraperPost",async (req, res) => {
    await scrapeStories();
    console.log("Scraping completed");
    res.json({})
})

export default screaperRouter;