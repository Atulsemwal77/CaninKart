// components/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND}/api/admin/dashboard-data`, {
        withCredentials: true, // Important for sending cookies
      })
      .then((res) => {
        setIsAuthenticated(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) {
    return (
       <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
    if (loading) {
    
  }
  }

  if (!isAuthenticated) {
    return <Navigate to="/dashboard/das-login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
