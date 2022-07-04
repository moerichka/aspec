import React, { useState } from "react";
import "./helloSlider.css";
import { useNavigate } from "react-router-dom"

import sliderPicture from "../../assets/images/image25.jpg";
import sliderPictureSmall from "../../assets/images/image25small.jpg";
import sliderPicture2 from "../../assets/images/image12.jpg";
import sliderPicture2Small from "../../assets/images/image12small.jpg";

import Button from "../button";
import Slider from "../slider";

export default function HelloSlider() {
  const navigate = useNavigate()

  const slidesArray = [
    {image: sliderPicture, smallimage: sliderPictureSmall, darkPannel: true},
    {image: sliderPicture2, smallimage: sliderPicture2Small, darkPannel: true},
    {image: sliderPicture, smallimage: sliderPictureSmall, darkPannel: true},
    {image: sliderPicture2, smallimage: sliderPicture2Small, darkPannel: true},
    {image: sliderPicture, smallimage: sliderPictureSmall, darkPannel: true},
    {image: sliderPicture2, smallimage: sliderPicture2Small, darkPannel: true},
  ]

  return (
    <div className="helloSlider">
      <Slider slides={slidesArray} navigation={true}/>
      <div className="helloSlider__contentWrapper">
        <div className="helloSlider__content">
          <div className="helloSlider__titleWrapper">
            <h2 className="helloSlider__title">Долгожданный плюс</h2>
            <p className="helloSlider__desc">
              Старт продаж дома № 3, жилого комплекса «Плюс один»
            </p>
          </div>
          <Button
            content="Подробнее"
            bgColor="green"
            fz="14px"
            width="184px"
            height="61px"
            onClick={()=>navigate(`/`)}
          />
        </div>
      </div>
    </div>
  );
}
