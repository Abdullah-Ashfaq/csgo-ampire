import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import CountdownTimer from "./Time";
import 'react-toastify/dist/ReactToastify.css';

import ResetSound from "../../assets/reset_sound.wav"
const rows = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `FrenRik ${index + 1}`,
  value: (Math.random() * 200).toFixed(2),
}));

const options = [
  "Clear",
  "+0.01",
  "+0.1",
  "+1",
  "+10",
  "+100",
  "1/2",
  "X2",
  "Max",
];
const maxItemCount = window.innerWidth < 768 ? 12 : 7;
const BetComponent = () => {
  const imageUrl = "/coins.png"; // Replace with your image URL
  const initialSpeed = 75; // Initial speed
  const stopAfter = 5000; // Time in milliseconds after which animation slows down
  const resetAfterAnimationStopped = 3000; // Time to wait before resetting (5 seconds)
  
  const [position, setPosition] = useState(75);
  const [speed, setSpeed] = useState(initialSpeed);
  const [isAnimating, setIsAnimating] = useState(false);
  const [colorSequence, setColorSequence] = useState([]);
  const [yellowCount, setYellowCount] = useState(0);
  const [blackCount, setBlackCount] = useState(0);
  const [jackpotCount, setJackpotCount] = useState(0);
  const [playResetSound , setPlayResetSound] = useState(false)
  const [soundOnOff , setSoundOnOff] = useState("Off")

  const [restartAnimation, setRestartAnimation] = useState(true);

  const temprows = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `FrenRik ${index + 1}`,
    value: (Math.random() * 200).toFixed(2),
  }));
  const [rows, setRows] = useState(temprows);

  

  const playSound = () => {
    // Your sound playing logic goes here
    if (playResetSound){
      const audio = new Audio(ResetSound);
      audio.play();
    }
   
  };

  const generateRandomRows = () => {
    const newRows = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      name: `FrenRik ${index + 1}`,
      value: (Math.random() * 200).toFixed(2),
    }));
    return newRows;
  };

  const handleSoundOnOffClick = () =>{
    setPlayResetSound(!playResetSound)
    let soundCheck
    if (!playResetSound ){
      soundCheck = "On"
      setSoundOnOff("On")
    } 
    else{
      soundCheck = "Off"
      setSoundOnOff("Off")
    }

    toast.info(`Sound has been turned ${soundCheck}`)
  }
  //start animation after 5 seconds
  useEffect(() => {
    startAnimation(5000);
  }, []);

  //Updating the position of the image to show the moving animation
  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setPosition((prevPosition) => prevPosition - speed);
        if (Date.now() > stopAfter) {
          const newSpeed = Math.max(speed - 1, 0);
          setSpeed(newSpeed);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isAnimating, speed, stopAfter]);

  //Resetting
  useEffect(() => {
    let resetTimer;
    if (speed === 0) {
      resetTimer = setTimeout(() => {
        const randomNumberInRange =
          Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        const negativeRandomNumber = -1 * randomNumberInRange;
        const color = getColorForPosition(position);
        if (color === "yellow") {
          setYellowCount((prevCount) => prevCount + 1);
        } else if (color === "black") {
          setBlackCount((prevCount) => prevCount + 1);
        } else {
          setJackpotCount((prevCount) => prevCount + 1);
        }
        const newRows = generateRandomRows();
        setRows(newRows); 

        const newColorSequence = [...colorSequence, color === "yellow" ? 1 : 0];
        setColorSequence(newColorSequence);
        setPosition(75 * negativeRandomNumber);
        setSpeed(initialSpeed);
        setIsAnimating(false);
         setRestartAnimation((prev) => !prev);
        playSound()
      }, resetAfterAnimationStopped);
    }
    return () => clearTimeout(resetTimer);
  }, [
    speed,
    initialSpeed,
    resetAfterAnimationStopped,
    position,
    colorSequence,
    setRows,
  ]);

  const getImageForItem = (item) => {
    return item === 1 ? "/yellow-coin.png" : "/black-coin.png";
  };
  const getColorForPosition = (pos) => {
    const normalizedPosition = pos; // 15 ranges
    if (
      (normalizedPosition <= 75 && normalizedPosition >= -25) ||
      (normalizedPosition <= -126 && normalizedPosition >= -225) ||
      (normalizedPosition <= -326 && normalizedPosition >= -425) ||
      (normalizedPosition <= -526 && normalizedPosition >= -625) ||
      (normalizedPosition <= -726 && normalizedPosition >= -825) ||
      (normalizedPosition <= -926 && normalizedPosition >= -1025) ||
      (normalizedPosition <= -1126 && normalizedPosition >= -1225) ||
      (normalizedPosition <= -1326 && normalizedPosition >= -1425) ||
      (normalizedPosition <= -1526 && normalizedPosition >= -1625) ||
      (normalizedPosition <= -1726 && normalizedPosition >= -1825) ||
      (normalizedPosition <= -1926 && normalizedPosition >= -2025) ||
      (normalizedPosition <= -2126 && normalizedPosition >= -2225) ||
      (normalizedPosition <= -2326 && normalizedPosition >= -2425) ||
      (normalizedPosition <= -2526 && normalizedPosition >= -2625) ||
      (normalizedPosition <= -2726 && normalizedPosition >= -2825) ||
      (normalizedPosition <= -2926 && normalizedPosition >= -3025) ||
      (normalizedPosition <= -3126 && normalizedPosition >= -3225) ||
      (normalizedPosition <= -3326 && normalizedPosition >= -3425) ||
      (normalizedPosition <= -3526 && normalizedPosition >= -3625) ||
      (normalizedPosition <= -3726 && normalizedPosition >= -3825) ||
      (normalizedPosition <= -3926 && normalizedPosition >= -4025) ||
      (normalizedPosition <= -4126 && normalizedPosition >= -4225) ||
      (normalizedPosition <= -4326 && normalizedPosition >= -4425) ||
      (normalizedPosition <= -4526 && normalizedPosition >= -4625) ||
      (normalizedPosition <= -4726 && normalizedPosition >= -4825) ||
      (normalizedPosition <= -4926 && normalizedPosition >= -5025)
    ) {
      return "yellow";
    } else if (
      (normalizedPosition <= -26 && normalizedPosition >= -125) ||
      (normalizedPosition <= -225 && normalizedPosition >= -325) ||
      (normalizedPosition <= -425 && normalizedPosition >= -525) ||
      (normalizedPosition <= -626 && normalizedPosition >= -725) ||
      (normalizedPosition <= -826 && normalizedPosition >= -925) ||
      (normalizedPosition <= -1026 && normalizedPosition >= -1125) ||
      (normalizedPosition <= -1226 && normalizedPosition >= -1325) ||
      (normalizedPosition <= -1426 && normalizedPosition >= -1525) ||
      (normalizedPosition <= -1626 && normalizedPosition >= -1725) ||
      (normalizedPosition <= -1826 && normalizedPosition >= -1925) ||
      (normalizedPosition <= -2026 && normalizedPosition >= -2125) ||
      (normalizedPosition <= -2226 && normalizedPosition >= -2325) ||
      (normalizedPosition <= -2426 && normalizedPosition >= -2525) ||
      (normalizedPosition <= -2626 && normalizedPosition >= -2725) ||
      (normalizedPosition <= -2826 && normalizedPosition >= -2925) ||
      (normalizedPosition <= -3026 && normalizedPosition >= -3125) ||
      (normalizedPosition <= -3226 && normalizedPosition >= -3325) ||
      (normalizedPosition <= -3426 && normalizedPosition >= -3525) ||
      (normalizedPosition <= -3626 && normalizedPosition >= -3725) ||
      (normalizedPosition <= -3826 && normalizedPosition >= -3925) ||
      (normalizedPosition <= -4026 && normalizedPosition >= -4125) ||
      (normalizedPosition <= -4226 && normalizedPosition >= -4325) ||
      (normalizedPosition <= -4426 && normalizedPosition >= -4525) ||
      (normalizedPosition <= -4626 && normalizedPosition >= -4725) ||
      (normalizedPosition <= -4826 && normalizedPosition >= -4925) ||
      (normalizedPosition <= -5026 && normalizedPosition >= -5125)
    ) {
      return "black";
    }
    return "transparent"; // Default color
  };
  const startAnimation = (delay) => {
    setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        startAnimation(delay);
      }, delay + resetAfterAnimationStopped);
    }, delay);
  };
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "auto 100px",
    backgroundRepeat: "repeat-x",
    backgroundPosition: `${position}px center`,
    transition: "background-position 0.3s ease", // Adding a smooth transition
    transform: "translateZ(0)",
    height: "100px",
    width: "100%",
    
  };
  return (
    <>
      <div className="main-container desktop_view">
        <div className="roulette_title_flex">
          <div className="roulette_title">Roulette</div>
          <div className="sound_flex">
            <img src="/Volume_Max.png" alt="volume" onClick={handleSoundOnOffClick}></img>
            <div className="sound_on_text">Sound  is {soundOnOff}</div>
          </div>
        </div>
        <div className="containerStyle">
          <div style={imageStyle} className="imageMaxWidth"></div>
          {!isAnimating ? <div className="overlay" /> : <></>}
          {isAnimating ? (
            <div className="markerStyle"></div>
          ) : (
            <div className="timer_position_outer">
              <CountdownTimer></CountdownTimer>
            </div>
          )}
          <div className="sequenceContainerStyle">
            <div className="previous_rolls_flex">
              <div className="text_previous">
                Previous Rolls
              </div>
              <div className="history_sequence">
                {colorSequence.slice(-maxItemCount).map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={getImageForItem(item)}
                        alt={item === 1 ? "yellow-coin" : "black-coin"}
                        className="imageSize_30"
                      />
                    </div>
                  );
                })}
              </div>
              <div>
                <p className="text_previous">Last 100</p>
              </div>
              <div className="last_100_outer_flex">
                <div className="last_100_flex">
                  
                  <img
                    src="/yellow-coin.png"
                    className="imageSize_20"
                    alt="yellow.png"
                  />
                  <div className="counter_text">{yellowCount}</div>
                </div>
                <div className="last_100_flex">
                 
                  <img
                    src="/black-coin.png"
                    className="imageSize_20"
                    alt="black.png"
                  />
                   <div className="counter_text">{blackCount}</div>
                </div>
                <div className="last_100_flex">
                 
                  <img
                    src="/Coin 4.png"
                    className="imageSize_20"
                    alt="coin 4.png"
                  />
                   <div className="counter_text">{jackpotCount}</div>
                </div>
              </div>
            </div>
            <div className="enter_amount_outer_container">
              <div className="enter_amount_inner_container">
                {" "}
                <img src="/assets.png" alt="assets.png"></img>
                <p className="text_enter_amount">Enter Amount</p>
                <div className="options_background" />
                <div className="options_inner_flex">
                  {options.map((option, index) => (
                    <div key={index}>
                      <div className="options_border">
                        {" "}
                        <p className="text_options">{option}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="place_bet_container">
          <div className="place_bet_table_title_flex">
            <div className="place_bet_border place_bet_item">
              <div className="place_bet_left_flex">
                <img
                  src="/yellow-coin.png"
                  className="imageSize_20"
                  alt="yellow.png"
                ></img>
                <div className="place_bet_text"> Place Bet</div>
              </div>
              <div className="place_bet_win_text">Win 2X</div>
            </div>
            <div className="place_bet_table">
              <div className="place_bet_table_top_title">
                <div className="table_text"> 17 Bets Total</div>
                <div className="place_bet_table_inner_flex_right_items">
                  <img
                    src="/assets.png"
                    className="imageSize15"
                    alt="assets.png"
                  ></img>
                  <div className="table_text">139.10</div>
                </div>
              </div>
              <div>
                {rows.map((row,index) => (
                  <div
                    key={row.id}
                    className={`place_bet_table_items_outer_flex ${restartAnimation ? 'fade-in' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="place_bet_table_items_inner_flex">
                      <img
                        src="/Ellipse 1.png"
                        alt="Ellipse.png"
                        className="imageSize15"
                      ></img>
                      <div className="table_text">{row.name}</div>
                    </div>
                    <div className="table_text">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="place_bet_table_title_flex">
            <div className="place_bet_border place_bet_item">
              <div className="place_bet_left_flex">
                <img
                  src="/Coin 4.png"
                  className="imageSize_20"
                  alt="yellow.png"
                ></img>
                <div className="place_bet_text"> Place Bet</div>
              </div>
              <div className="place_bet_win_text">Win 12X</div>
            </div>
            <div className="place_bet_table">
              <div className="place_bet_table_top_title">
                <div className="table_text"> 17 Bets Total</div>
                <div className="place_bet_table_inner_flex_right_items">
                  <img
                    src="/assets.png"
                    className="imageSize15"
                    alt="assets.png"
                  ></img>
                  <div className="table_text">139.10</div>
                </div>
              </div>
              <div>
                  {rows.map((row,index) => (
                  <div
                    key={row.id}
                      className={`place_bet_table_items_outer_flex ${restartAnimation ? 'fade-in' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="place_bet_table_items_inner_flex">
                      <img
                        src="/Ellipse 1.png"
                        alt="Ellipse.png"
                        className="imageSize15"
                      ></img>
                      <div className="table_text">{row.name}</div>
                    </div>
                    <div className="table_text">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="place_bet_table_title_flex">
            <div className="place_bet_border place_bet_item">
              <div className="place_bet_left_flex">
                <img
                  src="/black-coin.png"
                  className="imageSize_20"
                  alt="yellow.png"
                ></img>
                <div className="place_bet_text"> Place Bet</div>
              </div>
              <div className="place_bet_win_text">Win 2X</div>
            </div>
            <div className="place_bet_table">
              <div className="place_bet_table_top_title">
                <div className="table_text"> 17 Bets Total</div>
                <div className="place_bet_table_inner_flex_right_items">
                  <img
                    src="/assets.png"
                    className="imageSize15"
                    alt="assets.png"
                  ></img>
                  <div className="table_text">139.10</div>
                </div>
              </div>
              <div>
                  {rows.map((row,index) => (
                  <div
                    key={row.id}
                      className={`place_bet_table_items_outer_flex ${restartAnimation ? 'fade-in' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="place_bet_table_items_inner_flex">
                      <img
                        src="/Ellipse 1.png"
                        alt="Ellipse.png"
                        className="imageSize15"
                      ></img>
                      <div className="table_text">{row.name}</div>
                    </div>
                    <div className="table_text">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile_view">

      <div className="containerStyle">
          <div style={imageStyle} className="imageMaxWidth"></div>
          {!isAnimating ? <div className="overlay" /> : <></>}
          {isAnimating ? (
            <div className="markerStyle"></div>
          ) : (
            <div className="timer_position_outer">
              <CountdownTimer></CountdownTimer>
            </div>
          )}
         
        </div>
        <div className="sequenceContainerStyle">
            <div className="previous_rolls_flex">
              <div>
                <p className="text_previous">Previous Rolls</p>
              </div>
              <div className="history_sequence">
                {colorSequence.slice(-maxItemCount).map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={getImageForItem(item)}
                        alt={item === 1 ? "yellow-coin" : "black-coin"}
                        className="imageSize_30"
                      />
                    </div>
                  );
                })}
              </div>
              <div>
                <p className="text_previous">Last 100</p>
              </div>
              <div className="last_100_outer_flex">
                <div className="last_100_flex">
                  
                  <img
                    src="/yellow-coin.png"
                    className="imageSize_20"
                    alt="yellow.png"
                  />
                  <div className="counter_text">{yellowCount}</div>
                </div>
                <div className="last_100_flex">
                 
                  <img
                    src="/black-coin.png"
                    className="imageSize_20"
                    alt="black.png"
                  />
                   <div className="counter_text">{blackCount}</div>
                </div>
                <div className="last_100_flex">
                 
                  <img
                    src="/Coin 4.png"
                    className="imageSize_20"
                    alt="coin 4.png"
                  />
                   <div className="counter_text">{jackpotCount}</div>
                </div>
              </div>
            </div>
            <div className="enter_amount_outer_container">
              <div className="enter_amount_inner_container">
                {" "}
                <img src="/assets.png" alt="assets.png"></img>
                <p className="text_enter_amount">Enter Amount</p>
                <div className="options_background" />
                <div className="options_inner_flex">
                  {options.map((option, index) => (
                    <div key={index}>
                      <div className="options_border">
                        {" "}
                        <p className="text_options">{option}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="place_bet_container_mobile_view">
            
          <div className="place_bet_table_title_flex">
            <div className="place_bet_border place_bet_item">
              <div className="place_bet_left_flex">
                <img
                  src="/yellow-coin.png"
                  className="imageSize_20"
                  alt="yellow.png"
                ></img>
                <div className="place_bet_text"> Place Bet</div>
              </div>
              <div className="place_bet_win_text">Win 2X</div>
            </div>
            <div className="place_bet_table">
              <div className="place_bet_table_top_title">
                <div className="table_text"> 17 Bets Total</div>
                <div className="place_bet_table_inner_flex_right_items">
                  <img
                    src="/assets.png"
                    className="imageSize15"
                    alt="assets.png"
                  ></img>
                  <div className="table_text">139.10</div>
                </div>
              </div>
              <div>
                {rows.map((row) => (
                  <div
                    key={row.id}
                    className="place_bet_table_items_outer_flex"
                  >
                    <div className="place_bet_table_items_inner_flex">
                      <img
                        src="/Ellipse 1.png"
                        alt="Ellipse.png"
                        className="imageSize15"
                      ></img>
                      <div className="table_text">{row.name}</div>
                    </div>
                    <div className="table_text">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="place_bet_table_title_flex">
            <div className="place_bet_border place_bet_item">
              <div className="place_bet_left_flex">
                <img
                  src="/Coin 4.png"
                  className="imageSize_20"
                  alt="yellow.png"
                ></img>
                <div className="place_bet_text"> Place Bet</div>
              </div>
              <div className="place_bet_win_text">Win 12X</div>
            </div>
            <div className="place_bet_table">
              <div className="place_bet_table_top_title">
                <div className="table_text"> 17 Bets Total</div>
                <div className="place_bet_table_inner_flex_right_items">
                  <img
                    src="/assets.png"
                    className="imageSize15"
                    alt="assets.png"
                  ></img>
                  <div className="table_text">139.10</div>
                </div>
              </div>
              <div>
                {rows.map((row) => (
                  <div
                    key={row.id}
                    className="place_bet_table_items_outer_flex"
                  >
                    <div className="place_bet_table_items_inner_flex">
                      <img
                        src="/Ellipse 1.png"
                        alt="Ellipse.png"
                        className="imageSize15"
                      ></img>
                      <div className="table_text">{row.name}</div>
                    </div>
                    <div className="table_text">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="place_bet_table_title_flex">
            <div className="place_bet_border place_bet_item">
              <div className="place_bet_left_flex">
                <img
                  src="/black-coin.png"
                  className="imageSize_20"
                  alt="yellow.png"
                ></img>
                <div className="place_bet_text"> Place Bet</div>
              </div>
              <div className="place_bet_win_text">Win 2X</div>
            </div>
            <div className="place_bet_table">
              <div className="place_bet_table_top_title">
                <div className="table_text"> 17 Bets Total</div>
                <div className="place_bet_table_inner_flex_right_items">
                  <img
                    src="/assets.png"
                    className="imageSize15"
                    alt="assets.png"
                  ></img>
                  <div className="table_text">139.10</div>
                </div>
              </div>
              <div>
                {rows.map((row) => (
                  <div
                    key={row.id}
                    className="place_bet_table_items_outer_flex"
                  >
                    <div className="place_bet_table_items_inner_flex">
                      <img
                        src="/Ellipse 1.png"
                        alt="Ellipse.png"
                        className="imageSize15"
                      ></img>
                      <div className="table_text">{row.name}</div>
                    </div>
                    <div className="table_text">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default BetComponent;
