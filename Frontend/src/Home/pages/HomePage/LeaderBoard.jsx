import React from "react";
import { ArrowRight, ChevronRight,Trophy, MapPin, MessageCircle, Star} from "lucide-react";

const players = [
  {
    rank: 1,
    initials: "MR",
    name: 'Marcus "Blaze" Reid',
    game: "PS5 Gaming",
    rating: "4.9",
    matches: "142 matches",
    location: "London, UK",
    badge: "PRO",
    avatar: "from-red-500 to-red-700",
  },
  {
    rank: 2,
    initials: "AO",
    name: "Aisha Okonkwo",
    game: "Football",
    rating: "4.7",
    badge: "PRO",
    avatar: "from-blue-500 to-blue-700",
  },
  {
    rank: 3,
    initials: "DS",
    name: "Dev Sharma",
    game: "Pool",
    rating: "4.6",
    badge: "ADVANCED",
    avatar: "from-purple-500 to-purple-700",
  },
  {
    rank: 4,
    initials: "ZH",
    name: "Zoe Hartley",
    game: "Bowling",
    rating: "4.5",
    badge: "ADVANCED",
    avatar: "from-yellow-500 to-orange-600",
  },
];

/* STAR RATING */
const Rating = ({ rating }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-[2px]">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} size={15} fill="#facc15" stroke="#facc15" />
        ))}
      </div>
      <span className="text-sm text-gray-400">{rating}</span>
    </div>
  );
};

/* #1 PLAYER CARD */
const FirstPlayer = ({ player }) => {
  return (
    <div className=" relative h-full min-h-[440px] overflow-hidden rounded-2xl border border-white/10 bg-[#111119] p-6 sm:min-h-[460px] sm:p-7 lg:min-h-[455px] lg:p-8 ">
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-red-500/[0.08] blur-3xl" />
      {/* Rank */}
      <span className=" absolute right-6 top-5 text-5xl font-black text-red-500/[0.05] ">
        #1
      </span>
      {/* Trophy */}
      <div className=" relative flex h-10 w-10 mb-5 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/[0.08]">
        <Trophy size={20} className="text-orange-500" />
      </div>
      {/* Avatar */}
      <div className=" relativemt-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-2xl font-black text-white shadow-[0_0_30px_rgba(239,68,68,0.25)]">
        {player.initials}
      </div>
      {/* Name */}
      <div className="relative mt-6">
        <h2 className=" text-xl font-bold text-white sm:text-2xl">
          {player.name}
        </h2>
        <p className="mt-2 text-base text-gray-400">{player.game}</p>
      </div>
      {/* Rating */}
      <div className="relative mt-5">
        <Rating rating={player.rating} />
      </div>
      {/* Badge + Location */}
      <div className=" relative mt-4 flex flex-wrap items-center gap-3">
        <span
          className=" rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[10px] font-bold tracking-widest text-red-500">
          PRO
        </span>
        <span className=" flex items-center gap-1 text-sm text-gray-400">
          <MapPin size={14} />
          {player.location}
        </span>
      </div>
      <div className="relative my-6 h-px bg-white/10" />
      {/* Bottom */}
      <div className=" relative flex items-center justify-between">
        <span className="text-sm text-gray-500">{player.matches}</span>

        <button className=" group flex items-center gap-1 text-xs font-bold tracking-wider text-orange-500 transition hover:text-orange-400 ">
          CONNECT
          <ArrowRight size={15} className=" transition-transform group-hover:translate-x-1 " />
        </button>
      </div>
    </div>
  );
};

/* SMALL PLAYER CARD */
const PlayerCard = ({ player }) => {
  return (
    <div className=" relative min-h-[190px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111119] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 sm:min-h-[200px] sm:p-6">
      <div className={` pointer-events-none absolute -bottom-24 -right-16 h-48 w-48 rounded-full bg-gradient-to-br    ${player.avatar} opacity-[0.08] blur-3xl `} />
      {/* Rank */}
      <span className=" absolute right-5 top-3 text-4xl font-black text-white/[0.025]">
        #{player.rank}
      </span>
      {/* Card Content */}
      <div className=" relative flex h-full items-center gap-4 sm:gap-5">
        {/* Avatar */}
        <div className={` flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${player.avatar} text-base font-black text-white shadow-lg sm:h-16 sm:w-16 sm:text-lg`}>
          {player.initials}
        </div>
        {/* Information */}
        <div className="min-w-0">
          <h3 className=" truncate text-base font-bold text-white sm:text-lg">
            {player.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{player.game}</p>
          <div className="mt-3">
            <Rating rating={player.rating} />
          </div>
          <span className={` mt-3 inline-block rounded-full border px-3 py-1 text-[9px] font-bold tracking-widest
              ${
                player.badge === "PRO"
                  ? "border-red-500/30 bg-red-500/10 text-red-500"
                  : "border-blue-500/30 bg-blue-500/10 text-blue-500"
              } `} >
            {player.badge}
          </span>
        </div> </div> </div>
  );
};

/* MAIN LEADERBOARD */
export default function LeaderBoard() {
  return (
    <section className=" relative min-h-screen overflow-hidden bg-[#08080d] text-white lg:p-20 -mt-15 lg:mt-0">
      {/* BACKGROUND GRID */}
      <div className=" pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px] " />
      {/* Red glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-red-500/[0.03] blur-3xl" />
      {/* Blue glow */}
      <div className=" pointer-events-none absolute right-0 top-80 h-96 w-96 rounded-full bg-blue-500/[0.03] blur-3xl" />
      {/* CONTENT */}
      <div className=" relative mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* HEADING */}
        <div className=" mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className=" text-xs font-bold tracking-[5px] text-blue-500 lg:-mt-10 sm:text-sm">
              MONTHLY RANKINGS
            </p>
            <h1 className=" mt-3 text-3xl font-black tracking-tight sm:mt-4 sm:text-4xl lg:text-[40px]">
              Top Players
            </h1>
          </div>
          <button className=" group flex items-center gap-2 self-start text-sm text-gray-400 transition hover:text-orange-500 hover:cursor-pointer sm:self-auto">
            Full Leaderboard
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
     {/* FLEX LAYOUT */}
        <div className=" flex flex-col gap-5 lg:flex-row ">
          {/* LEFT - #1 PLAYER */}
          <div className="w-full lg:w-[33.333%] ">
           <FirstPlayer player={players[0]} />
          </div>
          {/* RIGHT SIDE */}
          <div className=" flex w-full flex-wrap gap-5 lg:w-[66.666%]">
            {/* #2 */}
            <div className="w-full md:w-[calc(50%-10px)] ">
              <PlayerCard player={players[1]} />
            </div>
            {/* #3 */}
            <div className=" w-full md:w-[calc(50%-10px)]">
              <PlayerCard player={players[2]} />
            </div>
            {/* #4 */}
            <div className=" w-full md:w-[calc(50%-10px)] ">
              <PlayerCard player={players[3]} />
            </div>
          </div>
        </div>
      </div>
      
      {/* CHAT BUTTON */}
      {/* <button className="fixed bottom-5 right-5 z-10 flex h-5 w-5 hover:cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-[0_0_30px_rgba(239,68,68,0.3)] transition hover:scale-105 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16">
        <MessageCircle size={26} />
      </button> */}
    </section>
  );
}
