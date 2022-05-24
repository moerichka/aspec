import React from "react";
import "./project.css";
import { useParams } from "react-router-dom"

import Footer from "../../components/footer";
import Header from "../../components/header";
import QuestionForm from "../../components/questionForm";
import FilterAndTabs from "../../components/filterAndTabs";
import SliderAndNav from "../../components/sliderAndNav";
import ProjectAbout from "../../components/projectAbout";
import ProjectBenefits from "../../components/projectBenefits";
import ProjectLayouts from "../../components/projectLayouts"
import PaymentOptions from "../../components/paymentOptions";
import BuildingProgress from "../../components/buildingProgress";
import Infrastructure from "../../components/infrastructure/Infrastructure";

import { houseCards } from "../../dummyData.js";

function Project() {
  const {projectId} = useParams()
  const project = houseCards.filter(project => project.id.toString() === projectId)[0];

  const filterArray = [
    {
      spaceInput: true,
      priceInput: true,
      dateInput: true,
      flatInput: true,
      houseInput: true
    },
    {
      priceInput: true,
      dateInput: true,
    },
    {
      priceInput: true,
      dateInput: true,
    },
    {
      spaceInput: true,
      priceInput: true,
      dateInput: true,
    },
  ];

  return (
    <div className="project">
      <Header />
      <div className="project__sliderAndNav">
        <SliderAndNav project={project} />
      </div>
      <div className="project__filterAndTabs">
        <FilterAndTabs title={"Все проекты"} withGrid={false} filterArray={filterArray}/>
      </div>
      <div className="project__projectAbout" id="about">
        <ProjectAbout text={project?.about?.text} images={project?.about?.images}/>
      </div>
      <div className="project__infrastructure" id="infrastructure">
        <Infrastructure project={project} />
      </div>
      <div className="project__projectBenefits" id="benefits">
        <ProjectBenefits />
      </div>
      <div className="project__projectLayouts" id="layouts">
        <ProjectLayouts project={project} />
      </div>
      <div className="project__paymentOptions" id="payment">
        <PaymentOptions />
      </div>
      <div className="project__buildingProgress" id="progress">
        <BuildingProgress project={project} />
      </div>
      <div className="project__questionForm">
        <QuestionForm />
      </div>
      <Footer />
    </div>
  );
}

export default Project;
