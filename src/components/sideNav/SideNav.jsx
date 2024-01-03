import React from 'react'
import style from './style.module.css'
import coinflip from '../../assets/coinFlip.svg'
import crash from '../../assets/crash.svg'
import plinko from '../../assets/plinko.svg'
import dice from '../../assets/dice.svg'
import wheel from '../../assets/wheel.svg'
import mines from '../../assets/mine.svg'
import Statistics from '../../assets/Statistics.svg'
import Board from '../../assets/board.svg'
import Settings from "../../assets/Settings.svg"
import twitter from '../../assets/twiiter.svg'
import discord from '../../assets/discord.svg'
import ME from '../../assets/ME.svg'


const SideNav = () => {
  return (
    <div className={style.sideNav} >
      <div className={style.first}>
        <div className={style.row}>
          <img className={style.icon} src={coinflip} alt="coinflip icon" />
          <div className={style.text}>Coinflip</div>
        </div>

        <div className={style.row}>
          <img className={style.icon} src={crash} alt="crash icon" />
          <div className={style.text}>Crash</div>
        </div>

        <div className={style.row}>
          <img className={style.icon} src={plinko} alt="plinko icon" />
          <div className={style.text}>Plinko</div>
        </div>

        <div className={style.row}>
          <img className={style.icon} src={dice} alt="dice icon" />
          <div className={style.text}>Dice</div>
        </div>

        <div className={style.row}>
          <img className={style.icon} src={wheel} alt="lucky wheel icon" />
          <div className={style.text}>Luck Wheels</div>
        </div>

      </div>
      <div className={style.mines}>
        <img className={style.icon} src={mines} alt="mines icon" />
        <div className={style.text}>Mines</div>
      </div>

      {/* break line */}

      <div className={style.breakLine}></div>

      <div className={style.first}>
        <div className={style.row}>
          <img className={style.icon} src={Board} alt="Leaderboard icon" />
          <div className={style.text}>Leaderboard</div>
        </div>

        <div className={style.row}>
          <img className={style.icon} src={Statistics} alt="Statistics Icon" />
          <div className={style.text}>Statistics</div>
        </div>

        <div className={style.row}>
          <img className={style.icon} src={Settings} alt="Settings icon" />
          <div className={style.text}>Settings</div>
        </div>

       

      </div>

      {/* social icons */}

      

    </div>
  )
}

export default SideNav