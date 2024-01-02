import React, { useState, useEffect, Fragment } from "react";
import "./roulette.css";
const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);
    // Clean up the interval on unmount or when seconds reach 0
    return () => clearInterval(timer);
  }, [seconds]);
  return (
    <div className="timer_position">
      <div className="timer">Rolling</div>
      {seconds > 0 ? <div className="timer_seconds">{seconds} </div> : <></>}
    </div>
  );
};
export default CountdownTimer;