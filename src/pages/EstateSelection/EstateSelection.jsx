import React from "react";

import { Link } from "react-router-dom";
import {withErrorBoundary} from "react-error-boundary"

import Header from "../../components/header/Header";
import Scroller from "../../components/scroller";
import Footer from "../../components/footer/Footer";
import Dashnav from "../../components/dashnav";
import FilterAndTabs from "../../components/filterAndTabs";
import { NoMatchPage } from "../NoMatch";

import s from "./estateSelection.module.css";

function EstateSelection() {
  const wayArray = [
    { title: <Link to="/" className="dash-nav__link">Главная</Link>, gray: true },
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

  const DataRepresentationArray = [
    "DataView",
    "DataView",
    "DataView",
    "HouseCardGrid",
  ];

  return (
    <div className={s.estateSelection}>
      <Header />
      <Scroller />
      <div className={s.dashNav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.filterAndTabs}>
        <FilterAndTabs
          title="Подбор недвижимости"
          withGrid
          filterArray={filterArray}
          withShowMore={false}
          dataRepresentation={DataRepresentationArray}
        />
      </div>
      <Footer />
    </div>
  );
}

export default withErrorBoundary(EstateSelection, {
  fallbackRender: ()=><NoMatchPage/>,
  onError(error, info){
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  }
});
