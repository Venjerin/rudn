import React from "react";
import s from "./Header.module.css";
import { NavBar } from "../NavBar/NavBar";
// import uniLogo from "../../assets/images/headerImages/uni-logo.svg";
// import toothLogo from '../../assets/images/headerImages/tooth-logo.svg'
// import testLogo from "../../assets/images/headerImages/image-2.png";
import { НeaderMain } from "./НeaderMain/НeaderMain";
import { HeaderRudn } from "./HeaderRudn/HeaderRudn";
import { useLocation } from "react-router";

export const Header = ({ isMenuOpen, setMenuOpen, setBlur, setLoginOpen }) => {
  const location = useLocation();
  const isHeaderNeeded =
    location.pathname === "/" || location.pathname === "/rudn";
  const isHomePage = location.pathname === "/";
  return (
    <>
      {isHeaderNeeded ? (
        <header
          className={`${s.wrapper} ${isHomePage ? s.main_page : s.rudn_page}`}
        >
          {isHomePage ? <НeaderMain></НeaderMain> : <HeaderRudn></HeaderRudn>}
        </header>
      ) : (
        ""
      )}
      <NavBar
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
        setBlur={setBlur}
        setLoginOpen={setLoginOpen}
        className={s.navbar}
      ></NavBar>
    </>
  );
};
