import React from "react";
import "./slider.css";

import ProgressiveImage from "react-progressive-graceful-image";
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
  };

  return (
    <div className="slider" style={style}>
      <Swiper
        navigation={props.navigation ? props.navigation : false}
        pagination={pagination}
        grabCursor={true}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="slider__swiper"
      >
        {props?.slides?.map((slide, index) => (
          <SwiperSlide key={index} style={style}>
            {slide.darkPannel && <div className="slider__darkPanel"></div>}
            {slide?.smallimage ? (
              <ProgressiveImage
                src={slide?.image}
                placeholder={slide?.smallimage}
              >
                {(src, loading) => (
                  <img
                    style={{
                      filter: loading ? "blur(10px)" : "blur(0px)",
                      transition: "0.3s",
                    }}
                    src={src}
                    alt=""
                    className="slider__slide-picture"
                  />
                )}
              </ProgressiveImage>
            ) : (
              <img
                src={slide?.image}
                alt=""
                className="slider__slide-picture"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
