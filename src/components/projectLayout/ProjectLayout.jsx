import React from "react";
import s from "./projectLayout.module.css";
import "./projectLayout.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link, useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { dateConverterToQuarter } from "../../helpers/dateFun";
import { getFlatAmount, separator } from "../../helpers/stringsFun";

function ProjectLayout(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {projectId} = useParams()

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${`${className}`}></span>`;
    },
  };

  return (
    <div className="projectLayout">
      <div className={s.container}>
        <div className={s.topwrapper}>
          <div className={s.topleft}>
            <div className={s.notifications}>
              {props.thisProject.discount && (
                <div className={`${s.notification} ${s.yellow}`}>
                  Скидка {props.thisProject.discount}
                </div>
              )}
              {props.thisProject.newShapes && (
                <div className={s.notification}>Новые корпуса</div>
              )}
            </div>
            <div className={s.amount}>{getFlatAmount(props.flat.amount)}</div>
          </div>
          <div className={s.topright}>
            <span className="icon-mark"></span>
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {props.flat?.layouts?.map((elem, index) => (
              <SwiperSlide key={index}>
                <Link to={`/project/${projectId}/layout/${props.flat.id}`}>
                  <div className={s.imgwrapper}>
                    <img src={`${PF}${elem}`} alt="" className={s.img} />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.infowrapper}>
          <div className={s.price}>от {separator(props.flat.price)} ₽</div>
          <div className={s.layoutname}>Проект {props.thisProject.name}</div>
          <div className={s.propertysWrapper}>
            <div className={s.propertywrapper}>
              <span className={s.property}>Тип</span>
              <div className={s.value}>{props.flat.name}</div>
            </div>
            <div className={s.propertywrapper}>
              <span className={s.property}>Площадь</span>
              <div className={s.value}>{props.flat.space} м²</div>
            </div>
            <div className={s.propertywrapper}>
              <span className={s.property}>Дом</span>
              <div className={s.value}>{props.flat.house}</div>
            </div>
          </div>
          <div className={s.datewrapper}>
            <span className="icon-home"></span>
            <div className={s.opendate}>
              Срок сдачи {dateConverterToQuarter(props.thisProject.openDate)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectLayout;
