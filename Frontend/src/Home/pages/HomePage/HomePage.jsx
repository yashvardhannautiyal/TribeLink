import React from 'react'
import HeroSection from './HeroSection'
import LeaderBoard from './LeaderBoard'
import UserLogComp from './UserLogComp'
import Process from './Process'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <LeaderBoard />
      <Process />
      <UserLogComp />
    </div>
  )
}

export default HomePage
