import React from 'react'
import { Zap } from 'lucide-react'

const Navbar = () => {
  return (
   <nav className="fixed top-0 left-0 w-full z-50 bg-[#07090f] border-b border-gray-800 px-19 py-2 flex items-center justify-between">
        <div className="flex items-center text-xs gap-1">
        <div className="bg-orange-500 p-1 rounded-lg">
          <Zap className="text-white fill-amber-50 w-3 h-3" />
        </div>
        <h1 className="text-white font-bold tracking-wide">
          TRIBE<span className="text-orange-500">LINK</span>
        </h1>
      </div>
       <div className="hidden md:flex gap-8 text-gray-400 text-[10px]  px-50 items-center justify-center font-medium tracking-wide">
        <a href="#" className="hover:text-white  hover:underline hover:decoration-amber-600">HOME</a>
       <a href="#" className="hover:text-white hover:underline transition">ABOUT</a>
          <a href="#" className="hover:text-white hover:underline transition">EXPLORE</a>
         <a href="#" className="hover:text-white hover:underline transition">CONTACT</a>
</div>
         <div className="flex items-center px-0 gap-2 ">
        <button className="px-4 py-1.5 rounded-md border border-gray-700 text-gray-500 text-[9px] font-semibold hover:text-white hover:border-orange-400 transition">
         <a href= "#"> SIGN IN </a>
        </button>
         <button className="px-5 py-1.5 rounded-lg bg-orange-500 text-white text-[9px] font-semibold hover:bg-orange-600 transition">
         <a href="#" > JOIN NOW  </a>
        </button>
        
        
      </div>
        </nav>
  )
}

export default Navbar
