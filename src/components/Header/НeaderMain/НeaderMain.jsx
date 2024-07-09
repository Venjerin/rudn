import React from "react";
import s from './НeaderMain.module.css'
import uniLogo from "../../../assets/images/headerImages/uni-logo.svg";
import toothLogo from '../../../assets/images/headerImages/tooth-logo.svg'
// import testLogo from "../../../assets/images/headerImages/image-2.png";

export const НeaderMain = () => {
  return (
    <div className={s.banner}>
      <div className={s.banner_content}>
        <div className={s.images}>
          <img src={uniLogo} alt="Логотип университета" />
          <img src={toothLogo} alt="Картинка зуба" />
        </div>
        <div className={s.text}>
          <h1>
            РОССИЙСКИЙ УНИВЕРСИТЕТ <br /> ДРУЖБЫ НАРОДОВ ИМ. ПАТРИСА ЛУМУМБЫ
          </h1>
          <p>Институт цифровой стоматологии</p>
        </div>
      </div>
    </div>
  );
};