import React, { useState, useEffect } from "react";
import "../index.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./Home/pages/HomePage/HomePage";
import Explore from "./Dashboard/DashboardPages/ExplorePage/Explore";
import Register from "./Home/pages/Register/Register";
import Login from "./Home/pages/Login/Login";
import MainLayout from "./Home/components/MainLayout/MainLayout";
import About from "./Home/pages/AboutPage/About";
import ProfilePage from "./Dashboard/DashboardPages/ProfilePage/ProfilePage";
import AdminPage from "./Home/pages/AdminPage/AdminPage";

import ProtectedRoute from "./Home/components/ProtectedRoute/ProtectedRoute";
import { verifyToken } from "./utils/auth";

function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const navigate = useNavigate();


  useEffect(() => {
    // function to check authentication 
    const checkAuthentication = async () => {
      const authenticatedUser = await verifyToken();

      if (authenticatedUser) {
        setUser(authenticatedUser);

        if(window.location.pathname === "/"){
          navigate("/dashboard/explore", {replace: true});
        }
      }

      setAuthLoading(false);
    };


    //function call
    checkAuthentication();
  }, [navigate]); //renders once after the app is started

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#080a11] flex items-center justify-center text-white">
        Checking authentication...
      </div>
    );
  }
  return (
    <div>
      {/* public pages  */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={"/home"} element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* protected pages  */}
        <Route
          path="/dashboard/explore"
          element={
            <ProtectedRoute user = {user}>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard/profile"
        element = {<ProfilePage />} />
        <Route path="/admin"
        element = {<AdminPage />} />

        {/* authentication pages  */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
