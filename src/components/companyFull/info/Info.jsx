import React from "react";
import s from "./info.module.css";
import { useNavigate } from "react-router-dom";

import image1 from "../../../assets/images/image35.jpg";
import image2 from "../../../assets/images/image37.jpg";
import image3 from "../../../assets/images/image36.jpg";
import image4 from "../../../assets/images/image34.jpg";
import image5 from "../../../assets/images/Elem1.png";

import Button from "../../button";

function Info() {
  const navigate = useNavigate()

  return (
    <div className={s.info}>
      <div className={s.container}>
        <div className={s.blocks}>
          <div className={s.block}>
            <div className={s.topelement}>
              <h2 className={`h2-title ${s.h2title}`}>Компания «АСПЭК-Домстрой»</h2>
              <p className={s.toptext}>
                Успешно развивается уже 15 лет и стала за это время одной из
                самых известных и активно развивающихся девелоперских фирм на
                рынке Удмуртской Республики. За время своей деятельности,
                компанией успешно реализован 55 объектов, из них: 45 жилых домов
                общей площадью более 395 000 кв.м. жилья, торгово-бытовой центр
                «Квартал» на ул. Ленина (6,2 тыс. кв.м.), 8 автосалонов
                «Nissan», «Toyota», «Honda», «Ford», «KIA», «Lexus», «Skoda»,
                «Datsun» (25,9 тыс. кв.м.) торгово-развлекательный центр
                «Талисман» (45 тыс. кв.м.).
              </p>
            </div>
            <div className={s.bottomwrapper}>
                <div className={s.middleelement}>
                  <div className={s.middletextwrapper}>
                    <h6 className={s.middletitle}>Строительное направление</h6>
                    <p className={s.middletext}>
                      АСПЭК-Домстрой – девелоперская компания специализирующаяся на
                      строительстве жилых кварталов и микрорайонов города Ижевска.
                      Компания начала свою деятельность 16 лет назад и стала за это
                      время одной из самых известных и активно развивающихся
                      девелоперских фирм на рынке Удмуртской Республики.
                    </p>
                  </div>
                  <img src={image5} alt="" className={s.middleimg} />
                </div>
                <div className={s.bottomelement}>
                  <img src={image1} alt="" className={s.bottomimg} />
                </div>
            </div>
          </div>
          <div className={`${s.block} ${s.blockreverse}`}>
            <div className={s.topelement}>
              <h2 className={`h2-title ${s.h2title}`}>Компания «АСПЭК-Домстрой»</h2>
              <p className={s.toptext}>
                Успешно развивается уже 15 лет и стала за это время одной из
                самых известных и активно развивающихся девелоперских фирм на
                рынке Удмуртской Республики. За время своей деятельности,
                компанией успешно реализован 55 объектов, из них: 45 жилых домов
                общей площадью более 395 000 кв.м. жилья, торгово-бытовой центр
                «Квартал» на ул. Ленина (6,2 тыс. кв.м.), 8 автосалонов
                «Nissan», «Toyota», «Honda», «Ford», «KIA», «Lexus», «Skoda»,
                «Datsun» (25,9 тыс. кв.м.) торгово-развлекательный центр
                «Талисман» (45 тыс. кв.м.).
              </p>
            </div>
            <div className={s.bottomwrapper}>
                <div className={s.middleelement}>
                  <div className={s.middletextwrapper}>
                    <h6 className={s.middletitle}>Строительное направление</h6>
                    <p className={s.middletext}>
                      АСПЭК-Домстрой – девелоперская компания специализирующаяся на
                      строительстве жилых кварталов и микрорайонов города Ижевска.
                      Компания начала свою деятельность 16 лет назад и стала за это
                      время одной из самых известных и активно развивающихся
                      девелоперских фирм на рынке Удмуртской Республики.
                    </p>
                  </div>
                  <img src={image5} alt="" className={s.middleimg} />
                </div>
                <div className={s.bottomelement}>
                  <img src={image2} alt="" className={s.bottomimg} />
                </div>
            </div>
          </div>
          <div className={s.block}>
            <div className={s.topelement}>
              <h2 className={`h2-title ${s.h2title}`}>Компания «АСПЭК-Домстрой»</h2>
              <p className={s.toptext}>
                Успешно развивается уже 15 лет и стала за это время одной из
                самых известных и активно развивающихся девелоперских фирм на
                рынке Удмуртской Республики. За время своей деятельности,
                компанией успешно реализован 55 объектов, из них: 45 жилых домов
                общей площадью более 395 000 кв.м. жилья, торгово-бытовой центр
                «Квартал» на ул. Ленина (6,2 тыс. кв.м.), 8 автосалонов
                «Nissan», «Toyota», «Honda», «Ford», «KIA», «Lexus», «Skoda»,
                «Datsun» (25,9 тыс. кв.м.) торгово-развлекательный центр
                «Талисман» (45 тыс. кв.м.).
              </p>
            </div>
            <div className={s.bottomwrapper}>
                <div className={s.middleelement}>
                  <div className={s.middletextwrapper}>
                    <h6 className={s.middletitle}>Строительное направление</h6>
                    <p className={s.middletext}>
                      АСПЭК-Домстрой – девелоперская компания специализирующаяся на
                      строительстве жилых кварталов и микрорайонов города Ижевска.
                      Компания начала свою деятельность 16 лет назад и стала за это
                      время одной из самых известных и активно развивающихся
                      девелоперских фирм на рынке Удмуртской Республики.
                    </p>
                  </div>
                  <img src={image5} alt="" className={s.middleimg} />
                </div>
                <div className={s.bottomelement}>
                  <img src={image3} alt="" className={s.bottomimg} />
                </div>
            </div>
          </div>
          <div className={`${s.block} ${s.blockreverse}`}>
            <div className={s.topelement}>
              <h2 className={`h2-title ${s.h2title}`}>Компания «АСПЭК-Домстрой»</h2>
              <p className={s.toptext}>
                Успешно развивается уже 15 лет и стала за это время одной из
                самых известных и активно развивающихся девелоперских фирм на
                рынке Удмуртской Республики. За время своей деятельности,
                компанией успешно реализован 55 объектов, из них: 45 жилых домов
                общей площадью более 395 000 кв.м. жилья, торгово-бытовой центр
                «Квартал» на ул. Ленина (6,2 тыс. кв.м.), 8 автосалонов
                «Nissan», «Toyota», «Honda», «Ford», «KIA», «Lexus», «Skoda»,
                «Datsun» (25,9 тыс. кв.м.) торгово-развлекательный центр
                «Талисман» (45 тыс. кв.м.).
              </p>
            </div>
            <div className={s.bottomwrapper}>
                <div className={s.middleelement}>
                  <div className={s.middletextwrapper}>
                    <h6 className={s.middletitle}>Строительное направление</h6>
                    <p className={s.middletext}>
                      АСПЭК-Домстрой – девелоперская компания специализирующаяся на
                      строительстве жилых кварталов и микрорайонов города Ижевска.
                      Компания начала свою деятельность 16 лет назад и стала за это
                      время одной из самых известных и активно развивающихся
                      девелоперских фирм на рынке Удмуртской Республики.
                    </p>
                  </div>
                  <img src={image5} alt="" className={s.middleimg} />
                </div>
                <div className={s.bottomelement}>
                  <img src={image4} alt="" className={s.bottomimg} />
                </div>
            </div>
          </div>
        </div>
        <div className={s.buttonwrapper}>
          <Button onClick={()=>navigate("/estateselection")} content="Перейти к проектам" width="260px" bgColor="green" />
        </div>
      </div>
    </div>
  );
}

export default Info;
