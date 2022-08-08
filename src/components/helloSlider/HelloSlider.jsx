import React from "react";
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
    {id: 0,image: sliderPicture, imageSmall: sliderPictureSmall, darkPannel: true},
    {id: 1,image: sliderPicture2, imageSmall: sliderPicture2Small, darkPannel: true},
    {id: 2,image: sliderPicture, imageSmall: sliderPictureSmall, darkPannel: true},
    {id: 3,image: sliderPicture2, imageSmall: sliderPicture2Small, darkPannel: true},
    {id: 4,image: sliderPicture, imageSmall: sliderPictureSmall, darkPannel: true},
    {id: 5,image: sliderPicture2, imageSmall: sliderPicture2Small, darkPannel: true},
  ]

  return (
    <div className="helloSlider">
      <Slider slides={slidesArray} navigation/>
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
            BGColor="green"
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
