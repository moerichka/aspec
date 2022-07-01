import React, { useState, useEffect } from "react";
import s from "./houseCardGrid.module.css";
import "./houseCardGrid.css";
import "react-tabs/style/react-tabs.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../button";
import HouseCard from "../houseCard";
import { houseCardMap } from "../../../helpers/htmlElementMap";

const HouseCardGrid = (props) => {
  const navigate = useNavigate()
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [maxAmountCards, setMaxAmountCards] = useState(9);
  const [baloonOpen, setBaloonOpen] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    const moreMap = document.querySelector(".houseCard__more");
    moreMap?.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = e?.target?.getAttribute("data-projectId")
      navigate(`/project/${projectId}`)
    });
  }, [baloonOpen]);

  let mapHeight = "760px";
  windowWidth < 1440 && (mapHeight = "600px");
  windowWidth < 800 && (mapHeight = "580px");

  return (
    <div className={`${s.grid} grid`}>
      <div className={`${s.container} container`}>
        <div className={s.topMainWrapper}>
          <div className={s.topBar}>
            <div className={s.quantity}>
              Найдено {props.filtredData?.length} квартир
            </div>
            <div className={s.settings}>
              <div className={s.settingsSort}>
                <span
                  className={`${
                    props.buildedStatus === 1 && s.settingActive}
                  `}
                  onClick={() => {
                    props.buildedStatusToggler(1);
                  }}
                >
                  Активные
                </span>
                <span
                  className={`${
                    props.buildedStatus === 2 && s.settingActive
                  }`}
                  onClick={() => {
                    props.buildedStatusToggler(2);
                  }}
                >
                  Завершенные
                </span>
              </div>
              <div className={s.settingsView}>
                <div
                  className={`${s.iconWrapper} ${
                    props.isPanel && s.iconWrapperActive
                  }`}
                  onClick={() => {
                    props.setIsPanel(true);
                  }}
                >
                  <span className={`${s.panelIcon} icon-panels`}></span>
                </div>
                <div
                  className={`${s.iconWrapper} ${
                    !props.isPanel && s.iconWrapperActive
                  }`}
                  onClick={() => {
                    props.setIsPanel(false);
                  }}
                >
                  <span className={`${s.locIcon} icon-location`}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.isPanel ? (
        <div className={s.bottomWrapper}>
          <div className="container">
            <div className={s.cards}>
              {props?.filtredData?.map(
                (card, index) =>
                  index < maxAmountCards && (
                    <Link to={`/project/${card.id}`} key={card.id} >
                      <div className={s.card} data-isopen="true">
                        <HouseCard {...card} key={card.id} />
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
          {props?.withShowMore && maxAmountCards + 3 <= props?.filtredData?.length && (
            <Button
              bgColor="blue"
              content="Показать еще"
              width="184px"
              onClick={()=>setMaxAmountCards(prev=>prev+3)}
            ></Button>
          )}
          {props?.withLinkMore && (
            <Button
              bgColor="blue"
              content="Показать еще"
              width="184px"
              onClick={()=>navigate("/projects")}
            ></Button>
          )}
        </div>
      ) : (
        <div className={s.mapWrapper}>
          <YMaps>
            <Map
              defaultState={{ center: [55.75, 37.57], zoom: 11 }}
              width="100%"
              height={mapHeight}
              instanceRef={(ref) => {
                ref && ref.behaviors.disable("scrollZoom");
              }}
            >
              {props.filtredData.map((elem) => (
                <Placemark
                  modules={["geoObject.addon.balloon"]}
                  key={elem.id}
                  defaultGeometry={elem.location}
                  onClick={() => {
                    setBaloonOpen((prev) => prev + 1);
                  }}
                  properties={{
                    balloonContentBody: houseCardMap(elem),
                  }}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: `${PF}loc.svg`,
                    iconCaption: `${elem.name}`,
                  }}
                />
              ))}
            </Map>
          </YMaps>
        </div>
      )}
    </div>
  );
};

export default HouseCardGrid;
