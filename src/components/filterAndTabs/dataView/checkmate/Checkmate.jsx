/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
// import PropTypes from "prop-types";

import "./checkmate.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { FreeMode, Scrollbar } from "swiper";

import {Link} from "react-router-dom"

import { separator } from "../../../../helpers/stringsFun";

import s from "./checkmate.module.css"

function Checkmate(props) {

  return (
    <div className={`${s.checkmate} checkmate`}>
      <div className={s.container}>
        <Swiper
        className="swiper3"
        direction="horizontal"
        grabCursor
        slidesPerView="auto"
        freeMode
        scrollbar
        modules={[FreeMode, Scrollbar]}
        >
          <SwiperSlide>
            <div className={s.biggrid}>
              {props?.data?.map((project, projectIndex) => (
                projectIndex < 3 && <div className={s.projectline}>
                  {project?.buildings?.map((building) => (
                    <div className={s.buildingblock} key={building?.id}>
                      <div className={s.buildingcenter}>
                        <div className={s.levelcolumn}>
                          {building?.levels?.map((level) => (
                            <span className={s.levelnumber}>{level?.level}</span>
                          ))}
                        </div>
                        <div className={s.flatcolumn}>
                          {building?.levels?.map((level) => (
                            <div className={s.levelrow}>
                              {level?.flats?.map((flat) => (
                                <Link to={`/project/${project?.id}/layout/${flat?.id}`} className={s.flatinfo} data-status={flat?.status}>
                                  <div className={s.topinfo}>
                                    <div className={s.flatrooms}>{flat?.rooms}</div>
                                    <div className={s.flattype}>{flat?.type === "larder" ? "Кладовая" : "Квартира"}</div>
                                    {flat?.type !== "larder" && <div className={s.flatnumber}>№{flat?.flatNumber}</div>}
                                  </div>
                                  <div className={s.flatprice}>{flat?.status === "available" ? `${separator(flat?.price)} ₽`  : flat?.status === "booked" ? "Забронировано" : "Продано"}</div>
                                  <div className={s.bottominfo}>
                                    <div className={s.flatspace}>{flat?.space} м²</div>
                                    {flat?.type !== "larder" && <div className={s.flatmeterPrice}>{flat?.meterPrice} ₽ / м²</div>}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

Checkmate.propTypes = {
  data: []
};

Checkmate.defaultProps = {
  data: []
};

export default Checkmate