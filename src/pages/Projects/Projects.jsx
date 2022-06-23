import React from "react";
import s from "./projects.module.css";
import "./projects.css";

import Header from "../../components/header";
import Dashnav from "../../components/dashnav";
import FilterAndTabs from "../../components/filterAndTabs";
import Footer from "../../components/footer";

export default function Main() {
  const filterArray = [
    ["districtInput", "spaceInput", "priceInput", "dateInput", "flatInput"],
    ["districtInput", "priceInput", "dateInput"],
    ["districtInput", "priceInput", "dateInput"],
    ["districtInput", "spaceInput", "priceInput", "dateInput"],
  ];

  const DataRepresentetionArray = [
    "HouseCardGrid",
    "HouseCardGrid",
    "HouseCardGrid",
    "HouseCardGrid",
  ];


  const wayArray = [
    { title: "Главная", gray: true },
    { title: "Все проекты", gray: true },
  ];

  return (
    <div className="projects">
      <Header BGcolor={"gray"} withLine={true} />
      <div className={s.dashnav}>
        <Dashnav wayArray={wayArray}></Dashnav>
      </div>
      <div className={s.filterAndTabs}>
        <FilterAndTabs
          title={"Все проекты"}
          dataRepresentetion={DataRepresentetionArray}
          filterArray={filterArray}
          withShowMore={false}
          inputbgColor={"white"}
        />
      </div>
      <Footer />
    </div>
  );
}
