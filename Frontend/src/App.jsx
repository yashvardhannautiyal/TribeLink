import React, { useState } from "react";
import "../index.css";
import { Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./Home/pages/HomePage/HomePage";
import Explore from "./Dashboard/DashboardPages/ExplorePage/Explore";
import Register from "./Home/pages/Register/Register";
import Login from "./Home/pages/Login/Login";
import MainLayout from "./Home/components/MainLayout/MainLayout";
import About from "./Home/pages/AboutPage/About";

import ProtectedRoute from "./Home/components/ProtectedRoute/ProtectedRoute";
import { verifyToken } from "./utils/auth";

function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // function to check authentication 
    const checkAuthentication = async () => {
      const authenticatedUser = await verifyToken();

      if (authenticatedUser) {
        setUser(authenticatedUser);
      }

      setAuthLoading(false);
    };


    //function call
    checkAuthentication();
  }, []); //renders once after the app is started

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#080a11] flex items-center justify-center text-white">
        Checking authentication...
      </div>
    );
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route
          path="/dashboard/explore"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
