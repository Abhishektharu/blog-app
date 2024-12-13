import { useState } from "react";
import { useAuth } from "@/hooks/AuthProvider";

const Login = () => {
  const auth = useAuth();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      auth.loginAction(input);
      return;
    }
    alert("Please provide valid input");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmitEvent}
        className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
          Login
        </h2>

        <div className="mb-4">
          <label
            htmlFor="user-email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="user-email"
            name="email"
            placeholder="example@yahoo.com"
            onChange={handleInput}
            className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <p className="mt-1 text-xs text-gray-500">
            Please enter a valid email address.
          </p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            onChange={handleInput}
            className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <p className="mt-1 text-xs text-gray-500">
            Password must be at least 6 characters.
          </p>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
