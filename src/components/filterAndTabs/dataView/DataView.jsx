/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import s from "./dataView.module.css";

import Planns from "./planns";
import List from "./list";
import Pannels from "./pannels";
import Chekmate from "./checkmate";


function DataView(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const [isPriceSort, setIsPriceSort] = useState(false)
  const [isSpaceSort, setIsSpaceSort] = useState(false)

  return (
    <div className={s.dataView}>
      <Tabs
        className={s.tabLeader}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <div className={s.topcontainer}>
          <TabList className={s.tabs}>
            <Tab className={s.tab} selectedClassName={s.tabSelected}>
              <span className="icon-plan" /> Планировки
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabSelected}>
              <span className="icon-list" /> Список
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabSelected}>
              <span className="icon-panels" /> Шахматка
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabSelected}>
              <span className="icon-checkmate" /> Шахматка +
            </Tab>
          </TabList>
          {tabIndex === 0 && (
            <div className={s.sorter}>
              <div className={s.sorterTitle}>Сортировка:</div>
              <div className={s.sorterValues}>
                <span className={s.sorterValue} onClick={()=>setIsPriceSort(prev=>!prev)}>
                  Цена <span className={`icon-dropdown ${s.sorterIcon}`} data-on={isPriceSort}/>
                </span>
                <span className={s.sorterValue} onClick={()=>setIsSpaceSort(prev=>!prev)}>
                  Площадь <span className={`icon-dropdown ${s.sorterIcon}`} data-on={isSpaceSort}/>
                </span>
              </div>
            </div>
          )}
        </div>
        <TabPanel className={s.tabPanel}>
          <div className={`${s.panelcontainer} ${s.containerplanns}`}>
            <Planns data={props?.filteredData} />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={`${s.panelcontainer} ${s.containerlist}`}>
            <List data={props?.filteredData} />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={`${s.panelcontainer} ${s.containerpannels}`}>
            <Pannels data={props?.filteredData} />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={`${s.panelcontainer} ${s.containercheckmate}`}>
            <Chekmate data={props?.filteredData} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

DataView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  filteredData: PropTypes.array
};

DataView.defaultProps = {
  filteredData: []
};

export default DataView;
