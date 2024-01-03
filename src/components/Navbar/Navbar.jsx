import React from "react";
import style from "./style.module.css";
import flipper from "../../assets/flipper.svg";
import solanaSolLogo from "../../assets/solana-sol-logo.svg";
import caretDown from "../../assets/Caret_Down_SM.svg";
import frame from "../../assets/Frame.svg";
import search from "../../assets/Search_Magnifying_Glass.svg";
import chat from "../../assets/Chat_Conversation_Circle.svg";
import bell from "../../assets/Bell.svg";
import avatar from "../../assets/avatar.png";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({toggleSideBar}) => {
  return (
    <>
      <div className={style.desktop_view}>
        <div className={style.navbar}>
          <img src={flipper} alt="Filpper Icon" className={style.flipper} />
          <div className={style.center}>
            <img
              className={style.left}
              src={solanaSolLogo}
              alt="solanaSolLogo"
            />
            <div className={style.mid}>
              <div className={style.text}>49.55677717</div>
              <img
                className={style.dropdown}
                src={caretDown}
                alt="caretDownIcon"
              />
            </div>
            <div className={style.right}>
              <img src={frame} alt="frame Icon" />
            </div>
          </div>
          <div className={style.right}>
            <div className={style.icon}>
              <img src={search} alt="searchIcon" />
            </div>
            <div className={style.icon}>
              <img src={chat} alt="searchIcon" />
            </div>
            <div className={style.icon}>
              <img src={bell} alt="searchIcon" />
            </div>

            <div className={style.avatarBox}>
              <div className={style.text}>Peter Penn</div>
              <img className={style.avatar} src={avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </div>

      <div className={style.mobile_view}>
        <div className={style.mobile_navbar}>
          <GiHamburgerMenu className={style.burger_icon} onClick={toggleSideBar}></GiHamburgerMenu>
          <img src={flipper} alt="Filpper Icon"   className={`${style.mobile_flipper} ${style.icon_display}`} />
          
           <div  className={`${style.center} ${style.mobile_center}`}>
            <img
              className={style.left}
              src={solanaSolLogo}
              alt="solanaSolLogo"
            />
            <div className={style.mid}>
              <div className={style.text}>49.55677717</div>
              <img
                className={style.dropdown}
                src={caretDown}
                alt="caretDownIcon"
              />
            </div>
            <div className={style.right}>
              <img src={frame} alt="frame Icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
