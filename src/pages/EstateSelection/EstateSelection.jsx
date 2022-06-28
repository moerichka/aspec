import React from "react";
import s from "./estateSelection.module.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Dashnav from "../../components/dashnav";
import FilterAndTabs from "../../components/filterAndTabs";

function EstateSelection() {
  const wayArray = [
    { title: "Главная", gray: true },
    { title: "Подбор недвижимости", gray: true },
  ];

  const filterArray = [
    [
      "districtInput",
      "projectInput",
      "houseInput",
      "dateInput",
      "priceInput",
      "spaceInput",
      "flatInput",
    ],
    ["districtInput", "projectInput", "houseInput", "dateInput", "priceInput"],
    ["districtInput", "projectInput", "houseInput", "dateInput", "priceInput"],
    ["districtInput", "spaceInput", "priceInput", "dateInput"],
  ];

  const DataRepresentetionArray = [
    "DataView",
    "DataView",
    "DataView",
    "HouseCardGrid",
  ];

  return (
    <div className={s.estateSelection}>
      <Header />
      <div className={s.dashnav}>
        <Dashnav wayArray={wayArray}></Dashnav>
      </div>
      <div className={s.filterAndTabs}>
        <FilterAndTabs
          title={"Подбор недвижимости"}
          withGrid={true}
          filterArray={filterArray}
          withShowMore={false}
          dataRepresentetion={DataRepresentetionArray}
        />
      </div>
      <Footer />
    </div>
  );
}

export default EstateSelection;
