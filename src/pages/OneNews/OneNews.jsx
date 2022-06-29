import React, { useEffect, useState } from "react";
import s from "./oneNews.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";
import DashNav from "../../components/dashnav";
import OneNewsFull from "../../components/oneNewsFull";
import NewsGrid from "../../components/newsGrid";

import { useParams } from "react-router-dom";

import { newsCards } from "../../dummyData.js";

function OneNews() {
  const navigate = useNavigate();
  const [oneNews, setOneNews] = useState(null);
  const { newsId } = useParams();

  useEffect(() => {
    setOneNews(newsCards?.filter((elem) => elem?.id?.toString() === newsId)[0]);
  }, [newsId]);

  useEffect(() => {
    if (!newsCards?.filter((elem) => elem?.id?.toString() === newsId)[0]) {
      navigate("/404");
    }
  });

  const wayArray = [
    { title: <Link to="/" className="dashnav__link">Главная</Link> },
    { title: <Link to="/newsandstocks/news" className="dashnav__link">Акции и новости</Link> },
    { title: `${oneNews?.title}` },
  ];

  return (
    <div className={s.oneNews}>
      <Header />
      <div className={s.dashNav}>
        <DashNav wayArray={wayArray} />
      </div>
      <div className={s.oneNewsFull}>
        <OneNewsFull oneNews={oneNews} />
      </div>
      <div className={s.newsGrid}>
        <NewsGrid title={"Читайте также"} />
      </div>
      <Footer />
    </div>
  );
}

export default OneNews;
