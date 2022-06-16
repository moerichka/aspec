import React from 'react'
import s from "./achievements.module.css"

import image1 from "../../../assets/images/image30.jpg"
import image2 from "../../../assets/images/image31.jpg"
import image3 from "../../../assets/images/image32.jpg"

function Achievements() {
  return (
    <div className={s.achievements}>
        <div className="container">
            <div className={s.items}>
                <div className={s.achievement}>
                    <img src={image1} alt="" className={s.img}/>
                    <div className={s.contentwrapper}>
                        <div className={s.result}>{"> 1000"}</div>
                        <div className={s.line}/>
                        <p className={s.text}>Сотрудников по всей России</p>
                    </div>
                </div>
                <div className={s.achievement}>
                    <img src={image2} alt="" className={s.img}/>
                    <div className={s.contentwrapper}>
                        <div className={s.result}>{"> 3990"}</div>
                        <div className={s.line}/>
                        <p className={s.text}>Успешно выполненных проектов</p>
                    </div>
                </div>
                <div className={s.achievement}>
                    <img src={image3} alt="" className={s.img}/>
                    <div className={s.contentwrapper}>
                        <div className={s.result}>{"> 10280"}</div>
                        <div className={s.line}/>
                        <p className={s.text}>Довольных покупателей</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievements