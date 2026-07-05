import {
  Users,
  Shield,
  Trophy,
  Heart,
} from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const values = [
  {
    icon: Users,
    title: "Community First",
    color: "text-red-500 bg-red-500/10",
    border: "border-red-500",
    desc:
      "We believe gaming and sport are better together. TribeLink exists to remove the friction between players who want to connect.",
  },
  {
    icon: Shield,
    title: "Fair Play",
    color: "text-blue-500 bg-blue-500/10",
    desc:
      "Skill-based matching, honest ratings and zero tolerance policy for toxic behaviour. Every player deserves a good game.",
  },
  {
    icon: Trophy,
    title: "Competitive Spirit",
    color: "text-purple-500 bg-purple-500/10",
    desc:
      "Whether you play for fun or glory, we celebrate every win. Leaderboards, badges, and rankings keep the fire burning.",
  },
  {
    icon: Heart,
    title: "Inclusive by Design",
    color: "text-orange-500 bg-orange-500/10",
    desc:
      "From casual players to esports pros, TribeLink welcomes every skill level. Your tribe is out there -- we'll help you find them.",
  },
];

const ValuesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      <div
        className="absolute inset-0 opacity-10
        bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
        bg-[size:72px_72px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase text-blue-500 -mt-10">
            WHAT WE STAND FOR
          </p>

          <h2 className="text-4xl font-bold">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-4 gap-8 mt-15">

          {values.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#17171f]
                border
                border-white/10
                rounded-2xl
                p-5
                hover:-translate-y-2
                duration-300"
              >

                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}
                >
                  <Icon size={15} />
                </div>

                <h3 className="text-xl font-semibold mt-3 inline-block">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-2 leading-7">

                  {item.desc}

                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;