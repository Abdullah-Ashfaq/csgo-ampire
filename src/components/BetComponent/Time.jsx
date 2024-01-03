import React, { useState, useEffect } from "react";
import "./roulette.css";

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 0.1); // Decrease by 0.1 for decimal timer
      }
    }, 100); // Decrease interval to 100ms for more frequent updates
    // Clean up the interval on unmount or when seconds reach 0
    return () => clearInterval(timer);
  }, [seconds]);
  
  const formattedTime = seconds.toFixed(1); // Show 1 decimal place

  return (
    <div className="timer_position">
      <div className="timer">Rolling</div>
      {seconds > 0 ? <div className="timer_seconds">{formattedTime}</div> : <></>}
    </div>
  );
};

export default CountdownTimer;
