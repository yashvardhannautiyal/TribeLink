import React, { useState } from "react";
import { Zap, Menu, X, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../utils/auth";

const DashboardNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // logout functionality
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); //auth.js util
    navigate("/login");
  };
  return (
    <nav className="bg-gray-900 px-5 md:px-10 py-2 relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between">
        {/* logo  */}
        <div className="flex items-center gap-1">
          <div className="bg-orange-500 p-1 rounded-lg">
            <Zap className="text-white fill-amber-50 w-3 h-3 md:w-4 md:h-4" />
          </div>
          <Link to={"/home"}>
          <h1 className="text-white font-bold text-xl md:text-3xl">
            TRIBE<span className="text-orange-500">LINK</span>
          </h1>
          </Link>
        </div>

        

        {/* page navigation + LOGOUT button  */}
        <div className="flex items-center px-0 gap-4">
          <ul>
            <Link to={"/dashboard/profile"}><li className="cursor-pointer"><UserRound className="text-white w-3 h-3 md:w-6 md:h-6" /></li></Link>
          </ul>
          <button
            onClick={handleLogout}
            className="px-3 py-1 rounded-md border border-gray-700 text-gray-400 text-xs md:text-sm font-medium hover:text-white hover:border-orange-400 hover:cursor-pointer transition"
          >
            Logout
          </button>
        </div>
      </div>



      {/* ================================================================================================== */}
      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between relative">
        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
          <div className="bg-orange-500 p-1 rounded-lg">
            <Zap className="text-white fill-amber-50 w-3 h-3" />
          </div>
          <Link to={"/home"}>
          <h1 className="text-white font-bold text-xl">
            TRIBE<span className="text-orange-500">LINK</span>
          </h1>
          </Link>
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
          <div className="flex flex-col gap-3 pt-2 w-3xs items-center">

            <ul className="text-white text-sm font-medium">
            <Link to={"/dashboard/profile"}><li className="cursor-pointer">PROFILE</li></Link>
          </ul>
            <button
              onClick={handleLogout}
              className="px-5 py-1 rounded-md border border-gray-700 text-gray-400 text-sm font-medium hover:text-white hover:border-orange-400 transition"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNav;
