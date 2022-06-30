import React, { useState,useEffect } from "react";
import s from "./buy.module.css";
import "./buy.css"
import { Link, useNavigate } from "react-router-dom";
import {withErrorBoundary} from "react-error-boundary"

import Header from "../../components/header";
import DashNav from "../../components/dashnav";
import Button from "../../components/button";
import Footer from "../../components/footer";
import { NoMatch404 } from "../NoMatch";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

function Buy(props) {
  const navigate = useNavigate()
  const [swiper, setSwiper] = useState(null);
  const wayArray = [{ title: <Link to="/" className="dashnav__link">Главная</Link> }, { title: "Способы покупки" }];

  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className={"buy"}>
      <Header withLine={true} />
      <div className={s.dashNav}>
        <DashNav wayArray={wayArray} />
      </div>
      <div className={s.content}>
        <div className={s.container}>
          <div className={s.titlewrapper}>
            <h2 className="h2-title">Способы покупки</h2>
            <Button
              onClick={()=>navigate("/estateselection")}
              bgColor="green"
              width="260px"
              content="Перейти к выбору квартир"
            ></Button>
          </div>
          <div className={s.grid}>
            <div className={`${s.card} ${s.card1}`}>
              <span className={`icon-bank ${s.icon}`}></span>
              <h6 className={s.smalltitle}>Ипотека</h6>
              <p className={s.text}>
                Для того что бы получить скидку достаточно выбрать свободную
                квартиру в строящихся домах компании "АСПЭК-Домстрой" и показать
                персональному менеджеру свидетельство о регистрации права
                собственности на существующую квартиру. А все хлопоты по
                реализации вторичного жилья мы возьмем на себя.
              </p>
            </div>
            <div className={`${s.card} ${s.card2}`}>
              <span className={`icon-housePersantage ${s.icon}`}></span>
              <h6 className={s.smalltitle}>Рассрочка</h6>
              <p className={s.text}>
                Рассрочка – отличный способ получить Вашу новую квартиру без
                привлечения банков.
              </p>
            </div>
            <div className={`${s.card} ${s.card3}`}>
              <span className={`icon-housePersantage ${s.icon}`}></span>
              <h6 className={s.smalltitle}>Обмен</h6>
              <p className={s.text}>
                Сервис службы обмена квартир полезен покупателям, которые
                выбрали квартиру в домах АСПЭКа, но в моменте не имеют нужной
                суммы денег.
              </p>
            </div>
            <div className={`${s.card} ${s.card4}`}>
              <span className={`icon-handshake ${s.icon}`}></span>
              <h6 className={s.smalltitle}>Свои люди</h6>
              <p className={s.text}>
                Для того что бы получить скидку достаточно выбрать свободную
                квартиру в строящихся домах компании "АСПЭК-Домстрой" и показать
                персональному менеджеру свидетельство о регистрации права
                собственности на существующую квартиру. А все хлопоты по
                реализации вторичного жилья мы возьмем на себя.
              </p>
            </div>
            <div className={`${s.card} ${s.card5}`}>
              <span className={`icon-bank ${s.icon}`}></span>
              <h6 className={s.smalltitle}>Ипотека</h6>
              <p className={s.text}>
                Для того что бы получить скидку достаточно выбрать свободную
                квартиру в строящихся домах компании "АСПЭК-Домстрой" и показать
                персональному менеджеру свидетельство о регистрации права
                собственности на существующую квартиру. А все хлопоты по
                реализации вторичного жилья мы возьмем на себя.
              </p>
            </div>
          </div>
          <div className={s.swiperwrapper}>
            <Swiper
              // slidesPerView={ window.innerWidth / 320 < 1 ? 1 : window.innerWidth / 320}//2
              slidesPerView={ windowWidth / 320 < 1 ? 1 : windowWidth / 320}
              spaceBetween={14}
              centeredSlides={true}
              className={s.swiper}
              onSwiper={(swip) => setSwiper(swip)}
              direction={"horizontal"}
              scrollbar={{ dragSize: 100, horizontalClass: s.swiperscroll, dragClass: s.swiperdrug, draggable: true }}
              modules={[Scrollbar]}
            >
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={s.card} data-state={isActive}>
                    <span className={`icon-bank ${s.icon}`}></span>
                    <h6 className={s.smalltitle}>Ипотека</h6>
                    <p className={s.text}>
                      Для того что бы получить скидку достаточно выбрать
                      свободную квартиру в строящихся домах компании
                      "АСПЭК-Домстрой" и показать персональному менеджеру
                      свидетельство о регистрации права собственности на
                      существующую квартиру. А все хлопоты по реализации
                      вторичного жилья мы возьмем на себя.
                    </p>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={s.card } data-state={isActive}>
                    <span className={`icon-housePersantage ${s.icon}`}></span>
                    <h6 className={s.smalltitle}>Рассрочка</h6>
                    <p className={s.text}>
                      Рассрочка – отличный способ получить Вашу новую квартиру
                      без привлечения банков.
                    </p>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={s.card } data-state={isActive}>
                    <span className={`icon-housePersantage ${s.icon}`}></span>
                    <h6 className={s.smalltitle}>Обмен</h6>
                    <p className={s.text}>
                      Сервис службы обмена квартир полезен покупателям, которые
                      выбрали квартиру в домах АСПЭКа, но в моменте не имеют
                      нужной суммы денег.
                    </p>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={s.card } data-state={isActive}>
                    <span className={`icon-handshake ${s.icon}`}></span>
                    <h6 className={s.smalltitle}>Свои люди</h6>
                    <p className={s.text}>
                      Для того что бы получить скидку достаточно выбрать
                      свободную квартиру в строящихся домах компании
                      "АСПЭК-Домстрой" и показать персональному менеджеру
                      свидетельство о регистрации права собственности на
                      существующую квартиру. А все хлопоты по реализации
                      вторичного жилья мы возьмем на себя.
                    </p>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={s.card } data-state={isActive}>
                    <span className={`icon-bank ${s.icon}`}></span>
                    <h6 className={s.smalltitle}>Ипотека</h6>
                    <p className={s.text}>
                      Для того что бы получить скидку достаточно выбрать
                      свободную квартиру в строящихся домах компании
                      "АСПЭК-Домстрой" и показать персональному менеджеру
                      свидетельство о регистрации права собственности на
                      существующую квартиру. А все хлопоты по реализации
                      вторичного жилья мы возьмем на себя.
                    </p>
                  </div>
                )}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withErrorBoundary(Buy, {
  fallbackRender: ()=><NoMatch404/>,
  onError(error, info){
    console.log(error);
    console.log(info);
  }
});
