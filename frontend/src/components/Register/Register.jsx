import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate registration API call
    console.log({ username, email, password });

    setError("");
    alert("Registration successful!");
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Register</h1>

        {error && (
          <div className="bg-red-100 text-red-600 border border-red-400 p-3 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
              placeholder="Enter your username"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          <p className="mt-4 text-sm text-center py-2 text-gray-600">
          Login here <a href="/login" className="text-blue-500 hover:underline">login</a>
        </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition w-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
