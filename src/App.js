import React from 'react'
import SideNav from './components/sideNav/SideNav'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import DailyRouletteRace from './components/DailyRouletteRaceTable/DailyRouletteRace'
import BetComponent from './components/BetComponent/BetComponent'

const App = () => {
  return (

    <>
      <Navbar />
      <SideNav />
      <div className='layout'>
        <BetComponent />
        <DailyRouletteRace />
      </div>
    </>


  )
}

export default App