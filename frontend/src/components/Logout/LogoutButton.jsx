import React from "react";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "@/hooks/AuthProvider";


const LogoutButton = () => {
  const auth  = useAuth();

  return (
    <button onClick={() => auth.logOut()} className="btn-submit">
          logout
    </button>
  );
};

export default LogoutButton;