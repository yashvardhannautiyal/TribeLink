import React from 'react'
import '../index.css';
import {Route, Routes, Outlet} from "react-router-dom";
import HomePage from "./Home/pages/HomePage/HomePage"
import Explore from "./Dashboard/DashboardPages/ExplorePage/Explore"
import Register from "./Home/pages/Register/Register"
import Login from "./Home/pages/Login/Login"
import MainLayout from "./Home/components/MainLayout/MainLayout";
import About from './Home/pages/AboutPage/About';
import ProtectedRoute from './Home/components/ProtectedRoute/ProtectedRoute';


function App() {
  return (
    <div > 
      
      <Routes>
        <Route path = "/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<About />} />
        </Route>
        <Route path='/dashboard/explore' element={<Explore />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={
          <ProtectedRoute>
          <Login />
          </ProtectedRoute>} />
      </Routes>
    </div>

  )
}

export default App
