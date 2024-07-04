import React from "react";
import s from "./HeaderRudn.module.css";
import uniLogo from "../../../assets/images/headerImages/uni-logo.svg";
import testLogo from "../../../assets/images/headerImages/image-2.png";

export const HeaderRudn = () => {
  return (
    <div className={s.banner}>
      <div className={s.banner_content}>
        <div className={s.text}>
          <h1>
            РУДН — в числе лучших
            <br /> российских университетов мирового уровня.
          </h1>
          <p>
            Университет входит в мировые рейтинги THE, QS и RUR. В категориях
            «Количество международных студентов» и «Соотношение количества
            преподавателей к количеству студентов» (student-to-staff ratio) мы —
            среди лидеров.
          </p>
          <p>
            Рейтинг UI Green Metric оценивает наш кампус как самый «зеленый»
            вРоссии. РУДН — обладатель максимальных «5 звёзд» международного
            рейтинга QS Stars, входит в тройку лидеров среди российских вузов по
            версии рейтинга.
          </p>
        </div>
      </div>
    </div>
  );
};
