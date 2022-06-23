import React, { useState } from "react";
import s from "./genplan.module.css";

import InnerTabs from "./innerTabs/InnerTabs";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

function GenPlan() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className={s.genplan}>
      <Tabs
        className={s.tableader}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <div className={s.toppart}>
          <div className={s.titlewrapper}>
            <h2 className="h2-title">Генплан проекта</h2>
          </div>
          <TabList className={s.tabs}>
            <div className={s.tabswrapper}>
              <Tab className={s.tab} selectedClassName={s.tabselected}>
                Квартиры
              </Tab>
              <Tab className={s.tab} selectedClassName={s.tabselected}>
                Кладовые
              </Tab>
              <Tab className={s.tab} selectedClassName={s.tabselected}>
                Паркинг
              </Tab>
              <Tab className={s.tab} selectedClassName={s.tabselected}>
                Комерческая недвижимость
              </Tab>
            </div>
          </TabList>
        </div>
        <div className="container">
          <div className={s.content}>
            <TabPanel className={s.tabPanel}>
              <InnerTabs />
            </TabPanel>
            <TabPanel className={s.tabPanel}>
              <InnerTabs />
            </TabPanel>
            <TabPanel className={s.tabPanel}>
              <InnerTabs />
            </TabPanel>
            <TabPanel className={s.tabPanel}>
              <InnerTabs />
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default GenPlan;
