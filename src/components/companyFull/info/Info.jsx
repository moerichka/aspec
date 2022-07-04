import React from "react";
import s from "./info.module.css";

import { useNavigate } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";

import image1Full from "../../../assets/images/image35.jpg";
import image1Small from "../../../assets/images/image35small.jpg";
import image2Full from "../../../assets/images/image37.jpg";
import image2Small from "../../../assets/images/image37small.jpg";
import image3Full from "../../../assets/images/image36.jpg";
import image3Small from "../../../assets/images/image36small.jpg";
import image4Full from "../../../assets/images/image34.jpg";
import image4Small from "../../../assets/images/image34small.jpg";
import image5 from "../../../assets/images/Elem1.png";

import Button from "../../button";

function Info() {
  const navigate = useNavigate();

  const image1 = { image: image1Full, smallimage: image1Small };
  const image2 = { image: image2Full, smallimage: image2Small };
  const image3 = { image: image3Full, smallimage: image3Small };
  const image4 = { image: image4Full, smallimage: image4Small };

  return (
    <div className={s.info}>
      <div className={s.container}>
        <div className={s.blocks}>
          <div className={s.block}>
            <div className={s.topelement}>
              <h2 className={`h2-title ${s.h2title}`}>
                Компания «АСПЭК-Домстрой»
              </h2>
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
                    АСПЭК-Домстрой – девелоперская компания специализирующаяся
                    на строительстве жилых кварталов и микрорайонов города
                    Ижевска. Компания начала свою деятельность 16 лет назад и
                    стала за это время одной из самых известных и активно
                    развивающихся девелоперских фирм на рынке Удмуртской
                    Республики.
                  </p>
                </div>
                <img src={image5} alt="" className={s.middleimg} />
              </div>
              <div className={s.bottomelement}>
                {image1?.smallimage ? (
                  <ProgressiveImage
                    src={image1?.image}
                    placeholder={image1?.smallimage}
                  >
                    {(src, loading) => (
                      <img
                        style={{
                          filter: loading ? "blur(10px)" : "blur(0px)",
                          transition: "0.3s",
                        }}
                        src={src}
                        alt=""
                        className={s.bottomimg}
                      />
                    )}
                  </ProgressiveImage>
                ) : (
                  <img src={image1?.image} alt="" className={s.bottomimg} />
                )}
              </div>
            </div>
          </div>
          <div className={`${s.block} ${s.blockreverse}`}>
            <div className={s.topelement}>
              <h2 className={`h2-title ${s.h2title}`}>
                Компания «АСПЭК-Домстрой»
              </h2>
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
                    АСПЭК-Домстрой – девелоперская компания специализирующаяся
                    на строительстве жилых кварталов и микрорайонов города
                    Ижевска. Компания начала свою деятельность 16 лет назад и
                    стала за это время одной из самых известных и активно
                    развивающихся девелоперских фирм на рынке Удмуртской
                    Республики.
                  </p>
                </div>
                <img src={image5} alt="" className={s.middleimg} />
              </div>
              <div className={s.bottomelement}>
                {image2?.smallimage ? (
                  <ProgressiveImage
                    src={image2?.image}
                    placeholder={image2?.smallimage}
                  >
                    {(src, loading) => (
                      <img
                        style={{
                          filter: loading ? "blur(10px)" : "blur(0px)",
                          transition: "0.3s",
                        }}
                        src={src}
                        alt=""
                        className={s.bottomimg}
                      />
                    )}
                  </ProgressiveImage>
                ) : (
                  <img src={image2?.image} alt="" className={s.bottomimg} />
                )}
              </div>
            </div>
          </div>
          <div className={s.block}>
            <div className={s.topelement}>
              <h2 className={`h2-title ${s.h2title}`}>
                Компания «АСПЭК-Домстрой»
              </h2>
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
                    АСПЭК-Домстрой – девелоперская компания специализирующаяся
                    на строительстве жилых кварталов и микрорайонов города
                    Ижевска. Компания начала свою деятельность 16 лет назад и
                    стала за это время одной из самых известных и активно
                    развивающихся девелоперских фирм на рынке Удмуртской
                    Республики.
                  </p>
                </div>
                <img src={image5} alt="" className={s.middleimg} />
              </div>
              <div className={s.bottomelement}>
                {image3?.smallimage ? (
                  <ProgressiveImage
                    src={image3?.image}
                    placeholder={image3?.smallimage}
                  >
                    {(src, loading) => (
                      <img
                        style={{
                          filter: loading ? "blur(10px)" : "blur(0px)",
                          transition: "0.3s",
                        }}
                        src={src}
                        alt=""
                        className={s.bottomimg}
                      />
                    )}
                  </ProgressiveImage>
                ) : (
                  <img src={image3?.image} alt="" className={s.bottomimg} />
                )}
              </div>
            </div>
          </div>
          <div className={`${s.block} ${s.blockreverse}`}>
            <div className={s.topelement}>
              <h2 className={`h2-title ${s.h2title}`}>
                Компания «АСПЭК-Домстрой»
              </h2>
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
                    АСПЭК-Домстрой – девелоперская компания специализирующаяся
                    на строительстве жилых кварталов и микрорайонов города
                    Ижевска. Компания начала свою деятельность 16 лет назад и
                    стала за это время одной из самых известных и активно
                    развивающихся девелоперских фирм на рынке Удмуртской
                    Республики.
                  </p>
                </div>
                <img src={image5} alt="" className={s.middleimg} />
              </div>
              <div className={s.bottomelement}>
                {image4?.smallimage ? (
                  <ProgressiveImage
                    src={image4?.image}
                    placeholder={image4?.smallimage}
                  >
                    {(src, loading) => (
                      <img
                        style={{
                          filter: loading ? "blur(10px)" : "blur(0px)",
                          transition: "0.3s",
                        }}
                        src={src}
                        alt=""
                        className={s.bottomimg}
                      />
                    )}
                  </ProgressiveImage>
                ) : (
                  <img src={image4?.image} alt="" className={s.bottomimg} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={s.buttonwrapper}>
          <Button
            onClick={() => navigate("/estateselection")}
            content="Перейти к проектам"
            width="260px"
            bgColor="green"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
