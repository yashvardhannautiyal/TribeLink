import React from 'react'
import {Zap} from 'lucide-react'

const Footer = () => {
  return (
            <footer className="bg-linear-to-r from-blue-600 to-red-400 pt-0.5">
<div className="px-28 pt-10 pb-6  relative grid grid-cols-1 md:grid-cols-4 gap-10 bg-[#0b0f19]">
  <div className=' ' >
  <div className="flex items-center text-xs gap-1">
         <div className="bg-orange-500 p-1 rounded-lg">
           <Zap className="text-white fill-amber-50 w-3 h-3" />
         </div>
         <h1 className="text-white font-bold tracking-wide">
           TRIBE<span className="text-orange-500">LINK</span>
         </h1>
       </div> 
<p className='text-[10px] mt-2 text-gray-500 mb-4 font-semibold'>Connect with players who share your passion. <br /> 
  Find your tribe, dominate together.</p>
  </div>
  <div>
    <h2 className="text-gray-500 font-bold mb-4 text-[10px]" >PLATFORM</h2>
    <ul className="space-y-2 font-semibold text-[10px]">
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Home</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">About</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Explore</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Contact</a></li>
    </ul>
  </div>
  <div>
    <h3 className="text-gray-500 font-bold mb-4 text-[10px]" >GAMES</h3>
    <ul className="space-y-2 font-semibold text-[10px]">
      <li><a href="#" className="hover:text-gray-300 text-gray-500">PS5 Gaming</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Football</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Pool</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Bowling</a></li>
    </ul>
  </div>
  <div>
    <h2 className="text-gray-500 font-bold mb-4 text-[10px]" >COMMUNITY</h2>
    <ul className="space-y-2 font-semibold text-[10px]">
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Leaderboard</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Events</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Find Players</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Skill Badges</a></li>
    </ul>
  </div>
  <div className="border-t w-4xl border-gray-800 mt-0 ml-5  pt-4 flex flex-col md:flex-row justify-center items-center text-sm">
  <p className="text-[10px] text-gray-500">&copy; 2026 TribeLink. All rights reserved.</p>
  
</div>
</div>
</footer>

  )
}

export default Footer