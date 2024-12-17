import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../Logout/LogoutButton";
import { useAuth } from "@/hooks/AuthProvider";

const Layout = ({ children }) => {
  const auth = useAuth();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Blogify</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/write" className="text-gray-600 hover:text-gray-800">
                  New Post
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-800">
                  About
                </Link>
              </li>

              {!auth.user ? (
                <>
                  <li>
                    <Link to="/login" className="text-gray-600 hover:text-gray-800">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="text-gray-600 hover:text-gray-800">
                      Sign up
                    </Link>
                  </li>
                </>
              ) : (
                <LogoutButton />
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Blogify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
