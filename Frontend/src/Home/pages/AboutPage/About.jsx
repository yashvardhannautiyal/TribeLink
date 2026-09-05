import React from 'react'
import Hero from './Hero'
import MissionSection from './MissionSection'
import ValuesSection from './ValuesSection'

const About = () => {
  return (
     <main className="bg-[#0b0b13] text-white overflow-hidden">
      <Hero />
      <MissionSection />
      <ValuesSection />
    </main>
  );
};

export default About