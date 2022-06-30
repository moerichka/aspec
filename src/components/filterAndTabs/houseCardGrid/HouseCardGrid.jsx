import React, { useState, useEffect } from "react";
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
    <div className="grid">
      <div className="grid__container container">
        <div className="grid__topMainWrapper">
          <div className="grid__topBar">
            <div className="grid__quantity">
              Найдено {props.filtredData?.length} квартир
            </div>
            <div className="grid__settings">
              <div className="grid__settingsSort">
                <span
                  className={`${
                    props.buildedStatus === 1 && "grid__setting-active"
                  }`}
                  onClick={() => {
                    props.buildedStatusToggler(1);
                  }}
                >
                  Активные
                </span>
                <span
                  className={`${
                    props.buildedStatus === 2 && "grid__setting-active"
                  }`}
                  onClick={() => {
                    props.buildedStatusToggler(2);
                  }}
                >
                  Завершенные
                </span>
              </div>
              <div className="grid__settingsView">
                <div
                  className={`grid__iconWrapper ${
                    props.isPanel && "grid__iconWrapper-active"
                  }`}
                  onClick={() => {
                    props.setIsPanel(true);
                  }}
                >
                  <span className="grid__panelIcon icon-panels"></span>
                </div>
                <div
                  className={`grid__iconWrapper ${
                    !props.isPanel && "grid__iconWrapper-active"
                  }`}
                  onClick={() => {
                    props.setIsPanel(false);
                  }}
                >
                  <span className="grid__locIcon icon-location"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.isPanel ? (
        <div className="grid__bottomWrapper">
          <div className="container">
            <div className="grid__cards">
              {props.filtredData.map(
                (card, index) =>
                  index < 9 && (
                    <Link to={`/project/${card.id}`} key={card.id}>
                      <HouseCard {...card} key={card.id} />
                    </Link>
                  )
              )}
            </div>
          </div>
          {props.withShowMore && (
            <Button
              bgColor="blue"
              content="Показать еще"
              width="184px"
            ></Button>
          )}
        </div>
      ) : (
        <div className="grid__mapWrapper">
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
