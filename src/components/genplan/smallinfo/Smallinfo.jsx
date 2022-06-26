import React from "react";
import s from "./smallinfo.module.css";

import { dateConverterToDMY } from "../../../helpers/dateFun";
import { priceConverterToMln } from "../../../helpers/stringsFun";

function Infocorpus(props) {
  return (
    <div className={s.smallinfo}>
      <span className={s.title}>Корпус {props?.data?.number}</span>
      <span className={s.settlement}>
        Заселение до {dateConverterToDMY(props?.data?.date)}
      </span>
      <span className={s.roomsavailable}>
        {props?.data?.flatsAmount} квартир в продаже
      </span>
      <span className={s.ready}>Готов на {props?.data?.ready * 100}%</span>
      <div className={s.progressbar}>
        <div
          className={s.progress}
          style={{ width: `${props?.data?.ready * 100}%` }}
        ></div>
      </div>
      <div className={s.flats}>
        {props?.data?.flats?.map((flat, index) => (
          <div className={s.flat} key={index}>
            {flat?.name === "студия" ? (
              <span className={s.flattitle}>{flat?.name}</span>
            ) : (
              <span className={s.flattitle}>{flat?.name} квартиры</span>
            )}
            <span className={s.flatprice}>{priceConverterToMln(flat?.price)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function InfoSection(props) {
  return (
    <div className={s.smallinfo}>
      <span className={s.title}>Корпус {props?.data?.number}</span>
      <span className={s.settlement}>
        Заселение до {dateConverterToDMY(props?.data?.date)}
      </span>
      <span className={s.roomsavailable}>
        {props?.data?.flatsAmount} квартир в продаже
      </span>
      <div className={s.flats}>
        {props?.data?.flats?.map((flat, index) => (
          <div className={s.flat} key={index}>
            {flat?.name === "студия" ? (
              <span className={s.flattitle}>{flat?.name}</span>
            ) : (
              <span className={s.flattitle}>{flat?.name} квартиры</span>
            )}
            <span className={s.flatprice}>{priceConverterToMln(flat?.price)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function Infolevel(props) {
  return (
    <div className={`${s.smallinfo} ${s.infolevel}`}>
      <span className={s.title}>Секция {props?.data?.section} / этаж {props?.data?.level}</span>
      <div className={s.flatsamount}>
        {props?.data?.oneRoomAmount && (
          <div className={s.flatnumberwrapper}>
            <div className={s.flatnumber}>1к</div>
            <div className={s.quantity}>{props?.data?.oneRoomAmount} шт</div>
          </div>
        )}
        {props?.data?.twoRoomAmount && (
          <div className={s.flatnumberwrapper}>
            <div className={s.flatnumber}>2к</div>
            <div className={s.quantity}>{props?.data?.twoRoomAmount} шт</div>
          </div>
        )}
        {props?.data?.treeRoomAmount && (
          <div className={s.flatnumberwrapper}>
            <div className={s.flatnumber}>3к</div>
            <div className={s.quantity}>{props?.data?.treeRoomAmount} шт</div>
          </div>
        )}
      </div>
    </div>
  );
}

export { Infocorpus, InfoSection, Infolevel };
