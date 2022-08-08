import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Projects, Offices } from "../../data";

import s from "./filterAndTabs.module.css";

// import { houseCards } from "../../dummyData";
import Filter from "./filter";

function FilterAndTabs(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const [ProjectsData, setProjectsData] = useState(Projects);
  const [OfficesData, setOfficesData] = useState(null);

  useEffect(() => {
    setProjectsData(Projects);
  }, []);

  useEffect(() => {
    setOfficesData(Offices);
  }, []);

  const tabs = [
    "Квартиры",
    "Кладовые",
    "Машиноместа",
    "Коммерческая недвижимость",
  ];

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div
          className={`${s.filterAndTabs} ${
            props.BGColor === "gray" ? "filterAndTabs-gray" : ""
          }`}
        >
          <div className={`${s.container} container-light`}>
            <h3 className={`${s.title} h2-title`}>{props.title}</h3>
            <div className={s.navWrapper}>
              <TabList className={s.nav}>
                <Tab className={s.tab} selectedClassName={s.tabSelected}>
                  <span className={s.tabtitle}>{tabs[0]}</span>
                </Tab>
                <Tab className={s.tab} selectedClassName={s.tabSelected}>
                  <span className={s.tabtitle}>{tabs[1]}</span>
                </Tab>
                <Tab className={s.tab} selectedClassName={s.tabSelected}>
                  <span className={s.tabtitle}>{tabs[2]}</span>
                </Tab>
                <Tab className={s.tab} selectedClassName={s.tabSelected}>
                  <span className={s.tabtitle}>{tabs[3]}</span>
                </Tab>
                <div className={s.navLine} />
              </TabList>
            </div>
          </div>
        </div>
        <TabPanel className={s.tabPanel} data-is-shown={tabIndex === 0}>
          <div
            className={`${s.wrapper} ${
              props.BGColor === "gray" ? "filterAndTabs-gray" : ""
            }`}
          >
            <Filter
              tab={tabs[0]}
              data={ProjectsData}
              easyFilter
              filters={props?.filterArray[0]}
              inputBGColor={props?.inputBGColor}
              dataRepresentation={props?.dataRepresentation[0]}
              withShowMore={props?.withShowMore}
              withLinkMore={props?.withLinkMore}
              isMain={props?.isMain}
            />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel} data-is-shown={tabIndex === 1}>
          <div className={s.wrapper}>
            <Filter
              tab={tabs[1]}
              data={ProjectsData}
              easyFilter
              filters={props.filterArray[1]}
              inputBGColor={props.inputBGColor}
              dataRepresentation={props?.dataRepresentation[1]}
              withShowMore={props.withShowMore}
              withLinkMore={props?.withLinkMore}
              isMain={props?.isMain}
            />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel} data-is-shown={tabIndex === 2}>
          <div className={s.wrapper}>
            <Filter
              tab={tabs[2]}
              data={ProjectsData}
              easyFilter
              filters={props.filterArray[2]}
              inputBGColor={props.inputBGColor}
              dataRepresentation={props?.dataRepresentation[2]}
              withShowMore={props.withShowMore}
              withLinkMore={props?.withLinkMore}
              isMain={props?.isMain}
            />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel} data-is-shown={tabIndex === 3}>
          <div className={s.wrapper}>
            <Filter
              tab={tabs[3]}
              data={OfficesData}
              easyFilter
              filters={props.filterArray[3]}
              inputBGColor={props.inputBGColor}
              dataRepresentation={props?.dataRepresentation[3]}
              withShowMore={props.withShowMore}
              withLinkMore={props?.withLinkMore}
              isMain={props?.isMain}
            />
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}

FilterAndTabs.propTypes = {
  title: PropTypes.string,
  inputBGColor: PropTypes.string,
  withShowMore: PropTypes.bool,
  isMain: PropTypes.bool,
  BGColor: PropTypes.string,
  withLinkMore: PropTypes.bool,
  dataRepresentation: PropTypes.arrayOf(PropTypes.string),
  filterArray: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

FilterAndTabs.defaultProps = {
  title: "Подбор недвижимости",
  BGColor: "white",
  inputBGColor: "gray",
  withShowMore: false,
  isMain: false,
  withLinkMore: false,
  dataRepresentation: ["", "", "", ""],
  filterArray: [
    ["districtInput", "priceInput", "dateInput", "flatInput"],
    ["districtInput", "priceInput", "dateInput"],
    ["districtInput", "priceInput", "dateInput"],
    ["districtInput", "spaceInput", "priceInput", "dateInput"],
  ],
};

export default FilterAndTabs;
