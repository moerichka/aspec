/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom"

import ScrollContainer from "react-indiana-drag-scroll";
import ProgressiveImage from "react-progressive-graceful-image";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Polygons from "../polygons";

// import { genplan2 } from "../../../dummyData";

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
  const navigate = useNavigate()
  const [tabIndex, setTabIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [chosenHousing, setChosenHousing] = useState(null);
  const [chosenSection, setChosenSection] = useState(null);
  const [chosenLevel, setChosenLevel] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [chosenFlat, setChosenFlat] = useState(null);
  const [isImgLoading, setIsImgLoading] = useState(null);
  const indianaScroll = useRef(null);

  const imageProject = { image: projectImage, imageSmall: projectImageSmall };
  const imageSection = { image: sectionImage, imageSmall: sectionImageSmall };
  const imageBuilding = {
    image: buildingImage,
    imageSmall: buildingImageSmall,
  };

  useEffect(() => {
    const element = indianaScroll.current;
    if (element) {
      element.scrollLeft = (element.scrollWidth - element.clientWidth) / 2;
    }
  }, [isImgLoading]);

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

  const housingPolygons = [
    {
      id: 0,
      dots: [
        { x: 48.9, y: 77 },
        { x: 53.65, y: 82.85 },
        { x: 58.25, y: 74.7 },
        { x: 58.8, y: 54 },
        { x: 57.1, y: 52 },
        { x: 53.55, y: 58.15 },
        { x: 50.5, y: 54 },
        { x: 48.9, y: 57.3 },
      ],
      number: 3.2,
      ready: 0.65,
      flatsAmount: 97,
      date: "2022-04-11T15:00:00.000+05:00",
      flats: [
        {
          name: "Студия",
          price: 3500000,
        },
        {
          name: "1-комн.",
          price: 3500000,
        },
        {
          name: "2-комн.",
          price: 4500000,
        },
        {
          name: "3-комн.",
          price: 5500000,
        },
        {
          name: "4-комн.",
          price: 6500000,
        },
      ],
    },
    {
      id: 1,
      dots: [
        { x: 57.65, y: 25.85 },
        { x: 57.1, y: 47.7 },
        { x: 59.3, y: 49.85 },
        { x: 59.65, y: 47.45 },
        { x: 61, y: 45.15 },
        { x: 61.9, y: 26.85 },
        { x: 58.9, y: 24.45 },
      ],
    },
    {
      id: 2,
      dots: [
        { x: 63.9, y: 15.55 },
        { x: 63.25, y: 28.3 },
        { x: 66.4, y: 30.55 },
        { x: 67.1, y: 29 },
        { x: 68, y: 17 },
        { x: 67.25, y: 16.15 },
        { x: 66.95, y: 15 },
        { x: 65.7, y: 13.85 },
        { x: 63.3, y: 15 },
        { x: 64.65, y: 14.15 },
      ],
    },
  ];
  const sectionsPolygons = [
    {
      id: 0,
      dots: [
        { x: 59.55, y: 90.55 },
        { x: 60.45, y: 41.85 },
        { x: 45.25, y: 29.3 },
        { x: 37.95, y: 35.3 },
        { x: 38.35, y: 80.3 },
        { x: 52.6, y: 98.45 },
      ],
      number: 2,
      ready: 0.65,
      flatsAmount: 97,
      date: "2022-04-11T15:00:00.000+05:00",
      flats: [
        {
          name: "Студия",
          price: 3500000,
        },
        {
          name: "1-комн.",
          price: 3500000,
        },
        {
          name: "2-комн.",
          price: 4500000,
        },
        {
          name: "3-комн.",
          price: 5500000,
        },
        {
          name: "4-комн.",
          price: 6500000,
        },
      ],
    },
    {
      id: 1,
      dots: [
        { x: 29.95, y: 62.3 },
        { x: 16.9, y: 46.55 },
        { x: 6.3, y: 54.55 },
        { x: 9.1, y: 100 },
        { x: 31.55, y: 100 },
      ],
      number: 1,
    },
  ];

  const floorsPolygons = [
    {
      id: 0,
      dots: [
        { x: 45.2, y: 73.55 },
        { x: 31.8, y: 67.15 },
        { x: 21.2, y: 72.15 },
        { x: 21.05, y: 77.85 },
        { x: 31.8, y: 73.45 },
        { x: 45.35, y: 79 },
      ],
      number: 3,
      ready: 0.65,
      flatsAmount: 97,
      date: "2022-04-11T15:00:00.000+05:00",
    },
    {
      id: 1,
      dots: [
        { x: 45.25, y: 84.7 },
        { x: 31.7, y: 79.85 },
        { x: 21.2, y: 83.45 },
        { x: 21.2, y: 88.7 },
        { x: 31.7, y: 86.3 },
        { x: 45.25, y: 90 },
      ],
      number: 5,
    },
  ];

  const layoutPolygons = [
    {
      id: 0,
      number: 7,
      dots: [
        { x: 49.9, y: 55.6 },
        { x: 22.3, y: 55.4 },
        { x: 22.05, y: 89.75 },
        { x: 38.8, y: 89.35 },
        { x: 38.8, y: 96.25 },
        { x: 49.5, y: 96.05 },
      ],
    },
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
        <TabPanel className={s.tabPanel}>
          <ScrollContainer
            className={s.visibleContainer}
            innerRef={indianaScroll}
          >
            <div className={s.imgWrapper}>
              {imageProject?.imageSmall ? (
                <ProgressiveImage
                  src={imageProject?.image}
                  placeholder={imageProject?.imageSmall}
                >
                  {(src, loading) => {
                    setIsImgLoading(loading);
                    return (
                      <img
                        style={{
                          filter: loading ? "blur(10px)" : "blur(0px)",
                          transition: "0.3s",
                        }}
                        src={src}
                        alt=""
                        className={`${s.img} ${s.projectImage}`}
                      />
                    );
                  }}
                </ProgressiveImage>
              ) : (
                <img
                  src={imageProject?.image}
                  alt=""
                  className={`${s.img} ${s.projectImage}`}
                />
              )}
              <Polygons
                polygons={housingPolygons}
                infocorpus
                onClick={(polygon) => godown(polygon, "housing")}
                centred
              />
            </div>
          </ScrollContainer>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <ScrollContainer
            className={s.visibleContainer}
            innerRef={indianaScroll}
          >
            <div className={s.imgWrapper}>
              {imageSection?.imageSmall ? (
                <ProgressiveImage
                  src={imageSection?.image}
                  placeholder={imageSection?.imageSmall}
                >
                  {(src, loading) => {
                    setIsImgLoading(loading);
                    return (
                      <img
                        style={{
                          filter: loading ? "blur(10px)" : "blur(0px)",
                          transition: "0.3s",
                        }}
                        src={src}
                        alt=""
                        className={`${s.img} ${s.sectionImage}`}
                      />
                    );
                  }}
                </ProgressiveImage>
              ) : (
                <img
                  src={imageSection?.image}
                  alt=""
                  className={`${s.img} ${s.sectionImage}`}
                />
              )}
              <Polygons
                polygons={sectionsPolygons}
                onClick={(polygon) => godown(polygon, "section")}
                infosection
                centred
              />
            </div>
          </ScrollContainer>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <ScrollContainer
            className={s.visibleContainer}
            innerRef={indianaScroll}
          >
            <div className={s.imgWrapper}>
              {imageBuilding?.imageSmall ? (
                <ProgressiveImage
                  src={imageBuilding?.image}
                  placeholder={imageBuilding?.imageSmall}
                >
                  {(src, loading) => {
                    setIsImgLoading(loading);
                    return (
                      <img
                        style={{
                          filter: loading ? "blur(10px)" : "blur(0px)",
                          transition: "0.3s",
                        }}
                        src={src}
                        alt=""
                        className={`${s.img} ${s.buildingImage}`}
                      />
                    );
                  }}
                </ProgressiveImage>
              ) : (
                <img
                  src={imageBuilding?.image}
                  alt=""
                  className={`${s.img} ${s.buildingImage}`}
                />
              )}
              <Polygons
                polygons={floorsPolygons}
                onClick={(polygon) => godown(polygon, "level")}
                infolevel
                centred
              />
            </div>
          </ScrollContainer>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={s.layoutContainer}>
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
                <div className={s.layoutimgWrapper}>
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
                  <Polygons
                    polygons={layoutPolygons}
                    // onClick={(polygon) => godown(polygon, "flat")}
                    onClick={(polygon) => navigate(`/project/${0}/layout/${1}`)}
                    flatlevel
                    oneClick
                  />
                </div>
                <span className={s.roomsamount}>1 квартира в продаже</span>
              </div>
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
