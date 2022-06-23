import React, { useEffect, useState } from "react";
import s from "./layout.module.css";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Dashnav from "../../components/dashnav";
import LayoutFull from "../../components/layoutFull";
import QuestionForm from "../../components/questionForm";
import ProjectAbout from "../../components/projectAbout";
import ProjectLayouts from "../../components/projectLayouts";
import PaymentOptions from "../../components/paymentOptions";
import BuyOptions from "../../components/buyOptions";
import Mortgage from "../../components/mortgage";

import { houseCards } from "../../dummyData.js";

function Layout() {
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
    const thisproject = houseCards?.filter((project) => project?.id?.toString() === projectId)[0]

    if (
      !thisproject ||
      !thisproject?.flats?.filter((flat) => flat?.id?.toString() === layoutId)[0]
    ) {
      navigate(`/404`);
    }
  }, [navigate, project, projectId, layoutId]);

  const wayArray = [
    { title: "Главная" },
    { title: "Все проекты" },
    { title: `${layout?.name} ${layout?.space} м²`, gray: true },
  ];

  return (
    <>
      <Header withLine={true} BGcolor={"gray"} />
      <div className={s.dashnav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.layoutFull}>
        <LayoutFull project={project} layout={layout} />
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
      <BuyOptions options={layout?.options} />
      <div className={s.questionForm}>
        <QuestionForm />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
