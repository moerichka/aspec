/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { FreeMode, Scrollbar } from "swiper";

import { separator } from "../../../../helpers/stringsFun";

import s from "./pannels.module.css";
import "./pannels.css";

function Pannels(props) {
  const [chosenFlat, setChosenFlat] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    window.innerWidth <= 768 ? setIsTablet(true) : setIsTablet(false);
  }, [windowWidth]);

  const clickHandler = (e, index) => {
    if (index === chosenFlat) {
      setChosenFlat(null);
    } else {
      setChosenFlat(index);
    }
  };

  return (
    <div className={`${s.pannels} pannels`}>
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
            {/* onClick={()=>{isTablet && chosenFlat && setChosenFlat(null)}} */}
            <div className={s.biggrid}>
              {props?.data?.map(
                (project, projectIndex) =>
                  projectIndex < 3 && (
                    <div className={s.projectline}>
                      {project?.buildings?.map((building, buildingIndex) => (
                        <>
                          <div className={s.buildingblock} key={building?.id}>
                            <div className={s.buildingnumber}>
                              {building?.number}
                            </div>
                            <div className={s.buildingcenter}>
                              <div className={s.levelcolumn}>
                                {building?.levels?.map((level) => (
                                  <span className={s.levelnumber}>
                                    {level?.level}
                                  </span>
                                ))}
                              </div>
                              <div className={s.flatcolumn}>
                                {building?.levels?.map((level, levelIndex) => (
                                  <div className={s.levelrow}>
                                    {level?.flats?.map((flat, flatIndex) => {
                                      const thisindex =
                                        (projectIndex + 1) * 1000 +
                                        (buildingIndex + 1) * 100 +
                                        (levelIndex + 1) * 10 +
                                        (flatIndex + 1);

                                      return (
                                        // eslint-disable-next-line no-unused-expressions
                                        <div
                                          className={s.flatwrapper}
                                          data-status={flat?.status}
                                          onClick={(e) => {
                                            isTablet &&
                                              clickHandler(e, thisindex);
                                          }}
                                          data-current={
                                            thisindex === chosenFlat
                                          }
                                        >
                                          <Link
                                            to={`/project/${project?.id}/layout/${flat?.id}`}
                                            className={s.flat}
                                          >
                                            {flat?.type === "larder"
                                              ? "Кл"
                                              : flat?.rooms}
                                          </Link>
                                          <div
                                            className={s.flatinfo}
                                            data-status={flat?.status}
                                            data-current={
                                              thisindex === chosenFlat
                                            }
                                          >
                                            <div className={s.topinfo}>
                                              <div className={s.flatrooms}>
                                                {flat?.rooms}
                                              </div>
                                              <div className={s.flattype}>
                                                {flat?.type === "larder"
                                                  ? "Кладовая"
                                                  : "Квартира"}
                                              </div>
                                              {flat?.type !== "larder" && (
                                                <div className={s.flatnumber}>
                                                  №{flat?.flatNumber}
                                                </div>
                                              )}
                                            </div>
                                            <div className={s.flatprice}>
                                              {separator(flat?.price)} ₽
                                            </div>
                                            <div className={s.bottominfo}>
                                              <div className={s.flatspace}>
                                                {flat?.space} м²
                                              </div>
                                              {flat?.type !== "larder" && (
                                                <div
                                                  className={s.flatmeterPrice}
                                                >
                                                  {flat?.meterPrice} ₽ / м²
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className={s.buildingnumber}>
                              {building?.number}
                            </div>
                          </div>
                          <div className={s.fakebuilding} />
                        </>
                      ))}
                    </div>
                  )
              )}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

Pannels.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
};

Pannels.defaultProps = {
  data: [],
};

export default Pannels;
