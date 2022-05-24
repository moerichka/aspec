import React from "react";
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
      <div className="sliderAndNav__topBar">
          <Slider slides={slidesArray} maxHeight={"25vw"} minHeight={"400px"} />
          <p className="sliderAndNav__desc">
            главная/ проекты/ {props.project.type} {props.project.name}
          </p>
          <h2 className="sliderAndNav__title">{props.project.name}</h2>
      </div>
      <div className="sliderAndNav__navBar">
          <div className="sliderAndNav__container container">
             <ul className="sliderAndNav__nav">
                 <a href="#about"><li className="sliderAndNav__navItem">О проекте</li></a>
                 <a href="#genplan"><li className="sliderAndNav__navItem">Генплан</li></a>
                 <a href="#infrastructure"><li className="sliderAndNav__navItem">Инфраструктура</li></a>
                 <a href="#benefits"><li className="sliderAndNav__navItem">Преимущества</li></a>
                 <a href="#layouts"><li className="sliderAndNav__navItem">Планировки</li></a>
                 <a href="#payment"><li className="sliderAndNav__navItem">Способы покупки</li></a>
                 <a href="#progress"><li className="sliderAndNav__navItem">Ход строительства</li></a>
             </ul>
          </div>
      </div>
    </div>
  );
}

export default SliderAndNav;
