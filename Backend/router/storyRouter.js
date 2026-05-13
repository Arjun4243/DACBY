import express from 'express';
import 'dotenv/config';
import {getStories,getStoryById,toggleBookmark} from "../controller/storyController.js"
import authMiddleWare from "../middleware/authMiddleware.js"

const storyRouter = express.Router();

storyRouter.get("/storyGet", getStories);
storyRouter.get("/:id", getStoryById);
storyRouter.post("/:id/bookmark", authMiddleWare, toggleBookmark);

export default storyRouter;
