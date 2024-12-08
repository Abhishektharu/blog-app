import React, { createContext, useContext, useState } from "react";

// Create the Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null, // User info (e.g., username, email)
    token: null, // JWT token
  });

  // Login function
  const login = (userData, token) => {
    setAuth({ user: userData, token });
    localStorage.setItem("auth", JSON.stringify({ user: userData, token }));
  };

  // Logout function
  const logout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth Context
export const useAuth = () => useContext(AuthContext);