import React from "react";
import Connect from "../../components/Connect/Connect";
import {
  Search,
  Gamepad2,
  Trophy,
  CircleDot,
  ArrowRight,
  MessageCircle,
  LandPlot,
  Volleyball,
  Kanban,
} from "lucide-react";
// import { FaCricket } from "react-icons/fa";

const games = [
  {
    title: "PS5 Gaming",
    players: "0+",
    icon: Gamepad2,
    color: "red",
  },
  {
    title: "Football",
    players: "0+",
    icon: Volleyball,
    color: "blue",
  },
  {
    title: "Pool / Snooker",
    players: "0+",
    icon: CircleDot,
    color: "purple",
  },
  {
    title: "Bowling",
    players: "0+",
    icon: Trophy,
    color: "orange",
  },
  {
    title: "Cricket",
    players: "0+",
    icon: Kanban,
    color: "blue",
  },
  {
    title: "Golf",
    players: "0+",
    icon: LandPlot,
    color: "red",
  },
];

export default function Explore() {

  return (
    <div>
      <section className="relative min-h-screen w-full overflow-hidden bg-[#09090e] text-white">
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px] " />

        {/* Red glow */}

        <div className="pointer-events-none absolute left-[5%] top-[150px] h-[250px] w-[250px] rounded-full bg-red-600/[0.035] blur-[100px] sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px]" />

        {/* Blue glow */}

        <div className="pointer-events-none absolute right-[5%] top-[250px] h-[250px] w-[250px] rounded-full bg-blue-600/[0.035] blur-[100px] sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px]" />

        {/* HERO CONTENT */}

        <div className=" relative mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 pb-20 pt-16 text-center md:pb-28 md:pt-24 lg:px-8 lg:pb-32 lg:pt-28">
          {/* BADGE */}

          <div className="relative z-10  max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block border font-bold border-orange-500 rounded-full px-5 py-2 hover:bg-orange-500 hover:text-white text-orange-500 uppercase tracking-[4px] text-xs">
              ⚡ Find Your Match
            </span>
          </div>

          {/* HEADING */}

          <h1 className=" mt-7 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Explore{" "}
            <span className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Players
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className=" mt-5 max-w-[680px] text-sm leading-7 text-white/40 sm:text-base md:text-lg">
            Browse the leaderboard, filter by game or location, and connect with
            players who match your level.
          </p>

          {/* SEARCH BAR */}

          <div className="mt-8 flex w-full max-w-[615px] items-center rounded-2xl border border-white/10 bg-[#121219] px-5 py-4 transition-all duration-300 focus-within:border-blue-500/40 focus-within:shadow-[0_0_30px_rgba(37,99,235,0.08)] sm:mt-10 sm:px-6 sm:py-5">
            <Search
              size={21}
              strokeWidth={2}
              className=" mr-4 shrink-0 text-[#72728b]"
            />

            <input
              type="text"
              placeholder="Search by name or city..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#72728b] sm:text-base"
            />
          </div>
        </div>

        {/* CONNECT USER  */}
        <Connect />

        {/* DIAGONAL DIVIDER */}

        <div className="relative -mt-10 h-[75px] w-full overflow-hidden sm:-mt-12 sm:h-[90px] md:-mt-14 md:h-[100px]">
          <div className="absolute -bottom-[55px] left-[-5%] h-[110px] w-[110%] rotate-[-3deg] bg-[#121219] md:-bottom-[70px] md:h-[140px]" />

          <div className=" absolute bottom-[4px] left-[-5%] h-px w-[110%] rotate-[-3deg] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>

        {/* GAME SECTION */}

        <div className="relative bg-[#121219] px-4 pb-20 pt-5 sm:px-6 sm:pb-24 sm:pt-7 md:pb-28 md:pt-8 lg:px-8">
          <div>
            <h1 className="text-4xl text-center mb-10 font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              GAMES
            </h1>
          </div>

          {/* GAME CARDS CONTAINER */}

          <div className=" mx-auto flex w-full max-w-[1400px] cursor-pointer flex-wrap gap-5">
            {games.map((game) => {
              const Icon = game.icon;

              return (
                <div
                  key={game.title}
                  className="group relative min-h-[210px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#09090e] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 sm:min-h-[220px] sm:p-7 md:w-[calc(50%-10px)] lg:min-h-[240px] lg:w-[calc(25%-15px)]"
                >
                  {/* CARD GLOW */}

                  <div
                    className={`pointer-events-none absolute -bottom-16 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full blur-3xl opacity-10
                    ${
                      game.color === "red"
                        ? "bg-red-500"
                        : game.color === "blue"
                          ? "bg-blue-500"
                          : game.color === "purple"
                            ? "bg-purple-500"
                            : "bg-orange-500"
                    }
                  `}
                  />

                  {/* ICON */}

                  <div
                    className={` relative mx-auto flex h-12 w-12 items-center justify-center rounded-full
                    ${
                      game.color === "red"
                        ? "bg-red-500/10 text-red-500"
                        : game.color === "blue"
                          ? "bg-blue-500/10 text-blue-500"
                          : game.color === "purple"
                            ? "bg-purple-500/10 text-purple-500"
                            : "bg-orange-500/10 text-orange-500"
                    }
                  `}
                  >
                    <Icon size={25} strokeWidth={2} />
                  </div>

                  {/* GAME NAME */}

                  <h3 className="relative mt-5 text-base font-bold text-white sm:text-lg">
                    {game.title}
                  </h3>

                  {/* PLAYER COUNT */}

                  <p
                    className={` relative mt-4 text-2xl font-black
                    ${
                      game.color === "red"
                        ? "text-red-500"
                        : game.color === "blue"
                          ? "text-blue-500"
                          : game.color === "purple"
                            ? "text-purple-500"
                            : "text-orange-500"
                    }
                  `}
                  >
                    {game.players}
                  </p>

                  <p className="relative mt-1 text-sm text-[#656579]">
                    players
                  </p>

                  {/* ARROW */}

                  <div className="absolute bottom-5 right-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowRight
                      size={18}
                      className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CHAT BUTTON */}

        <button
          type="button"
          aria-label="Open chat"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-300 hover:scale-105 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
        >
          <MessageCircle size={26} strokeWidth={2} />
        </button>
      </section>
    </div>
  );
}
