import React from "react";
import s from "./sliderAndNav.module.css";
import "./sliderAndNav.css";

import { Link } from "react-router-dom";

import sliderPicture from "../../assets/images/image27.jpg";
import sliderPicture3 from "../../assets/images/image26.jpg";
import Slider from "../slider";

function SliderAndNav(props) {
  const slidesArray = [
    { image: sliderPicture, darkPannel: true },
    { image: sliderPicture3, darkPannel: true },
    { image: sliderPicture, darkPannel: true },
    { image: sliderPicture3, darkPannel: true },
    { image: sliderPicture, darkPannel: true },
    { image: sliderPicture3, darkPannel: true },
  ];

  return (
    <div className="sliderAndNav">
      <div className={s.topBar}>
        <Slider slides={slidesArray} maxHeight={"25vw"} minHeight={"400px"} />
        <p className={s.desc}>
          <Link to="/" className="dashnav__link">
            Главная
          </Link>{" "}
          /{" "}
          <Link to="/projects" className="dashnav__link">
            Проекты
          </Link>{" "}
          / {props?.project?.type} {props?.project?.name}
        </p>
        <h2 className={s.title}>{props?.project?.name}</h2>
      </div>
      <div className={s.navBar}>
        <div className={`${s.container} container`}>
          <ul className={s.nav}>
            <a href="#about">
              <li className={s.navItem}>О проекте</li>
            </a>
            <a href="#genplan">
              <li className={s.navItem}>Генплан</li>
            </a>
            <a href="#infrastructure">
              <li className={s.navItem}>Инфраструктура</li>
            </a>
            <a href="#benefits">
              <li className={s.navItem}>Преимущества</li>
            </a>
            <a href="#layouts">
              <li className={s.navItem}>Планировки</li>
            </a>
            <a href="#payment">
              <li className={s.navItem}>Способы покупки</li>
            </a>
            <a href="#progress">
              <li className={s.navItem}>Ход строительства</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SliderAndNav;
