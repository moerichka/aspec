import React, { useState } from "react";
import s from "./infoShort.module.css";
import { Link } from "react-router-dom";
import Button from "../../../button/Button";

import { dateConverterToQuarter } from "../../../../helpers/dateFun";
import { separator } from "../../../../helpers/stringsFun";

function InfoShort(props) {
  const [finishingOn, setFinishingOn] = useState(false);

  return (
    <div className={s.infoShort}>
      <div className={s.topwrapper}>
        <h2 className={s.title}>
          {props?.layout?.name} {props?.layout?.space} м²
        </h2>
      </div>
      <div className={s.projectname}>Проект {props?.project?.name}</div>
      <div className={s.grid}>
        <span className={s.elemtitle}>Срок сдачи</span>
        <span className={s.elemvalue}>
          {dateConverterToQuarter(props?.layout?.openDate)}
        </span>
        <span className={s.elemtitle}>Дом</span>
        <span className={s.elemvalue}>{props?.layout?.house}</span>
        <span className={s.elemtitle}>Подъезд</span>
        <span className={s.elemvalue}>{props?.layout?.entrance}</span>
        <span className={s.elemtitle}>Этаж</span>
        <span className={s.elemvalue}>
          {props?.selectedLevel}{" "}
          <span className={s.valuegray}>из {props?.amountOfLevels}</span>
        </span>
        <span className={s.elemtitle}>Номер квартиры</span>
        <span className={s.elemvalue}>{props?.layout?.flatNumber}</span>
        <span className={s.elemtitle}>Улица</span>
        <span className={s.elemvalue}>{props?.layout?.street}</span>
        <span className={s.elemtitle}>Район</span>
        <span className={s.elemvalue}>{props?.layout?.district}</span>
      </div>
      <div className={s.line}></div>
      <div className={s.mortgage}>
        <span className={s.mortgagetitle}>Ипотека</span>
        <div className={s.mortgagevarients}>
          <div className={s.mortgagevarient}>
            <span className={s.mortgagegreen}>3.8% </span>
            <span>от </span>
            <span className={s.mortgageunderline}>21 600 ₽ / мес</span>
          </div>
          <div className={s.mortgagevarient}>
            <span className={s.mortgagegreen}>5.69% </span>
            <span>от </span>
            <span className={s.mortgageunderline}>26 200 ₽ / мес</span>
          </div>
        </div>
      </div>
      <div className={s.pricewrapper}>
        <div className={s.pricetitle}>Стоимость без отделки</div>
        <div className={s.price}>
          {props?.layout?.price
            ? finishingOn
              ? separator(props?.layout?.price + props?.layout?.finishingPrice)
              : separator(props?.layout?.price)
            : ""}
          ₽
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.callback}>
        <span className={s.callbacktitle}>
          Связаться с менеджером по объекту
        </span>
        <span className={s.callbacktel}>+7 (3412) 209-519</span>
      </div>
      <div className={s.bottominfo}>
        Застройщик ООО «АСПЭК-Домстрой» <div>Проектные декларации размещены на сайте
        <span className={s.green}> наш.дом.рф</span></div>
        <div>Не является публичной офертой</div>
      </div>
    </div>
  );
}

export default InfoShort;
