import React, { useEffect, useState } from "react";
import s from "./PopupLogin.module.css";
import { useLocation, useNavigate } from "react-router";
import closeLoginIcon from "../../assets/images/personalAccImages/return-button.svg";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../../redux/slices/auth";
import { useForm } from "react-hook-form";

export const PopupLogin = ({ isLoginOpen, setLoginOpen, setBlur }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    setLoginOpen(false);
    setBlur(false);
    setValue('email','');
    setValue('password','');
  };
  const location = useLocation();

  const navigate = useNavigate();
  const toRegistration = () => {
    navigate("/registration");
    setBlur(false);
    setLoginOpen(false);
  };

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      email: 'text@text.ru',
      password: '12345'
    },
    mode: 'onChange'
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values))

    if(!data.payload){
      return alert('Не удалось авторизоваться')
    }

    if('token' in data.payload){
      window.localStorage.setItem('token', data.payload.token)
    }
    setBlur(false);
    setLoginOpen(false);
    navigate('/')
  }

  useEffect(() => {
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
          <form 
            id="loginForm"
            onSubmit={handleSubmit(onSubmit)}
            className={s.form}
            autoComplete="off"
          >
            <input type="email" {...register("email")} />
            <input type="password" {...register("password")} />
          </form>
          <div className={s.buttons}>
            <button onClick={toRegistration}>Регистрация</button>
            <button type="submit" form="loginForm" >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
