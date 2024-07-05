import React, { useEffect, useState } from "react";
import s from "./NavBar.module.css";
import mailIcon from "../../assets/images/navBarImages/navbar-mail.svg";
import loginIcon from "../../assets/images/navBarImages/navbar-login.svg";
import phoneIcon from "../../assets/images/navBarImages/navbar-phone.svg";
import toggleIcon from "../../assets/images/navBarImages/nav-toggle.svg";
import { Link, useLocation } from "react-router-dom";

export const NavBar = ({ isMenuOpen, setMenuOpen }) => {
  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
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
          <li className={`${activeLink === "/" ? s.nav_link_active : ""}`}>
            <Link to="/" className={s.nav_link}>
              Главная
            </Link>
          </li>
          <li className={`${activeLink === "/rudn" ? s.nav_link_active : ""}`}>
            <Link to="/rudn" className={s.nav_link}>
              РУДН
            </Link>
          </li>
          <li className={`${activeLink === "/employees" ? s.nav_link_active : ""}`}>
            <Link to="/employees" className={s.nav_link}>
              Сотрудники
            </Link>
          </li>
          <li className={`${activeLink === "/science" ? s.nav_link_active : ""}`}>
            <Link to="/science" className={s.nav_link}>
              Наука
            </Link>
          </li>
          <li className={`${activeLink === "/education" ? s.nav_link_active : ""}`}>
            <Link to="/education" className={s.nav_link}>
              Образование
            </Link>
          </li>
          <li className={`${activeLink === "/clinic" ? s.nav_link_active : ""}`}>
            <Link to="/clinic" className={s.nav_link}>
              Клиника
            </Link>
          </li>
          <li className={`${activeLink === "/facial-prosthetic" ? s.nav_link_active : ""}`}>
            <Link to="/facial-prosthetic" className={s.nav_link}>
              Протезы лица
            </Link>
          </li>
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
