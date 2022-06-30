import React, {useState} from "react";
import s from "./layout.module.css";
import "./layout.css";

import Button from "../button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { dateConverterToQuarter, dateHowManyDays } from "../../helpers/dateFun";
import {
  getFlatAmount,
  separator,
  getDaysAmount,
} from "../../helpers/stringsFun";

function Layout(props) {
  const [isFavored, setIsFavored] = useState(props?.room?.favored)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${`${className}`}></span>`;
    },
  };

  const dayQuantityObject = dateHowManyDays(props?.room?.openDate);

  return (
    <div className="layout">
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
            {!props?.favoritestyle && <div className={s.amount}>{getFlatAmount(props?.room?.amount)}</div>}
          </div>
          {isFavored ? (
            <div className={s.topright} data-favorite="true" onClick={()=>setIsFavored(prev=>!prev)}>
              <span className="icon-mark-fill"></span>
            </div>
          ) : (
            <div className={s.topright} onClick={()=>setIsFavored(prev=>!prev)}>
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
          <div className={s.price}>от {separator(props?.room?.price)} ₽</div>
          <div className={s.layoutname}>Проект {props?.room?.name}</div>
          <div className={s.propertysWrapper}>
            <div className={s.propertywrapper}>
              <span className={s.property}>Тип</span>
              <div className={s.value}>{props?.room?.name}</div>
            </div>
            <div className={s.propertywrapper}>
              <span className={s.property}>Площадь</span>
              <div className={s.value}>{props?.room?.space} м²</div>
            </div>
            <div className={s.propertywrapper}>
              <span className={s.property}>Дом</span>
              <div className={s.value}>{props?.room?.house}</div>
            </div>
          </div>
          {props?.favoritestyle && <div className={s.finishingin}>Отделка Включена</div>}
          <div className={s.datewrapper}>
            {props?.favoritestyle ? (
              <>
                <span className="icon-location"></span>
                {dayQuantityObject?.ishappened ? (
                  <div className={s.opendate} data-favoredstyle="true">
                    Дом сдан <span className={s.greendate}>{getDaysAmount(dayQuantityObject?.days)}</span> назад
                  </div>
                ) : (
                  <div className={s.opendate} data-favoredstyle="true">
                    Дом сдан через <span className={s.greendate}>{getDaysAmount(dayQuantityObject?.days)}</span>
                  </div>
                )}
              </>
            ) : (
              <>
                <span className="icon-home"></span>
                <div className={s.opendate}>
                  Срок сдачи {dateConverterToQuarter(props?.room?.openDate)}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
