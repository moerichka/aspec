import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import s from "./newsCard.module.css";

function NewsCard(props) {
  return (
    <Link to={`/news/${props?.id}`} className={s.newsCard}>
      <div className={s.title}>{props?.title}</div>
      <div className={s.downPartWrapper}>
        <p className={s.desc}>{props?.desc}</p>
        <span className={s.date}>{props?.date}</span>
      </div>
    </Link>
  );
}

NewsCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  desc: PropTypes.string,
  date: PropTypes.string,
};

NewsCard.defaultProps = {
  id: "",
  title: "",
  desc: "",
  date: "",
};

export default NewsCard;
