import React, { useState } from "react";
import s from "./filterAndTabs.module.css";
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Filter from "../filter";

import { houseCards } from "../../dummyData";

function FilterAndTabs(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const [dataArray, setDataArray] = useState(houseCards);
  
  const tabs = [
    "Квартиры",
    "Кладовые",
    "Машиноместа",
    "Коммерческая недвижимость",
  ];

  return (
    <>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className={`${s.filterAndTabs} ${props.BGcolor === "gray" ? "filterAndTabs-gray" : ""}`}>
          <div className={`${s.container} container-light`}>
            <h3 className={`${s.title} h2-title`}>{props.title}</h3>
            <div className={s.navWrapper}>
              <TabList className={s.nav}>
                <Tab className={s.tab} selectedClassName={s.tabselected}>{tabs[0]}</Tab>
                <Tab className={s.tab} selectedClassName={s.tabselected}>{tabs[1]}</Tab>
                <Tab className={s.tab} selectedClassName={s.tabselected}>{tabs[2]}</Tab>
                <Tab className={s.tab} selectedClassName={s.tabselected}>{tabs[3]}</Tab>
                <div className={s.navLine}></div>
              </TabList>
            </div>
          </div>
        </div>
        <TabPanel>
          <div className={`${s.wrapper} ${props.BGcolor === "gray" ? "filterAndTabs-gray" : ""}`}>
            <Filter
              tab={tabs[0]}
              data={dataArray}
              {...props.filterArray[0]}
              withGrid={props.withGrid}
              withShowMore={props.withShowMore}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.wrapper}>
            <Filter
              tab={tabs[1]}
              data={dataArray}
              {...props.filterArray[1]}
              withGrid={props.withGrid}
              withShowMore={props.withShowMore}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.wrapper}>
            <Filter
              tab={tabs[2]}
              data={dataArray}
              {...props.filterArray[2]}
              withGrid={props.withGrid}
              withShowMore={props.withShowMore}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.wrapper}>
            <Filter
              tab={tabs[3]}
              data={dataArray}
              {...props.filterArray[3]}
              withGrid={props.withGrid}
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
  withShowMore: PropTypes.bool,
  BGcolor: PropTypes.string,
  filterArray: PropTypes.array,
}

FilterAndTabs.defaultProps = {
  title: "Подбор недвижимости",
  withGrid: true,
  BGcolor: "white",
  withShowMore: true,
  filterArray: [
    {
      districtInput: true,
      priceInput: true,
      dateInput: true,
      flatInput: true,
    },
    {
      districtInput: true,
      priceInput: true,
      dateInput: true,
    },
    {
      districtInput: true,
      priceInput: true,
      dateInput: true,
    },
    {
      districtInput: true,
      spaceInput: true,
      priceInput: true,
      dateInput: true,
    },
  ]
}

export default FilterAndTabs