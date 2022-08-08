import React from "react";

import { Link } from "react-router-dom";
import {withErrorBoundary} from "react-error-boundary"

import Header from "../../components/header";
import Dashnav from "../../components/dashnav";
import Scroller from "../../components/scroller";
import FilterAndTabs from "../../components/filterAndTabs";
import Footer from "../../components/footer";
import { NoMatchPage } from "../NoMatch";

import s from "./projects.module.css";

function Projects() {
  const filterArray = [
    ["districtInput", "spaceInput", "priceInput", "dateInput", "flatInput"],
    ["districtInput", "priceInput", "dateInput"],
    ["districtInput", "priceInput", "dateInput"],
    ["districtInput", "spaceInput", "priceInput", "dateInput"],
  ];

  const DataRepresentationArray = [
    "HouseCardGrid",
    "HouseCardGrid",
    "HouseCardGrid",
    "HouseCardGrid",
  ];


  const wayArray = [
    { title: <Link to="/" className="dash-nav__link">Главная</Link>, gray: true },
    { title: "Все проекты", gray: true },
  ];

  return (
    <div className={s.projects}>
      <Header BGColor="gray" withLine />
      <Scroller />
      <div className={s.dashNav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.filterAndTabs}>
        <FilterAndTabs
          title="Все проекты"
          dataRepresentation={DataRepresentationArray}
          filterArray={filterArray}
          withShowMore
          inputBGColor="white"
        />
      </div>
      <Footer />
    </div>
  );
}

export default withErrorBoundary(Projects, {
  fallbackRender: ()=><NoMatchPage/>,
  onError(error, info){
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  }
});