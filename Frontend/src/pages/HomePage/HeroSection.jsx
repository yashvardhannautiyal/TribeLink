import React from 'react'
import { ArrowRight, Star ,Zap ,ChevronRight } from "lucide-react";

const players = [
  {
    initials: "M",
    name: "Marcus",
    game: "PS5 Gaming",
    rating: "4.9",
    badge: "PRO",
    color: "bg-red-600",
    position: "top-10 left-5",
  },
  {
    initials: "Y",
    name: "Yash",
    game: "Football",
    rating: "4.7",
    badge: "PRO",
    color: "bg-blue-600",
    position: "top-32 right-6",
  },
  {
    initials: "D",
    name: "Dev",
    game: "Pool",
    rating: "4.5",
    badge: "ADVANCED",
    color: "bg-purple-600",
    position: "bottom-49 left-12",
  },
  {
    initials: "T",
    name: "Tushar",
    game: "Bowling",
    rating: "4.6",
    badge: "ADVANCED",
    color: "bg-orange-500",
    position: "bottom-25 right-6",
  },
];



function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#09090f] text-white ">
    <div  className="absolute inset-0 opacity-10
        bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
        bg-[size:72px_72px]" />
      <div className="absolute top-20 right-40 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute bottom-20 left-1/2 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
          <div  className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[92vh]">
              {/* left */}
              <div>
                <span className='inline-flex items-center gap-2 border mt-4 ml-2 border-orange-500/70 bg-orange-500/30 hover:bg-orange-500/40 text-orange-400 rounded-full px-5 py-2 text-xs tracking-[3px] uppercase font-semibold'>
                <Zap size={15} /> The Player Network
                </span>
                <h1 className="mt-4 font-black leading-none">
                  <span className="block text-5xl sm:text-6xl lg:text-6xl">Link Your Tribe</span>
                 <span className="block mt-2 text-5xl sm:text-6xl lg:text-6xl text-orange-500 ">
                Tribe.
              </span>
              <span className="block mt-2 text-5xl sm:text-6xl lg:text-6xl bg-gradient-to-r from-red-500 via-blue-700 bg-clip-text text-transparent">
                Dominate
              </span>
              <span className="block mt-2 text-5xl sm:text-6xl lg:text-6xl">
                Together.
              </span>
              </h1>
               <p className=" mt-8 text-gray-400 text-lg max-w-xl leading-7.5">
              Connect with players who share your passion. Organise
              matches, track your performance, and rise through the
              ranks — PS5, Football, Pool, Bowling and more.
            </p>
             <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <button className="border bg-orange-600/20 border-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                JOIN NOW
                <ArrowRight size={20} />
              </button>
               <button className="border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white transition px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                Explore
                <ChevronRight size={20} />
              </button>
             </div>
               </div>
          <div className="relative hidden lg:block md:block md:h-[460px] h-[580px]">

            {players.map((player, index) => (
              <div
                key={index}
                className={`absolute ${player.position} w-50 rounded-2xl border border-white/10 bg-[#11111b]/90 backdrop-blur-md p-3 shadow-xl`}
              >
                <div className="flex items-center gap-4">

                  <div
                    className={`w-12 h-12 rounded-full ${player.color} flex items-center justify-center font-bold`}
                  >
                    {player.initials}
                  </div>

                  <div> 
                    <h3 className="font-semibold text-lg">
                      {player.name}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {player.game}
                    </p>
                  </div>

                </div>

                <div className="flex items-center mt-2 gap-1">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill="#FACC15"
                      stroke="#FACC15"
                    />
                  ))}

                  <span className="ml-1 text-gray-400">
                    {player.rating}
                  </span>

                  <span className="ml-auto text-[7px] tracking-widest bg-red-900/30 text-red-600 border border-red-500/30 rounded-full px-3 py-1">
                    {player.badge}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroSection

