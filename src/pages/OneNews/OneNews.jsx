import React from 'react'
import s from "./oneNews.module.css"

import Header from '../../components/header'
import Footer from '../../components/footer'
import DashNav from '../../components/dashnav'
import OneNewsFull from '../../components/oneNewsFull'
import NewsGrid from '../../components/newsGrid'

import { useParams } from "react-router-dom";

import { newsCards } from "../../dummyData.js";

function OneNews() {
  const { newsId } = useParams();

  const oneNews = newsCards?.filter(
    (elem) => elem?.id?.toString() === newsId
  )[0];

  const wayArray = [
    { title: "Главная" },
    { title: "Акции и новости" },
    { title: `${oneNews?.title}` },
  ];


  return (
    <div className={s.oneNews}>
      <Header/>
      <div className={s.dashNav}>
        <DashNav wayArray={wayArray}/>
      </div>
      <div className={s.oneNewsFull}>
        <OneNewsFull oneNews={oneNews}/>
      </div>
      <div className={s.newsGrid}>
        <NewsGrid title={"Читайте также"}/>
      </div>
      <Footer />
    </div>
  )
}

export default OneNews