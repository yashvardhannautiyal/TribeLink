import React from "react";
import { FaUsers, FaGamepad, FaTrophy, FaCalendarAlt } from "react-icons/fa";
import { useEffect } from "react";



const stats = [
  {
    number: "6,500+",
    title: "ACTIVE PLAYERS",
    color: "text-red-500",
  },
  {
    number: "4",
    title: "GAME CATEGORIES",
    color: "text-blue-500",
    border: "border-blue-500",
  },
  {
    number: "1,200+",
    title: "MATCHES PLAYED",
    color: "text-purple-500",
  },
  {
    number: "2024",
    title: "FOUNDED",
    color: "text-orange-500",
  },
];

const MissionSection = () => {
  return (
    <section className="bg-[#17171f] py-24 ">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="text-orange-500 uppercase tracking-[3px] font-bold -mt-33 text-sm">
              OUR MISSION
            </p>

            <h2 className="text-3xl lg:text-3xl font-bold mt-5">
              Connecting the World's Players
            </h2>
            
            <p className="mt-6 text-gray-400 leading-7 text-lg">

              We started TribeLink in 2026 with one goal: eliminate the
              loneliness of gaming and sport. Too many players sit at home unable to find opponents, or show up to a venue with no one to play against.

            </p>

            <p className="mt-6 text-gray-400 leading-7 text-lg">

              Today, over 6,500 players across the UK use TribeLink to
              find matches, build rivalries and form lasting
              communities - all centred around the games and sports they love.

            </p>

          </div>

          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-3 -mt-20">

            {stats.map((item, index) => (

              <div
                key={index}
                className="bg-[#0f0f16]
                border border-blue-400
                rounded-2xl
                p-10
                text-center
                hover:-translate-y-2
                duration-300"
              >

                <h3 className={`text-3xl font-bold ${item.color}`}>

                  {item.number}

                </h3>

                <p className="mt-1 text-gray-400 tracking-[4px]">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionSection;