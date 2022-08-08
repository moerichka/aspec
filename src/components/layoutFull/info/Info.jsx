/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Button from "../../button/Button";
import Share from "../../share/Share";

import { dateConverterToQuarter } from "../../../helpers/dateFun";
import { separator } from "../../../helpers/stringsFun";

import QuestionForm from "../../questionForm";

import s from "./info.module.css";

function Info(props) {
  const [isFavored, setIsFavored] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={s.info}>
      <div className={s.topwrapper}>
        <h2 className={s.title}>
          {props?.layout?.name} {props?.layout?.space} м²
        </h2>
        {isFavored ? (
          <div
            className={s.iconmark}
            data-favorite="true"
            onClick={() => setIsFavored((prev) => !prev)}
          >
            <span className="icon-mark-fill" />
          </div>
        ) : (
          <div
            className={s.iconmark}
            onClick={() => setIsFavored((prev) => !prev)}
          >
            <span className="icon-mark" />
          </div>
        )}
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
        <span className={s.elemtitle}>Отделка</span>
        <span className={s.elemvalue}>+ {props?.layout?.finishingPrice} ₽</span>
      </div>
      <div className={s.line} />
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
        {separator(props?.layout?.price)}
        ₽
      </div>
      <div className={s.buttons}>
        <Button content="Консультация" BGColor="transparent" width="155px" onClick={()=> setIsPopupOpen(true) }/>
        <Button content="Забронировать" BGColor="blue" width="155px" />
        <div className={s.share}>
          <Share />
        </div>
        <div className={s.pdf}>
          <Link
            to={`/project/${props?.project?.id}/layout/${props?.layout?.id}/pdf`}
            target="_blank"
          >
            Скачать PDF
          </Link>
        </div>
      </div>
      <div className={s.questionFormWrapper} data-is-open={isPopupOpen}>
        <div className={s.questionForm}>
          <QuestionForm isPopup closeClick={setIsPopupOpen}/> 
        </div>
        <div className={s.background} onClick={()=>setIsPopupOpen(false)}/>
      </div>
    </div>
  );
}

Info.propTypes = {
  project: PropTypes.object,
  layout: PropTypes.object,
  selectedLevel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  amountOfLevels: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Info.defaultProps = {
  project: {},
  layout: {},
  selectedLevel: 0,
  amountOfLevels: 1,
};

export default Info;
