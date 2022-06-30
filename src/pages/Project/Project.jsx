import React, {useEffect, useState} from "react";
import s from "./project.module.css";
import { useParams, useNavigate } from "react-router-dom"
import {withErrorBoundary} from "react-error-boundary"

import Footer from "../../components/footer";
import Header from "../../components/header";
import QuestionForm from "../../components/questionForm";
import FilterAndTabs from "../../components/filterAndTabs";
import SliderAndNav from "../../components/sliderAndNav";
import ProjectAbout from "../../components/projectAbout";
import Genplan from "../../components/genplan";
import ProjectBenefits from "../../components/projectBenefits";
import ProjectLayouts from "../../components/projectLayouts"
import PaymentOptions from "../../components/paymentOptions";
import BuildingProgress from "../../components/buildingProgress";
import Infrastructure from "../../components/infrastructure/Infrastructure";
import { NoMatch404 } from "../NoMatch";

import { houseCards } from "../../dummyData.js";

function Project() {
  const navigate = useNavigate();
  const [project, setProject] = useState(null)
  const {projectId} = useParams()


  useEffect(()=>{
    setProject(houseCards.filter(project => project.id.toString() === projectId)[0]) 
  },[projectId])

  // useEffect(()=>{
  //   if(!houseCards.filter(project => project.id.toString() === projectId)[0]){
  //     navigate(`/404`);
  //   }
  // },[navigate, project, projectId])

  const filterArray = [
    [
      "spaceInput",
      "priceInput",
      "dateInput",
      "flatInput",
      "houseInput"
    ],
    [
      "priceInput",
      "dateInput",
    ],
    [
      "priceInput",
      "dateInput",
    ],
    [
      "spaceInput",
      "priceInput",
      "dateInput",
    ],
  ];

  return (
    <div className={s.project}>
      <Header />
      <div className={s.sliderAndNav}>
        <SliderAndNav project={project} />
      </div>
      <div className={s.filterAndTabs}>
        <FilterAndTabs title={"Все проекты"} filterArray={filterArray}/>
      </div>
      <div className={s.projectAbout} id="about">
        <ProjectAbout text={project?.about?.text} images={project?.about?.images}/>
      </div>
      <div className={s.genplan}>
        <Genplan project={project} />
      </div>
      <div className={s.infrastructure} id="infrastructure">
        <Infrastructure project={project} />
      </div>
      <div className={s.projectBenefits} id="benefits">
        <ProjectBenefits />
      </div>
      <div className={s.projectLayouts} id="layouts">
        <ProjectLayouts project={project} />
      </div>
      <div className={s.paymentOptions} id="payment">
        <PaymentOptions />
      </div>
      <div className={s.buildingProgress} id="progress">
        <BuildingProgress project={project} />
      </div>
      <div className={s.questionForm}>
        <QuestionForm />
      </div>
      <Footer />
    </div>
  );
}

export default withErrorBoundary(Project, {
  fallbackRender: ()=><NoMatch404/>,
  onError(error, info){
    console.log(error);
    console.log(info);
  }
});
