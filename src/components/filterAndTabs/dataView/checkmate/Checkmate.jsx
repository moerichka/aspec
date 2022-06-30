import React from 'react'
import s from "./checkmate.module.css"
import "./checkmate.css"

import { separator } from "../../../../helpers/stringsFun";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { FreeMode, Scrollbar } from "swiper";

import {useNavigate} from "react-router-dom"

function Checkmate(props) {
  const navigate = useNavigate()

  return (
    <div className={`${s.checkmate} checkmate`}>
      <div className={s.container}>
        <Swiper
        className="swiper3"
        direction={"horizontal"}
        grabCursor={true}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={ true}
        modules={[FreeMode, Scrollbar]}
        >
          <SwiperSlide>
            <div className={s.biggrid}>
              {props?.data?.map((project, projectIndex) => (
                projectIndex < 3 && <div className={s.projectline}>
                  {project?.buildings?.map((building, buildingIndex) => (
                    <div className={s.buildingblock} key={buildingIndex}>
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
                                <div className={s.flatinfo} data-status={flat?.status} onClick={()=>navigate(`/project/${project?.id}/layout/${flat?.id}`)}>
                                  <div className={s.topinfo}>
                                    <div className={s.flatrooms}>{flat?.rooms}</div>
                                    <div className={s.flattype}>{flat?.type === "larder" ? "Кладовая" : "Квартира"}</div>
                                    {flat?.type !== "larder" && <div className={s.flatnumber}>№{flat?.flatNumber}</div>}
                                  </div>
                                  <div className={s.flatprice}>{flat?.status === "available" ? `${separator(flat?.price)} ₽`  : "Забронировано"}</div>
                                  <div className={s.bottominfo}>
                                    <div className={s.flatspace}>{flat?.space} м²</div>
                                    {flat?.type !== "larder" && <div className={s.flatmeterprice}>{flat?.meterprice} ₽ / м²</div>}
                                  </div>
                                </div>
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

export default Checkmate