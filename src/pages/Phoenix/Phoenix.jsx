import React, { useState } from "react";
import s from "./Phoenix.module.css";
import { PopupMenu } from "../../components/PopupMenu/PopupMenu";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import phoenixImg from "../../assets/images/phoenixImage/phoenix.svg";
import { PopupLogin } from "../../components/PopupLogin/PopupLogin";

export const Phoenix = ({ isBlur, setBlur }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  return (
    <>
      <PopupMenu
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
        setBlur={setBlur}
        setLoginOpen={setLoginOpen} 
      ></PopupMenu>
      <PopupLogin
        setBlur={setBlur}
        isLoginOpen={isLoginOpen}
        setLoginOpen={setLoginOpen}
      ></PopupLogin>
      <div className={`${isBlur ? s.blur : ""}`}>
        <Header
          isMenuOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
          setBlur={setBlur}
          setLoginOpen={setLoginOpen}
        ></Header>
        <PhoenixPage></PhoenixPage>
        <Footer></Footer>
      </div>
    </>
  );
};

export const PhoenixPage = () => {
  return (
    <div className={s.phoenix_page}>
      <img src={phoenixImg} alt="" />
      <div className={s.title}>
        <p>Программа "Феникс 3D"</p>
      </div>
    </div>
  );
};
