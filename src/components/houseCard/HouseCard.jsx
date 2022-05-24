import React, { useState } from "react";
import "./houseCard.css";

import { dateConverterToQuarter } from "../../helpers/dateFun";

export default function HouseCard(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const priceConverter = (price) => {
    return `${price / 1000000} млн`;
  };
  
  return (
    <div className="houseCard">
      <div className="houseCard__container">
        <div className="houseCard__imageWrapper">
          <div className="houseCard__imageNotifications">
            {props.discount && (
              <div className="houseCard__imageNotification houseCard__imageNotification-yellow">
                Скидка {props.discount}
              </div>
            )}
            {props.newShapes && (
              <div className="houseCard__imageNotification">Новые корпуса</div>
            )}
          </div>
          <img src={`${PF}${props.image}`} className="houseCard__image" alt="" />
        </div>
        <div className="houseCard__infoWrapper">
          <div className="houseCard__titleBar">
            <h6 className="houseCard__title">{props.name}</h6>
            <span className="houseCard__price">
              от{" "}
              <span className="houseCard__priceBold">
                {priceConverter(props.price)}
              </span>{" "}
              ₽
            </span>
          </div>
          <div className="houseCard__adressWrapper">
            <span className="houseCard__icon icon-location"></span>
            <span className="houseCard__adress">{props.adress}</span>
          </div>
        </div>
        <div className="houseCard__moreInfoWrapper">
          <div className="houseCard__moreInfo"> 
            <ul className="houseCard__flats">
              {props?.flats?.map((flat) => (
                <li className="houseCard__flat" key={flat.id}>
                  <span className="houseCard__flatType">{flat.name}</span>
                  <span className="houseCard__flatPrice">
                    от {priceConverter(flat.price)} ₽
                  </span>
                </li>
              ))}
            </ul>
            <div className="houseCard__bottomWrapper">
              <div className="houseCard__openDateWrapper">
                <span className="houseCard__icon icon-home"></span>
                <span className="houseCard__openDate">
                  Срок сдачи { dateConverterToQuarter(props.openDate)} г.
                </span>
              </div>
              <span className="houseCard__more">Подробнее</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}