import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"

import { useParams, Link } from "react-router-dom";
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

import { houseCards } from "../../dummyData";

import s from "./layout.module.css";

function Layout(props) {
  const [project, setProject] = useState(null);
  const [layout, setLayout] = useState(null);
  const { projectId } = useParams();
  const { layoutId } = useParams();

  useEffect(() => {
    setProject(
      houseCards?.filter((item) => item.id.toString() === projectId)[0]
    );
  }, [projectId]);

  useEffect(() => {
    setLayout(
      project?.flats?.filter((flat) => flat.id.toString() === layoutId)[0]
    );
  }, [project, layoutId]);

  useEffect(() => {
    const thisProject = houseCards?.filter((item) => item?.id?.toString() === projectId)[0] 
    const thisLayout = thisProject?.flats?.filter((flat) => flat?.id?.toString() === layoutId)[0]
    // eslint-disable-next-line no-empty
    if(!!thisProject && !!thisLayout){}else{
      throw new Error("Квартира не найдена")
    }
  }, [project, layoutId, projectId]);

  const wayArray = [
    {
      title: (
        <Link to="/" className="dash-nav__link">
          Главная
        </Link>
      ),
    },
    {
      title: (
        <Link to="/projects" className="dash-nav__link">
          Все проекты
        </Link>
      ),
    },
    { title: `${layout?.name} ${layout?.space} м²`, gray: true },
  ];

  return (
    <div className={s.layout}>
      <Header withLine BGColor="gray" />
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
          bgWhite
        />
      </div>
      <div className={s.projectLayouts}>
        <ProjectLayouts project={project} title="Похожие варианты" />
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

Layout.propTypes = {
  tabIndex: PropTypes.number,
};

Layout.defaultProps = {
  tabIndex: 0,
};

export default withErrorBoundary(Layout, {
  fallbackRender: ()=><NoMatchPage/>,
  onError(error, info){
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  }
});