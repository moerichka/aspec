import React, { useEffect, useState, useRef } from "react";

import { useParams } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";

import Footer from "../../components/footer";
import Header from "../../components/header";
import Scroller from "../../components/scroller";
import QuestionForm from "../../components/questionForm";
import FilterAndTabs from "../../components/filterAndTabs";
import SliderAndNav from "../../components/sliderAndNav";
import ProjectAbout from "../../components/projectAbout";
// import Genplan from "../../components/genplan";
import Genplan2 from "../../components/genplan2";
import ProjectBenefits from "../../components/projectBenefits";
import ProjectLayouts from "../../components/projectLayouts";
import PaymentOptions from "../../components/paymentOptions";
import BuildingProgress from "../../components/buildingProgress";
import Infrastructure from "../../components/infrastructure/Infrastructure";
import { NoMatchPage } from "../NoMatch";

import { houseCards } from "../../dummyData";
import { Projects } from "../../data";

import s from "./project.module.css";

function Project() {
  const [project, setProject] = useState(null);
  const [dataProject, setDataProject] = useState(null);
  const { projectId } = useParams();
  const about = useRef();
  const genplan = useRef();
  const infrastructure = useRef();
  const benefits = useRef();
  const layouts = useRef();
  const payment = useRef();
  const progress = useRef();

  const refs = {
    about,
    genplan,
    infrastructure,
    benefits,
    layouts,
    payment,
    progress,
  };

  useEffect(() => {
    setProject(
      houseCards.filter((item) => item.id.toString() === projectId)[0]
    );
  }, [projectId]);

  useEffect(() => {
    setDataProject(
      Projects.filter((item) => item.id.toString() === projectId)[0]
    );
  }, [projectId]);

  // useEffect(()=>{
  //   if(!houseCards.filter(project => project.id.toString() === projectId)[0]){
  //     navigate(`/404`);
  //   }
  // },[navigate, project, projectId])

  const filterArray = [
    ["spaceInput", "priceInput", "dateInput", "flatInput", "houseInput"],
    ["priceInput", "dateInput"],
    ["priceInput", "dateInput"],
    ["spaceInput", "priceInput", "dateInput"],
  ];

  return (
    <div className={s.project}>
      <Header />
      <Scroller />
      <div className={s.sliderAndNav}>
        <SliderAndNav project={dataProject} refs={refs} />
      </div>
      <div className={s.filterAndTabs}>
        <FilterAndTabs title="Все проекты" filterArray={filterArray} />
      </div>
      <div className={s.projectAbout} ref={about}>
        <ProjectAbout
          text={dataProject?.about?.text}
          images={dataProject?.about?.images}
        />
      </div>
      <div className={s.genplan} ref={genplan}>
        {/* <Genplan project={project} /> */}
        <Genplan2 project={project} />
      </div>
      <div className={s.infrastructure} ref={infrastructure}>
        <Infrastructure project={dataProject} />
      </div>
      <div className={s.projectBenefits} ref={benefits}>
        <ProjectBenefits />
      </div>
      <div className={s.projectLayouts} ref={layouts}>
        <ProjectLayouts project={project} />
      </div>
      <div className={s.paymentOptions} ref={payment}>
        <PaymentOptions />
      </div>
      <div className={s.buildingProgress} ref={progress}>
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
  fallbackRender: () => <NoMatchPage />,
  onError(error, info) {
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  },
});
