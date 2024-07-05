import React, { useEffect, useState } from "react";
import s from "./PopupMenu.module.css";
import closeMenuIcon from "../../assets/images/navBarImages/menu-escape.svg";
import { Link, useLocation } from "react-router-dom";

export const PopupMenu = ({ isMenuOpen, setMenuOpen, setBlur }) => {
  const handleToggle = () => {
    setMenuOpen(false);
    setBlur(false);
  };
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  const handleClick = () => {
    setBlur(false);
  }

  useEffect(() => {
    setActiveLink(location.pathname);
    window.scrollTo(0,0);
  }, [location]);
  return (
    <div className={`${s.popup_menu} ${isMenuOpen ? s.popup_menu_active : ""}`}>
      <div className={s.popup_menu_list}>
        <img
          src={closeMenuIcon}
          alt="Закрыть меню"
          className={s.nav_close}
          onClick={handleToggle}
        />
        <ul className={s.nav_list_popup}>
          <li className={`${activeLink === "/" ? s.nav_link_active : ""}`}>
            <Link to="/" className={s.nav_link} onClick={() => handleClick()}>
              Главная
            </Link>
          </li>
          <li className={`${activeLink === "/rudn" ? s.nav_link_active : ""}`}>
            <Link to="/rudn" className={s.nav_link} onClick={() => handleClick()}>
              РУДН
            </Link>
          </li>
          <li
            className={`${
              activeLink === "/employees" ? s.nav_link_active : ""
            }`}
          >
            <Link to="/employees" className={s.nav_link} onClick={() => handleClick()}>
              Сотрудники
            </Link>
          </li>
          <li
            className={`${activeLink === "/science" ? s.nav_link_active : ""}`}
          >
            <Link to="/science" className={s.nav_link} onClick={() => handleClick()}>
              Наука
            </Link>
          </li>
          <li
            className={`${
              activeLink === "/education" ? s.nav_link_active : ""
            }`}
          >
            <Link to="/education" className={s.nav_link} onClick={() => handleClick()}>
              Образование
            </Link>
          </li>
          <li
            className={`${activeLink === "/clinic" ? s.nav_link_active : ""}`}
          >
            <Link to="/clinic" className={s.nav_link} onClick={() => handleClick()}>
              Клиника
            </Link>
          </li>
          <li
            className={`${
              activeLink === "/facial-prosthetic" ? s.nav_link_active : ""
            }`}
          >
            <Link to="/facial-prosthetic" className={s.nav_link} onClick={() => handleClick()}>
              Протезы лица
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.buttons}>
        <button>Войти</button>
        <button>Регистрация</button>
      </div>
    </div>
  );
};
