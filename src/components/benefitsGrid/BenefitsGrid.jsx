import React from "react";

import benefitBig from "../../assets/images/benefitBig.png";
import benefitCats from "../../assets/images/benefitCats.png";
import benefitFamily from "../../assets/images/benefitFamily.png";
import benefitHouse from "../../assets/images/benefitHouse.png";
import benefitTree from "../../assets/images/benefitTree.png";

import s from "./benefitsGrid.module.css";

export default function BenefitsGrid() {
  return (
    <div className={s.benefitsGrid}>
      <div className={`${s.container} container-light`}>
        <div className={`${s.titleWrapper} titleWrapper`}>
          <h2 className={`${s.title} h2-title`}>
            Преимущества наших проектов
          </h2>
          <h5 className={`${s.desc} h5-desc`}>
            Сопровождаем каждого клиента с момента обращения до передачи ключей
          </h5>
        </div>
        <div className={s.gridWrapper}>
          <div className={`${s.item} ${s.itemCare}`}>
            <div className={s.contentWrapper}>
              <h6 className={s.itemTitle}>Забота о клиентах</h6>
              <p className={s.benefit}>
                Сопровождаем каждого клиента с момента обращения до передачи
                ключей
              </p>
            </div>
            <img src={benefitCats} className={s.itemImage} alt="" />
          </div>
          <div className={`${s.item} ${s.itemCovered} ${s.itemDesign}`}>
            <img
              src={benefitBig}
              className={s.itemImageBig}
              alt=""
            />
            <div className={s.itemDarkPanel} />
            <div className={s.contentWrapper}>
              <h6 className={`${s.itemTitle} ${s.itemTitleCovered}`}>Дизайнерская отделка</h6>
              <p className={`${s.benefit} ${s.benefitCovered}`}>
                Все квартиры сдаются в виде «заезжай и живи»
              </p>
            </div>
          </div>
          <div className={`${s.item} ${s.itemComfortYard}`}>
            <div className={s.contentWrapper}>
              <h6 className={s.itemTitle}>Удобные дворы</h6>
              <p className={s.benefit}>
                Все квартиры сдаются в виде «заезжай и живи»
              </p>
            </div>
            <img src={benefitTree} className={s.itemImage} alt="" />
          </div>
          <div className={`${s.item} ${s.itemSmartPlan}`}>
            <div className={s.contentWrapper}>
              <h6 className={s.itemTitle}>Умные планировки</h6>
              <p className={s.benefit}>
                Сопровождаем каждого клиента с момента обращения до передачи
                ключей
              </p>
            </div>
            <img
              src={benefitHouse}
              className={s.itemImage}
              alt=""
            />
          </div>
          <div className={`${s.item} ${s.itemInfrastructure}`}>
            <div className={s.contentWrapper}>
              <h6 className={s.itemTitle}>Развитая инфраструктура</h6>
              <p className={s.benefit}>
                Магазины и услуги «у дома», поликлиники, школы и детские сады,
                парки
              </p>
            </div>
            <img
              src={benefitFamily}
              className={s.itemImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
