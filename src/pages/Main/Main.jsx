import React from "react";
import "./main.css";

import Header from "../../components/header";
import HelloSlider from "../../components/helloSlider";
import FilterAndTabs from "../../components/filterAndTabs";
import BenefitsGrid from "../../components/benefitsGrid";
import NewsGrid from "../../components/newsGrid/NewsGrid";
import QuestionForm from "../../components/questionForm";
import Footer from "../../components/footer";

export default function Main() {
  return (
    <>
      <Header />
      <div className="main__helloSlider">
        <HelloSlider />
      </div>
      <div className="main__filterAndTabs">
        <FilterAndTabs title={"Наши проекты"} withGrid={true}  />
      </div>
      <div className="main__benefitsGrid">
        <BenefitsGrid />
      </div>
      <div className="main__newsGrid">
        <NewsGrid />
      </div>
      <div className="main__questionForm">
        <QuestionForm />
      </div>
      <Footer />
    </>
  );
}
