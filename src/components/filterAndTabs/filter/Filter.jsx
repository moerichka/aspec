import React, { useState, useEffect } from "react";
// import "./filter.css";
import s from "./filter.module.css";
import "react-tabs/style/react-tabs.css";
import PropTypes from "prop-types";
import Select from "react-select";
import { DateTime } from "luxon";

import CustomRange from "../../customRange";
import CustomSelector from "../../customSelector";
import Button from "../../button";
import HouseCardGrid from "../houseCardGrid";
import DataView from "../dataView";

import { createOptions, getUnique, sortDates } from "../../../helpers/arrayFun";
import { dateConverterToQuarter } from "../../../helpers/dateFun";
import { flats, larders, parkings } from "../../../data";
import { Link } from "react-router-dom";

const Filter = (props) => {
  const [filtredData, setFiltredData] = useState(props.data);
  const [isPanel, setIsPanel] = useState(true);
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [filterCounter, setFilterCounter] = useState(0);
  const [chosenFlat, setChosenFlat] = useState([]);
  const [chosenDistrict, setChosenDistrict] = useState(null);
  const [chosenProject, setChosenProject] = useState(null);
  const [chosenDate, setChosenDate] = useState(null);
  const [chosenHouse, setChosenHouse] = useState(null);
  const [rangeValuesPrice, setRangeValuesPrice] = useState([]);
  const [rangeValuesSpace, setRangeValuesSpace] = useState([]);
  const [buildedStatus, setBuildedStatus] = useState(0); // 1 - активные; 2 - завершенные; 0 - не выбраны

  const datesArray = getUnique(props.data, "openDate"); // получение уникальных дат

  const datesArrayCoverted = datesArray.map((elem) =>
    dateConverterToQuarter(elem)
  ); // формирование названий дат с кварталами

  let dateOptions = createOptions(datesArrayCoverted, false, true, datesArray); // создание опцеий для комбобокса по датам

  dateOptions = sortDates(dateOptions);

  const houseOptions = createOptions(props.data[4]?.buildings, "number");
  const districtOptions = createOptions(props.data, "district");
  const projectOptions = createOptions(props.data, "name");

  let minPrice = 0;
  let maxPrice = 0;
  let minSpace = 0;
  let maxSpace = 0;

  if (props?.easyFilter) {
    minPrice = Math.min(...getUnique(props.data, "minPrice"));
    maxPrice = Math.max(...getUnique(props.data, "minPrice"));
    minSpace = Math.min(...getUnique(props.data, "space"));
    maxSpace = Math.max(...getUnique(props.data, "space"));
  } else {
    minPrice = Math.min(...getUnique(flats, "price"));
    maxPrice = Math.max(...getUnique(flats, "price"));
    minSpace = Math.min(...getUnique(flats, "space"));
    maxSpace = Math.max(...getUnique(flats, "space"));
  }

  useEffect(() => {
    setRangeValuesPrice([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    setRangeValuesSpace([minSpace, maxSpace]);
  }, [minSpace, maxSpace]);

  useEffect(() => {
    setFiltredData(props.data);
  }, [props.data]);

  useEffect(() => {
    setFiltredData(filteredArray);
  }, [buildedStatus, isFilterActive, filterCounter]);

  useEffect(() => {
    document.body.style.overflow = isFilterShown ? "hidden" : "unset";
  }, [isFilterShown]);

  let filteredArray = [...props.data];

  buildedStatus &&
    (filteredArray = filteredArray.filter((elem) => {
      const now = DateTime.now().toMillis();
      const openDate = DateTime.fromISO(elem.openDate).toMillis();
      const result = now > openDate;
      return buildedStatus === 1 ? !result : result;
    }));
  if (isFilterActive) {
    // easyFilter
    // PRICE
    rangeValuesPrice &&
      props?.easyFilter &&
      (filteredArray = filteredArray?.filter(
        (elem) =>
          elem?.minPrice >= rangeValuesPrice[0] &&
          elem?.minPrice <= rangeValuesPrice[1]
      ));
      // console.log('PRICE: ', filteredArray);
    // SPACE
    rangeValuesSpace &&
      props?.easyFilter &&
      (filteredArray = filteredArray?.filter(
        (elem) =>
          elem?.space >= rangeValuesSpace[0] &&
          elem?.space <= rangeValuesSpace[1]
      ));
    // /easyFilter
    // PRICE
    // rangeValuesPrice &&
    //   !props?.easyFilter &&
    //   (filteredArray = filteredArray?.filter((project) =>
    //     project?.buildings?.filter((building) =>
    //       building?.levels?.filter((level) =>
    //         level?.flats?.filter(
    //           (flat) =>
    //             flat?.price >= rangeValuesPrice[0] &&
    //             flat?.price <= rangeValuesPrice[1]
    //         )
    //       )
    //     )
    //   ));
      // console.log('SPACE: ', filteredArray);
    // SPACE
    // rangeValuesSpace &&
    //   !props?.easyFilter &&
    //   (filteredArray = filteredArray?.filter(
    //     (elem) =>
    //       elem?.space >= rangeValuesSpace[0] &&
    //       elem?.space <= rangeValuesSpace[1]
    //   ));
    // DISTRICT
    chosenDistrict &&
      (filteredArray = filteredArray?.filter(
        (elem) => elem.district === chosenDistrict.value
      ));
      // console.log('DISTRICT: ', filteredArray);
    // HOUSE
    chosenHouse &&
      (filteredArray = filteredArray?.filter((elem) =>
        elem.buildings?.filter(
          (house) => house?.number === chosenDistrict.value
        )
      ));
      // console.log('HOUSE: ', filteredArray);
    // PROJECT
    chosenProject &&
      (filteredArray = filteredArray?.filter(
        (elem) => elem.name === chosenProject.value
      ));
      // console.log('PROJECT: ', filteredArray);
    // DATE
    chosenDate &&
      (filteredArray = filteredArray?.filter(
        (elem) => elem.openDate === chosenDate.value
      ));
      // console.log('DATE: ', filteredArray);
    // ROOMS
    chosenFlat &&
      props?.filters?.includes("flatInput") &&
      (filteredArray = filteredArray?.filter((elem) => {
        let result = [];
        chosenFlat.forEach((number) =>
          elem.flats.forEach((flat) => {
            number === 3
              ? result.push(flat?.type >= number ? true : false)
              : result.push(flat?.type === number ? true : false);
          })
        );
        return result.includes(true);
      }));
  }
  // console.log('ROOMS: ', filteredArray);

  const buildedStatusToggler = (number) => {
    setBuildedStatus((prev) => (prev === number ? 0 : number));
  };

  const addRemoveFlat = (number) => {
    if (chosenFlat.includes(number)) {
      setChosenFlat((prev) => prev.filter((elem) => elem !== number));
    } else {
      setChosenFlat((prev) => [...prev, number]);
    }
  };

  const filterToggler = (isOn) => {
    if (!isOn) {
      setChosenFlat([]);
      setChosenDistrict(null);
      setChosenProject(null);
      setChosenDate(null);
      setChosenHouse(null);
      setRangeValuesPrice([minPrice, maxPrice]);
      setRangeValuesSpace([minSpace, maxSpace]);
    }
    setIsFilterActive(isOn);
    setFilterCounter((prev) => prev + 1);
  };

  const propsArray = {
    isPanel,
    setIsPanel,
    buildedStatus,
    setBuildedStatus,
    buildedStatusToggler,
  };

  return (
    <>
      <div className={s.filter}>
        <div className={`${s.container} container`}>
          <div
            className={`${s.inputContainer} ${
              isFilterShown && s.inputContainerShown
            }`}
          >
            <div className={s.popupTopWrapper}>
              <div className={s.popupState}><Link to="/" className="dashnav__link">Главная</Link> / {props.tab}</div>
              <div className={s.popupTitleWrapper}>
                <h6 className={s.popupTitle}>Фильтры</h6>
                <div
                  className={s.popupClose}
                  onClick={() => setIsFilterShown(false)}
                >
                  Закрыть
                  <span className={`${s.popupCloseIcon} icon-cancel`}></span>
                </div>
              </div>
            </div>
            <div className={s.inputs}>
              {props?.filters?.map((filter, index) => (
                <>
                  {filter === "districtInput" && (
                    <div
                      className={`${s.inputWrapper} ${s.inputDistrict}`}
                      key={index}
                    >
                      <label htmlFor={s.inputLabel}>Район</label>
                      <CustomSelector
                        options={districtOptions}
                        defaultValue={chosenDistrict}
                        value={chosenDistrict}
                        setChosen={setChosenDistrict}
                        bgColor={props.inputbgColor}
                        fontSize={"18px"}
                        fontFamily={"Montserrat-Medium"}
                        padding={"13px 0 13px 19px"}
                        optionPadding={"11px 12px"}
                        optionFontFamily={"Montserrat-Regular"}
                        placeholder={"Все"}
                      />
                    </div>
                  )}
                  {filter === "projectInput" && (
                    <div
                      className={`${s.inputWrapper} ${s.inputProject}`}
                      key={index}
                    >
                      <label htmlFor={s.inputLabel}>Проект</label>
                      <CustomSelector
                        options={projectOptions}
                        defaultValue={chosenProject}
                        value={chosenProject}
                        setChosen={setChosenProject}
                        bgColor={props.inputbgColor}
                        fontSize={"18px"}
                        fontFamily={"Montserrat-Medium"}
                        padding={"13px 0 13px 19px"}
                        optionPadding={"11px 12px"}
                        optionFontFamily={"Montserrat-Regular"}
                        placeholder={"Все"}
                      />
                    </div>
                  )}
                  {filter === "spaceInput" && (
                    <div
                      className={`${s.inputWrapper} ${s.inputSpace}`}
                      key={index}
                    >
                      <label htmlFor={s.inputLabel}>Площадь, м²</label>
                      <CustomRange
                        MIN={minSpace}
                        MAX={maxSpace}
                        STEP={1}
                        rangeValues={rangeValuesSpace}
                        onChange={setRangeValuesSpace}
                        bgColor={props?.inputbgColor}
                      />
                    </div>
                  )}
                  {filter === "priceInput" && (
                    <div
                      className={`${s.inputWrapper} ${s.inputPrice}`}
                      key={index}
                    >
                      <label htmlFor={s.inputLabel}>Стоимость, ₽</label>
                      <CustomRange
                        MIN={minPrice}
                        MAX={maxPrice}
                        STEP={10000}
                        rangeValues={rangeValuesPrice}
                        onChange={setRangeValuesPrice}
                        bgColor={props?.inputbgColor}
                      />
                    </div>
                  )}
                  {filter === "dateInput" && (
                    <div
                      className={`${s.inputWrapper} ${s.inputDate}`}
                      key={index}
                    >
                      <label htmlFor={s.inputLabel}>Срок сдачи</label>
                      <CustomSelector
                        options={dateOptions}
                        defaultValue={chosenDate}
                        value={chosenDate}
                        setChosen={setChosenDate}
                        bgColor={props.inputbgColor}
                        fontSize={"18px"}
                        fontFamily={"Montserrat-Medium"}
                        padding={"13px 0 13px 19px"}
                        optionPadding={"11px 12px"}
                        optionFontFamily={"Montserrat-Regular"}
                      />
                    </div>
                  )}
                  {filter === "houseInput" && (
                    <div
                      className={`${s.inputWrapper} ${s.inputHouse}`}
                      key={index}
                    >
                      <label htmlFor={s.inputLabel}>Дом</label>
                      <CustomSelector
                        options={houseOptions}
                        defaultValue={chosenHouse}
                        value={chosenHouse}
                        setChosen={setChosenHouse}
                        bgColor={props.inputbgColor}
                        fontSize={"18px"}
                        fontFamily={"Montserrat-Medium"}
                        padding={"13px 0 13px 19px"}
                        optionPadding={"11px 12px"}
                        optionFontFamily={"Montserrat-Regular"}
                        placeholder={"Все"}
                      />
                    </div>
                  )}
                  {filter === "flatInput" && (
                    <div
                      className={`${s.inputWrapper} ${s.inputRooms}`}
                      key={index}
                    >
                      <label htmlFor={s.inputLabel}>Количество комнат</label>
                      <div className={s.flatTypeWrapper}>
                        <div
                          className={`${s.flatType} ${
                            chosenFlat.includes(0) && s.flatTypeActive
                          }`}
                          onClick={() => {
                            addRemoveFlat(0);
                          }}
                        >
                          С
                        </div>
                        <div
                          className={`${s.flatType} ${
                            chosenFlat.includes(1) && s.flatTypeActive
                          }`}
                          onClick={() => {
                            addRemoveFlat(1);
                          }}
                        >
                          1
                        </div>
                        <div
                          className={`${s.flatType} ${
                            chosenFlat.includes(2) && s.flatTypeActive
                          }`}
                          onClick={() => {
                            addRemoveFlat(2);
                          }}
                        >
                          2
                        </div>
                        <div
                          className={`${s.flatType} ${
                            chosenFlat.includes(3) && s.flatTypeActive
                          }`}
                          onClick={() => {
                            addRemoveFlat(3);
                          }}
                        >
                          3+
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>

            <div className={s.butWrapper}>
              {isFilterActive && (
                <div
                  className={s.cancelBut}
                  onClick={() => filterToggler(false)}
                >
                  Сбросить
                  <span className={`${s.cancelIcon} icon-cancel`}></span>
                </div>
              )}
              <Button
                bgColor="blue"
                content="Применить"
                width="200px"
                onClick={() => filterToggler(true)}
              />
            </div>

            <div className={s.butWrapperMobile}>
              {isFilterActive && (
                <div
                  className={s.cancelButMobile}
                  onClick={() => filterToggler(false)}
                >
                  Сбросить фильтры
                </div>
              )}
              <Button
                bgColor="green"
                content={`Показать ${filtredData?.length} планировок`}
                width="335px"
                onClick={() => filterToggler(true)}
              />
            </div>
          </div>
        </div>
        <div className={s.buttonWrapper}>
          <button
            className={s.button}
            onClick={() => {
              setIsFilterShown((prev) => !prev);
            }}
          >
            <span className="icon-filter"></span> Фильтр
          </button>
        </div>
      </div>
      {props?.dataRepresentetion === "HouseCardGrid" && (
        <HouseCardGrid
          filtredData={filtredData}
          {...propsArray}
          withShowMore={props.withShowMore}
          withLinkMore={props?.withLinkMore}
        />
      )}
      {props?.dataRepresentetion === "DataView" && (
        <DataView filtredData={filtredData} {...propsArray} />
      )}
    </>
  );
};

Filter.propTypes = {
  data: PropTypes.array,
  tab: PropTypes.string,
  districtInput: PropTypes.bool,
  spaceInput: PropTypes.bool,
  houseInput: PropTypes.bool,
  priceInput: PropTypes.bool,
  dateInput: PropTypes.bool,
  flatInput: PropTypes.bool,
  withGrid: PropTypes.bool,
  withShowMore: PropTypes.bool,
};

Filter.defaultProps = {};

export default Filter;
