import cheerio from 'cheerio';
import Story from '../models/storyModel.js';
import 'dotenv/config';

const scrapeStories = async()=>{
    const response=await fetch("https://news.ycombinator.com");
    const html = await response.text()
    const $ = cheerio.load(html);

    const stories = [];

    $("athing"),slice(0,10).each((index,element)=>{
        const title = $(element).find("titleline a").text();
        const url = $(element).find("titleline a").attr("href");
        const subtext = $(el).next().find(".subtext");
         const points = parseInt(subtext.find(".score").text()) || 0;
          const author = subtext.find(".hnuser").text();
          const postedAt = new Date();

      stories.push({ title, url, points, author, postedAt });
    })

    await Story.deleteMany({})
    await Story.insertMany(stories);
    console.log("data from the website",html);
    
}