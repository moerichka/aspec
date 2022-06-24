import React, { useState, useEffect } from "react";
import s from "./innerTabs.module.css";

import Poligons from "../poligons";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import { genplan } from "../../../dummyData";

import projectImage from "../../../assets/images/image24.jpg";
import sectionImage from "../../../assets/images/image23.jpg";
import buildingImage from "../../../assets/images/image22.jpg";
import layoutImage from "../../../assets/images/layout1.png";
import Popup from "../popup/Popup";

function InnerTabs(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [chosenHousing, setChosenHousing] = useState(null);
  const [chosenSection, setChosenSection] = useState(null);
  const [chosenLevel, setChosenLevel] = useState(null);
  const [chosenFlat, setChosenFlat] = useState(null);


  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? "hidden" : "unset";
  }, [isPopupOpen]);

  // useEffect(() => {
  //   setIsInfoVisible(false);
  // }, [tabIndex]);

  const godown = (polygon, state) => {
    if (state === "housing") {
      setChosenHousing(polygon);
      setTabIndex(1);
    } else if (state === "section") {
      setChosenSection(polygon);
      setTabIndex(2);
    } else if (state === "level") {
      setChosenLevel(polygon);
      setTabIndex(3);
    } else if (state === "flat") {
      setChosenFlat(polygon);
      setTabIndex(4);
      setIsPopupOpen(true);
    }
  };

  const goback = () => {
    setTabIndex(3);
    setIsPopupOpen(false);
  };

  const levels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className={s.innerTabs}>
      <Tabs
        className={s.tableader}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList
          className={s.tabs}
          data-visible={tabIndex === 1 || tabIndex === 2 || tabIndex === 3}
        >
          <Tab
            className={`${s.tab} ${s.tabarrow} ${
              tabIndex >= 1 ? s.tabvisible : ""
            }`}
            selectedClassName={s.tabselected}
          >
            <span className="icon-projectArrow"></span>
          </Tab>
          <Tab
            className={`${s.tab} ${tabIndex >= 1 ? s.tabvisible : ""}`}
            selectedClassName={s.tabselected}
          >
            Корпус {chosenHousing?.number}
          </Tab>
          <Tab
            className={`${s.tab} ${tabIndex >= 2 ? s.tabvisible : ""}`}
            selectedClassName={s.tabselected}
          >
            Секция {chosenSection?.number}
          </Tab>
          <Tab
            // className={`${s.tab} ${tabIndex >= 3 ? s.tabvisible : ""}`}
            className={s.tab}
            data-invisible="true"
            selectedClassName={s.tabselected}
          ></Tab>
          <Tab
            // className={`${s.tab} ${tabIndex >= 4 ? s.tabvisible : ""}`}
            className={s.tab}
            data-invisible="true"
            selectedClassName={s.tabselected}
          ></Tab>
        </TabList>
        <TabPanel className={`${s.tabPanel} ${s.tabpanel1}`}>
          <div className={s.imgwrapper}>
            <img
              src={projectImage}
              alt=""
              className={`${s.img} ${s.projectImage}`}
            />
            <Poligons
              poligons={genplan?.housings}
              infocorpus={true}
              onClick={(polygon) => godown(polygon, "housing")}
              centred={true}
            />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={s.imgwrapper}>
            <img
              src={sectionImage}
              alt=""
              className={`${s.img} ${s.sectionImage}`}
            />
            <Poligons
              poligons={chosenHousing?.sections}
              onClick={(polygon) => godown(polygon, "section")}
              infosection={true}
              centred={true}
            />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={s.imgwrapper}>
            <img
              src={buildingImage}
              alt=""
              className={`${s.img} ${s.buildingImage}`}
            />
            <Poligons
              poligons={chosenSection?.levels}
              onClick={(polygon) => godown(polygon, "level")}
              infolevel={true}
              centred={true}
            />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={s.layoutwrapper}>
            <div className={s.firstpart}>
              <div className={s.layouttitle}>
                <span className={s.layoutcorpus}>
                  Корпус {chosenHousing?.number}
                </span>
                <span className={s.layoutsection}>
                  Секция {chosenSection?.number}
                </span>
              </div>
              <div className={s.layoutlevels}>
                <span className={s.layoutlevelstitle}>Этаж</span>
                <div className={s.levelsgrid}>
                  {levels?.map((level, index) => (
                    <div
                      className={`${s.level} ${
                        level === chosenLevel?.level ? s.selectedlevel : ""
                      }`}
                      onClick={() => props?.setChosenLevel(level)}
                      key={index}
                    >
                      {level}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={s.secondpart}>
              <div className={s.layoutimgwrapper}>
                <img src={layoutImage} alt="" className={s.layoutimg} />
                <Poligons
                  poligons={chosenLevel?.flats}
                  onClick={(polygon) => godown(polygon, "flat")}
                  flatlevel={true}
                  oneClick={true}
                />
              </div>
              <span className={s.roomsamount}>1 квартира в продаже</span>
            </div>
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <Popup goback={goback} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default InnerTabs;
