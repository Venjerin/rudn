import React from "react";
import s from "./PersonalAccount.module.css";
import returnButton from "../../assets/images/personalAccImages/return-button.svg";
import backgroungImg from "../../assets/images/personalAccImages/background-logo.svg";
import { useNavigate } from "react-router";

export const PersonalAccount = () => {
  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate(-1);
  };
  return (
    <>
      <img src={backgroungImg} alt="" className={s.image_container}/>
      <div className={s.account_page}>
        <div className={s.header}>
          <img src={returnButton} alt="Вернуться" className={s.return_button} onClick={backButtonHandler}/>
          <p className={s.title}>Личный кабинет</p>
        </div>
        <button className={s.support_button}>Поддержка</button>
      </div>
    </>
  );
};
