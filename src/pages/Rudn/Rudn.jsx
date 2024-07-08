import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import s from "./Rudn.module.css";
import backgroundImageFour from "../../assets/images/homeImages/overlap-3-tooth.svg";
import { PopupMenu } from "../../components/PopupMenu/PopupMenu";
import { PopupLogin } from "../../components/PopupLogin/PopupLogin";
const RudnPage = () => {
  return (
    <div className={s.text_block_two}>
      <p>
        Целью ИЦС является разработка и применение передовых методов
        диагностики, и лечения заболеваний полости рта, ортопедическая
        реабилитация пациентов с дефектами лица и ЧЛО, а также, цифровых
        технологий в ежедневную стоматологическую практику.
      </p>
      <div className={s.container}>
        <div className={s.text_column_one}>
          <p>
            ИЦС сотрудничает с ведущими <br /> производителями
            стоматологического оборудования и материалов, что позволяет
            организовывать учебный процесс с учетом <br />
            самых инновационных методов и технологий.
          </p>
          <p>
            Клинические базы ИЦС – это современные стоматологические клиники, в
            которых сосредоточены самые инновационные цифровые технологии в
            стоматологии.
          </p>
        </div>
        <div className={s.text_column_two}>
          <p>
            Сотрудники клиник ежедневно <br /> занимаются научной и клинической
            работой.
          </p>
          <p>
            За период 2020-2023 гг. командой центра «Марти» было изобретено 10
            новых устройств и методов стоматологического лечения, что
            подтверждено патентами РФ.
          </p>
          <p>
            А также опубликовано за этот период более 60 научных публикаций и 5
            книг и учебных пособий.
          </p>
        </div>
      </div>
      <img src={backgroundImageFour} alt="" className={s.tooth} />
    </div>
  );
};

export const Rudn = ({ isBlur, setBlur }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  return (
    <>
      <PopupMenu
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
        setBlur={setBlur}
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
        <RudnPage></RudnPage>
        <Footer></Footer>
      </div>
    </>
  );
};
