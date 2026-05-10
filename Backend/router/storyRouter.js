import express from 'express';
import 'dotenv/config';
import {getStories,getStoryById,toggleBookMark} from "../controller/storyController.js"
import {authMiddleWare} from "../middleware/authMiddleware.js"

const storyRouter = express.Router();

storyRouter.get("/", getStories);
storyRouter.get("/:id", getStoryById);
storyRouter.post("/:id/bookmark", authMiddleware, toggleBookmark);

export default storyRouter;


