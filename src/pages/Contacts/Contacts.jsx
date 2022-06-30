import React, { useState, useEffect } from "react";
import s from "./contacts.module.css";
import { YMaps, Map, Placemark, Button } from "react-yandex-maps";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import {withErrorBoundary} from "react-error-boundary"

import Header from "../../components/header/Header";
import DashNav from "../../components/dashnav";
import Footer from "../../components/footer/Footer";
import { NoMatch404 } from "../NoMatch";

import loc from "../../assets/images/contactloc.svg"

function Contacts() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = ["Офис 1", "Офис 2", "Офис 3", "Офис 4"];

  const wayArray = [{ title:  <Link to="/" className="dashnav__link">Главная</Link>  }, { title: "Контакты" }];

  let mapHeight = "100%";

  return (
    <div className={s.contacts}>
      <Header withLine={true} />
      <div className={s.dashNav}>
        <DashNav wayArray={wayArray} />
      </div>
      <div className={s.content}>
        <div className="container">
          <h2 className="h2-title">Контакты</h2>
          <Tabs
            className={s.tableader}
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className={s.tabs}>
              {tabs?.map((tab, index) => (
                <Tab
                  className={s.tab}
                  selectedClassName={s.tabselected}
                  key={index}
                >
                  {tab}
                </Tab>
              ))}
            </TabList>
            {tabs?.map((tab) => (
              <TabPanel>
                <div className={s.contact}>
                  <div className={s.info}>
                    <h6 className={s.smalltitle}>Офис продаж и обслуживания</h6>
                    <div className={s.infolist}>
                      <div className={s.elem}>
                        <div className={s.elemtitle}>Телефон</div>
                        <div className={s.elemvalue}>(3412) 209-535</div>
                      </div>
                      <div className={s.elem}>
                        <div className={s.elemtitle}>Факс</div>
                        <div className={s.elemvalue}>(3412) 912-324</div>
                      </div>
                      <div className={s.elem}>
                        <div className={s.elemtitle}>Адрес</div>
                        <div className={s.elemvalue}>
                          г. Ижевск, ул.Пушкинская, 268 (этаж 1, кабинет 20)
                        </div>
                      </div>
                      <div className={s.elem}>
                        <div className={s.elemtitle}>Email</div>
                        <div className={s.elemvalue}>domstroy@aspec.ru</div>
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
                        instanceRef={(ref) => {
                          ref && ref.behaviors.disable("scrollZoom");
                        }}
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
  fallbackRender: ()=><NoMatch404/>,
  onError(error, info){
    console.log(error);
    console.log(info);
  }
});
