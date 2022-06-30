import React, { useState, useEffect } from "react";
import s from "./filterAndTabs.module.css";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Filter from "./filter";

// import { houseCards } from "../../dummyData";
import { Projects, Offices } from "../../data";

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
    <>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div
          className={`${s.filterAndTabs} ${
            props.BGcolor === "gray" ? "filterAndTabs-gray" : ""
          }`}
        >
          <div className={`${s.container} container-light`}>
            <h3 className={`${s.title} h2-title`}>{props.title}</h3>
            <div className={s.navWrapper}>
              <TabList className={s.nav}>
                <Tab className={s.tab} selectedClassName={s.tabselected}>
                  <span className={s.tabtitle}>{tabs[0]}</span>
                </Tab>
                <Tab className={s.tab} selectedClassName={s.tabselected}>
                  <span className={s.tabtitle}>{tabs[1]}</span>
                </Tab>
                <Tab className={s.tab} selectedClassName={s.tabselected}>
                  <span className={s.tabtitle}>{tabs[2]}</span>
                </Tab>
                <Tab className={s.tab} selectedClassName={s.tabselected}>
                  <span className={s.tabtitle}>{tabs[3]}</span>
                </Tab>
                <div className={s.navLine}></div>
              </TabList>
            </div>
          </div>
        </div>
        <TabPanel>
          <div
            className={`${s.wrapper} ${
              props.BGcolor === "gray" ? "filterAndTabs-gray" : ""
            }`}
          >
            <Filter
              tab={tabs[0]}
              data={ProjectsData}
              easyFilter={true}
              filters={props.filterArray[0]}
              inputbgColor={props.inputbgColor}
              dataRepresentetion={props?.dataRepresentetion[0]}
              withShowMore={props.withShowMore}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.wrapper}>
            <Filter
              tab={tabs[1]}
              data={ProjectsData}
              easyFilter={true}
              filters={props.filterArray[1]}
              inputbgColor={props.inputbgColor}
              dataRepresentetion={props?.dataRepresentetion[1]}
              withShowMore={props.withShowMore}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.wrapper}>
            <Filter
              tab={tabs[2]}
              data={ProjectsData}
              easyFilter={true}
              filters={props.filterArray[2]}
              inputbgColor={props.inputbgColor}
              dataRepresentetion={props?.dataRepresentetion[2]}
              withShowMore={props.withShowMore}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.wrapper}>
            <Filter
              tab={tabs[3]}
              data={OfficesData}
              easyFilter={true}
              filters={props.filterArray[3]}
              inputbgColor={props.inputbgColor}
              dataRepresentetion={props?.dataRepresentetion[3]}
              withShowMore={props.withShowMore}
            />
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}

FilterAndTabs.propTypes = {
  title: PropTypes.string,
  withGrid: PropTypes.bool,
  inputbgColor: PropTypes.string,
  withShowMore: PropTypes.bool,
  BGcolor: PropTypes.string,
  filterArray: PropTypes.array,
  dataRepresentetion: PropTypes.array,
};

FilterAndTabs.defaultProps = {
  title: "Подбор недвижимости",
  BGcolor: "white",
  inputbgColor: "gray",
  withShowMore: true,
  dataRepresentetion: ["", "", "", ""],
  filterArray: [
    ["districtInput", "priceInput", "dateInput", "flatInput"],
    ["districtInput", "priceInput", "dateInput"],
    ["districtInput", "priceInput", "dateInput"],
    ["districtInput", "spaceInput", "priceInput", "dateInput"],
  ],
};

export default FilterAndTabs;
