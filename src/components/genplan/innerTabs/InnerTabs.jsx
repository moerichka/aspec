/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ProgressiveImage from "react-progressive-graceful-image";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Poligons from "../poligons";

import { genplan } from "../../../dummyData";

import projectImage from "../../../assets/images/image24.jpg";
import projectImageSmall from "../../../assets/images/image24small.jpg";
import sectionImage from "../../../assets/images/image23.jpg";
import sectionImageSmall from "../../../assets/images/image23small.jpg";
import buildingImage from "../../../assets/images/image22.jpg";
import buildingImageSmall from "../../../assets/images/image22small.jpg";
import layoutImage from "../../../assets/images/layout1.png";
import Popup from "../popup/Popup";

import s from "./innerTabs.module.css";

function InnerTabs(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [chosenHousing, setChosenHousing] = useState(null);
  const [chosenSection, setChosenSection] = useState(null);
  const [chosenLevel, setChosenLevel] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [chosenFlat, setChosenFlat] = useState(null);

  const imageProject = { image: projectImage, imageSmall: projectImageSmall };
  const imageSection = { image: sectionImage, imageSmall: sectionImageSmall };
  const imageBuilding = {
    image: buildingImage,
    imageSmall: buildingImageSmall,
  };

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

  const goBack = () => {
    setTabIndex(3);
    setIsPopupOpen(false);
  };

  const levels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className={s.innerTabs}>
      <Tabs
        className={s.tabLeader}
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
            selectedClassName={s.tabSelected}
          >
            <span className="icon-projectArrow" />
          </Tab>
          <Tab
            className={`${s.tab} ${tabIndex >= 1 ? s.tabvisible : ""}`}
            selectedClassName={s.tabSelected}
          >
            Корпус {chosenHousing?.number}
          </Tab>
          <Tab
            className={`${s.tab} ${tabIndex >= 2 ? s.tabvisible : ""}`}
            selectedClassName={s.tabSelected}
          >
            Секция {chosenSection?.number}
          </Tab>
          <Tab
            // className={`${s.tab} ${tabIndex >= 3 ? s.tabvisible : ""}`}
            className={s.tab}
            data-invisible="true"
            selectedClassName={s.tabSelected}
           />
          <Tab
            // className={`${s.tab} ${tabIndex >= 4 ? s.tabvisible : ""}`}
            className={s.tab}
            data-invisible="true"
            selectedClassName={s.tabSelected}
           />
        </TabList>
        <TabPanel className={`${s.tabPanel} ${s.tabpanel1}`}>
          <div className={s.imgwrapper}>
            {imageProject?.imageSmall ? (
              <ProgressiveImage
                src={imageProject?.image}
                placeholder={imageProject?.imageSmall}
              >
                {(src, loading) => (
                  <img
                    style={{
                      filter: loading ? "blur(10px)" : "blur(0px)",
                      transition: "0.3s",
                    }}
                    src={src}
                    alt=""
                    className={`${s.img} ${s.projectImage}`}
                  />
                )}
              </ProgressiveImage>
            ) : (
              <img
                src={imageProject?.image}
                alt=""
                className={`${s.img} ${s.projectImage}`}
              />
            )}
            <Poligons
              poligons={genplan?.housings}
              infocorpus
              onClick={(polygon) => godown(polygon, "housing")}
              centred
            />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={s.imgwrapper}>
            {imageSection?.imageSmall ? (
              <ProgressiveImage
                src={imageSection?.image}
                placeholder={imageSection?.imageSmall}
              >
                {(src, loading) => (
                  <img
                    style={{
                      filter: loading ? "blur(10px)" : "blur(0px)",
                      transition: "0.3s",
                    }}
                    src={src}
                    alt=""
                    className={`${s.img} ${s.sectionImage}`}
                  />
                )}
              </ProgressiveImage>
            ) : (
              <img
                src={imageSection?.image}
                alt=""
                className={`${s.img} ${s.sectionImage}`}
              />
            )}
            <Poligons
              poligons={chosenHousing?.sections}
              onClick={(polygon) => godown(polygon, "section")}
              infosection
              centred
            />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={s.imgwrapper}>
            {imageBuilding?.imageSmall ? (
              <ProgressiveImage
                src={imageBuilding?.image}
                placeholder={imageBuilding?.imageSmall}
              >
                {(src, loading) => (
                  <img
                    style={{
                      filter: loading ? "blur(10px)" : "blur(0px)",
                      transition: "0.3s",
                    }}
                    src={src}
                    alt=""
                    className={`${s.img} ${s.buildingImage}`}
                  />
                )}
              </ProgressiveImage>
            ) : (
              <img
                src={imageBuilding?.image}
                alt=""
                className={`${s.img} ${s.buildingImage}`}
              />
            )}
            <Poligons
              poligons={chosenSection?.levels}
              onClick={(polygon) => godown(polygon, "level")}
              infolevel
              centred
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
                  {levels?.map((level) => (
                    <div
                      className={`${s.level} ${
                        level === chosenLevel?.level ? s.selectedlevel : ""
                      }`}
                      onClick={() => props?.setChosenLevel(level)}
                      key={level}
                    >
                      {level}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={s.secondpart}>
              <div className={s.layoutimgwrapper}>
                {layoutImage?.imageSmall ? (
                  <ProgressiveImage
                    src={imageProject?.image}
                    placeholder={imageProject?.imageSmall}
                  >
                    {(src, loading) => (
                      <img
                        style={{
                          filter: loading ? "blur(10px)" : "blur(0px)",
                          transition: "0.3s",
                        }}
                        src={src}
                        alt=""
                        className={s.layoutimg}
                      />
                    )}
                  </ProgressiveImage>
                ) : (
                  <img src={layoutImage} alt="" className={s.layoutimg} />
                )}
                <Poligons
                  poligons={chosenLevel?.flats}
                  onClick={(polygon) => godown(polygon, "flat")}
                  flatlevel
                  oneClick
                />
              </div>
              <span className={s.roomsamount}>1 квартира в продаже</span>
            </div>
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <Popup goBack={goBack} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

InnerTabs.propTypes = {
  setChosenLevel: PropTypes.func,
};

InnerTabs.defaultProps = {
  setChosenLevel: () => {},
};

export default InnerTabs;
