import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import s from "./Education.module.css";
import { PopupMenu } from "../../components/PopupMenu/PopupMenu";
import { PopupLogin } from "../../components/PopupLogin/PopupLogin";

export const Education = ({ isBlur, setBlur }) => {
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
        <EducationPage></EducationPage>
        <Footer></Footer>
      </div>
    </>
  );
};

const EducationPage = () => {
  return (
    <div className={s.education_page}>
      <div className={`${s.paragraph} ${s.paragraph_one}`}>
        <p className={s.title}>Образовательный процесс:</p>
        <p>Клиническая ординатура по специальности:</p>
        <ul>
          <li>стоматология ортопедическая,</li>
          <li>стоматология терапевтическая,</li>
          <li>стоматология хирургическая,</li>
          <li>стоматология общей практики,</li>
        </ul>
        <p>
          Аспирантура и докторантура <br /> по специальности 3.1.7
          «Стоматология».
        </p>
        <p>
          Курсы повышения квалификации <br /> и переподготовка.
        </p>
        <p>
          Проведение научных исследований и разработка инновационных
          стоматологических устройств и препаратов.
        </p>
      </div>
      <div className={`${s.paragraph} ${s.paragraph_two}`}>
        <p className={s.title}>Направления исследования института:</p>
        <p>Цифровая стоматология</p>
        <p>Анапластология</p>
        <p>Стоматология профилактическая</p>
        <p>Стоматологическое материаловедение </p>
      </div>
      <div className={`${s.paragraph} ${s.paragraph_three}`}>
        <p className={s.title}>Предмет/область исследования:</p>
        <p>Хирургическая стоматология</p>
        <p>Ортопедическая стоматология</p>
        <p>Аддитивные технологии</p>
        <p>
          Научные и образовательные процессы в области инновационной
          стоматологии.
        </p>
        <p>Цифровое планирование и разработка лицевых протезов</p>
      </div>
      <div className={`${s.paragraph} ${s.paragraph_four}`}>
        <p className={s.title}>Предмет/область исследования:</p>
        <p>
          Реабилитация пациентов с дефектами лица, травматического и
          онкологического генеза.
        </p>
        <p className={s.variant}>Анапластология</p>
      </div>
      <div className={`${s.paragraph} ${s.paragraph_five}`}>
        <p className={s.title}>Предмет/область исследования:</p>
        <p>
          Этапы реабилитации пациентов с дефектами средней зоны лица.
          Челюстно-лицевое протезирование. Производство лицевых эпитезов:
          клинические и лабораторные этапы.
        </p>
        <p className={s.variant}>Аддитивные технологии</p>
      </div>
      <div className={`${s.paragraph} ${s.paragraph_six}`}>
        <p className={s.title}>Предмет/область исследования:</p>
        <p>
          Создание технологии трехмерного моделирования дефектов средней зоны
          лица и аддитивного производства временных эпитезов
        </p>
      </div>
      <div className={`${s.paragraph} ${s.paragraph_seven}`}>
        <p className={s.title}>Цели и задачи:</p>
        <p>
          Интеграция цифровых технологий в ежедневную стоматологическую практику
        </p>
        <p>Разработка новых стоматологических устройств и методов лечения</p>
        <p>
          Проведение научных исследований результатов разработок с привлечением
          смежных специалистов
        </p>
        <p>
          Создание новых отечественных прикладных компьютерных стоматологических
          программ
        </p>
      </div>
      <div className={`${s.paragraph} ${s.paragraph_eight}`}>
        <p className={s.title}>
          Области применения результатов и междисциплинарных исследований:
        </p>
        <p>
          Оптимизация стоматологического лечения с применением современных
          цифровых технологий позволяет не только улучшить качество лечения
          пациентов, но и в значительной мере сократить время изготовления
          окончательных конструкций.
        </p>
        <p>
          Научные исследования коллектива ИЦС по реабилитации пациентов с
          дефектами лица привели к разработке первой отечественной программы для
          моделирования эпитезов «Феникс 3D». Так же были разработаны
          фотополимер для изготовления указанных конструкций методом аддитивных
          технологий и средства гигиены протезов.
        </p>
      </div>
    </div>
  );
};
