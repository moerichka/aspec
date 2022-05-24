import React from "react";
import s from "./layout.module.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Dashnav from "../../components/dashnav";
import QuestionForm from "../../components/questionForm";
import ProjectAbout from "../../components/projectAbout";
import ProjectLayouts from "../../components/projectLayouts";
import PaymentOptions from "../../components/paymentOptions";
import BuyOptions from "../../components/buyOptions"
import Mortgage from "../../components/mortgage";

import { useParams } from "react-router-dom";

import { houseCards } from "../../dummyData.js";

function Layout() {
  const { projectId } = useParams();
  const { layoutId } = useParams();
  const project = houseCards?.filter(
    (project) => project.id.toString() === projectId
  )[0];
  const layout = project?.flats?.filter(
    (flat) => flat.id.toString() === layoutId
  )[0];

  const wayArray = [
    { title: "Главная" },
    { title: "Все проекты" },
    { title: `${layout?.name} ${layout?.space} м²`, gray: true },
  ];

  return (
    <>
      <Header withLine={true} BGcolor={"gray"}/>
      <Dashnav wayArray={wayArray}/>
      <div className={s.projectAbout} id="about">
        <ProjectAbout
          title={layout?.about?.title}
          text={layout?.about?.text}
          images={layout?.about?.images}
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
      <BuyOptions options={layout?.options} />
      <div className={s.questionForm}>
        <QuestionForm />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
