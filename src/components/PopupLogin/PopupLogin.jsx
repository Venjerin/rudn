import React, { useEffect, useState } from "react";
import s from "./PopupLogin.module.css";
import { useLocation, useNavigate } from "react-router";
import closeLoginIcon from "../../assets/images/personalAccImages/return-button.svg";

export const PopupLogin = ({ isLoginOpen, setLoginOpen, setBlur }) => {
  const handleToggle = () => {
    setLoginOpen(false);
    setBlur(false);
  };
  //   const [, setActiveLink] = useState("/");
  const location = useLocation();

  const handleClick = () => {
    setBlur(false);
  };

  const navigate = useNavigate();
  const toRegistration = () => {
    navigate("/registration");
    setBlur(false);
  };

  //   isLoginOpen = true;

  useEffect(() => {
    // setActiveLink(location.pathname);
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div
      className={`${s.popup_login} ${isLoginOpen ? s.popup_login_active : ""}`}
    >
      <div className={s.container}>
        <img
          src={closeLoginIcon}
          alt="Закрыть меню"
          className={s.nav_close}
          onClick={handleToggle}
        />

        <div className={s.content}>
          <form id="loginForm" className={s.form}>
            <input type="login" placeholder="Логин" />
            <input type="password" placeholder="Пароль" />
          </form>
          <div className={s.buttons}>
            <button onClick={toRegistration}>Регистрация</button>
            <button>Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
};
