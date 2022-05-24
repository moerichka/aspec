import React from "react";
import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider(props) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  const style = {
    maxHeight: props.maxHeight ? props.maxHeight : "",
    minHeight: props.minHeight ? props.minHeight : "",
  }

  return (
    <div className="slider" style={style}>
      <Swiper
        navigation={props.navigation ? props.navigation : false}
        pagination={pagination}
        modules={[Autoplay, Navigation, Pagination]}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        className="slider__swiper"
      >
        {props?.slides?.map((slide, index) => (
          <SwiperSlide key={index} style={style}>
            {slide.darkPannel && <div className="slider__darkPanel"></div>}
            <img src={slide.image} alt="" className="slider__slide-picture" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
