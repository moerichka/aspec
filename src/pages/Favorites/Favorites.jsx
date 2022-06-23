import React, { useState, useEffect, useRef } from "react";
import s from "./favorites.module.css";

import Header from "../../components/header";
import Dashnav from "../../components/dashnav";
import Footer from "../../components/footer";
import Button from "../../components/button";

import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import Layout from "../../components/layout";

import { favorites } from "../../dummyData";

function Favorites() {
  const [scrollLeft, setScrollLeft] = useState(0)
  const [tabIndex, setTabIndex] = useState(0);
  const wayArray = [{ title: "Главная" }, { title: "Избранное" }];

  const fakecontainer = useRef(null);
  const comparecontainer = useRef(null);

  const scrollHandler = (e, ref) => {
    ref.current.scrollLeft = e?.target?.scrollLeft;
  };


  return (
    <div className={s.favorites}>
      <Header withLine={true} />
      <div className={s.dashnav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.content}>
        <Tabs
          className={s.tableader}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <div className="container">
            <TabList className={s.tabs}>
              <Tab className={s.tab} selectedClassName={s.tabselected}>
                Избранное
              </Tab>
              <Tab className={s.tab} selectedClassName={s.tabselected}>
                Сравнение
              </Tab>
            </TabList>
          </div>
          <TabPanel className={s.tabpanel}>
            <div className="container">
              <div className={s.favoritesgrid}>
                {favorites?.map((favorite) => (
                  <Layout room={favorite} key={favorite?.id}></Layout>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel className={s.tabpanel}>
            <div
              className={s.fakecontainer}
              onScroll={(e) => {
                window?.innerWidth > 1150 && scrollHandler(e, comparecontainer);
              }}
              ref={fakecontainer}
            >
              <div className={s.fakecontent}>
                {favorites?.map((favorite, index) => (
                  <div key={index}></div>
                ))}
                <div className={s.last}></div>
              </div>
            </div>
            <div
              className={s.comparecontainer}
              onScroll={(e) => {
                window?.innerWidth < 1150 && scrollHandler(e, fakecontainer);
              }}
              ref={comparecontainer}
            >
              <div className={s.favoritesline}>
                {favorites?.map((favorite) => (
                  <Layout room={favorite} compare={true} key={favorite?.id}></Layout>
                ))}
                <div className={s.last}></div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}

export default Favorites;
