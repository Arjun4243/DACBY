import * as cheerio from 'cheerio';
import Story from '../model/storyModel.js';
import 'dotenv/config';

export const scrapeStories = async()=>{
    const response=await fetch("https://news.ycombinator.com");
    const html = await response.text()
    const $ = cheerio.load(html);

    const stories = [];

    $(".athing").slice(0, 10).each((index, element) => {
        const title = $(element).find(".titleline a").first().text();
        const url = $(element).find(".titleline a").first().attr("href");
        const subtext = $(element).next().find(".subtext");
        const points = parseInt(subtext.find(".score").text()) || 0;
        const author = subtext.find(".hnuser").text();
        const postedAt = new Date();

        if (title && url) {
            
            stories.push({ 
                title, 
                url, 
                points, 
                author, 
                postedAt });
        }
    });

    if (stories.length > 0) {
        await Story.deleteMany({});
        await Story.insertMany(stories);
        console.log(`Successfully scraped and saved ${stories.length} stories.`);
    } else {
        console.error("Scraping failed: No stories found. Check if the website structure has changed.");
    }
}