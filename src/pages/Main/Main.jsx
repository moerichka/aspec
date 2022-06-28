import React from "react";
import s from "./main.module.css";

import Header from "../../components/header";
import HelloSlider from "../../components/helloSlider";
import FilterAndTabs from "../../components/filterAndTabs";
import BenefitsGrid from "../../components/benefitsGrid";
import NewsGrid from "../../components/newsGrid/NewsGrid";
import QuestionForm from "../../components/questionForm";
import Footer from "../../components/footer";

export default function Main() {
  const DataRepresentetionArray = [
    "HouseCardGrid",
    "HouseCardGrid",
    "HouseCardGrid",
    "HouseCardGrid",
  ];
  
  return (
    <div className={s.main}>
      <Header />
      <div className={s.helloSlider}>
        <HelloSlider />
      </div>
      <div className={s.filterAndTabs}>
        <FilterAndTabs title={"Наши проекты"} dataRepresentetion={DataRepresentetionArray}  />
      </div>
      <div className={s.benefitsGrid}>
        <BenefitsGrid />
      </div>
      <div className={s.newsGrid}>
        <NewsGrid buttonAll={true} desc={true} maxAmountNews={3} titlewrapper={true}/>
      </div>
      <div className={s.questionForm}>
        <QuestionForm />
      </div>
      <Footer />
    </div>
  );
}
