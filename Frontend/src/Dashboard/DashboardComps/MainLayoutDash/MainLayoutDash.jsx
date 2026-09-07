import React from 'react'
import { Outlet } from "react-router-dom";
import DashboardNav from '../DashboardNav/DashboardNav';

function MainLayoutDash() {
  return (
    <div>
      <DashboardNav />
      <Outlet />
    </div>
  )
}

export default MainLayoutDash
