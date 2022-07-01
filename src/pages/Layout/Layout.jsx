import React, { useEffect, useState } from "react";
import s from "./layout.module.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import {withErrorBoundary} from "react-error-boundary"

import Header from "../../components/header";
import Scroller from "../../components/scroller";
import Footer from "../../components/footer";
import Dashnav from "../../components/dashnav";
import LayoutFull from "../../components/layoutFull";
import QuestionForm from "../../components/questionForm";
import ProjectAbout from "../../components/projectAbout";
import ProjectLayouts from "../../components/projectLayouts";
import PaymentOptions from "../../components/paymentOptions";
import BuyOptions from "../../components/buyOptions";
import Mortgage from "../../components/mortgage";

import { NoMatchPage } from "../NoMatch";

import { houseCards } from "../../dummyData.js";

function Layout(props) {
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [layout, setLayout] = useState(null);
  const { projectId } = useParams();
  const { layoutId } = useParams();

  useEffect(() => {
    setProject(
      houseCards?.filter((project) => project.id.toString() === projectId)[0]
    );
  }, [projectId]);

  useEffect(() => {
    setLayout(
      project?.flats?.filter((flat) => flat.id.toString() === layoutId)[0]
    );
  }, [project, layoutId]);

  useEffect(() => {
    const thisProject = houseCards?.filter((project) => project?.id?.toString() === projectId)[0] 
    const thisLayout = thisProject?.flats?.filter((flat) => flat?.id?.toString() === layoutId)[0]
    if(!!thisProject && !!thisLayout){}else{
      throw new Error("Квартира не найдена")
    }
  }, [project, layoutId]);

  const wayArray = [
    {
      title: (
        <Link to="/" className="dashnav__link">
          Главная
        </Link>
      ),
    },
    {
      title: (
        <Link to="/projects" className="dashnav__link">
          Все проекты
        </Link>
      ),
    },
    { title: `${layout?.name} ${layout?.space} м²`, gray: true },
  ];

  return (
    <div className={s.layout}>
      <Header withLine={true} BGcolor={"gray"} />
      <Scroller />
      <div className={s.dashNav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.layoutFull}>
        <LayoutFull project={project} layout={layout} tabIndex={props?.tabIndex}/>
      </div>
      <div className={s.projectAbout} id="about">
        <ProjectAbout
          title={layout?.about?.title}
          text={layout?.about?.text}
          images={layout?.about?.images}
          bgWhite={true}
        />
      </div>
      <div className={s.projectLayouts}>
        <ProjectLayouts project={project} title={"Похожие варианты"} />
      </div>
      <div className={s.mortgage}>
        <Mortgage project={project} />
      </div>
      <div className={s.paymentOptions}>
        <PaymentOptions />
      </div>
      <BuyOptions options={layout?.options} projectId={projectId}  layoutId={layoutId}/>
      <div className={s.questionForm}>
        <QuestionForm />
      </div>
      <Footer />
    </div>
  );
}

export default withErrorBoundary(Layout, {
  fallbackRender: ()=><NoMatchPage/>,
  onError(error, info){
    console.log(error);
    console.log(info);
  }
});