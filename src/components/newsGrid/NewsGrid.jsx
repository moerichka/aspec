/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button";

import { newsCards } from "../../dummyData";
import NewsCard from "../newsCard";

import s from "./newsGrid.module.css";

function NewsGrid(props) {
  const [newsArray, setNewsArray] = useState(null);
  const [maxAmountNews, setMaxAmountNews] = useState(props?.maxAmountNews);
  const navigate = useNavigate();

  useEffect(() => {
    setNewsArray(newsCards);
  }, [props]);

  return (
    <div className={s.newsGrid}>
      <div className={`container ${s.container}`}>
        {props?.titleWrapper && (
          <div className={`titleWrapper ${s.titleWrapper}`}>
            <h2 className={`h2-title ${s.title}`}>{props?.title}</h2>
            {props?.desc && (
              <h5 className={`h5-desc ${s.desc}`}>
                Свежие новости и последние публикации нашей компании
              </h5>
            )}
          </div>
        )}
        {props?.buttonAll && (
          <div className={s.buttonAllWrapper}>
            <Button
              content="Все новости"
              width="183px"
              BGColor="blue"
              onClick={() => {
                navigate(`/new-sand-stocks/news`);
              }}
            />
          </div>
        )}
        <div className={s.grid}>
          {newsArray?.map(
            (news, index) =>
              index < maxAmountNews && (
                <div className={s.newscard} key={news?.id}>
                  <NewsCard {...news} />
                </div>
              )
          )}
        </div>
        {props?.buttonShowMore && maxAmountNews + 3 <= newsArray?.length && (
          <div className={s.buttonShowMoreWrapper}>
            <Button
              content="Показать еще"
              width="184px"
              BGColor="blue"
              onClick={() => {
                setMaxAmountNews((prev) => prev + 3);
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
  maxAmountNews: PropTypes.number,
  titleWrapper: PropTypes.bool,
};

NewsGrid.defaultProps = {
  title: "Новости",
  desc: null,
  buttonShowMore: false,
  buttonAll: true,
  maxAmountNews: 3,
  titleWrapper: false,
};

export default NewsGrid;
