import React from "react";
import s from "./PopupMenu.module.css";
import closeMenuIcon from "../../assets/images/navBarImages/menu-escape.svg";

export const PopupMenu = ({ isMenuOpen, setMenuOpen }) => {
  const handleToggle = () => {
    setMenuOpen(false);
  };
  return (
    <div className={`${s.popup_menu} ${isMenuOpen? s.popup_menu_active : ''}`}>
      <div className={s.popup_menu_list}>
        <img src={closeMenuIcon} alt="Закрыть меню" className={s.nav_close} onClick={handleToggle}/>
        <ul className={s.nav_list_popup}>
          <li>Главная</li>
          <li>РУДН</li>
          <li>Сотрудники</li>
          <li>Наука</li>
          <li>Образование</li>
          <li>Клиника</li>
          <li>Протезы лица</li>
        </ul>
      </div>
      <div className={s.buttons}>
        <button>Войти</button>
        <button>Регистрация</button>
      </div>
    </div>
  );
};
