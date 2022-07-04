import React, { useState } from "react";
import s from "./history.module.css";
import "./history.css";

import ProgressiveImage from "react-progressive-graceful-image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import slidePicture from "../../../assets/images/image33.jpg";
import slidePictureSmall from "../../../assets/images/image33small.jpg";

function History() {
  const [swiper, setSwiper] = useState(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  const image1 = { image: slidePicture, smallimage: slidePictureSmall };

  const slideChangeHandler = (swip) => {
    setIsEnd(swip?.isEnd);
    setIsBeginning(swip?.isBeginning);
  };

  const dataArray = [
    {
      date: "2017",
      image: image1,
      title: "Строительное направление",
      desc: `Начинается работа по подготовке к строительству земельного участка в Первомайском районе 
    на ул. Бабушкина`,
    },
    {
      date: "2016",
      image: image1,
      title: "Строительное направление",
      desc: `Начинается работа по подготовке к строительству земельного участка в Первомайском районе 
    на ул. Бабушкина`,
    },
    {
      date: "2015",
      image: image1,
      title: "Строительное направление",
      desc: `Начинается работа по подготовке к строительству земельного участка в Первомайском районе 
    на ул. Бабушкина`,
    },
    {
      date: "2014",
      image: image1,
      title: "Строительное направление",
      desc: `Начинается работа по подготовке к строительству земельного участка в Первомайском районе 
    на ул. Бабушкина`,
    },
    {
      date: "2013",
      image: image1,
      title: "Строительное направление",
      desc: `Начинается работа по подготовке к строительству земельного участка в Первомайском районе 
    на ул. Бабушкина`,
    },
    {
      date: "2012",
      image: image1,
      title: "Строительное направление",
      desc: `Начинается работа по подготовке к строительству земельного участка в Первомайском районе 
    на ул. Бабушкина`,
    },
    {
      date: "2011",
      image: image1,
      title: "Строительное направление",
      desc: `Начинается работа по подготовке к строительству земельного участка в Первомайском районе 
    на ул. Бабушкина`,
    },
    {
      date: "2010",
      image: image1,
      title: "Строительное направление",
      desc: `Начинается работа по подготовке к строительству земельного участка в Первомайском районе 
    на ул. Бабушкина`,
    },
    {
      date: "2009",
      image: image1,
      title: "Строительное направление",
      desc: `Начинается работа по подготовке к строительству земельного участка в Первомайском районе 
    на ул. Бабушкина`,
    },
    {
      date: "2008",
      image: image1,
      title: "Строительное направление",
      desc: `Начинается работа по подготовке к строительству земельного участка в Первомайском районе 
    на ул. Бабушкина`,
    },
  ];

  return (
    <div className={`history ${s.history}`}>
      <div className="container">
        <div className="titleWrapper">
          <h2 className="h2-title">История компании</h2>
          <h5 className="h5-desc">Хронология событий развития компании</h5>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.swiperwrapper}>
          <div className={`${s.arrowwrapper} ${s.arrowwrapperleft}`}>
            <span
              className={`icon-projectArrow ${s.arrow} ${s.arrowleft} ${
                isBeginning ? s.end : ""
              }`}
              onClick={() => swiper?.slidePrev()}
            />
          </div>
          <div className={s.arrowwrapper}>
            <span
              className={`icon-projectArrow ${s.arrow} ${isEnd ? s.end : ""}`}
              onClick={() => swiper?.slideNext()}
            />
          </div>
          <Swiper
            id="swiper"
            slidesPerView={"auto"}
            spaceBetween={5}
            centeredSlides={true}
            className={s.swiper}
            grabCursor={true}
            allowTouchMove={true}
            slideToClickedSlide={true}
            onSwiper={(swip) => setSwiper(swip)}
            onSlideChange={(swip) => slideChangeHandler(swip)}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            // modules={windowWidth < 756 ? [Scrollbar] : []}
          >
            {dataArray?.map((elem, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className={`${s.slide} ${isActive ? s.slideactive : ""}`}
                  >
                    <div className={s.toppart}>
                      <span className={s.date}>{elem.date}</span>
                      <div className={s.point}>
                        <div className={s.innerpoint}></div>
                      </div>
                    </div>
                    <div className={s.content}>
                      {elem?.image?.smallimage ? (
                        <ProgressiveImage
                          src={elem?.image?.image}
                          placeholder={elem?.image?.smallimage}
                        >
                          {(src, loading) => (
                            <img
                              style={{
                                filter: loading ? "blur(10px)" : "blur(0px)",
                                transition: "0.3s",
                              }}
                              src={src}
                              alt=""
                              className={s.contentimg}
                            />
                          )}
                        </ProgressiveImage>
                      ) : (
                        <img
                          src={elem?.image?.image}
                          alt=""
                          className={s.contentimg}
                        />
                      )}
                      <span className={s.contenttitle}>{elem?.title}</span>
                      <p className={s.contenttext}>{elem?.desc}</p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default History;
