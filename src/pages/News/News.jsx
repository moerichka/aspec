import React from "react";
import s from "./news.module.css";

import Header from "../../components/header";
import Dashnav from "../../components/dashnav";
import NewsGrid from "../../components/newsGrid";
import Footer from "../../components/footer";

function News() {
  const wayArray = [
    { title: "Главная" },
    { title: "Акции и новости" },
  ];

  return (
    <div>
      <Header withLine={true} />
      <div className={s.dashnav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.Newsgrid}>
          <NewsGrid buttonShowMore={true} maxAmountNews={12}/>
      </div>
      <Footer />
    </div>
  );
}

export default News;
