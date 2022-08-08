/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import sliderPicture from "../../assets/images/image27.jpg";
import sliderPictureSmall from "../../assets/images/image27small.jpg";
import sliderPicture3 from "../../assets/images/image26.jpg";
import sliderPicture3Small from "../../assets/images/image26small.jpg";
import Slider from "../slider";

import s from "./sliderAndNav.module.css";
import "./sliderAndNav.css";

function SliderAndNav(props) {
  const slidesArray = [
    {id: 0,image: sliderPicture, imageSmall: sliderPictureSmall, darkPannel: true},
    {id: 1,image: sliderPicture3, imageSmall: sliderPicture3Small, darkPannel: true},
    {id: 2,image: sliderPicture, imageSmall: sliderPictureSmall, darkPannel: true},
    {id: 3,image: sliderPicture3, imageSmall: sliderPicture3Small, darkPannel: true},
    {id: 4,image: sliderPicture, imageSmall: sliderPictureSmall, darkPannel: true},
    {id: 5,image: sliderPicture3, imageSmall: sliderPicture3Small, darkPannel: true},
  ]

  return (
    <div className="sliderAndNav">
      <div className={s.topBar}>
        <Slider slides={slidesArray} maxHeight="25vw" minHeight="400px" />
        <p className={s.desc}>
          <Link to="/" className="dash-nav__link">
            Главная
          </Link>{" "}
          /{" "}
          <Link to="/projects" className="dash-nav__link">
            Проекты
          </Link>{" "}
          / {props?.project?.type} {props?.project?.name}
        </p>
        <h2 className={s.title}>{props?.project?.name}</h2>
      </div>
      <div className={s.navBar}>
        <div className={`${s.container} container`}>
          <ul className={s.nav}>
            <div
              onClick={() => {
                props?.refs?.about?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <li className={s.navItem}>О проекте</li>
            </div>
            <div
              onClick={() => {
                props?.refs?.genplan?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <li className={s.navItem}>Генплан</li>
            </div>
            <div
              onClick={() => {
                props?.refs?.infrastructure?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <li className={s.navItem}>Инфраструктура</li>
            </div>
            <div
              onClick={() => {
                props?.refs?.benefits?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <li className={s.navItem}>Преимущества</li>
            </div>
            <div
              onClick={() => {
                props?.refs?.layouts?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <li className={s.navItem}>Планировки</li>
            </div>
            <div
              onClick={() => {
                props?.refs?.payment?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <li className={s.navItem}>Способы покупки</li>
            </div>
            <div
              onClick={() => {
                props?.refs?.progress?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <li className={s.navItem}>Ход строительства</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

SliderAndNav.propTypes = {
  refs: PropTypes.object,
  project: PropTypes.object
};

SliderAndNav.defaultProps = {
  refs: {},
  project: {}
};

export default SliderAndNav;
