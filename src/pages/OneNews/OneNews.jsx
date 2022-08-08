import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import {withErrorBoundary} from "react-error-boundary"

import Header from "../../components/header";
import Scroller from "../../components/scroller";
import Footer from "../../components/footer";
import DashNav from "../../components/dashnav";
import OneNewsFull from "../../components/oneNewsFull";
import NewsGrid from "../../components/newsGrid";
import { NoMatchPage } from "../NoMatch";


import { newsCards } from "../../dummyData";

import s from "./oneNews.module.css";

function OneNews() {
  const [oneNews, setOneNews] = useState(null);
  const { newsId } = useParams();

  useEffect(() => {
    setOneNews(newsCards?.filter((elem) => elem?.id?.toString() === newsId)[0]);
  }, [newsId]);

  // useEffect(() => {
  //   if (!newsCards?.filter((elem) => elem?.id?.toString() === newsId)[0]) {
  //     navigate("/404");
  //   }
  // });

  const wayArray = [
    { title: <Link to="/" className="dash-nav__link">Главная</Link> },
    { title: <Link to="/new-sand-stocks/news" className="dash-nav__link">Акции и новости</Link> },
    { title: `${oneNews?.title}` },
  ];

  return (
    <div className={s.oneNews}>
      <Header />
      <Scroller />
      <div className={s.dashNav}>
        <DashNav wayArray={wayArray} />
      </div>
      <div className={s.oneNewsFull}>
        <OneNewsFull oneNews={oneNews} />
      </div>
      <div className={s.newsGrid}>
        <NewsGrid title="Читайте также" />
      </div>
      <Footer />
    </div>
  );
}

export default withErrorBoundary(OneNews, {
  fallbackRender: ()=><NoMatchPage/>,
  onError(error, info){
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  }
});