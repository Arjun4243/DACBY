import Story from "../model/storyModel.js";

// GET /api/stories → Fetch all stories sorted by points
export const getStories = async (req, res) => {
  const stories = await Story.find().sort({ points: -1 });
  res.json(stories);
};

// GET /api/stories/:id → Fetch single story
export const getStoryById = async (req, res) => {
  const story = await Story.findById(req.params.id);
  if (!story) return res.status(404).json({ message: "Story not found" });
  res.json(story);
};

// POST /api/stories/:id/bookmark → Toggle bookmark
export const toggleBookmark = async (req, res) => {
  const story = await Story.findById(req.params.id);
  if (!story) return res.status(404).json({ message: "Story not found" });

  const userId = req.userId;

  if (story.bookmarkedBy.includes(userId)) {
    story.bookmarkedBy = story.bookmarkedBy.filter(e => e.toString() !== userId);
  } else {
    story.bookmarkedBy.push(userId);
  }

  await story.save();
  res.json({ message: "Bookmark toggled", story });
};
