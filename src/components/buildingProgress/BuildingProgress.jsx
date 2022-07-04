import React, { useEffect, useState } from "react";
import Select from "react-select";
import s from "./buildingProgress.module.css";
import "./buildingProgress.css";

import ProgressiveImage from "react-progressive-graceful-image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import { FreeMode, Scrollbar, Mousewheel } from "swiper";

import { createOptions, getUnique, sortDates } from "../../helpers/arrayFun";
import {
  dateConverterToQuarter,
  dateConverterToDayMonth,
  dateConverterToYear,
} from "../../helpers/dateFun";

function BuildingProgress(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [data, setData] = useState(props.project);
  const [chosenDate, setChosenDate] = useState(null);
  const [chosenHouse, setChosenHouse] = useState(null);

  useEffect(() => {
    setData(props.project);
  }, [props.project]);

  let buildingsArray = data?.buildings;
  const dateArrayValues = buildingsArray?.map((building) => building?.datePic);
  const dateArrayTitles = dateArrayValues?.map((elem) =>
    dateConverterToQuarter(elem)
  );

  let houseOptions = createOptions(buildingsArray, "number"); // создание опцеий для комбобокса по датам
  let dateOptions = createOptions(
    dateArrayTitles,
    false,
    false,
    dateArrayValues
  ); // создание опцеий для комбобокса по домам

  houseOptions?.push({ value: "all", label: "Все" });
  dateOptions?.push({ value: "all", label: "Все" });

  dateOptions = sortDates(dateOptions);

  chosenHouse &&
    chosenHouse.value !== "all" &&
    (buildingsArray = buildingsArray?.filter(
      (elem) => elem.number === chosenHouse.value
    ));
  chosenDate &&
    chosenDate.value !== "all" &&
    (buildingsArray = buildingsArray?.filter(
      (elem) => elem.datePic === chosenDate.value
    ));

  return (
    <div className="buildingProgress">
      <div className={`container ${s.container}`}>
        <h2 className="h2-title">Ход строительства</h2>
        <div className={s.selectors}>
          <div className={s.selector}>
            <div className={s.selectortitle}>Выберите месяц и год</div>
            <Select
              placeholder="Выберите..."
              options={dateOptions}
              classNamePrefix="buildingProgress"
              className={`buildingProgress__select ${s.dropboxleft}`}
              defaultValue={chosenDate}
              value={chosenDate}
              onChange={(selected) => {
                setChosenDate(selected);
              }}
            />
          </div>
          <div className={s.selector}>
            <div className={s.selectortitle}>Выберите дом / корпус</div>
            <Select
              placeholder="Выберите..."
              options={houseOptions}
              classNamePrefix="buildingProgress"
              className={`buildingProgress__select ${s.dropboxright}`}
              defaultValue={chosenHouse}
              value={chosenHouse}
              onChange={(selected) => {
                setChosenHouse(selected);
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className={s.scrollerwrapper}> */}
      <Swiper
        className=""
        direction={"horizontal"}
        // spaceBetween={30}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={{ dragSize: 100 }}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
      >
        <SwiperSlide>
          {/* <div className={s.scroller}> */}
          {buildingsArray?.map((elem) => (
            <div className={s.housewrapper} key={elem?.id}>
              <div className={s.amountpics}>{elem?.images?.length} фото</div>
              <div className={s.housedatewrapper}>
                <div className={s.housedate}>
                  {dateConverterToDayMonth(elem?.datePic)}
                </div>
                <div className={s.houseyear}>
                  {dateConverterToYear(elem?.datePic)}
                </div>
              </div>
              <div className={s.darkPanel}></div>
              {/* {elem?.smallimage ? (
                <ProgressiveImage
                  src={elem?.image}
                  placeholder={elem?.smallimage}
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
                  src={elem?.image}
                  alt=""
                  className="slider__slide-picture"
                />
              )} */}
              <img
                src={`${PF}${elem?.images[0]}`}
                alt=""
                className={s.houseimg}
              />
            </div>
          ))}
          {/* </div> */}
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
    </div>
  );
}

export default BuildingProgress;
