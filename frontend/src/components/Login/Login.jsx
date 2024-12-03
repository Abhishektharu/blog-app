import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate login API call
    console.log({ email, password });

    setError("");
    alert("Login successful!");
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Login</h1>

        {error && (
          <div className="bg-red-100 text-red-600 border border-red-400 p-3 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <p className="mt-4 text-sm text-center py-2 text-gray-600">
          Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
