import React from 'react'

const Header = () => {
  return (
    <div>
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
                <a href="/create" className="text-gray-600 hover:text-gray-800">
                  New Post
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header