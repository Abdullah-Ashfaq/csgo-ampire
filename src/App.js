import React, { useState, useEffect } from "react";
import SideNav from "./components/sideNav/SideNav";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import DailyRouletteRace from "./components/DailyRouletteRaceTable/DailyRouletteRace";
import BetComponent from "./components/BetComponent/BetComponent";

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Set sidebar state based on viewport width
      if (window.innerWidth >= 768) {
        setIsSideBarOpen(true);
      } else {
        setIsSideBarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Navbar toggleSideBar={toggleSideBar} />
      {isSideBarOpen && <SideNav />}
      <div className="layout">
        <BetComponent />
        <DailyRouletteRace />
      </div>
    </>
  );
};

export default App;
