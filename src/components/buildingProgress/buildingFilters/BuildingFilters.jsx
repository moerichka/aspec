/* eslint-disable react/prop-types */
import React, {useState} from "react";

import CustomSelector from "../../customSelector";

import { createOptions, sortDates } from "../../../helpers/arrayFun";
import {
    dateConverterToQuarter,
    dateConverterToDayMonth,
    dateConverterToYear,
} from "../../../helpers/dateFun";

import s from "./buildingFilters.module.css";

function BuildingFilters(props) {
    const [chosenDate, setChosenDate] = useState(null);
    const [chosenHouse, setChosenHouse] = useState(null);

    let buildingsArray = props?.data?.buildings;
    const dateArrayValues = buildingsArray?.map((building) => building?.datePic);
    const dateArrayTitles = dateArrayValues?.map((elem) =>
      dateConverterToQuarter(elem)
    );
  
    const houseOptions = createOptions(buildingsArray, "number"); // создание опцеий для комбобокса по датам
    let dateOptions = createOptions(
      dateArrayTitles,
      false,
      false,
      dateArrayValues
    ); // создание опцеий для комбобокса по домам
  
    houseOptions?.push({ value: "all", label: "Все" });
    dateOptions?.push({ value: "all", label: "Все" });
  
    dateOptions = sortDates(dateOptions);
  
    if (chosenHouse) {
      if (chosenHouse.value !== "all")
        buildingsArray = buildingsArray?.filter(
          (elem) => elem.number === chosenHouse.value
        );
    }
    if (chosenDate) {
      if (chosenDate.value !== "all")
        buildingsArray = buildingsArray?.filter(
          (elem) => elem.datePic === chosenDate.value
        );
    }
  return (
    <div className={s.selectors}>
      <div className={`${s.selector} ${s.dropboxleft}`}>
        <div className={s.selectortitle}>Выберите месяц и год</div>
        <CustomSelector
          options={dateOptions}
          defaultValue={chosenDate}
          value={chosenDate}
          setChosen={setChosenDate}
          fontSize="16px"
          valueFS="16px"
          BGColor="white"
          fontFamily="Neris-Light"
          valueFF="Neris-Light"
          isSearchable={false}
          padding="18px 0 19px 20px"
          indicatorSize="16px"
          optionPadding="11px 12px"
          optionFontFamily="Montserrat-Regular"
          placeholder="Выберите..."
        />
      </div>
      <div className={`${s.selector} ${s.dropboxright}`}>
        <div className={s.selectortitle}>Выберите дом / корпус</div>
        <CustomSelector
          options={houseOptions}
          defaultValue={chosenHouse}
          value={chosenHouse}
          setChosen={setChosenHouse}
          fontSize="16px"
          valueFS="16px"
          BGColor="white"
          fontFamily="Neris-Light"
          valueFF="Neris-Light"
          isSearchable={false}
          padding="18px 0 19px 20px"
          indicatorSize="16px"
          optionPadding="11px 12px"
          optionFontFamily="Montserrat-Regular"
          placeholder="Выберите..."
        />
      </div>
    </div>
  );
}

export default BuildingFilters;
