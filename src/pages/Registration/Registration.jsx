import React, { useState } from "react";
import s from "./Registration.module.css";
import returnButton from "../../assets/images/personalAccImages/return-button.svg";
import backgroungImg from "../../assets/images/personalAccImages/background-logo.svg";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";

export const Registration = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth)
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate(-1);
    setFullName('');
    setPassword('');
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: 'Full Name',
      email: 'text@text.ru',
      password: '12345'
    },
    mode: 'onChange'
  })

  const onSubmit = async () => {
    const values = {fullName, email, password}
    const data = await dispatch(fetchRegister(values)).catch(err => console.log(err))

    if(!data.payload){
      return alert('Не удалось зарегистрироваться')
    }

    if('token' in data.payload){
      window.localStorage.setItem('token', data.payload.token)
    }

    if(isAuth){
      navigate('/')
    }
  }

  return (
    <>
      <img src={backgroungImg} alt="" className={s.image_container} />
      <div className={s.account_page}>
        <div className={s.container}>
          <div className={s.header}>
            <img
              src={returnButton}
              alt="Вернуться"
              className={s.return_button}
              onClick={backButtonHandler}
            />
            <p className={s.title}>Регистрация</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} id="signUpForm" className={s.form} >
              <input
                {...register("fullName")}
                type="text"
                placeholder="Введите имя пользователя"
                onChange={handleFullNameChange}
                value={fullName}
              />
              <input
                {...register("email")}
                type="text"
                placeholder="Почта"
                onChange={handleEmailChange}
                value={email}
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Пароль"
                onChange={handlePasswordChange}
                value={password}
              />
              <button
                type="submit"
                className={s.registration_button}
              >
                Регистрация
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
