import React, { useEffect, useState } from "react";
import s from "./PopupLogin.module.css";
import { useLocation, useNavigate } from "react-router";
import closeLoginIcon from "../../assets/images/personalAccImages/return-button.svg";

export const PopupLogin = ({ isLoginOpen, setLoginOpen, setBlur }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    setLoginOpen(false);
    setBlur(false);
    setLogin('');
    setPassword('');
  };
  //   const [, setActiveLink] = useState("/");
  const location = useLocation();

  const navigate = useNavigate();
  const toRegistration = () => {
    navigate("/registration");
    setBlur(false);
    setLoginOpen(false);
  };

  // isLoginOpen = true;

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
          onClick={handleClick}
        />

        <div className={s.content}>
          <form id="loginForm" className={s.form} autoComplete="off">
            <input type="login" placeholder="Логин" onChange={handleLoginChange} value={login}/>
            <input type="password" placeholder="Пароль" onChange={handlePasswordChange} value={password}/>
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
