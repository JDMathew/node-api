const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Gets back allthe posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Sends a specific post not from the database
router.get("/specific", (req, res) => {
  res.send("We are on a specific post");
});

//Submits a Post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
