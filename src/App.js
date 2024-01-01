import React from 'react'
import SideNav from './components/sideNav/SideNav'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import DailyRouletteRace from './components/DailyRouletteRaceTable/DailyRouletteRace'

const App = () => {
  return (
   
    <>
    <Navbar />
    <SideNav />
    <div className='layout'>
    <DailyRouletteRace />
    </div>
    </>
   
   
  )
}

export default App