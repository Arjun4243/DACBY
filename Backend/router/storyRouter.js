import express from 'express';
import 'dotenv/config';
import {getStories,getStoryById,toggleBookmark} from "../controller/storyController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const storyRouter = express.Router();

storyRouter.get("/storyGet", getStories);
storyRouter.get("/:id", getStoryById);
storyRouter.post("/:id/bookmark", authMiddleware, toggleBookmark);

export default storyRouter;
