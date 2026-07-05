import React from 'react'
import '../index.css';
import Login from './pages/Login/Login';
import {Route, Routes, Outlet} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import About from "./pages/About/About";
import Explore from "./pages/Explore/Explore"
import Register from "./pages/Register/Register"
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  return (
    <div >
      
      <Routes>
        <Route path = "/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='explore' element={<Explore />} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>

  )
}

export default App
