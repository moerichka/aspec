/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import s from "./layoutFull.module.css";

import Compass from "./compass/Compass";
import LevelsGrid from "./levelsGrid/LevelsGrid";

import Info from "./info/Info";
import LayoutPoligons from "./layoutPoligons/LayoutPoligons";
import Smallinfo from "./smallinfo/Smallinfo";

function LayoutFull(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [tabIndex, setTabIndex] = useState(0);

  const [selectedLevel, setSelectedLevel] = useState(1);
  const [levelsWithFlat, setLevelsWithFlat] = useState(null);
  const [, setLevelFlats] = useState(null);
  const [thisBuilding, setThisBuilding] = useState(null);

  const [infoVisible, setInfoVisible] = useState(false);
  const tabs = ["Квартиры", "Кладовые", "Парковочные места"];
  const tabsMiddle = ["Планировка", "На этаже", "Генплан"];

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    props?.tabIndex && setTabIndex(props?.tabIndex);
  }, [props?.tabIndex]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    props?.project?.levels &&
      setLevelsWithFlat(
        props?.project?.levels?.filter((level) =>
          level?.flats?.filter((elem) => elem?.flat === props?.layout?.id)
        )
      );
  }, [props?.project, props?.layout]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    levelsWithFlat &&
      setLevelFlats(
        levelsWithFlat[selectedLevel - 1]?.flats?.filter(
          (level) => level?.flat === props?.layout?.id
        )
      );
  }, [levelsWithFlat, selectedLevel, props?.layout]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    props?.project?.buildings &&
      setThisBuilding(
        props?.project?.buildings?.filter(
          (building) => building?.number === props?.layout?.house
        )[0]
      );
  }, [props?.project, props?.layout]);

  useEffect(() => {
    setInfoVisible(false);
  }, [tabIndex]);

  const layoutClickHandler = (number) => {
    // eslint-disable-next-line no-unused-expressions
    infoVisible === number ? setInfoVisible(false) : setInfoVisible(number);
  };

  const amountOfLevels = levelsWithFlat?.length;

  return (
    <div className={s.layoutFull}>
      {/* <div className="container"> */}
      <Tabs
        className={s.tabLeader}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className={s.tabs}>
          <div className={s.tabwrapper}>
            <Tab className={s.tab} selectedClassName={s.tabSelected}>
              {tabs[0]}
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabSelected}>
              {tabs[1]}
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabSelected}>
              {tabs[2]}
            </Tab>
          </div>
        </TabList>
        <TabPanel className={s.tabpanel}>
          <div className="container">
            <div className={`${s.flat} ${s.flatgrid}`}>
              <div className={s.levels}>
                <h6 className={s.levelstitle}>Этаж</h6>
                <div className={s.levelsgrid}>
                  <LevelsGrid
                    levels={props?.project?.levels}
                    selectedLevel={selectedLevel}
                    setSelectedLevel={setSelectedLevel}
                  />
                </div>
                <div className={s.compass}>
                  <Compass degree={props?.layout?.degree} />
                </div>
              </div>
              <div className={s.layout}>
                <Tabs className={s.tabsmiddlewrapper}>
                  {/* ПЛАНИРОВКА */}
                  <TabPanel>
                    <div className={`${s.layoutimgwrapper} ${s.layoutlayout}`}>
                      <img
                        className={s.layoutimg}
                        src={`${PF}${props?.layout?.layouts[0]}`}
                        alt=""
                      />
                    </div>
                  </TabPanel>
                  {/* НА ЭТАЖЕ */}
                  <TabPanel>
                    <div className={s.levellayout}>
                      <LayoutPoligons
                        layout={props?.project?.levels[selectedLevel]?.image}
                        polygons={[
                          props?.project?.levels[selectedLevel]?.flats[0],
                        ]}
                        styleVarient="levels1"
                      />
                    </div>
                  </TabPanel>
                  {/* ГЕНПЛАН */}
                  <TabPanel>
                    <div className={s.genplanlayout}>
                      <LayoutPoligons
                        layout={props?.project?.genLayout}
                        polygons={[thisBuilding]}
                        styleVarient="genplan"
                      />
                    </div>
                  </TabPanel>
                  <TabList className={s.tabsmiddle}>
                    <Tab
                      className={s.tabmiddle}
                      selectedClassName={s.tabSelectedmiddle}
                    >
                      {tabsMiddle[0]}
                    </Tab>
                    <Tab
                      className={s.tabmiddle}
                      selectedClassName={s.tabSelectedmiddle}
                    >
                      {tabsMiddle[1]}
                    </Tab>
                    <Tab
                      className={s.tabmiddle}
                      selectedClassName={s.tabSelectedmiddle}
                    >
                      {tabsMiddle[2]}
                    </Tab>
                  </TabList>
                </Tabs>
              </div>
              <div className={s.info}>
                <Info
                  project={props?.project}
                  layout={props?.layout}
                  selectedLevel={selectedLevel}
                  amountOfLevels={amountOfLevels}
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel className={s.tabpanel}>
          <div className="container">
            <h2 className={`h2-title ${s.additionaltitle}`}>
              Кладовая в проекте {props?.project?.name}
            </h2>
            <div className={`${s.flatlarder}`}>
              <div className={`${s.levels} ${s.levelslarder}`}>
                <h6 className={s.levelstitle}>Этаж</h6>
                <div className={s.levelsgrid}>
                  <LevelsGrid
                    levels={props?.project?.levels}
                    selectedLevel={selectedLevel}
                    setSelectedLevel={setSelectedLevel}
                  />
                </div>
              </div>
              <div className={`${s.compass} ${s.compasslarder}`}>
                <Compass degree={props?.layout?.degree} />
              </div>
              <div className={s.larderlayout}>
                <LayoutPoligons
                  layout={props?.project?.larder?.image}
                  polygons={props?.project?.larder?.slots}
                  infoVisible={infoVisible}
                  styleVarient="levels"
                  clickHandler={layoutClickHandler}
                />
                {infoVisible?.number && (
                  <Smallinfo
                    infoVisible={infoVisible}
                    setInfoVisible={setInfoVisible}
                    title="Кладовая"
                  />
                )}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel className={s.tabpanel}>
          <div className="container">
            <h2 className={`h2-title ${s.additionaltitle}`}>
              Паркинг в проекте {props?.project?.name}
            </h2>
            <div className={`${s.flatparking}`}>
              <div className={`${s.levels} ${s.levelsparking}`}>
                <h6 className={s.levelstitle}>Этаж</h6>
                <div className={s.levelsgrid}>
                  <LevelsGrid
                    levels={props?.project?.levels}
                    selectedLevel={selectedLevel}
                    setSelectedLevel={setSelectedLevel}
                  />
                </div>
              </div>
              <div className={`${s.compass} ${s.compassparking}`}>
                <Compass degree={props?.layout?.degree} />
              </div>
              <div className={s.layoutparking}>
                <LayoutPoligons
                  layout={props?.project?.parking?.image}
                  polygons={props?.project?.parking?.slots}
                  infoVisible={infoVisible}
                  hidenumber
                  styleVarient="parking"
                  clickHandler={layoutClickHandler}
                />
                {infoVisible?.number && (
                  <Smallinfo
                    infoVisible={infoVisible}
                    setInfoVisible={setInfoVisible}
                    title="Парковочное место"
                  />
                )}
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
      {/* </div> */}
    </div>
  );
}

LayoutFull.propTypes = {
  project: PropTypes.object,
  layout: PropTypes.object,
  tabIndex: PropTypes.number,
};

LayoutFull.defaultProps = {
  tabIndex: 0,
};

export default LayoutFull;
