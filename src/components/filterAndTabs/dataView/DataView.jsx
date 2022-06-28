import React, { useState } from "react";
import s from "./dataView.module.css";

import Planns from "./planns";
import List from "./list";
import Pannels from "./pannels";
import Chekmate from "./checkmate";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

function DataView(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const [isPriceSort, setIsPriceSort] = useState(false)
  const [isSpaceSort, setIsSpaceSort] = useState(false)

  return (
    <div className={s.dataView}>
      <Tabs
        className={s.tableader}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <div className={s.topcontainer}>
          <TabList className={s.tabs}>
            <Tab className={s.tab} selectedClassName={s.tabselected}>
              <span className="icon-plan"></span> Плаинровки
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabselected}>
              <span className="icon-list"></span> Список
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabselected}>
              <span className="icon-panels"></span> Шахматка
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabselected}>
              <span className="icon-checkmate"></span> Шахматка +
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
            <Planns data={props?.filtredData} />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={`${s.panelcontainer} ${s.containerlist}`}>
            <List data={props?.filtredData} />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={`${s.panelcontainer} ${s.containerpannels}`}>
            <Pannels data={props?.filtredData} />
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={`${s.panelcontainer} ${s.containercheckmate}`}>
            <Chekmate data={props?.filtredData} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default DataView;
