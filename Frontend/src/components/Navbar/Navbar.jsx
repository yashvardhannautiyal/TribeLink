import React, { useState } from "react";
import { Zap, Menu, X} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 px-5 md:px-10 py-2 relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between">
        {/* logo  */}
        <div className="flex items-center gap-1">
          <div className="bg-orange-500 p-1 rounded-lg">
            <Zap className="text-white fill-amber-50 w-3 h-3 md:w-4 md:h-4" />
          </div>

          <h1 className="text-white font-bold text-xl md:text-3xl">
            TRIBE<span className="text-orange-500">LINK</span>
          </h1>
        </div>

        {/* list item  */}
        <div className="flex gap-8 text-gray-400 items-center justify-center text-sm font-medium tracking-wide">
          <Link to="/" className="hover:text-white transition">
            HOME
          </Link>

          <Link to="/about" className="hover:text-white transition">
            ABOUT
          </Link>

          <Link to="/explore" className="hover:text-white transition">
            EXPLORE
          </Link>
        </div>

        {/* buttons  */}
        <div className="flex items-center px-0 gap-2">
          <button className="px-3 py-1 rounded-md border border-gray-700 text-gray-400 text-xs md:text-sm font-medium hover:text-white hover:border-orange-400 hover:cursor-pointer transition">
            <Link to="/login">SIGN IN</Link>
          </button>

          <button className="px-2 py-1 rounded-lg bg-orange-600 text-white text-xs md:text-sm font-medium hover:bg-orange-500 hover:cursor-pointer transition">
            <Link to="/register">JOIN NOW</Link>
          </button>
        </div>
      </div>



      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between relative">
        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
          <div className="bg-orange-500 p-1 rounded-lg">
            <Zap className="text-white fill-amber-50 w-3 h-3" />
          </div>

          <h1 className="text-white font-bold text-xl">
            TRIBE<span className="text-orange-500">LINK</span>
          </h1>
        </div>

        {/* Right Side Icons */}
        <div className="ml-auto flex items-center gap-3">
          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-400 hover:text-white hover:cursor-pointer transition"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden rounded-xl p-5 flex flex-col items-center gap-4 text-gray-400 text-xs font-medium">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white transition"
          >
            HOME
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white transition"
          >
            ABOUT
          </Link>

          <Link
            to="/explore"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white transition"
          >
            EXPLORE
          </Link>
        
          <div className="flex flex-col gap-3 pt-2 w-3xs">
            <button className="px-5 py-1 rounded-md border border-gray-700 text-gray-400 text-sm font-medium hover:text-white hover:border-orange-400 transition">
              <Link to="/login">SIGN IN</Link>
            </button>

            <button className="px-5 py-1 rounded-lg bg-orange-600 text-white text-sm font-medium hover:bg-orange-500 transition">
              <Link to="/register">JOIN NOW</Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;