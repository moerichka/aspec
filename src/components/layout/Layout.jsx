import React from "react";
import s from "./layout.module.css";
import "./layout.css";

import Button from "../button"

import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { dateConverterToQuarter } from "../../helpers/dateFun";
import { getFlatAmount, separator } from "../../helpers/stringsFun";

function Layout(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${`${className}`}></span>`;
    },
  };

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
            <div className={s.amount}>{getFlatAmount(props?.room?.amount)}</div>
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
          {props?.compare ? (
            <>
                <div className={s.titlewrapper}>
                    <div className={s.title}>{props?.room?.name}</div>
                    <div className={s.smallprice}>{separator(props?.room?.price)} ₽</div>
                </div>
                <div className={s.compareList}>
                    <div className={s.compareElemnt}>
                        <div className={s.compareTitle}>Название объекта</div>
                        <div className={s.compareValue}>{props?.room?.porjectType} {props?.room?.project}</div>
                        <div className={s.compareLine}/>
                    </div>
                    <div className={s.compareElemnt}>
                        <div className={s.compareTitle}>Количество комнат</div>
                        <div className={s.compareValue}>{props?.room?.rooms}</div>
                        <div className={s.compareLine}/>
                    </div>
                    <div className={s.compareElemnt}>
                        <div className={s.compareTitle}>Общая площадь</div>
                        <div className={s.compareValue}>{props?.room?.space} м²</div>
                        <div className={s.compareLine}/>
                    </div>
                    <div className={s.compareElemnt}>
                        <div className={s.compareTitle}>Стоимость квартиры</div>
                        <div className={s.compareValue}>{separator(props?.room?.price)} ₽</div>
                        <div className={s.compareLine}/>
                    </div>
                    <div className={s.compareElemnt}>
                        <div className={s.compareTitle}>Площадь кухни</div>
                        <div className={s.compareValue}>{props?.room?.kitchenSpace} м²</div>
                        <div className={s.compareLine}/>
                    </div>
                    <div className={s.compareElemnt}>
                        <div className={s.compareTitle}>Отделка</div>
                        <div className={s.compareValue}>{props?.room?.finishingIn ? "Включена в стоимость" : "Не включена в стоимость"}</div>
                        <div className={s.compareLine}/>
                    </div>
                    <div className={s.compareElemnt}>
                        <div className={s.compareTitle}>Дом</div>
                        <div className={s.compareValue}>{props?.room?.house}</div>
                        <div className={s.compareLine}/>
                    </div>
                    <div className={s.compareElemnt}>
                        <div className={s.compareTitle}>Этаж</div>
                        <div className={s.compareValue}>{props?.room?.level}</div>
                        <div className={s.compareLine}></div>
                    </div>
                    <div className={s.compareElemnt}>
                        <div className={s.compareTitle}>Срок сдачи</div>
                        <div className={s.compareValue}>{dateConverterToQuarter(props?.room?.openDate)}</div>
                        <div className={s.compareLine}></div>
                    </div>
                </div>
                <Button content={"Забронировать"} bgColor="blue"/>
            </>
          ) : (
            <>
              <div className={s.price}>
                от {separator(props?.room?.price)} ₽
              </div>
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
              <div className={s.datewrapper}>
                <span className="icon-home"></span>
                <div className={s.opendate}>
                  Срок сдачи {dateConverterToQuarter(props?.room?.openDate)}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
