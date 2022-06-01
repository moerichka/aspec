import React from "react";
import PropTypes from "prop-types";
import s from "./projectAbout.module.css";
import "./projectAbout.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/scrollbar";

import { EffectCreative, Scrollbar } from "swiper";

function ProjectAbout(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={`projectAbout ${props?.bgWhite ? "projectAbout-white" : ""}`}>
      <div className={`container ${s.container}`}>
        <div className={s.textAndTitleWrapper}>
          <h2 className="h2-title">{props?.title}</h2>
          <div className={s.textWrapper}>
            {props?.text?.map((paragrapgh, index) => (
              <p key={index}>{paragrapgh}</p>
            ))}
          </div>
        </div>
        <Swiper
          spaceBetween={10}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-70%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          scrollbar={{ draggable: true }}
          modules={[EffectCreative, Scrollbar]}
          className={s.swiper}
        >
          {props?.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={`${PF}${image}`} alt="" className={s.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

ProjectAbout.propTypes = {
  title: PropTypes.string,
  text: PropTypes.array,
  images: PropTypes.array,
};

ProjectAbout.defaultProps = {
  title: "О проекте",
  text: [
    `Расположение комплекса вблизи хвойного леса настраивает на гармонию с природой. 5 домов с огороженной территорией предполагают приватную атмосферу, где новоселам будет комфортно жить вне городской суеты. В качестве ярких акцентов желтым выделены лоджии с панорамным остеклением.`,
    `Первый дом комплекса будет 17-этажным и иметь два подъезда. Во внешнем облике используется кирпич различных оттенков, образующих градиентные переходы на фасаде. В качестве ярких акцентов желтым выделены лоджии с панорамным остеклением.`,
  ],
  images: [],
};

export default ProjectAbout;
