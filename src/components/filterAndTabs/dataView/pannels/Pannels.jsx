import React, {useState, useEffect} from "react";
import s from "./pannels.module.css";
import "./pannels.css";

import { separator } from "../../../../helpers/stringsFun";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { FreeMode, Scrollbar } from "swiper";

function Pannels(props) {
  const [chosenFlat, setChosenFlat] = useState(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);
  console.log("anime");

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    window.innerWidth <= 768 ? setIsTablet(true) : setIsTablet(false);
  }, [windowWidth]);
  console.log('chosenFlat: ', chosenFlat);

  const clickHandler = (e, index)=>{
    if (index === chosenFlat) {
      setChosenFlat(null)
    }else{
      setChosenFlat(index)
    }
  }

  return (
    <div className={`${s.pannels} pannels`}>
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
            {/* onClick={()=>{isTablet && chosenFlat && setChosenFlat(null)}} */}
            <div className={s.biggrid} > 
              {props?.data?.map((project, projectIndex) => (
                <div className={s.projectline}>
                  {project?.buildings?.map((building, buildingIndex) => (
                    <>
                    <div className={s.buildingblock} key={buildingIndex}>
                      <div className={s.buildingnumber}>{building?.number}</div>
                      <div className={s.buildingcenter}>
                        <div className={s.levelcolumn}>
                          {building?.levels?.map((level) => (
                            <span className={s.levelnumber}>{level?.level}</span>
                          ))}
                        </div>
                        <div className={s.flatcolumn}>
                          {building?.levels?.map((level, levelIndex) => (
                            <div className={s.levelrow}>
                              {level?.flats?.map((flat, flatIndex) => {
                                const thisindex = ((projectIndex + 1) * 1000) + ((buildingIndex + 1)* 100) + ((levelIndex + 1)*10) + (flatIndex + 1)

                                return (
                                <div className={s.flatwrapper} data-status={flat?.status} onClick={(e)=>{isTablet && clickHandler(e, thisindex)}} data-currnet={thisindex === chosenFlat}>
                                  <div className={s.flat}>
                                    {flat?.type === "larder" ? "Кл" : flat?.rooms}
                                  </div>
                                  <div className={s.flatinfo} data-status={flat?.status} data-currnet={thisindex === chosenFlat}>
                                    <div className={s.topinfo}>
                                      <div className={s.flatrooms}>{flat?.rooms}</div>
                                      <div className={s.flattype}>{flat?.type === "larder" ? "Кладовая" : "Квартира"}</div>
                                      {flat?.type !== "larder" && <div className={s.flatnumber}>№{flat?.flatNumber}</div>}
                                    </div>
                                    <div className={s.flatprice}>{separator(flat?.price)} ₽</div>
                                    <div className={s.bottominfo}>
                                      <div className={s.flatspace}>{flat?.space} м²</div>
                                      {flat?.type !== "larder" && <div className={s.flatmeterprice}>{flat?.meterprice} ₽ / м²</div>}
                                    </div>
                                  </div>
                                </div>
                              )})}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={s.buildingnumber}>{building?.number}</div>
                    </div>
                    <div className={s.fakebuilding}></div>
                    </>
                  ))}
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Pannels;
