import React from "react";
import s from "./NavBar.module.css";
import mailIcon from '../../assets/images/navBarImages/navbar-mail.svg'
import loginIcon from '../../assets/images/navBarImages/navbar-login.svg'
import phoneIcon from '../../assets/images/navBarImages/navbar-phone.svg'


export const NavBar = () => {
  return (
    <nav className={s.navbar}>
      <div>
        <ul className={s.nav_list}>
          <li>Главная</li>
          <li>РУДН</li>
          <li>Сотрудники</li>
          <li>Наука</li>
          <li>Образование</li>
          <li>Клиника</li>
          <li>Протезы лица</li>
        </ul>
      </div>
      <div className={s.actions}>
        <img src={mailIcon} alt="Иконка почты" />
        <img src={phoneIcon} alt="Иконка телефона" />
        <img src={loginIcon} alt="Иконка логина" />
      </div>
    </nav>
  );
};
