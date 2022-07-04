import React from "react";
import s from "./main.module.css";
import {withErrorBoundary} from "react-error-boundary"

import Header from "../../components/header";
import HelloSlider from "../../components/helloSlider";
import FilterAndTabs from "../../components/filterAndTabs";
import BenefitsGrid from "../../components/benefitsGrid";
import NewsGrid from "../../components/newsGrid/NewsGrid";
import QuestionForm from "../../components/questionForm";
import Footer from "../../components/footer";

import { NoMatchPage } from "../NoMatch";
import Scroller from "../../components/scroller";
import Cookies from "../../components/cookies/Cookies";

function Main(props) {
  const DataRepresentetionArray = [
    "HouseCardGrid",
    "HouseCardGrid",
    "HouseCardGrid",
    "HouseCardGrid",
  ];
  
  return (
    <div className={s.main}>
      <Header />
      <Scroller />
      <Cookies cookiesAgreed={props?.cookiesAgreed} setCookiesAgreed={props?.setCookiesAgreed}/>
      <div className={s.helloSlider}>
        <HelloSlider />
      </div>
      <div className={s.filterAndTabs}>
        <FilterAndTabs title={"Наши проекты"} dataRepresentetion={DataRepresentetionArray} withLinkMore={true} />
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

export default withErrorBoundary(Main, {
  fallbackRender: ()=><NoMatchPage/>,
  onError(error, info){
    console.log(error);
    console.log(info);
  }
});