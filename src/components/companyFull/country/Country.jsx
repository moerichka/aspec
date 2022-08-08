/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from "react";

import countryPicture from "../../../assets/images/country.svg";
import regionPicture1 from "../../../assets/images/region1.svg";

import s from "./country.module.css";

function Country() {
    const [isPoint, setIsPoint] = useState(3);

  return (
    <div className={s.country}>
      <div className="container">
        <div className={s.countrytitlewrapper}>
          <h2 className={`h2-title ${s.countrytitle}`}>
            АСПЭК-Домстрой – девелоперская компания, специализирующаяся на
            строительстве жилых кварталов и микрорайонов города Ижевска.{" "}
          </h2>
          <div className={s.countrydesc}>
            <p>
              За время своей деятельности, компанией успешно реализовано 63
              проекта, из них: 53 жилых дома общей площадью более 450 000 кв.м.,
              торгово-бытовой центр «Квартал» на ул. Ленина (6,2 тыс. кв.м.), 8
              автосалонов «Nissan», «Toyota», «Honda», «Ford», «KIA», «Lexus»,
              «Skoda», «Datsun» (25,9 тыс. кв.м.) торгово-развлекательный центр
              «Талисман» (45 тыс. кв.м.).{" "}
            </p>
            <p>
              В текущем году в активной фазе строительство микрорайонов «Восток»
              и «Тишино» вдоль улиц Союзная и Архитектора П.П. Берша. Ведется
              реализация клубного дома «Резидент» в центральной части города на
              улице Пушкинская - первого элитного дома в Ижевске.
            </p>
          </div>
        </div>
      </div>
      <div className={s.mapwrapper}>
        <img src={countryPicture} alt="" className={s.countryimg} />
        <div className={`${s.countrypoint} ${s.countrypoint1}`}>
          <div className={s.pointcircles}>
            <div className={s.pointcircle1} />
            <div className={s.pointcircle2} />
            <div className={s.pointcircle3} />
          </div>
          <div className={s.pointtitle}>Ижевск</div>
        </div>
        <div className={`${s.countrypoint} ${s.countrypoint2}`}>
          <div className={s.pointcircles}>
            <div className={s.pointcircle1} />
            <div className={s.pointcircle2} />
            <div className={s.pointcircle3} />
          </div>
          <div className={s.pointtitle}>Альметьевск</div>
        </div>
        <div
          className={`${s.countrypoint} ${s.countrypoint3} ${
            isPoint === 3 ? s.pointactive : ""
          }`}
          onClick={() => (isPoint === 3 ? setIsPoint(false) : setIsPoint(3))}
        >
          <div className={s.pointcircles}>
            <div className={s.pointcircle1} />
            <div className={s.pointcircle2} />
            <div className={s.pointcircle3} />
          </div>
          <div className={s.pointtitle}>Тюмень</div>
        </div>
        <img
          src={regionPicture1}
          alt=""
          className={`${s.countryregion} ${
            isPoint === 3 ? s.regionactive : ""
          }`}
        />
      </div>
    </div>
  );
}

export default Country;
