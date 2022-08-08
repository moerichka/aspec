/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./houseCardGrid.css";
import "react-tabs/style/react-tabs.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../button";
import HouseCard from "../houseCard";
import { houseCardMap } from "../../../helpers/htmlElementMap";

import s from "./houseCardGrid.module.css";

function HouseCardGrid(props) {
  const navigate = useNavigate();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [maxAmountCards, setMaxAmountCards] = useState(9);
  const [baloonOpen, setBaloonOpen] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    const moreMap = document.querySelector(".houseCard__more");
    moreMap?.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = e?.target?.getAttribute("data-projectId");
      navigate(`/project/${projectId}`);
    });
  }, [baloonOpen, navigate]);

  let mapHeight = "760px";
  if (windowWidth < 1440) {
    mapHeight = "600px";
  } else if (windowWidth < 800) {
    mapHeight = "580px";
  }

  return (
    <div className={`${s.grid} grid`}>
      <div className={`${s.container} container`}>
        <div className={s.topMainWrapper}>
          <div className={s.topBar}>
            {props?.isMain && (
              <div className={s.quantity}>
                Найдено {props?.filteredData?.length} квартир
              </div>
            )}
            <div className={s.settings}>
              <div className={s.settingsSort}>
                <span
                  className={`${props?.buildedStatus === 1 && s.settingActive}
                  `}
                  onClick={() => {
                    props?.buildedStatusToggler(1);
                  }}
                >
                  Активные
                </span>
                <span
                  className={`${props?.buildedStatus === 2 && s.settingActive}`}
                  onClick={() => {
                    props?.buildedStatusToggler(2);
                  }}
                >
                  Завершенные
                </span>
              </div>
              <div className={s.settingsView}>
                <div
                  className={`${s.iconWrapper} ${
                    props?.isPanel && s.iconWrapperActive
                  }`}
                  onClick={() => {
                    props?.setIsPanel(true);
                  }}
                >
                  <span className={`${s.panelIcon} icon-panels`} />
                </div>
                <div
                  className={`${s.iconWrapper} ${
                    !props?.isPanel && s.iconWrapperActive
                  }`}
                  onClick={() => {
                    props?.setIsPanel(false);
                  }}
                >
                  <span className={`${s.locIcon} icon-location`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props?.isPanel ? (
        <div className={s.bottomWrapper}>
          <div className="container">
            <div className={s.cards}>
              {props?.filteredData?.map(
                (card, index) =>
                  index < maxAmountCards && (
                    <Link to={`/project/${card.id}`} key={card.id}>
                      <div className={s.card} data-is-open="true">
                        <HouseCard {...card} key={card.id} />
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
          {props?.withShowMore &&
            maxAmountCards + 3 <= props?.filteredData?.length && (
              <Button
                BGColor="blue"
                content="Показать еще"
                width="184px"
                onClick={() => setMaxAmountCards((prev) => prev + 3)}
              />
            )}
          {props?.withLinkMore && (
            <Button
              BGColor="blue"
              content="Показать еще"
              width="184px"
              onClick={() => navigate("/projects")}
            />
          )}
        </div>
      ) : (
        <div className={s.mapWrapper}>
          <YMaps>
            <Map
              defaultState={{ center: [55.75, 37.57], zoom: 11 }}
              width="100%"
              height={mapHeight}
              instanceRef={(ref) => ref && ref.behaviors.disable("scrollZoom")}
            >
              {props?.filteredData?.map((elem) => (
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
}

HouseCardGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  filteredData: PropTypes.arrayOf(PropTypes.object),
  withShowMore: PropTypes.bool,
  withLinkMore: PropTypes.bool,
  isMain: PropTypes.bool,
  isPanel: PropTypes.bool,
  setIsPanel: PropTypes.func,
  buildedStatus: PropTypes.number,
  buildedStatusToggler: PropTypes.func,
};

HouseCardGrid.defaultProps = {
  filteredData: [],
  withShowMore: false,
  withLinkMore: false,
  isMain: false,
  isPanel: false,
  setIsPanel: () => {},
  buildedStatus: 0,
  buildedStatusToggler: () => {},
};

export default HouseCardGrid;
