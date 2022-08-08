/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";

import ProgressiveImage from "react-progressive-graceful-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { dateConverterToQuarter } from "../../helpers/dateFun";
import { getFlatAmount, separator } from "../../helpers/stringsFun";

import s from "./projectLayout.module.css";
import "./projectLayout.css";

function ProjectLayout(props) {
  const [isFavored, setIsFavored] = useState(props?.room?.favored);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { projectId } = useParams();

  const pagination = {
    clickable: true,
    renderBullet(index, className) {
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
          {isFavored ? (
            <div
              className={s.topright}
              data-favorite="true"
              onClick={() => setIsFavored((prev) => !prev)}
            >
              <span className="icon-mark-fill" />
            </div>
          ) : (
            <div
              className={s.topright}
              onClick={() => setIsFavored((prev) => !prev)}
            >
              <span className="icon-mark" />
            </div>
          )}
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {props?.flat?.layouts?.map((elem, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index}>
                <Link to={`/project/${projectId}/layout/${props.flat.id}`}>
                  <div className={s.imgwrapper}>
                    {elem.imageSmall ? (
                      <ProgressiveImage
                        src={`${PF}${elem?.image}`}
                        placeholder={`${PF}${elem?.imageSmall}`}
                      >
                        {(src, loading) => (
                          <img
                            style={{
                              filter: loading ? "blur(10px)" : "blur(0px)",
                              transition: "0.3s",
                            }}
                            src={src}
                            alt=""
                            className={s.img}
                          />
                        )}
                      </ProgressiveImage>
                    ) : elem?.image ? (
                      <img
                        src={`${PF}${elem?.image}`}
                        alt=""
                        className={s.img}
                      />
                    ) : (
                      <img src={`${PF}${elem}`} alt="" className={s.img} />
                    )}
                    {/* <img src={`${PF}${elem}`} alt="" className={s.img} width="1" height="1"/> */}
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
            <span className="icon-home" />
            <div className={s.opendate}>
              Срок сдачи {dateConverterToQuarter(props.thisProject.openDate)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectLayout.propTypes = {
  room: PropTypes.object,
  thisProject: PropTypes.object,
  flat: PropTypes.object
};

ProjectLayout.defaultProps = {
  room: {},
  thisProject: {},
  flat: {}
};

export default ProjectLayout;
