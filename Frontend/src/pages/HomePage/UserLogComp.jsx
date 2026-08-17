import React from "react";
import { ArrowRight } from "lucide-react";

export default function UserLogComp() {
  return (
    <div>
    <section className="relative w-full overflow-hidden bg-[#08080d] text-white lg:-mt-10 md:-mt-10 -mt-3">

      {/* BACKGROUND GRID */}

      <div className=" pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* BACKGROUND GLOW */}

      <div className=" pointer-events-none absolute right-[-100px] top-[150px] h-[350px] w-[350px] rounded-full bg-blue-500/[0.04] blur-3xl sm:right-[-120px] sm:h-[450px] sm:w-[450px] lg:right-[-150px] lg:h-[550px] lg:w-[550px]" />

      {/* MAIN CONTAINER */}

      <div className=" relative mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-20 lg:py-20">

        {/* CTA BOX */}

        <div className=" relative overflow-hidden rounded-2xl p-[3px] bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 sm:rounded-[20px]">

          {/* INNER BOX */}

          <div className=" relative overflow-hidden rounded-[14px] bg-[#111119] px-6 py-10 sm:rounded-[17px] sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-15 lg:py-12">

            {/* DECORATIVE SHAPE */}

            <div className=" pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rotate-45 bg-gradient-to-br from-blue-500/[0.04] to-red-500/[0.06] sm:right-[-80px] sm:top-[-80px] sm:h-[380px] sm:w-[380px] lg:right-[-50px] lg:top-[-100px] lg:h-[500px] lg:w-[500px]" />

            {/* Another decorative shape */}

            <div className=" pointer-events-none absolute right-[30px] top-[90px] h-[180px] w-[180px] rotate-45 border border-red-500/[0.05] sm:h-[240px] sm:w-[240px] lg:right-[100px] lg:top-[60px] lg:h-[330px] lg:w-[330px]" />

            {/* CONTENT */}

            <div className=" relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12" >

              {/* LEFT CONTENT */}

              <div className=" w-full lg:w-[60%] ">

                {/* Small heading */}

                <p className=" text-xs font-bold tracking-[4px] text-orange-500 sm:text-xs sm:tracking-[5px]">
                  READY TO PLAY?
                </p>

                {/* Main heading */}

                <h2 className="mt-4 max-w-[600px] text-4xl font-black leading-[1.05] tracking-tight sm:mt-5 sm:text-5xl md:text-6xl lg:text-5xl">
                  Ready to Find
                  <br />

                  <span className=" bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Your Tribe?
                  </span>
                </h2>

                {/* Description */}

                <p className=" mt-2 max-w-[600px] text-sm leading-7 text-gray-500 sm:text-base sm:leading-8 md:text-lg ">
                  Join thousands of players already connecting,
                  competing, and building communities on TribeLink.
                </p>

              </div>

              {/* BUTTONS */}

              <div className=" relative flex w-full flex-col gap-4 sm:max-w-[380px] lg:w-[35%] lg:max-w-[360px]">

                {/* JOIN NOW */}

                <button className=" group flex min-h-[58px] w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 text-xs font-bold tracking-wider text-white transition-all duration-300 hover:bg-orange-600 hover:cursor-pointer hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] sm:min-h-[60px] sm:text-sm">
                  JOIN NOW — IT'S FREE
                  <ArrowRight size={19} className=" transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* LEARN MORE */}

                <button className=" flex min-h-[58px] w-full items-center justify-center rounded-xl border border-white/10 bg-transparent px-6 py-4 text-xs font-bold tracking-wider text-gray-400 transition-all duration-300 hover:cursor-pointer hover:border-white/20 hover:bg-white/[0.03] hover:text-white sm:min-h-[60px] sm:text-sm">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}