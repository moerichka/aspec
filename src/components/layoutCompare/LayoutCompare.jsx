/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";

import "./layoutCompare.css";

import ProgressiveImage from "react-progressive-graceful-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import {
  dateConverterToQuarter,
  dateConverterToMY,
} from "../../helpers/dateFun";
import { priceConverterToMln, separator } from "../../helpers/stringsFun";

import Button from "../button";

import s from "./layoutCompare.module.css";

function LayoutCompare(props) {
  const [isFavored, setIsFavored] = useState(props?.room?.favored);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const pagination = {
    clickable: true,
    renderBullet (index, className) {
      return `<span class=${`${className}`}></span>`;
    },
  };

  return (
    <div className="layoutCompare">
      <div className={s.container}>
        <div className={s.topwrapper}>
          <div className={s.topleft}>
            <div className={s.notifications}>
              {props?.room?.discount && (
                <div className={`${s.notification} ${s.yellow}`}>
                  Скидка {props.room.discount}
                </div>
              )}
              {props?.room?.newShapes && (
                <div className={s.notification}>Новые корпуса</div>
              )}
            </div>
          </div>
          {isFavored ? (
            <div
              className={s.topright}
              data-favorite="true"
              onClick={() => setIsFavored((prev) => !prev)}
            >
              <span className="icon-mark-fill" />
            </div>
          ) : (
            <div
              className={s.topright}
              onClick={() => setIsFavored((prev) => !prev)}
            >
              <span className="icon-mark" />
            </div>
          )}
        </div>
        <div className={s.swiperWrapper}>
          <Swiper
            spaceBetween={30}
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {props?.room?.layouts?.map((elem, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index}>
                <Link
                  to={`/project/${props?.room?.projectId}/layout/${props?.room?.id}`}
                >
                  <div className={s.imgwrapper}>
                    {elem.imageSmall ? (
                      <ProgressiveImage
                        src={`${PF}${elem?.image}`}
                        placeholder={`${PF}${elem?.imageSmall}`}
                      >
                        {(src, loading) => (
                          <img
                            style={{
                              filter: loading ? "blur(10px)" : "blur(0px)",
                              transition: "0.3s",
                            }}
                            src={src}
                            alt=""
                            className={s.img}
                          />
                        )}
                      </ProgressiveImage>
                    ) : elem?.image ? (
                      <img
                        src={`${PF}${elem?.image}`}
                        alt=""
                        className={s.img}
                      />
                    ) : (
                      <img src={`${PF}${elem}`} alt="" className={s.img} />
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.infowrapper}>
          <div className={s.titlewrapper}>
            <div className={s.title}>
              {props?.room?.name} {props?.room?.space} м²
            </div>
            <div className={s.smallprice}>
              {windowWidth >= 1300 ? (
                separator(props?.room?.price)
              ) : (
                <>
                  <span>от </span>
                  <span className={s.smallpricebold}>
                    {priceConverterToMln(props?.room?.price)}{" "}
                  </span>
                </>
              )}
              ₽
            </div>
          </div>
          <div className={s.compareList}>
            <div className={s.compareElemnt}>
              <div className={s.compareTitle}>Название объекта</div>
              <div className={s.compareValue}>
                {props?.room?.projectType} {props?.room?.project}
              </div>
              <div className={s.compareLine} />
            </div>
            <div className={s.compareElemnt}>
              <div className={s.compareTitle}>Количество комнат</div>
              <div className={s.compareValue}>{props?.room?.rooms}</div>
              <div className={s.compareLine} />
            </div>
            <div className={s.compareElemnt}>
              <div className={s.compareTitle}>Общая площадь</div>
              <div className={s.compareValue}>{props?.room?.space} м²</div>
              <div className={s.compareLine} />
            </div>
            <div className={s.compareElemnt}>
              <div className={s.compareTitle}>Стоимость квартиры</div>
              <div className={s.compareValue}>
                {separator(props?.room?.price)} ₽
              </div>
              <div className={s.compareLine} />
            </div>
            <div className={s.compareElemnt}>
              <div className={s.compareTitle}>Площадь кухни</div>
              <div className={s.compareValue}>
                {props?.room?.kitchenSpace} м²
              </div>
              <div className={s.compareLine} />
            </div>
            <div className={s.compareElemnt}>
              <div className={s.compareTitle}>Отделка</div>
              <div className={s.compareValue}>
                {windowWidth >= 950
                  ? props?.room?.finishingIn
                    ? "Включена в стоимость"
                    : "Не включена в стоимость"
                  : props?.room?.finishingIn
                  ? "Включена"
                  : "Не включена"}
              </div>
              <div className={s.compareLine} />
            </div>
            <div className={s.compareElemnt}>
              <div className={s.compareTitle}>Дом</div>
              <div className={s.compareValue}>{props?.room?.house}</div>
              <div className={s.compareLine} />
            </div>
            <div className={s.compareElemnt}>
              <div className={s.compareTitle}>Этаж</div>
              <div className={s.compareValue}>{props?.room?.level}</div>
              <div className={s.compareLine} />
            </div>
            <div className={s.compareElemnt}>
              <div className={s.compareTitle}>Срок сдачи</div>
              <div className={s.compareValue}>
                {windowWidth >= 1140
                  ? dateConverterToQuarter(props?.room?.openDate)
                  : dateConverterToMY(props?.room?.openDate)}
              </div>
              <div className={s.compareLine} />
            </div>
          </div>
          {windowWidth >= 1140 && (
            <div className={s.button}>
              <Button content="Забронировать" BGColor="blue" />
            </div>
          )}
          {windowWidth >= 440 && windowWidth < 1140 && (
            <div className={s.button}>
              <Button content="Забронировать" BGColor="green" />
            </div>
          )}
          {windowWidth < 440 && (
            <div className={s.button}>
              <Button content="Забронировать" BGColor="green" width="155px" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

LayoutCompare.propTypes = {
  room: {},
};

LayoutCompare.defaultProps = {
  room: {},
};

export default LayoutCompare;
