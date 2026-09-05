import React from 'react'
import '../index.css';
import {Route, Routes, Outlet} from "react-router-dom";
import HomePage from "./Home/pages/HomePage/HomePage"
import Explore from "./Home/pages/ExplorePage/Explore"
import Register from "./Home/pages/Register/Register"
// import Register from "./Home/pages/Register/Register"
import Login from "./Home/pages/Login/Login"
// import MainLayout from "./components/MainLayout/MainLayout";
import MainLayout from "./Home/components/MainLayout/MainLayout";
import About from './Home/pages/AboutPage/About';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div > 
      
      <Routes>
        <Route path = "/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/explore' element={<Explore />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>

  )
}

export default App
