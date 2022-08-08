import React from "react";
import PropTypes from "prop-types";

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

import s from "./main.module.css";

function Main(props) {
  const DataRepresentationArray = [
    "HouseCardGrid",
    "HouseCardGrid",
    "HouseCardGrid",
    "HouseCardGrid",
  ];

  const filterArray = [
    ["districtInput", "priceInput", "dateInput", "flatInput"],
    ["districtInput", "priceInput", "dateInput"],
    ["districtInput", "priceInput", "dateInput"],
    ["districtInput", "spaceInput", "priceInput", "dateInput"],
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
        <FilterAndTabs title="Наши проекты" filterArray={filterArray} dataRepresentation={DataRepresentationArray} withLinkMore isMain/>
      </div>
      <div className={s.benefitsGrid}>
        <BenefitsGrid />
      </div>
      <div className={s.newsGrid}>
        <NewsGrid buttonAll desc maxAmountNews={3} titleWrapper/>
      </div>
      <div className={s.questionForm}>
        <QuestionForm />
      </div>
      <Footer />
    </div>
  );
}

Main.propTypes = {
  cookiesAgreed: PropTypes.bool,
  setCookiesAgreed: PropTypes.func,
};

Main.defaultProps = {
  cookiesAgreed: "true",
  setCookiesAgreed: () => {},
};

export default withErrorBoundary(Main, {
  fallbackRender: ()=><NoMatchPage/>,
  onError(error, info){
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  }
});