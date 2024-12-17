// models/Post.js
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    //to do add author instead of logged user name
    
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
    createdAt: { type: Date, default: Date.now }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);