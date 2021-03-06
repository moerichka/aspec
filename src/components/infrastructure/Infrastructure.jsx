import React, { useState, useEffect } from "react";
import s from "./infrastructure.module.css";
import "./infrastructure.css";
import { YMaps, Map, Placemark, Button } from "react-yandex-maps";
import { Link } from "react-router-dom";
import { legendMap } from "../../helpers/htmlElementMap";

import House from "../../assets/images/loc.svg";
import Medecine from "../../assets/images/medecine.svg";
import Culture from "../../assets/images/culture.svg";
import Sport from "../../assets/images/sport.svg";
import Shop from "../../assets/images/shop.svg";
import Education from "../../assets/images/education.svg";
import Food from "../../assets/images/food.svg";
import Transport from "../../assets/images/transport.svg";
import Transportpink from "../../assets/images/transportpink.svg";

function Infrastructure(props) {
  const [data, setData] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  const [isLegendActive, setIsLegendActive] = useState(false);
  const [locations, setLocations] = useState({
    culture: true,
    medecine: true,
    education: true,
    shop: true,
    food: true,
    sport: true,
    transport: true,
    kindergarden: true,
  });

  useEffect(() => {
    setData(props?.project);
  }, [props]);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  let mapHeight = "853px";
  windowWidth < 1440 && (mapHeight = "600px");
  windowWidth < 800 && (mapHeight = "370px");

  const getImage = (type) => {
    switch (type) {
      case "culture":
        return Culture;
      case "medecine":
        return Medecine;
      case "education":
        return Education;
      case "shop":
        return Shop;
      case "food":
        return Food;
      case "sport":
        return Sport;
      case "transport":
        return Transport;
      case "kindergarden":
        return Transportpink;

      default:
        return House;
    }
  };

  const clickHandler = (location) => {
    setLocations((prev) => ({ ...prev, [location]: !prev[location] }));
  };

  return (
    <div className="infrastructure">
      <div className="container">
        <h2 className="h2-title">????????????????????????????</h2>
      </div>
      <div className={s.mapwrapper}>
        <YMaps>
          <Map
            defaultState={{
              center: data?.location ? data?.location : [55.75, 37.57],
              zoom: 18,
            }}
            width="100vw"
            height={mapHeight}
            instanceRef={(ref) => {
              ref && ref.behaviors.disable("scrollZoom");
            }}
            controls={[]}
          >
            {data?.location && (
              <Placemark
                modules={["geoObject.addon.balloon"]}
                defaultGeometry={data?.location}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: House,
                }}
              />
            )}
            {data?.nearerObjects?.map((obj) => (
              locations[obj?.type] && <Placemark
                key={obj?.id}
                modules={["geoObject.addon.balloon"]}
                defaultGeometry={obj?.location}
                properties={{
                  balloonContentBody: legendMap(obj),
                }}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: getImage(obj?.type),
                  iconCaption: `${obj?.title}`,
                }}
              />
            ))}
          </Map>
        </YMaps>
        <div
          className={`${s.legend} ${
            isLegendActive && windowWidth < 1000 ? s.active : ""
          }`}
        >
          <div className={s.legendtop}>
            <div className={s.legendtitle}>????????????????????????????</div>
            <span
              className="icon-cancel"
              onClick={() => setIsLegendActive(false)}
            ></span>
          </div>
          <div
            className={s.element}
            onClick={() => clickHandler("culture")}
            data-isactive={locations?.culture}
          >
            <div className={s.left}>
              <span className={`icon-culture ${s.logo} ${s.culture}`}></span>
              <div className={s.title}>???????????????? ?? ??????????</div>
            </div>
            <div className={s.amount}>6</div>
          </div>
          <div
            className={s.element}
            onClick={() => clickHandler("medecine")}
            data-isactive={locations?.medecine}
          >
            <div className={s.left}>
              <span className={`icon-medicine ${s.logo} ${s.medicine}`}></span>
              <div className={s.title}>????????????????</div>
            </div>
            <div className={s.amount}>1</div>
          </div>
          <div
            className={s.element}
            onClick={() => clickHandler("education")}
            data-isactive={locations?.education}
          >
            <div className={s.left}>
              <span
                className={`icon-education ${s.logo} ${s.education}`}
              ></span>
              <div className={s.title}>??????????????????????</div>
            </div>
            <div className={s.amount}>2</div>
          </div>
          <div
            className={s.element}
            onClick={() => clickHandler("shop")}
            data-isactive={locations?.shop}
          >
            <div className={s.left}>
              <span className={`icon-shop ${s.logo} ${s.shop}`}></span>
              <div className={s.title}>????????????????</div>
            </div>
            <div className={s.amount}>2</div>
          </div>
          <div
            className={s.element}
            onClick={() => clickHandler("food")}
            data-isactive={locations?.food}
          >
            <div className={s.left}>
              <span className={`icon-food ${s.logo} ${s.food}`}></span>
              <div className={s.title}>??????</div>
            </div>
            <div className={s.amount}>3</div>
          </div>
          <div
            className={s.element}
            onClick={() => clickHandler("sport")}
            data-isactive={locations?.sport}
          >
            <div className={s.left}>
              <span className={`icon-sport ${s.logo} ${s.sport}`}></span>
              <div className={s.title}>??????????</div>
            </div>
            <div className={s.amount}>1</div>
          </div>
          <div
            className={s.element}
            onClick={() => clickHandler("transport")}
            data-isactive={locations?.transport}
          >
            <div className={s.left}>
              <span
                className={`icon-transport ${s.logo} ${s.transport}`}
              ></span>
              <div className={s.title}>??????????????????</div>
            </div>
            <div className={s.amount}>4</div>
          </div>
          <div
            className={s.element}
            onClick={() => clickHandler("kindergarden")}
            data-isactive={locations?.kindergarden}
          >
            <div className={s.left}>
              <span
                className={`icon-transport ${s.logo} ${s.transportpink}`}
              ></span>
              <div className={s.title}>?????????????? ??????</div>
            </div>
            <div className={s.amount}>2</div>
          </div>
        </div>
        <div
          className={s.legendtoggler}
          onClick={() => setIsLegendActive(true)}
        >
          <span className="icon-burger"></span>?????????????? ??????????????????
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
