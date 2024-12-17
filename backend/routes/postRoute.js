//check the user login for the user to create post
//if not then first login and then create post 
const express = require("express");
const { createPost } = require("../controllers/postController");
const authMiddleware = require('../middlewares/authMiddleware');

//import express router
const router = express.Router();
const Post = require('../models/PostModel');
// Create a post (protected route)
router.post("/", authMiddleware, createPost);

router.get("/", async (req, res) => {
    try {
      const posts = await Post.find().populate("author", "username"); // Populate author details
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch posts", error });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate("author", "username");
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: "Error fetching post", error });
    }
  });
  
module.exports = router;