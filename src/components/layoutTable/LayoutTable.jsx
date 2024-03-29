// Запасная компонента, еще не использовал

import React from "react";
// import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { dateConverterToQuarter } from "../../helpers/dateFun";
import { getFlatAmount, separator } from "../../helpers/stringsFun";
import Button from "../button";

import s from "./layoutTable.module.css";
import "./layoutTable.css";

function LayoutTable(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const pagination = {
    clickable: true,
    renderBullet (index, className) {
      return `<span class=${`${className}`}></span>`;
    },
  };

  return (
    <table className={s.table}>
      {props?.rooms?.map((favorit) => (
          <div className="layoutTable">
            <div className={s.container}>
              <div className={s.topwrapper}>
                <div className={s.topleft}>
                  <div className={s.notifications}>
                    {favorit?.discount && (
                      <div className={`${s.notification} ${s.yellow}`}>
                        Скидка {props?.room?.discount}
                      </div>
                    )}
                    {favorit?.newShapes && (
                      <div className={s.notification}>Новые корпуса</div>
                    )}
                  </div>
                  <div className={s.amount}>
                    {getFlatAmount(favorit?.amount)}
                  </div>
                </div>
                {favorit?.favored ? (
                  <div className={s.topright} data-favorite="true">
                    <span className="icon-mark-fill" />
                  </div>
                ) : (
                  <div className={s.topright}>
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
                  {favorit?.layouts?.map((elem) => (
                    <SwiperSlide key={elem?.id}>
                      <Link
                        to={`/project/${favorit?.projectId}/layout/${favorit?.id}`}
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
                <div>
                  <div className={s.titlewrapper}>
                    <div className={s.title}>{favorit?.name}</div>
                    <div className={s.smallprice}>
                      {separator(favorit?.price)} ₽
                    </div>
                  </div>
                  <div className={s.compareList}>
                    <div className={s.compareElemnt}>
                      <div className={s.compareTitle}>Название объекта</div>
                      <div className={s.compareValue}>
                        {favorit?.projectType} {favorit?.project}
                      </div>
                      <div className={s.compareLine} />
                    </div>
                    <div className={s.compareElemnt}>
                      <div className={s.compareTitle}>Количество комнат</div>
                      <div className={s.compareValue}>{favorit?.rooms}</div>
                      <div className={s.compareLine} />
                    </div>
                    <div className={s.compareElemnt}>
                      <div className={s.compareTitle}>Общая площадь</div>
                      <div className={s.compareValue}>{favorit?.space} м²</div>
                      <div className={s.compareLine} />
                    </div>
                    <div className={s.compareElemnt}>
                      <div className={s.compareTitle}>Стоимость квартиры</div>
                      <div className={s.compareValue}>
                        {separator(favorit?.price)} ₽
                      </div>
                      <div className={s.compareLine} />
                    </div>
                    <div className={s.compareElemnt}>
                      <div className={s.compareTitle}>Площадь кухни</div>
                      <div className={s.compareValue}>
                        {favorit?.kitchenSpace} м²
                      </div>
                      <div className={s.compareLine} />
                    </div>
                    <div className={s.compareElemnt}>
                      <div className={s.compareTitle}>Отделка</div>
                      <div className={s.compareValue}>
                        {favorit?.finishingIn
                          ? "Включена в стоимость"
                          : "Не включена в стоимость"}
                      </div>
                      <div className={s.compareLine} />
                    </div>
                    <div className={s.compareElemnt}>
                      <div className={s.compareTitle}>Дом</div>
                      <div className={s.compareValue}>{favorit?.house}</div>
                      <div className={s.compareLine} />
                    </div>
                    <div className={s.compareElemnt}>
                      <div className={s.compareTitle}>Этаж</div>
                      <div className={s.compareValue}>{favorit?.level}</div>
                      <div className={s.compareLine} />
                    </div>
                    <div className={s.compareElemnt}>
                      <div className={s.compareTitle}>Срок сдачи</div>
                      <div className={s.compareValue}>
                        {dateConverterToQuarter(favorit?.openDate)}
                      </div>
                      <div className={s.compareLine} />
                    </div>
                  </div>
                  <Button content="Забронировать" BGColor="blue" />
                </div>
              </div>
            </div>
          </div>
        ))}
    </table>
  );
}

LayoutTable.propTypes = {
  rooms: [],
  room: {},
};

LayoutTable.defaultProps = {
  rooms: [],
  room: {},
};

export default LayoutTable;
