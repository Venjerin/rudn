import React, { useState } from "react";
import s from "./Phoenix.module.css";
import { PopupMenu } from "../../components/PopupMenu/PopupMenu";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import phoenixImg from "../../assets/images/phoenixImage/phoenix.svg";

export const Phoenix = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <PopupMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}></PopupMenu>
      <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}></Header>
      <PhoenixPage></PhoenixPage>
      <Footer></Footer>
    </div>
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
