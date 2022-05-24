import React from "react";
import Button from "../button/Button";
import "./newsGrid.css";
import { useNavigate } from "react-router-dom";

import { newsCards } from "../../dummyData";
import NewsCard from "../newsCard";

export default function NewsGrid() {
  const navigate = useNavigate()
  return (
    <div className="newsGrid">
      <div className="newsGrid__container container">
        <div className="newsGrid__titleWrapper titleWrapper">
          <h2 className="newsGrid__title h2-title">Новости</h2>
          <h5 className="newsGrid__desc h5-desc">
            Свежие новости и последние публикации нашей компании
          </h5>
        </div>
        <Button content="Все новости" width="183px" bgColor="blue" onClick={()=>{navigate(`/news`)}}/>
        <div className="newsGrid__grid">
          {newsCards.map((news, index) =>
            index % 2 === 0 ? (
              <NewsCard key={news.id} {...news} />
            ) : (
              <NewsCard key={news.id} {...news} cover={true} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
