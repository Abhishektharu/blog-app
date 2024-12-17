import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <Layout>
      <h3 className="text-3xl font-semibold text-gray-800 mb-6">Latest Posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h4>
              <p className="text-gray-600 text-sm mb-4">
                By {post.author?.username || "Unknown Author"}
              </p>
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
              <Link
                to={`/post/${post._id}`}
                className="text-blue-500 hover:underline mt-4 block"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
