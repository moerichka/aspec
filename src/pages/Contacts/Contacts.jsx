import React, { useState } from "react";


import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import {withErrorBoundary} from "react-error-boundary"

import Header from "../../components/header/Header";
import DashNav from "../../components/dashnav";
import Footer from "../../components/footer/Footer";
import { NoMatchPage } from "../NoMatch";

import loc from "../../assets/images/contactloc.svg"

import s from "./contacts.module.css";

function Contacts() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = ["Офис 1", "Офис 2", "Офис 3", "Офис 4"];

  const wayArray = [{ title:  <Link to="/" className="dash-nav__link">Главная</Link>  }, { title: "Контакты" }];

  const mapHeight = "100%";

  return (
    <div className={s.contacts}>
      <Header withLine />
      <div className={s.dashNav}>
        <DashNav wayArray={wayArray} />
      </div>
      <div className={s.content}>
        <div className="container">
          <h2 className="h2-title">Контакты</h2>
          <Tabs
            className={s.tabLeader}
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className={s.tabs}>
              {tabs?.map((tab) => (
                <Tab
                  className={s.tab}
                  selectedClassName={s.tabSelected}
                  key={tab}
                >
                  {tab}
                </Tab>
              ))}
            </TabList>
            {tabs?.map(() => (
              <TabPanel>
                <div className={s.contact}>
                  <div className={s.info}>
                    <h6 className={s.smallTitle}>Офис продаж и обслуживания</h6>
                    <div className={s.infoList}>
                      <div className={s.elem}>
                        <div className={s.elemTitle}>Телефон</div>
                        <div className={s.elemValue}>(3412) 209-535</div>
                      </div>
                      <div className={s.elem}>
                        <div className={s.elemTitle}>Факс</div>
                        <div className={s.elemValue}>(3412) 912-324</div>
                      </div>
                      <div className={s.elem}>
                        <div className={s.elemTitle}>Адрес</div>
                        <div className={s.elemValue}>
                          г. Ижевск, ул.Пушкинская, 268 (этаж 1, кабинет 20)
                        </div>
                      </div>
                      <div className={s.elem}>
                        <div className={s.elemTitle}>Email</div>
                        <div className={s.elemValue}>domstroy@aspec.ru</div>
                      </div>
                    </div>
                  </div>
                  <div className={s.map}>
                    <YMaps>
                      <Map
                        defaultState={{
                          center: [55.790182, 37.711634],
                          zoom: 18,
                        }}
                        width="100%"
                        height={mapHeight}
                        instanceRef={(ref) => (
                          ref && ref.behaviors.disable("scrollZoom"))}
                        controls={[]}
                      >
                        <Placemark
                          modules={["geoObject.addon.balloon"]}
                          defaultGeometry={[55.790182, 37.711634]}
                          options={{
                            iconLayout: "default#image",
                            iconImageHref: loc,
                            iconImageSize: [70, 70],
                          }}
                        />
                      </Map>
                    </YMaps>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withErrorBoundary(Contacts, {
  fallbackRender: ()=><NoMatchPage/>,
  onError(error, info){
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  }
});
