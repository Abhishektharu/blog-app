import React from "react";
import { useAuth } from "@/context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    alert("Logged out successfully!");
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default LogoutButton;