import React from "react";
import { Navigate } from "react-router-dom";

// we want that if user tries to manually go to the route - /dashboard/explore
// then check  
// if("Is user authenticated")
// {go to explore}
// else{
    // go to login page} 

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;