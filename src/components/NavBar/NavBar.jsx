import React from "react";
import s from "./NavBar.module.css";
import mailIcon from "../../assets/images/navBarImages/navbar-mail.svg";
import loginIcon from "../../assets/images/navBarImages/navbar-login.svg";
import phoneIcon from "../../assets/images/navBarImages/navbar-phone.svg";
import toggleIcon from "../../assets/images/navBarImages/nav-toggle.svg";

export const NavBar = ({ isMenuOpen, setMenuOpen }) => {
  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={s.navbar}>
      <div>
        <img
          src={toggleIcon}
          alt="Открыть меню"
          className={s.nav_toggle}
          onClick={handleToggle}
        />
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
