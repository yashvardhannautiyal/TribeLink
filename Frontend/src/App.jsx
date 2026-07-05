import React from 'react'
import '../index.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login/Login';
import HeroSection from './pages/HomePage/HeroSection';
import About from './pages/AboutPage/About';

function App() {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <About />
       <Login />
      <Footer />
    </div>

  )
}

export default App
