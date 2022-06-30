import React from "react";
import s from "./projects.module.css";
import { Link } from "react-router-dom";
import {withErrorBoundary} from "react-error-boundary"

import Header from "../../components/header";
import Dashnav from "../../components/dashnav";
import Scroller from "../../components/scroller";
import FilterAndTabs from "../../components/filterAndTabs";
import Footer from "../../components/footer";
import { NoMatch404 } from "../NoMatch";

function Projects() {
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
    { title: <Link to="/" className="dashnav__link">Главная</Link>, gray: true },
    { title: "Все проекты", gray: true },
  ];

  return (
    <div className={s.projects}>
      <Header BGcolor={"gray"} withLine={true} />
      <Scroller />
      <div className={s.dashNav}>
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

export default withErrorBoundary(Projects, {
  fallbackRender: ()=><NoMatch404/>,
  onError(error, info){
    console.log(error);
    console.log(info);
  }
});