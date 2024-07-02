import React from "react";
import s from "./Header.module.css";
import { NavBar } from "../NavBar/NavBar";
import uniLogo from '../../assets/images/headerImages/uni-logo.svg'
import toothLogo from '../../assets/images/headerImages/tooth-logo.svg'
import testLogo from '../../assets/images/headerImages/image-2.png'

export const Header = () => {
  return (
    <header className={s.wrapper}>
      <div className={s.banner}>
        <div className={s.banner_content}>
        <div className={s.images}>
          <img src={uniLogo} alt="Логотип университета" />
          <img src={testLogo} alt="Картинка зуба" style={{width:'100px'}}/>
        </div>
        <div className={s.text}>
          <h1>РОССИЙСКИЙ УНИВЕРСИТЕТ <br /> ДРУЖБЫ НАРОДОВ ИМ. ПАТРИСА ЛУМУМБЫ</h1>
          <p>Институт цифровой стамотологии</p>
        </div>
        </div>
      </div>
      <NavBar></NavBar>
    </header>
  );
};
