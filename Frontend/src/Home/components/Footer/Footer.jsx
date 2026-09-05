import React from 'react'
import {Zap} from 'lucide-react'

const Footer = () => {
  return (
            <footer className="bg-linear-to-r from-blue-600 to-red-400 pt-0.5">
<div className="md:px-10 px-2 md:pt-10 pt-5 pb-4  relative grid grid-cols-1 md:grid-cols-4 gap-10 bg-[#0b0f19]">
  <div className=' ' >
  <div className="flex items-center text-xs gap-1">
         <div className="bg-orange-500 p-1 rounded-lg">
           <Zap className="text-white fill-amber-50 w-3 h-3" />
         </div>
         <h1 className="text-white font-bold text-xl tracking-wide">
           TRIBE<span className="text-orange-500">LINK</span>
         </h1>
       </div> 
<p className='text-sm  mt-2 text-gray-500 mb-4 ml-5  font-semibold'>Connect with players who share your passion. <br /> 
  Find your tribe, dominate together.</p>
  </div>
  
  <div className='ml-10'>
    <h2 className="text-gray-500 font-bold mb-4 text-sm" >PLATFORM</h2>
    <ul className="space-y-2 font-semibold text-sm">
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Home</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">About</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Explore</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Contact</a></li>
    </ul>
  </div>
  <div className='ml-10'>
    <h3 className="text-gray-500 font-bold mb-4 text-sm" >GAMES</h3>
    <ul className="space-y-2 font-semibold text-sm">
      <li><a href="#" className="hover:text-gray-300 text-gray-500">PS5 Gaming</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Football</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Pool</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Bowling</a></li>
    </ul>
  </div>
  <div className='ml-10'>
    <h2 className="text-gray-500 font-bold mb-4 text-sm" >COMMUNITY</h2>
    <ul className="space-y-2 font-semibold text-sm">
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Leaderboard</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Events</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Find Players</a></li>
      <li><a href="#" className="hover:text-gray-300 text-gray-500">Skill Badges</a></li>
    </ul>
  </div>
  <div className="md:col-span-4 text-center mt-1">
   <hr className=" dark:text-gray-700 " /> 
  <p className="text-sm text-gray-500 mt-4">&copy; 2026 TribeLink. All rights reserved.</p> 
  </div>
</div>


</footer>


  )
}

export default Footer