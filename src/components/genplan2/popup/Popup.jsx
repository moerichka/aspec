/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import s from "./popup.module.css";

function Popup(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className={s.popup}>
      <div className={s.popupClose} onClick={props?.goBack}>
        <span className="icon-cancel" />
      </div>
      <div className={s.content}>
        <Tabs
          className={s.tabLeader}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className={s.tabs}>
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
              Кладовые
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabSelected}>
              Паркинг
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabSelected}>
              Кладовые
            </Tab>
            <Tab className={s.tab} selectedClassName={s.tabSelected}>
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
              <div className={s.videoContainer}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5qap5aO4i9A"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                 />
              </div>
            </TabPanel>
            <TabPanel className={s.tabPanel} />
            <TabPanel className={s.tabPanel} />
            <TabPanel className={s.tabPanel} />
            <TabPanel className={s.tabPanel} />
            <TabPanel className={s.tabPanel} />
            <TabPanel className={s.tabPanel} />
          </div>
        </Tabs>
      </div>
      <div className={s.transportLink}>
        <div className="container">
          <div className={s.transportContainer}>
            <h6 className={s.transportTitle}>Транспортная доступность</h6>
            <div className={s.transportArrow}>
              <span className="icon-projectArrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  goBack: PropTypes.func,
};

Popup.defaultProps = {
  goBack: ()=>{},
};

export default Popup;
