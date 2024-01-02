import React from 'react'
import style from './style.module.css'

const DailyRouletteRace = () => {
  return (
    <div className={style.rouletteTable}>
      <div className={style.headingBar}>
        <div className={style.heading}>Daily Roulette Race</div>
        <div className={style.timeHeading}>Ends in 5h 23 min 11 sec</div>
      </div>

      <table className={style.table} >
      <tbody>
        <tr className={style.tableHeader}>
          <th style={{paddingLeft: "1rem"}}>Game</th>
          <th>Time</th>
          <th>Bet Amount</th>
          <th>MultiPlier</th>
          <th>Payout</th>
        </tr>
  
  
        <tr className={style.tableBody}>
          <td style={{paddingLeft: "1rem"}}>Arsenal (Alicia) - Chelsea (July)</td>
          <td>00:23</td>
          <td>0.46278200</td>
          <td>1,01</td>
          <td style={{color: "#3BB369"}}>0.47378200</td>
        </tr>
        <tr className={style.tableBody}>
          <td style={{paddingLeft: "1rem"}}>Arsenal (Alicia) - Chelsea (July)</td>
          <td>00:23</td>
          <td>0.46278200</td>
          <td>1,01</td>
          <td style={{color: "#CD2A2A"}}>0.47378200</td>
        </tr>
        <tr className={style.tableBody}>
          <td style={{paddingLeft: "1rem"}}>Arsenal (Alicia) - Chelsea (July)</td>
          <td>00:23</td>
          <td>0.46278200</td>
          <td>1,01</td>
          <td style={{color: "#3BB369"}}>0.47378200</td>
        </tr>
        <tr className={style.tableBody}>
          <td style={{paddingLeft: "1rem"}}>Arsenal (Alicia) - Chelsea (July)</td>
          <td>00:23</td>
          <td>0.46278200</td>
          <td>1,01</td>
          <td style={{color: "#3BB369"}}>0.47378200</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DailyRouletteRace