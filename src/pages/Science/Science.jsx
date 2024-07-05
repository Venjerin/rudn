import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import s from "./Science.module.css";
import colleaguesImg from "../../assets/images/scienceImages/medical-colleagues.svg";
import prostheticImg from "../../assets/images/scienceImages/facial-prosthetic-pic.svg";
import moreButton from '../../assets/images/scienceImages/more-button.svg'
import { PopupMenu } from "../../components/PopupMenu/PopupMenu";

export const Science = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <PopupMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}></PopupMenu>
      <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}></Header>
      <SciencePage></SciencePage>
      <Footer></Footer>
    </div>
  );
};

const SciencePage = () => {
  return (
    <div className={s.science_page}>
      <img src={colleaguesImg} alt="Фотография врачей" />
      <div className={s.container}>
        <p>
          Коллектив института цифровой стоматологии активно занимается научными
          исследованиями, разрабатывает новейшие методы изготовления конструкции
          и их применения в клинической практике врача — стоматолога.
        </p>
        <div className={s.grid_container}>
          <div>
            <p>
              За период 2020 – 2023 года было изобретено 12 патентов, один из
              последних разработок является «Способ гигиенического ухода за
              лицевыми протезами» и программа «Феникс 3D»
            </p>
            <p>подробнее о «Феникс 3D»</p>
          </div>
          <img src={prostheticImg} alt="Скриншот добавления протеза" />
        </div>
      </div>
      <div className={s.toggle_section}>
        <div className={s.section}>
            <p>Патенты</p>
            <img src={moreButton} alt="Развернуть" />
        </div>
        <div className={s.section}>
            <p>Учебно-методическая литература</p>
            <img src={moreButton} alt="Развернуть" />
        </div>
        <div className={s.section}>
            <p>Награды</p>
            <img src={moreButton} alt="Развернуть" />
        </div>
      </div>
    </div>
  );
};
