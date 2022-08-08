import React from "react";

import award1 from "../../../assets/images/award1.png"
import award2 from "../../../assets/images/award2.png"

import s from "./awards.module.css";

function Awards() {
  return (
    <div className={s.awards}>
      <div className={s.container}>
        <div className={s.list}>
          <div className={s.award}>
            <img src={award1} alt="" className={`${s.logo} ${s.logoBig}`} />
            <h6 className={s.title}>Финалист «Urban Awards»</h6>
            <p className={s.text}>
              Проект &quot;Резидент&quot; вошел в ТОП 5 в номинации &quot;Лучший строящийся
              региональный жилой комплекс элит-класса&quot;
            </p>
          </div>
          <div className={s.award}>
            <img src={award2} alt="" className={s.logo} />
            <h6 className={s.title}>Финалист «Urban Awards»</h6>
            <p className={s.text}>
              Проект &quot;Резидент&quot; вошел в ТОП 5 в номинации &quot;Лучший строящийся
              региональный жилой комплекс элит-класса&quot;
            </p>
          </div>
          <div className={s.award}>
            <img src={award2} alt="" className={s.logo} />
            <h6 className={s.title}>Финалист «Urban Awards»</h6>
            <p className={s.text}>
              Проект &quot;Тишинские высоты&quot; вошел в ТОП 5 в номинации «Лучший
              региональный проект комплексного развития территорий»
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
