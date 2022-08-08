/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";

import "react-tabs/style/react-tabs.css";
import PropTypes from "prop-types";
import { DateTime } from "luxon";

import { Link } from "react-router-dom";

import CustomSelector from "../../customSelector";
import Button from "../../button";
import HouseCardGrid from "../houseCardGrid";
import DataView from "../dataView";

import { createOptions, getUnique, sortDates } from "../../../helpers/arrayFun";
import { dateConverterToQuarter } from "../../../helpers/dateFun";
import { flats } from "../../../data";
import CustomRange from "../../customRange";

import s from "./filter.module.css";

function Filter(props) {
  const [filteredData, setFilteredData] = useState(props.data);
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

  const datesArrayConverted = datesArray.map((elem) =>
    dateConverterToQuarter(elem)
  ); // формирование названий дат с кварталами

  let dateOptions = createOptions(datesArrayConverted, false, true, datesArray); // создание опцеий для комбобокса по датам

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

  let filteredArray = [...props.data];

  useEffect(() => {
    setRangeValuesPrice([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    setRangeValuesSpace([minSpace, maxSpace]);
  }, [minSpace, maxSpace]);

  useEffect(() => {
    setFilteredData(props.data);
  }, [props.data]);

  useEffect(() => {
    setFilteredData(filteredArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buildedStatus, isFilterActive, filterCounter]);

  useEffect(() => {
    document.body.style.overflow = isFilterShown ? "hidden" : "unset";
  }, [isFilterShown]);

  if (buildedStatus)
    filteredArray = filteredArray.filter((elem) => {
      const now = DateTime.now().toMillis();
      const openDate = DateTime.fromISO(elem.openDate).toMillis();
      const result = now > openDate;
      return buildedStatus === 1 ? !result : result;
    });

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
              <div className={s.popupState}>
                <Link to="/" className="dash-nav__link">
                  Главная
                </Link>{" "}
                / {props?.tab}
              </div>
              <div className={s.popupTitleWrapper}>
                <h6 className={s.popupTitle}>Фильтры</h6>
                <div
                  className={s.popupClose}
                  onClick={() => setIsFilterShown(false)}
                >
                  Закрыть
                  <span className={`${s.popupCloseIcon} icon-cancel`} />
                </div>
              </div>
            </div>
            <div className={s.inputs}>
              {props?.filters?.map((filter) => (
                <React.Fragment key={`${props?.tab}-${filter}`}>
                  {filter === "districtInput" && (
                    <div className={`${s.inputWrapper} ${s.inputDistrict}`}>
                      <label htmlFor={s.inputLabel}>Район</label>
                      <CustomSelector
                        options={districtOptions}
                        defaultValue={chosenDistrict}
                        value={chosenDistrict}
                        setChosen={setChosenDistrict}
                        BGColor={props?.inputBGColor}
                        fontSize="18px"
                        fontFamily="Montserrat-Medium"
                        padding="13px 0 13px 19px"
                        optionPadding="11px 12px"
                        optionFontFamily="Montserrat-Regular"
                        placeholder="Все"
                      />
                    </div>
                  )}
                  {filter === "projectInput" && (
                    <div className={`${s.inputWrapper} ${s.inputProject}`}>
                      <label htmlFor={s.inputLabel}>Проект</label>
                      <CustomSelector
                        options={projectOptions}
                        defaultValue={chosenProject}
                        value={chosenProject}
                        setChosen={setChosenProject}
                        BGColor={props.inputBGColor}
                        fontSize="18px"
                        fontFamily="Montserrat-Medium"
                        padding="13px 0 13px 19px"
                        optionPadding="11px 12px"
                        optionFontFamily="Montserrat-Regular"
                        placeholder="Все"
                      />
                    </div>
                  )}
                  {filter === "spaceInput" && (
                    <div className={`${s.inputWrapper} ${s.inputSpace}`}>
                      <label htmlFor={s.inputLabel}>Площадь, м²</label>
                      <CustomRange
                        MIN={minSpace}
                        MAX={maxSpace}
                        STEP={1}
                        rangeValues={rangeValuesSpace}
                        onChange={setRangeValuesSpace}
                        BGColor={props?.inputBGColor}
                      />
                    </div>
                  )}
                  {filter === "priceInput" && (
                    <div className={`${s.inputWrapper} ${s.inputPrice}`}>
                      <label htmlFor={s.inputLabel}>Стоимость, ₽</label>
                      <CustomRange
                        MIN={minPrice}
                        MAX={maxPrice}
                        STEP={10000}
                        rangeValues={rangeValuesPrice}
                        onChange={setRangeValuesPrice}
                        BGColor={props?.inputBGColor}
                      />
                    </div>
                  )}
                  {filter === "dateInput" && (
                    <div className={`${s.inputWrapper} ${s.inputDate}`}>
                      <label htmlFor={s.inputLabel}>Срок сдачи</label>
                      <CustomSelector
                        options={dateOptions}
                        defaultValue={chosenDate}
                        value={chosenDate}
                        setChosen={setChosenDate}
                        BGColor={props.inputBGColor}
                        fontSize="18px"
                        fontFamily="Montserrat-Medium"
                        padding="13px 0 13px 19px"
                        optionPadding="11px 12px"
                        optionFontFamily="Montserrat-Regular"
                      />
                    </div>
                  )}
                  {filter === "houseInput" && (
                    <div className={`${s.inputWrapper} ${s.inputHouse}`}>
                      <label htmlFor={s.inputLabel}>Дом</label>
                      <CustomSelector
                        options={houseOptions}
                        defaultValue={chosenHouse}
                        value={chosenHouse}
                        setChosen={setChosenHouse}
                        BGColor={props.inputBGColor}
                        fontSize="18px"
                        fontFamily="Montserrat-Medium"
                        padding="13px 0 13px 19px"
                        optionPadding="11px 12px"
                        optionFontFamily="Montserrat-Regular"
                        placeholder="Все"
                        isSearchable={false}
                      />
                    </div>
                  )}
                  {filter === "flatInput" && (
                    <div className={`${s.inputWrapper} ${s.inputRooms}`}>
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
                </React.Fragment>
              ))}
              <div className={s.butWrapper}>
                <div
                  className={s.cancelBut}
                  onClick={() => filterToggler(false)}
                  data-is-visible={isFilterActive}
                >
                  Сбросить
                  <span className={`${s.cancelIcon} icon-cancel`} />
                </div>
                <div className={s.butWrapperButton}>
                  <Button
                    BGColor="blue"
                    content="Применить"
                    width="200px"
                    onClick={() => filterToggler(true)}
                  />
                </div>
              </div>
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
                BGColor="green"
                content={`Показать ${filteredData?.length} планировок`}
                width="335px"
                onClick={() => filterToggler(true)}
              />
            </div>
          </div>
        </div>
        <div className={s.buttonWrapper}>
          <button
            type="button"
            className={s.button}
            onClick={() => {
              setIsFilterShown((prev) => !prev);
            }}
          >
            <span className="icon-filter" /> Фильтр
          </button>
        </div>
        {!props?.isMain && <div className="container">
          <div className={s.quantity}>
            Найдено {filteredData?.length} квартир
          </div>
        </div>}
      </div>
      {props?.dataRepresentation === "HouseCardGrid" && (
        <HouseCardGrid
          isMain={props?.isMain}
          filteredData={filteredData}
          {...propsArray}
          withShowMore={props?.withShowMore}
          withLinkMore={props?.withLinkMore}
        />
      )}
      {props?.dataRepresentation === "DataView" && (
        <DataView filteredData={filteredData} {...propsArray} />
      )}
    </>
  );
}

Filter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.object),
  tab: PropTypes.string,
  districtInput: PropTypes.bool,
  spaceInput: PropTypes.bool,
  houseInput: PropTypes.bool,
  priceInput: PropTypes.bool,
  dateInput: PropTypes.bool,
  isMain: PropTypes.bool,
  flatInput: PropTypes.bool,
  withGrid: PropTypes.bool,
  withShowMore: PropTypes.bool,
  easyFilter: PropTypes.bool,
  filters: PropTypes.arrayOf(PropTypes.string),
  inputBGColor: PropTypes.string,
  dataRepresentation: PropTypes.string,
  withLinkMore: PropTypes.bool,
};

Filter.defaultProps = {
  data: [],
  tab: "",
  districtInput: false,
  spaceInput: false,
  houseInput: false,
  priceInput: false,
  dateInput: false,
  flatInput: false,
  isMain: false,
  withGrid: false,
  withShowMore: false,
  easyFilter: false,
  filters: [],
  inputBGColor: "gray",
  dataRepresentation: "",
  withLinkMore: false,
};

export default Filter;
