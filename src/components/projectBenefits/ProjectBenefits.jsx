import React from "react";
import s from "./projectBenefits.module.css";

import imgChild from "../../assets/images/projectBenChild2.png";
import imgHouse from "../../assets/images/projectBenHouse.png";
import imgMoreHouse from "../../assets/images/projectBenMoreHouse.png";
import imgYard from "../../assets/images/projectBenYard.png";

function ProjectBenefits() {
  return (
    <div className={s.benefits}>
      <div className={`${s.benefitsContainer} container`}>
        <h2 className="h2-title">Преимущества проекта</h2>
        <div className={s.grid}>
          <div className={`${s.item} ${s.item1}`}>
            <div className={s.itemFrontWrapper}>
              <span className={`icon-map ${s.icon}`}></span>
              <h6 className={s.itemTitle}>Инфраструктура</h6>
            </div>
          </div>
          <div className={`${s.item} ${s.item2}`}>
            <div className={`${s.itemFrontWrapper} ${s.end}`}>
              <h6 className={s.itemTitle}>Архитектура</h6>
            </div>
            <div className={s.itemImgWrapper}>
              <div className={s.itemDarkPanel} />
              <img src={imgHouse} alt="" className={s.itemImg} />
            </div>
          </div>
          <div className={`${s.item} ${s.item3}`}>
            <div className={`${s.itemFrontWrapper} ${s.end}`}>
              <h6 className={s.itemTitle}>Безопасность</h6>
            </div>
            <div className={s.itemImgWrapper}>
              <div className={s.itemDarkPanel} />
              <img src={imgChild} alt="" className={s.itemImg} />
            </div>
          </div>
          <div className={`${s.item} ${s.item4}`}>
            <div className={`${s.itemFrontWrapper} ${s.end}`}>
              <h6 className={s.itemTitle}>Расположение</h6>
            </div>
            <div className={s.itemImgWrapper}>
              <div className={s.itemDarkPanel} />
              <img src={imgMoreHouse} alt="" className={s.itemImg} />
            </div>
          </div>
          <div className={`${s.item} ${s.item5}`}>
            <div className={s.itemFrontWrapper}>
              <span className={`icon-buildigs ${s.icon}`}></span>
              <h6 className={s.itemTitle}>Концепция</h6>
            </div>
          </div>
          <div className={`${s.item} ${s.item6}`}>
            <div className={`${s.itemFrontWrapper} ${s.end}`}>
              <h6 className={s.itemTitle}>Экология</h6>
            </div>
            <div className={s.itemImgWrapper}>
              <div className={s.itemDarkPanel} />
              <img src={imgYard} alt="" className={s.itemImg} />
            </div>
          </div>
          <div className={`${s.item} ${s.item7}`}>
            <div className={s.itemFrontWrapper}>
              <span className={`icon-planning ${s.icon}`}></span>
              <h6 className={s.itemTitle}>Полезное пространство</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBenefits;
