import React from "react";
import PropTypes from "prop-types";

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
    renderBullet(index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  const style = {
    maxHeight: props?.maxHeight ? props?.maxHeight : "",
    minHeight: props?.minHeight ? props?.minHeight : "",
  };

  return (
    <div className="slider" style={style}>
      <Swiper
        navigation={props?.navigation ? props?.navigation : false}
        pagination={pagination}
        grabCursor
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="slider__swiper"
      >
        {props?.slides?.map((slide) => (
          <SwiperSlide key={slide?.id} style={style}>
            {slide?.darkPannel && <div className="slider__darkPanel" />}
            {slide?.imageSmall ? (
              <ProgressiveImage
                src={slide?.image}
                placeholder={slide?.imageSmall}
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

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      darkPannel: PropTypes.bool,
      image: PropTypes.oneOfType([
        PropTypes.shape({
          image: PropTypes.string,
          imageSmall: PropTypes.string,
        }),
        PropTypes.string,
      ]),
      imageSmall: PropTypes.string
    })
  ),
  navigation: PropTypes.bool,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
};

Slider.defaultProps = {
  slides: [],
  navigation: false,
  maxHeight: "",
  minHeight: "",
};

export default Slider;
