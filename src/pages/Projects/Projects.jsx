import React from "react";
import s from "./projects.module.css";
import "./projects.css";

import Header from "../../components/header";
import Dashnav from "../../components/dashnav";
import FilterAndTabs from "../../components/filterAndTabs";
import Footer from "../../components/footer";

export default function Main() {
  const filterArray = [
    {
      districtInput: true,
      spaceInput: true,
      priceInput: true,
      dateInput: true,
      flatInput: true,
    },
    {
      districtInput: true,
      priceInput: true,
      dateInput: true,
    },
    {
      districtInput: true,
      priceInput: true,
      dateInput: true,
    },
    {
      districtInput: true,
      spaceInput: true,
      priceInput: true,
      dateInput: true,
    },
  ];

  const wayArray = [
    { title: "Главная" , gray: true},
    { title: "Все проекты" , gray: true},
  ];

  return (
    <div className="projects">
      <Header BGcolor={"gray"} withLine={true}/>
      <div className={s.dashnav}>
        <Dashnav wayArray={wayArray}></Dashnav>
      </div>
      <div className={s.filterAndTabs}>
        <FilterAndTabs
          title={"Все проекты"}
          withGrid={true}
          filterArray={filterArray}
          withShowMore={false}
        />
      </div>
      <Footer />
    </div>
  );
}
