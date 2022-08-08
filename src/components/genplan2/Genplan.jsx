import React, { useState } from "react";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import s from "./genplan.module.css";

import InnerTabs from "./innerTabs/InnerTabs";


function GenPlan() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className={s.genplan}>
      <Tabs
        className={s.tabLeader}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <div className={s.toppart}>
          <div className={s.titlewrapper}>
            <h2 className="h2-title">Генплан проекта</h2>
          </div>
          <TabList className={s.tabs}>
            <div className={s.tabswrapper}>
              <Tab className={s.tab} selectedClassName={s.tabSelected}>
                Квартиры
              </Tab>
              <Tab className={s.tab} selectedClassName={s.tabSelected}>
                Кладовые
              </Tab>
              <Tab className={s.tab} selectedClassName={s.tabSelected}>
                Паркинг
              </Tab>
              <Tab className={s.tab} selectedClassName={s.tabSelected}>
                Коммерческая недвижимость
              </Tab>
            </div>
          </TabList>
        </div>
        <div className={s.container}>
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
