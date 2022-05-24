import React from 'react'
import "./newsCard.css"

import { Link } from "react-router-dom"

export default function NewsCard(props) {
  return (
      <Link to={`/news/:${props.id}`} className={`newsCard ${props.cover && "newsCard-cover"}`}>
          <div className="newsCard__title">{props.title}</div>
          <div className={`newsCard__downPartWrapper ${props.cover && "newsCard__downPartWrapper-cover"}`}>
              <p className="newsCard__desc">{props.desc}</p>
              <span className="newsCard__date">{props.date}</span>
          </div>
      </Link>
  )
}
