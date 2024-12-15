//check the user login for the user to create post
//if not then first login and then create post 
const express = require("express");
const { createPost } = require("../controllers/postController");
const authMiddleware = require('../middlewares/authMiddleware');
//import express router
const router = express.Router();

// Create a post (protected route)
router.post("/", authMiddleware, createPost);

module.exports = router;