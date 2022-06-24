import React, { useState } from "react";
import s from "./popup.module.css";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

function Popup(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className={s.popup}>
      <div className={s.popupclose} onClick={props?.goback}>
        <span className="icon-cancel"></span>
      </div>
      <div className={s.content}>
        <Tabs
          className={s.tableader}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className={s.tabs}>
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
              Кладовые
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabselected}>
              Паркинг
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabselected}>
              Кладовые
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabselected}>
              Паркинг
            </Tab>
          </TabList>
          <div className={`container ${s.container}`}>
            <TabPanel className={s.tabPanel}>
              <div className={s.titlewrapper}>
                <h2 className={`h2-title ${s.title}`}>Расположение</h2>
                <div className={s.desc}>
                  <p>
                    Расположение комплекса вблизи хвойного леса настраивает на
                    гармонию с природой. 5 домов с огороженной территорией
                    предполагают приватную атмосферу, где новоселам будет
                    комфортно жить вне городской суеты.
                  </p>
                  <p>
                    Первый дом комплекса будет 17-этажным и иметь два подъезда.
                    Во внешнем облике используется кирпич различных оттенков,
                    образующих градиентные переходы на фасаде.
                  </p>
                </div>
              </div>
              <div className={s.videocontainer}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5qap5aO4i9A"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </TabPanel>
            <TabPanel className={s.tabPanel}></TabPanel>
            <TabPanel className={s.tabPanel}></TabPanel>
            <TabPanel className={s.tabPanel}></TabPanel>
            <TabPanel className={s.tabPanel}></TabPanel>
            <TabPanel className={s.tabPanel}></TabPanel>
            <TabPanel className={s.tabPanel}></TabPanel>
          </div>
        </Tabs>
      </div>
      <div className={s.transportlink}>
        <div className="container">
          <div className={s.transportcontainer}>
            <h6 className={s.transporttitle}>Транспортная доступность</h6>
            <div className={s.transportarrow}>
              <span className="icon-projectArrow"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
