import React from "react";
import s from "./newsCard.module.css";

import { Link } from "react-router-dom";

export default function NewsCard(props) {
  return (
    <Link to={`/news/${props.id}`} className={s.newsCard}>
      <div className={s.title}>{props.title}</div>
      <div className={s.downPartWrapper}>
        <p className={s.desc}>{props.desc}</p>
        <span className={s.date}>{props.date}</span>
      </div>
    </Link>
  );
}
