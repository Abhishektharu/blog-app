import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !content) {
      setError("All fields are required.");
      return;
    }

    console.log({ title, author, content }); // Replace with API call or state update

    // Reset form
    setTitle("");
    setAuthor("");
    setContent("");
    setError("");
    alert("Post successfully created!");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 ">
      <div className="container mx-auto px-6 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Blog Editor</h1>

        {error && (
          <div className="bg-red-100 text-red-600 border border-red-400 p-3 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
              placeholder="Enter the blog title"
            />
          </div>

          {/* Author */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="author">
              Author
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>

          {/* Content */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="content">
              Content
            </label>
            <ReactQuill
              id="content"
              value={content}
              onChange={setContent}
              theme="snow"
              placeholder="Write your blog content here..."
              className="bg-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;
