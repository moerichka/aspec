import React, { useState, useEffect } from "react";
import s from "./paymentOptions.module.css";
import "./paymentOptions.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// import { Scrollbar } from "swiper";

function PaymentOptions() {
  const [swiper, setSwiper] = useState(null);
  const [isEnd, setIsEnd] = useState(false)
  const [isBeginning, setIsBeginning] = useState(true)
  
  const slideChangeHandler = (swip) => {
    setIsEnd(swip?.isEnd)
    setIsBeginning(swip?.isBeginning)
  }


  return (
    <div className="paymentOptions">
      <div className={`container ${s.container}`}>
        <div className={s.leftPart}>
          <h2 className="h2-title">Способы покупки</h2>
          <p className={s.desc}>
            Для того что бы получить скидку достаточно выбрать свободную
            квартиру в строящихся домах компании "АСПЭК-Домстрой" и показать
            персональному менеджеру свидетельство о регистрации{" "}
          </p>
          <div className={s.navigation}>
            <span
              className={`icon-projectArrow ${s.arrow} ${s.arrowleft} ${
                isBeginning ? s.end : ""
              }`}
              onClick={() => swiper?.slidePrev()}
            ></span>
            <span
              className={`icon-projectArrow ${s.arrow} ${
                isEnd ? s.end : ""
              }`}
              onClick={() => swiper?.slideNext()}
            ></span>
          </div>
        </div>
        <div className={s.rightPart}>
          <Swiper
            id="swiper"
            slidesPerView={3}
            spaceBetween={5}
            centeredSlides={true}
            className="mySwiper"
            grabCursor={true}
            allowTouchMove={true}
            onSwiper={(swip) => setSwiper(swip)}
            onSlideChange={(swip)=> slideChangeHandler(swip)}
            // scrollbar={windowWidth < 756 ? {draggable: true} : false}
            // modules={windowWidth < 756 ? [Scrollbar] : []}
          >
            <SwiperSlide>
              {({ isActive }) => (
                <div className={`${s.option} ${isActive ? s.active : ""}`}>
                  <span
                    className={`icon-bank ${s.icon} ${
                      isActive ? s.active : ""
                    }`}
                  ></span>
                  <h6 className={`${s.smalltitle} ${isActive ? s.active : ""}`}>
                    Ипотека
                  </h6>
                  <p className={`${s.text} ${isActive ? s.active : ""}`}>
                    Для того что бы получить скидку достаточно выбрать свободную
                    квартиру в строящихся домах компании "АСПЭК-Домстрой" и
                    показать персональному менеджеру свидетельство о регистрации
                    права собственности на существующую квартиру. А все хлопоты
                    по реализации вторичного жилья мы возьмем на себя.
                  </p>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div className={`${s.option} ${isActive ? s.active : ""}`}>
                  <span
                    className={`icon-handshake ${s.icon} ${
                      isActive ? s.active : ""
                    }`}
                  ></span>
                  <h6 className={`${s.smalltitle} ${isActive ? s.active : ""}`}>
                    Свои люди
                  </h6>
                  <p className={`${s.text} ${isActive ? s.active : ""}`}>
                    Для того что бы получить скидку достаточно выбрать свободную
                    квартиру в строящихся домах компании "АСПЭК-Домстрой" и
                    показать персональному менеджеру свидетельство о регистрации
                    права собственности на существующую квартиру. А все хлопоты
                    по реализации вторичного жилья мы возьмем на себя.
                  </p>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div className={`${s.option} ${isActive ? s.active : ""}`}>
                  <span
                    className={`icon-housePersantage ${s.icon} ${
                      isActive ? s.active : ""
                    }`}
                  ></span>
                  <h6 className={`${s.smalltitle} ${isActive ? s.active : ""}`}>
                    Рассрочка
                  </h6>
                  <p className={`${s.text} ${isActive ? s.active : ""}`}>
                    Рассрочка – отличный способ получить Вашу новую квартиру без
                    привлечения банков.
                  </p>
                </div>
              )}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions;
