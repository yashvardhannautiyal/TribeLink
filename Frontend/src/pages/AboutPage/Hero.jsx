import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 opacity-10
        bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
        bg-[size:72px_72px]"
      />

      <div
        className="absolute bottom-0 left-0 w-full h-48
        bg-[#17171f]
        skew-y-3 origin-bottom-left"
      />

      <div className="relative z-10  max-w-5xl mx-auto px-6 text-center">

        <span className="inline-block border border-orange-500 rounded-full px-5 py-2 hover:bg-orange-500 hover:text-white text-orange-500 uppercase tracking-[4px] text-xs">
          ⚡ Our Story
        </span>

        <h1 className="mt-8 font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">

          Built by Players,

          <br />

          <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            For Players
          </span>

        </h1>

        <p className="mt-8 text-gray-400 text-base md:text-xl leading-8 max-w-4xl mx-auto">

          TribeLink was born from a simple frustration—finding people to
          play with shouldn't be hard. Whether you're looking for a PS5
          opponent at midnight or a 5-a-side team on Sunday, we make the
          connection effortless.

        </p>

      </div>

    </section>

  )
}

export default Hero