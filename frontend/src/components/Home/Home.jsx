import React from 'react'
import { Link } from 'react-router-dom';
import Write from '../Write/Write';
import LogoutButton from '../Logout/LogoutButton';
const Home = () => {


  const blogPosts = [
    {
      id: 1,
      title: "How to Build a Blog App with React",
      author: "Jane Doe",
      date: "Dec 2, 2024",
      excerpt: "Learn how to build a fully functional blog app using React and Tailwind CSS.",
    },
    {
      id: 2,
      title: "Tailwind CSS Tips and Tricks",
      author: "John Smith",
      date: "Dec 1, 2024",
      excerpt: "Improve your Tailwind CSS skills with these tips and tricks.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Blogify</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="/write" className="text-gray-600 hover:text-gray-800">
                  New Post
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-600 hover:text-gray-800">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="text-gray-600 hover:text-gray-800">
                  Sign up
                </a>
              </li>
              <LogoutButton />
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Blogify</h2>
          <p className="text-lg">
            Your one-stop platform to read, write, and share amazing stories.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <main className="container mx-auto px-6 py-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Latest Posts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-700">{post.excerpt}</p>
                <a
                  href={`/post/${post.id}`}
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2024 Blogify. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home