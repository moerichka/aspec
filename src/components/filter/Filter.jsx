import React, { useState, useEffect } from "react";
import "./filter.css";
import "react-tabs/style/react-tabs.css";
import PropTypes from "prop-types";
import Select from "react-select";
import { DateTime } from "luxon";

import CustomRange from "../customRange";
import Button from "../button";
import HouseCardGrid from "../houseCardGrid";
import { createOptions, getUnique, sortDates } from "../../helpers/arrayFun";
import { dateConverterToQuarter } from "../../helpers/dateFun";

const Filter = (props) => {
  const [filtredData, setFiltredData] = useState(props.data);
  const [isPanel, setIsPanel] = useState(true);
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [filterCounter, setFilterCounter] = useState(0);
  const [chosenFlat, setChosenFlat] = useState([0, 1, 2, 3]);
  const [chosenDistrict, setChosenDistrict] = useState(null);
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

  const houseOptions = createOptions(props.data[4]?.buildings, "number")
  const districtOptions = createOptions(props.data, "district");
  const minPrice = Math.min(...getUnique(props.data, "price"));
  const maxPrice = Math.max(...getUnique(props.data, "price"));
  const minSpace = Math.min(...getUnique(props.data, "space"));
  const maxSpace = Math.max(...getUnique(props.data, "space"));

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
    rangeValuesPrice &&
      (filteredArray = filteredArray.filter(
        (elem) =>
          elem.price >= rangeValuesPrice[0] && elem.price <= rangeValuesPrice[1]
      ));
    rangeValuesSpace &&
      (filteredArray = filteredArray.filter(
        (elem) =>
          elem.space >= rangeValuesSpace[0] && elem.space <= rangeValuesSpace[1]
      ));
    chosenDistrict &&
      (filteredArray = filteredArray.filter(
        (elem) => elem.district === chosenDistrict.value
      ));
    chosenDate &&
      (filteredArray = filteredArray.filter(
        (elem) => elem.openDate === chosenDate.value
      ));
    chosenFlat &&
      (filteredArray = filteredArray.filter((elem) => {
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
      setChosenFlat([0, 1, 2, 3]);
      setChosenDistrict(null);
      setChosenDate(null);
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
      <div className="filter">
        <div className="filter__container container">
          <div
            className={`filter__inputContainer ${
              isFilterShown && "filter__inputContainer-shown"
            }`}
          >
            <div className="filter__popupTopWrapper">
              <div className="filter__popupState">Главная/ {props.tab}</div>
              <div className="filter__popupTitleWrapper">
                <h6 className="filter__popupTitle">Фильтры</h6>
                <div
                  className="filter__popupClose"
                  onClick={() => setIsFilterShown(false)}
                >
                  Закрыть
                  <span className="filter__popupClose-icon icon-cancel"></span>
                </div>
              </div>
            </div>
            {props.districtInput && (
              <div className="filter__inputWrapper">
                <label htmlFor="filter__inputLabel">Район</label>
                <Select
                  placeholder="Выберите..."
                  options={districtOptions}
                  classNamePrefix="filter"
                  className="filter__select"
                  defaultValue={chosenDistrict}
                  value={chosenDistrict}
                  onChange={(selected) => {
                    setChosenDistrict(selected);
                  }}
                />
              </div>
            )}
            {props.spaceInput && (
              <div className="filter__inputWrapper">
                <label htmlFor="filter__inputLabel">Площадь, м²</label>
                <CustomRange
                  MIN={minSpace}
                  MAX={maxSpace}
                  STEP={1}
                  rangeValues={rangeValuesSpace}
                  onChange={setRangeValuesSpace}
                />
              </div>
            )}
            {props.priceInput && (
              <div className="filter__inputWrapper">
                <label htmlFor="filter__inputLabel">Стоимость, ₽</label>
                <CustomRange
                  MIN={minPrice}
                  MAX={maxPrice}
                  STEP={10000}
                  rangeValues={rangeValuesPrice}
                  onChange={setRangeValuesPrice}
                />
              </div>
            )}
            {props.dateInput && (
              <div className="filter__inputWrapper">
                <label htmlFor="filter__inputLabel">Срок сдачи</label>
                <Select
                  placeholder="Выберите..."
                  options={dateOptions}
                  classNamePrefix="filter"
                  className="filter__select"
                  defaultValue={chosenDate}
                  value={chosenDate}
                  onChange={(selected) => {
                    setChosenDate(selected);
                  }}
                />
              </div>
            )}
            {props.houseInput && (
              <div className="filter__inputWrapper">
                <label htmlFor="filter__inputLabel">Дом</label>
                <Select
                  placeholder="Выберите..."
                  options={houseOptions}
                  classNamePrefix="filter"
                  className="filter__select"
                  defaultValue={chosenHouse}
                  value={chosenHouse}
                  onChange={(selected) => {
                    setChosenHouse(selected);
                  }}
                />
              </div>
            )}
            {props.flatInput && (
              <div className="filter__inputWrapper">
                <label htmlFor="filter__inputLabel">Количество комнат</label>
                <div className="filter__flatTypeWrapper">
                  <div
                    className={`filter__flatType ${
                      chosenFlat.includes(0) && "filter__flatType-active"
                    }`}
                    onClick={() => {
                      addRemoveFlat(0);
                    }}
                  >
                    С
                  </div>
                  <div
                    className={`filter__flatType ${
                      chosenFlat.includes(1) && "filter__flatType-active"
                    }`}
                    onClick={() => {
                      addRemoveFlat(1);
                    }}
                  >
                    1
                  </div>
                  <div
                    className={`filter__flatType ${
                      chosenFlat.includes(2) && "filter__flatType-active"
                    }`}
                    onClick={() => {
                      addRemoveFlat(2);
                    }}
                  >
                    2
                  </div>
                  <div
                    className={`filter__flatType ${
                      chosenFlat.includes(3) && "filter__flatType-active"
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

            <div className="filter__butWrapper">
              {isFilterActive && (
                <div
                  className="filter__cancelBut"
                  onClick={() => filterToggler(false)}
                >
                  Сбросить
                  <span className="filter__cancel-icon icon-cancel"></span>
                </div>
              )}
              <Button
                bgColor="blue"
                content="Применить"
                width="200px"
                onClick={() => filterToggler(true)}
              />
            </div>

            <div className="filter__butWrapper-mobile">
              {isFilterActive && (
                <div
                  className="filter__cancelBut-mobile"
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
        <div className="filter__buttonWrapper">
          <button
            className="filter__button"
            onClick={() => {
              setIsFilterShown((prev) => !prev);
            }}
          >
            <span className="icon-filter"></span> Фильтр
          </button>
        </div>
      </div>
      {props.withGrid && (
        <HouseCardGrid
          filtredData={filtredData}
          {...propsArray}
          withShowMore={props.withShowMore}
        />
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
