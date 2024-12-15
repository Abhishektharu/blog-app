const Post = require("../models/PostModel");

const jwt = require("jsonwebtoken");

const createPost = async (req, res) => {
  try {
    // Extract token from the Authorization header
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Create the post with the author's ID
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      author: decoded.id, // Use the user's MongoDB ObjectId here
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Failed to create post", error });
  }
};

module.exports = { createPost };
