import React, { useEffect, useState } from "react";
import s from "./layoutCompare.module.css";
import "./layoutCompare.css";

import Button from "../button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import {
  dateConverterToQuarter,
  dateConverterToMY,
} from "../../helpers/dateFun";
import { priceConverterToMln, separator } from "../../helpers/stringsFun";

function LayoutCompare(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
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
          {props?.room?.favored ? (
            <div className={s.topright} data-favorite="true">
              <span className="icon-mark-fill"></span>
            </div>
          ) : (
            <div className={s.topright}>
              <span className="icon-mark"></span>
            </div>
          )}
        </div>
        <div className={s.swiperwrapper}>
          <Swiper
            spaceBetween={30}
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {props?.room?.layouts?.map((elem, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={`/project/${props?.room?.projectId}/layout/${props?.room?.id}`}
                >
                  <div className={s.imgwrapper}>
                    <img
                      src={`${PF}${elem}`}
                      alt=""
                      className={s.img}
                      width="1"
                      height="1"
                    />
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
                  <span className={s.smallpricebold}>{priceConverterToMln(props?.room?.price)} </span>
                </>
              )}
              ₽
            </div>
          </div>
          <div className={s.compareList}>
            <div className={s.compareElemnt}>
              <div className={s.compareTitle}>Название объекта</div>
              <div className={s.compareValue}>
                {props?.room?.porjectType} {props?.room?.project}
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
              <div className={s.compareLine}></div>
            </div>
            <div className={s.compareElemnt}>
              <div className={s.compareTitle}>Срок сдачи</div>
              <div className={s.compareValue}>
                {windowWidth >= 1140
                  ? dateConverterToQuarter(props?.room?.openDate)
                  : dateConverterToMY(props?.room?.openDate)}
              </div>
              <div className={s.compareLine}></div>
            </div>
          </div>
          {windowWidth >= 1140 && (
            <div className={s.button}>
              <Button content={"Забронировать"} bgColor="blue" />
            </div>
          )}
          {windowWidth >= 440 && windowWidth < 1140 && (
            <div className={s.button}>
              <Button content={"Забронировать"} bgColor="green" />
            </div>
          )}
          {windowWidth < 440 && (
            <div className={s.button}>
              <Button content={"Забронировать"} bgColor="green" width="155px" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LayoutCompare;
