import React, { useState } from "react";
import s from "./Registration.module.css";
import returnButton from "../../assets/images/personalAccImages/return-button.svg";
import backgroungImg from "../../assets/images/personalAccImages/background-logo.svg";
import { useNavigate } from "react-router";

export const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate(-1);
    setFullName('');
    setPassword('');
  };

  const handleOutsideSubmit = () => {
    const form = document.getElementById("signUpForm");
    if (form) {
      // form.submit();
      console.log('Отправка формы:', fullName, password);
    }
  };

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
            <form id="signUpForm" className={s.form}>
              <input
                type="text"
                placeholder="ФИО"
                onChange={handleFullNameChange}
                value={fullName}
              />
              <input
                type="password"
                placeholder="Пароль"
                onChange={handlePasswordChange}
                value={password}
              />
            </form>
          </div>
        </div>
        <button className={s.registration_button} onClick={handleOutsideSubmit}>
          Регистрация
        </button>
      </div>
    </>
  );
};
