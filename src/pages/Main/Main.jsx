import React from "react";
import s from "./Main.module.css";
import personPhoto from "../../assets/images/homeImages/manPhoto.png";
import educationPhoto from "../../assets/images/homeImages/education.png";
import sciencePhoto from "../../assets/images/homeImages/science.png";
import doctorsPhoto from "../../assets/images/homeImages/doctors.png";
import blueCircle from "../../assets/images/homeImages/route-blue-circle.svg";
import grayCircle from "../../assets/images/homeImages/route-gray-circle.svg";
import line from "../../assets/images/homeImages/route-line.svg";
import backgroundImageOne from "../../assets/images/homeImages/overlap-1.png";
import backgroundImageTwo from "../../assets/images/homeImages/overlap-2.svg";
import backgroundImageThree from "../../assets/images/homeImages/overlap-3-logo.svg";
import backgroundImageFour from "../../assets/images/homeImages/overlap-3-tooth.svg";
import inactiveArrowButton from "../../assets/images/homeImages/inactive-arrow.svg";
import activeArrowButton from "../../assets/images/homeImages/active-arrow.svg";
import carouselPhotoOne from "../../assets/images/homeImages/carousel-photo-1.png";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className={s.overlap_1}>
        <img src={backgroundImageOne} alt="" />
        <div className={s.group1_1}>
          <div className={s.container}>
            <p>
              Институт цифровой стоматологии (ИЦС) — это первая в России и СНГ
              уникальное образовательное и научно — структурное подразделение
              медицинского института РУДН.
            </p>
            <p>
              Возглавил ИЦС Апресян Самвел Владиславович — д.м.н., профессор
              кафедры ортопедической стоматологии МИ РУДН, заслуженный
              изобретатель РФ, Президент Ассоциации цифровой стоматологии.
            </p>
          </div>
          <img
            src={personPhoto}
            alt="Фотография Апресяна Самвела Владиславовича"
          />
        </div>
        <div className={s.group1_2}>
          <div className={s.education}>
            <img src={educationPhoto} alt="Фото выпускников" />
            <div className={s.container}>
              <p>Образование</p>
            </div>
            <p>о наших дисциплинах</p>
          </div>
          <div className={s.science}>
            <img src={sciencePhoto} alt="Фото лабаратории" />
            <div className={s.container}>
              <p>Наука</p>
            </div>
            <p>подробнее</p>
          </div>
        </div>
        <div className={s.group1_3}>
          <img src={doctorsPhoto} alt="Фото докторов" />
          <div className={s.container}>
            <p>
              Студенты и ученые могли свободно обучаться и заниматься научными
              исследованиями вне политического контекста, твердо следуя великим
              принципам дружбы и взаимной поддержки.
            </p>
          </div>
        </div>
      </div>
      <div className={s.overlap_2}>
        <img src={backgroundImageTwo} alt="" />
        <div className={s.group2_1}>
          <p>История</p>
        </div>
        <div className={s.group2_2}>
          <div className={s.route}>
            <img src={blueCircle} alt="" className={s.blueCircle} />
            <img src={line} alt="" className={s.line} />
            <img src={grayCircle} alt="" className={s.grayCircle_first} />
            <img src={grayCircle} alt="" className={s.grayCircle_second} />
          </div>
        </div>
        <div className={s.group2_3}>
          <div className={s.text_1}>
            <p>
              5 февраля 1992 года решением Правительства России Университет
              переименован в Российский университет дружбы народов.
            </p>
          </div>
          <div className={s.text_2}>
            <p>
              23 марта 2023 года министр науки и высшего образования России В.Н.
              Фальков подписал приказ №313 о переименовании Российского
              университета дружбы народов и возвращении ему имени Патриса
              Лумумбы.
            </p>
            <p>Соответствующие изменения были внесены в Устав университета</p>
          </div>
          <div className={s.text_3}>
            <p>
              В 2015 году Российский университет дружбы народов вошел в число
              победителей конкурса на получение государственной поддержки в
              рамках Проекта 5-100.
            </p>
            <p>
              Цель Проекта 5-100 – максимизация конкурентной позиции группы
              ведущих российских университетов на глобальном рынке
              образовательных услуг и исследовательских программ.
            </p>
          </div>
        </div>
      </div>
      <div className={s.established}>
        <p>
          Университет дружбы народов был основан 5 февраля 1960 года решением
          Правительства СССР. 22 февраля 1961 года
        </p>
        <p>
          Университету было присвоено имя Патриса Лумумбы — одного из символов
          борьбы народов Африки за независимость
        </p>
      </div>
      <div className={s.overlap_3}>
        <img src={backgroundImageThree} alt="" className={s.logo} />
        <img src={backgroundImageFour} alt="" className={s.tooth} />
        <div className={s.arrow_buttons}>
          <img src={inactiveArrowButton} alt="Назад" />
          <img src={activeArrowButton} alt="Вперед" />
        </div>
        <div className={s.photo_carousel}>
          <img src={carouselPhotoOne} alt="Фотография университета" />
        </div>
        <div className={s.indicator}></div>
        <div className={s.text_block_one}>
          <p>
            РУДН — в числе лучших <br />
            российских университетов мирового уровня.
          </p>
          <p>
            Университет входит в мировые рейтинги THE, QS и RUR. <br /> В
            категориях «Количество международных студентов» и «Соотношение
            количества преподавателей к количеству студентов» (student-to-staff
            ratio) мы — среди лидеров.
          </p>
          <p>
            Рейтинг UI Green Metric оценивает наш кампус как самый «зеленый» в
            России. <br /> РУДН — обладатель максимальных «5 звёзд»
            международного рейтинга QS Stars, входит втройку лидеров среди
            российских вузов по версии рейтинга.
          </p>
        </div>
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
                Клинические базы ИЦС – это современные стоматологические
                клиники, в которых сосредоточены самые инновационные цифровые
                технологии в стоматологии.
              </p>
            </div>
            <div className={s.text_column_two}>
              <p>
                Сотрудники клиник ежедневно <br /> занимаются научной и
                клинической работой.
              </p>
              <p>
                За период 2020-2023 гг. командой центра «Марти» было изобретено
                10 новых устройств и методов стоматологического лечения, что
                подтверждено патентами РФ.
              </p>
              <p>
                А также опубликовано за этот период более 60 научных публикаций
                и 5 книг и учебных пособий.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Main = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};
