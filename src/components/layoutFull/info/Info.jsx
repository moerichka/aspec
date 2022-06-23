import React, { useState } from "react";
import s from "./info.module.css";
import { Link } from "react-router-dom";
import Button from "../../button/Button";

import { dateConverterToQuarter } from "../../../helpers/dateFun";
import { separator } from "../../../helpers/stringsFun";

function Info(props) {
  const [finishingOn, setFinishingOn] = useState(false);

  return (
    <div className={s.info}>
      <div className={s.topwrapper}>
        <h2 className={s.title}>
          {props?.layout?.name} {props?.layout?.space} м²
        </h2>
        <div className={s.iconmark}>
          <span className="icon-mark"></span>
        </div>
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
      <div className={s.finishing}>
        <div
          className={`${s.toggler} ${finishingOn ? s.togglerOn : ""}`}
          onClick={() => {
            setFinishingOn((prev) => !prev);
          }}
        >
          <div className={s.togglerpoint}></div>
        </div>
        <span
          onClick={() => {
            setFinishingOn((prev) => !prev);
          }}
        >
          Добавить отделку{" "}
          <span className={s.togglerbold}>
            <span className={s.disappear}>стоимость</span> +{" "}
            {props?.layout?.finishingPrice} ₽
          </span>
        </span>
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
      <div className={s.price}>
        {props?.layout?.price
          ? finishingOn
            ? separator(props?.layout?.price + props?.layout?.finishingPrice)
            : separator(props?.layout?.price)
          : ""}
        ₽
      </div>
      <div className={s.buttons}>
        <Button
          content={"Консультация"}
          bgColor={"transparent"}
          width={"155px"}
        />
        <Button content={"Забронировать"} bgColor={"blue"} width={"155px"} />
        <Link to={""}>
          <div className={s.share}>
            <span className="icon-share"></span>
          </div>
        </Link>
        <div className={s.pdf}>
          <Link to={""}>Скачать PDF</Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
