import React from "react";
import { Shield, Target, Trophy} from "lucide-react";

const processData = [
  {
    number: "1",
    title: "Create Your Profile",
    description:
      "Sign up, pick your games, and set your skill level. Your tribe is waiting.",
    icon: Shield,
    color: "red",
    numberColor: "bg-red-600",
  },
  {
    number: "2",
    title: "Find Your Players",
    description:
      "Search by game, location, or skill. Filter to find the perfect match.",
    icon: Target,
    color: "blue",
    numberColor: "bg-blue-600",
  },
  {
    number: "3",
    title: "Climb the Ranks",
    description:
      "Rate your opponents, earn badges, and dominate the leaderboard.",
    icon: Trophy,
    color: "orange",
    numberColor: "bg-orange-500",
  },
];

export default function Process() {
  return (
    <div>
    <section className="relative w-full overflow-hidden bg-[#111119] text-white -mt-6">

      {/* BACKGROUND */}
      <div className=" pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Top decorative diagonal */}
      <div className=" pointer-events-none absolute left-0 right-0 top-0 h-24 bg-gradient-to-br from-black/40 via-transparent to-transparent opacity-50" />

      {/* MAIN CONTAINER */}
      <div className=" relative mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-18">

        {/* SECTION HEADING */}
        <div className="text-center">
          {/* Small heading */}
          <p className="font-bold tracking-[4px] text-orange-500 text-xs sm:tracking-[5px] lg:-mt-5 md:-mt-10 -mt-5">
            SIMPLE PROCESS
          </p>

          {/* Main heading */}
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl">
            How It Works
          </h2>
        </div>

        {/* PROCESS AREA */}
        <div className="relative mx-auto mt-12 max-w-[1100px] md:mt-16 lg:mt-20">

          {/* Horizontal Connecting Line Only visible on laptop */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[38px] hidden h-px bg-gradient-to-r from-red-500/30 via-blue-500/30 to-orange-500/30 lg:block" />

          {/* PROCESS CARDS */}
          <div className=" flex flex-col gap-10 md:gap-8 lg:flex-row lg:items-start lg:gap-7">
            {processData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.number} className="relative w-full lg:w-1/3">

                  {/* MOBILE VERTICAL CONNECTOR */}
                  {index < processData.length - 1 && (
                    <div className=" pointer-events-none absolute bottom-[-40px] left-[28px] h-10 w-px bg-gradient-to-b from-white/20 to-transparent md:bottom-[-32px] md:h-8 lg:hidden" />
                  )}

                  {/* NUMBER */}
                  <div className={` absolute right-[-1px] top-[-14px] z-20 flex h-9 w-9 items-center    justify-center rounded-full text-xs font-black text-white shadow-lg sm:right-[-1px] sm:top-[-14px] sm:h-10 sm:w-10 lg:right-[-1px] lg:top-[-14px]
                      ${item.numberColor}
                    `}>
                    {item.number}
                  </div>

                  {/* CARD */}
                  <div className=" relative min-h-[230px] overflow-hidden rounded-2xl border border-white/10 bg-[#09090e] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] sm:min-h-[240px] sm:p-7 md:min-h-[225px] lg:min-h-[210px] lg:p-5">

                    {/* CARD GLOW */}
                    <div className={`pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full blur-3xl
                        ${
                          item.color === "red"
                            ? "bg-red-500/[0.05]"
                            : item.color === "blue"
                            ? "bg-blue-500/[0.05]"
                            : "bg-orange-500/[0.05]"
                        } `} />

                    {/* ICON */}
                    <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl border
                        ${
                          item.color === "red"
                            ? "border-red-500/20 bg-red-500/[0.08]"
                            : item.color === "blue"
                            ? "border-blue-500/20 bg-blue-500/[0.08]"
                            : "border-orange-500/20 bg-orange-500/[0.08]"
                        }`} >
                      <Icon size={27} strokeWidth={2} className={ item.color === "red"
                            ? "text-red-500"
                            : item.color === "blue"
                            ? "text-blue-500"
                            : "text-orange-500"
                        } />
                    </div>

                    {/* TITLE */}
                    <h3 className=" relative mt-4 text-lg font-bold text-white sm:text-xl">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="relative mt-2 max-w-[360px] text-sm leading-7 text-gray-400/60 sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div> </div>
      </div>
    </section>
    </div>
  );
}