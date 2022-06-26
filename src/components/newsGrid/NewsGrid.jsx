import React from "react";
import Button from "../button/Button";
import s from "./newsGrid.module.css";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { newsCards } from "../../dummyData";
import NewsCard from "../newsCard";

function NewsGrid(props) {
  const navigate = useNavigate();
  return (
    <div className={s.newsGrid}>
      <div className={`container ${s.container}`}>
        {props?.titlewrapper && <div className={`titleWrapper ${s.titleWrapper}`}>
          <h2 className={`h2-title ${s.title}`}>{props?.title}</h2>
          {props?.desc && <h5 className={`h5-desc ${s.desc}`}>
            Свежие новости и последние публикации нашей компании
          </h5>}
        </div>}
        {props?.buttonAll && (
          <div className={s.buttonAllWrapper}>
            <Button
              content="Все новости"
              width="183px"
              bgColor="blue"
              onClick={() => {
                navigate(`/newsandstocks/news`);
              }}
            />
          </div>
        )}
        <div className={s.grid}>
          {newsCards.map((news, index) =>
              index < props?.maxAmountNews && <NewsCard key={news.id} {...news} />
          )}
        </div>
        {props?.buttonShowMore && (
          <div className={s.buttonShowMoreWrapper}>
            <Button
              content="Показать еще"
              width="184px"
              bgColor="blue"
              onClick={() => {
                navigate(`/newsandstocks/news`);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

NewsGrid.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.bool,
  buttonShowMore: PropTypes.bool,
  buttonAll: PropTypes.bool,
  maxAmountNews: PropTypes.number
};

NewsGrid.defaultProps = {
  title: "Новости",
  desc: null,
  buttonShowMore: false,
  buttonAll: true,
  maxAmountNews: 3
};

export default NewsGrid