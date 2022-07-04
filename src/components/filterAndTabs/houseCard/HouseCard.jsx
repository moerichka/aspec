import React from "react";
import s from "./houseCard.module.css";
import "./houseCard.css";

import ProgressiveImage from "react-progressive-graceful-image";

import { dateConverterToQuarter } from "../../../helpers/dateFun";

export default function HouseCard(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const priceConverter = (price) => {
    return `${price / 1000000} млн`;
  };

  const getAmountRoomsString = (amount) => {
    let str = `${amount}`;
    const regExp = /[2-4]$/;
    const regExpForOne = /1$/;

    if (regExpForOne.test(str)) {
      return (str += " помещение");
    } else {
      return (str += regExp.test(str) ? " помещения" : " помещений");
    }
  };

  return (
    <div className={s.houseCard}>
      <div className={s.container}>
        <div className={s.imageWrapper}>
          <div className={s.imageNotifications}>
            {props.discount && (
              <div
                className={`${s.imageNotification} ${s.imageNotificationYellow}`}
              >
                Скидка {props.discount}
              </div>
            )}
            {props.newShapes && (
              <div className={s.imageNotification}>Новые корпуса</div>
            )}
          </div>
          {props?.image?.smallimage ? (
            <ProgressiveImage
              src={`${PF}${props?.image?.image}`}
              placeholder={`${PF}${props?.image?.smallimage}`}
            >
              {(src, loading) => (
                <img
                  style={{
                    filter: loading ? "blur(10px)" : "blur(0px)",
                    transition: "0.3s",
                  }}
                  src={src}
                  alt=""
                  className={s.image}
                />
              )}
            </ProgressiveImage>
          ) : props?.image?.image ? (
            <img src={`${PF}${props?.image?.image}`} alt="" className={s.image} />
          ) : (
            <img src={`${PF}${props?.image}`} alt="" className={s.image} />
          )}
        </div>
        <div className={s.infoWrapper}>
          <div className={s.titleBar}>
            <h6 className={s.title}>{props.name}</h6>
            <span className={s.price}>
              от{" "}
              <span className={s.priceBold}>
                {priceConverter(props.minPrice)}
              </span>{" "}
              ₽
            </span>
          </div>
          <div className={s.adressWrapper}>
            <span className={`${s.icon} icon-location`}></span>
            <span className={s.adress}>{props.adress}</span>
          </div>
        </div>
        <div className={s.moreInfoWrapper}>
          <div className={s.moreInfo}>
            <ul className={s.flats}>
              {props?.roomsAmount && (
                <li className={s.flat}>
                  <span className={s.flatType}>
                    {getAmountRoomsString(props?.roomsAmount)} в продаже
                  </span>
                  <span className={s.flatPrice}>
                    от {priceConverter(props.minPrice)} ₽
                  </span>
                </li>
              )}
              {props?.flats &&
                props?.flats?.map((flat) => (
                  <li className={s.flat} key={flat.id}>
                    <span className={s.flatType}>{flat.name} квартиры</span>
                    <span className={s.flatPrice}>
                      от {priceConverter(flat.price)} ₽
                    </span>
                  </li>
                ))}
            </ul>
            <div className={s.bottomWrapper}>
              <div className={s.openDateWrapper}>
                <span className={`${s.icon} icon-home`}></span>
                <span className={s.openDate}>
                  Срок сдачи {dateConverterToQuarter(props.openDate)} г.
                </span>
              </div>
              <span className={s.more}>Подробнее</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
