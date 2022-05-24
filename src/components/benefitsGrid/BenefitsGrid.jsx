import React from "react";
import "./benefitsGrid.css";

import benefitBig from "../../assets/images/benefitBig.png";
import benefitCats from "../../assets/images/benefitCats.png";
import benefitFamily from "../../assets/images/benefitFamily.png";
import benefitHouse from "../../assets/images/benefitHouse.png";
import benefitTree from "../../assets/images/benefitTree.png";

export default function BenefitsGrid() {
  return (
    <div className="benefitsGrid">
      <div className="benefitsGrid__container container-light">
        <div className="benefitsGrid__titleWrapper titleWrapper">
          <h2 className="benefitsGrid__title h2-title">
            Преимущества наших проектов
          </h2>
          <h5 className="benefitsGrid__desc h5-desc">
            Сопровождаем каждого клиента с момента обращения до передачи ключей
          </h5>
        </div>
        <div className="benefitsGrid__gridWrapper">
          <div className="benefitsGrid__item benefitsGrid__itemCare">
            <div className="benefitsGrid__contentWrapper">
              <h6 className="benefitsGrid__itemTitle">Забота о клиентах</h6>
              <p className="benefitsGrid__benefit">
                Сопровождаем каждого клиента с момента обращения до передачи
                ключей
              </p>
            </div>
            <img src={benefitCats} className="benefitsGrid__itemImage" alt="" />
          </div>
          <div className="benefitsGrid__item benefitsGrid__item-covered benefitsGrid__itemDesign">
            <img
              src={benefitBig}
              className="benefitsGrid__itemImageBig"
              alt=""
            />
            <div className="benefitsGrid__itemDarkPanel"></div>
            <div className="benefitsGrid__contentWrapper">
              <h6 className="benefitsGrid__itemTitle benefitsGrid__itemTitle-covered">Дизайнерская отделка</h6>
              <p className="benefitsGrid__benefit benefitsGrid__benefit-covered">
                Все квартиры сдаются в виде «заезжай и живи»
              </p>
            </div>
          </div>
          <div className="benefitsGrid__item benefitsGrid__itemComfortYard">
            <div className="benefitsGrid__contentWrapper">
              <h6 className="benefitsGrid__itemTitle">Удобные дворы</h6>
              <p className="benefitsGrid__benefit">
                Все квартиры сдаются в виде «заезжай и живи»
              </p>
            </div>
            <img src={benefitTree} className="benefitsGrid__itemImage" alt="" />
          </div>
          <div className="benefitsGrid__item benefitsGrid__itemSmartPlan">
            <div className="benefitsGrid__contentWrapper">
              <h6 className="benefitsGrid__itemTitle">Умные планировки</h6>
              <p className="benefitsGrid__benefit">
                Сопровождаем каждого клиента с момента обращения до передачи
                ключей
              </p>
            </div>
            <img
              src={benefitHouse}
              className="benefitsGrid__itemImage"
              alt=""
            />
          </div>
          <div className="benefitsGrid__item benefitsGrid__itemInfrastructure">
            <div className="benefitsGrid__contentWrapper">
              <h6 className="benefitsGrid__itemTitle">Развитая инфраструктура</h6>
              <p className="benefitsGrid__benefit">
                Магазины и услуги «у дома», поликлиники, школы и детские сады,
                парки
              </p>
            </div>
            <img
              src={benefitFamily}
              className="benefitsGrid__itemImage"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
