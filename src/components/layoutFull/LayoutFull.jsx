import React, { useState, useEffect } from "react";
import s from "./layoutFull.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Button from "../button/Button";

import { dateConverterToQuarter } from "../../helpers/dateFun";
import { separator } from "../../helpers/stringsFun";

function LayoutFull(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [levelsWithFlat, setLevelsWithFlat] = useState([]);
  const [finishingOn, setFinishingOn] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ["Квартиры", "Кладовые", "Парковочные места"];
  const tabsMiddle = ["Планировка", "На этаже", "Генплан"];

  useEffect(() => {
    setLevelsWithFlat(
      props.project?.levels.filter((level) =>
        level.flats.includes(props.layout?.id)
      )
    );
  }, [props.project, props.layout]);

  const amountOfLevels = levelsWithFlat?.length;

  const compassDegree = {
    transform: `translate(-50%, 50%) rotate(${props?.layout?.degree}deg)`,
  };

  return (
    <div className={s.layoutFull}>
      <div className="container">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={s.tabs}>
            <Tab className={s.tab} selectedClassName={s.tabselected}>
              {tabs[0]}
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabselected}>
              {tabs[1]}
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabselected}>
              {tabs[2]}
            </Tab>
          </TabList>
          <TabPanel>
            <div className={s.flat}>
              <div className={s.levels}>
                <h6 className={s.levelstitle}>Этаж</h6>
                <div className={s.levelsgrid}>
                  {props?.project?.levels?.map((level, index) => (
                    <div
                      className={`${s.level} ${
                        level?.level === selectedLevel ? s.selectedlevel : ""
                      }`}
                      onClick={() => setSelectedLevel(level?.level)}
                    >
                      {level?.level}
                    </div>
                  ))}
                </div>
                <div className={s.compass}>
                  <span className={`${s.compassletter} ${s.compassN}`}>С</span>
                  <span className={`${s.compassletter} ${s.compassE}`}>В</span>
                  <span className={`${s.compassletter} ${s.compassS}`}>Ю</span>
                  <span className={`${s.compassletter} ${s.compassW}`}>З</span>
                  <div className={s.compasscircle}></div>
                  <div className={s.compassvertical}></div>
                  <div className={s.compasshorizontal}></div>
                  <div className={s.compassline} style={compassDegree}></div>
                </div>
              </div>
              <div className={s.layout}>
                <Tabs className={s.tabsmiddlewrapper}>
                  <TabPanel>
                    <div className={s.layoutimgwrapper}>
                      <img className={s.layoutimg} src={`${PF}${props.layout?.layouts[0]}`} alt="" />
                    </div>
                  </TabPanel>
                  <TabList className={s.tabsmiddle}>
                    <Tab className={s.tabmiddle} selectedClassName={s.tabselectedmiddle}>{tabsMiddle[0]}</Tab>
                    <Tab className={s.tabmiddle} selectedClassName={s.tabselectedmiddle}>{tabsMiddle[1]}</Tab>
                    <Tab className={s.tabmiddle} selectedClassName={s.tabselectedmiddle}>{tabsMiddle[2]}</Tab>
                  </TabList>
                </Tabs>
              </div>
              <div className={s.info}>
                <div className={s.infotopwrapper}>
                  <h3 className={s.infotitle}>
                    {props.layout?.name} {props.layout?.space} м²
                  </h3>
                  <span className="icon-mark"></span>
                </div>
                <div className={s.infoprojectname}>
                  Проект {props.project.name}
                </div>
                <div className={s.infogrid}>
                  <span className={s.infoelemtitle}>Срок сдачи</span>
                  <span className={s.infoelemvalue}>
                    {dateConverterToQuarter(props?.layout?.openDate)}
                  </span>
                  <span className={s.infoelemtitle}>Дом</span>
                  <span className={s.infoelemvalue}>
                    {props?.layout?.house}
                  </span>
                  <span className={s.infoelemtitle}>Подъезд</span>
                  <span className={s.infoelemvalue}>
                    {props?.layout?.entrance}
                  </span>
                  <span className={s.infoelemtitle}>Этаж</span>
                  <span className={s.infoelemvalue}>
                    {selectedLevel}{" "}
                    <span className={s.valuegray}>из {amountOfLevels}</span>
                  </span>
                  <span className={s.infoelemtitle}>Номер квартиры</span>
                  <span className={s.infoelemvalue}>
                    {props?.layout?.flatNumber}
                  </span>
                  <span className={s.infoelemtitle}>Улица</span>
                  <span className={s.infoelemvalue}>
                    {props?.layout?.street}
                  </span>
                  <span className={s.infoelemtitle}>Район</span>
                  <span className={s.infoelemvalue}>
                    {props?.layout?.district}
                  </span>
                </div>
                <div className={s.infofinishing}>
                  <div
                    className={`${s.toggler} ${finishingOn ? s.togglerOn : ""}`}
                    onClick={() => {
                      setFinishingOn((prev) => !prev);
                    }}
                  >
                    <div className={s.togglerpoint}></div>
                  </div>
                  <span>
                    Добавить отделку{" "}
                    <span className={s.togglerbold}>
                      стоимость + {props?.layout?.finishingPrice} ₽
                    </span>
                  </span>
                </div>
                <div className={s.infoline}></div>
                <div className={s.mortgage}>
                  <span className={s.mortgagetitle}>Ипотека</span>
                  <div className={s.mortgagevarients}>
                    <div className={s.mortgagevarient}>
                      <span className={s.mortgagegreen}>3.8% </span>
                      <span>от </span>
                      <span className={s.mortgageunderline}>
                        21 600 ₽ / мес
                      </span>
                    </div>
                    <div className={s.mortgagevarient}>
                      <span className={s.mortgagegreen}>5.69% </span>
                      <span>от </span>
                      <span className={s.mortgageunderline}>
                        26 200 ₽ / мес
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.infoprice}>
                  {finishingOn
                    ? separator(
                        props?.layout?.price + props?.layout?.finishingPrice
                      )
                    : separator(props?.layout?.price)}
                  ₽
                </div>
                <div className={s.infobuttons}>
                  <Button
                    content={"Консультация"}
                    bgColor={"transparent"}
                    width={"155px"}
                  />
                  <Button
                    content={"Забронировать"}
                    bgColor={"blue"}
                    width={"155px"}
                  />
                  <Link to={""}>
                    <div className={s.infoshare}>
                      <span className="icon-share"></span>
                    </div>
                  </Link>
                </div>
                <div className={s.infopdf}>
                  <Link to={""}>Скачать PDF</Link>;
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div></div>
          </TabPanel>
          <TabPanel>
            <div></div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default LayoutFull;
