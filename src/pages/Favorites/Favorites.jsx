import React, { useState, useEffect, useRef } from "react";
import s from "./favorites.module.css";
import "./favorites.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

import Header from "../../components/header";
import Dashnav from "../../components/dashnav";
import Footer from "../../components/footer";
import Button from "../../components/button";

import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import Layout from "../../components/layout";
import LayoutCompare from "../../components/layoutCompare";

import { favorites } from "../../dummyData";

function Favorites(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const wayArray = [{ title: "Главная" }, { title: "Избранное" }];

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const scrollHandler = (e, ref) => {
    ref.current.scrollLeft = e?.target?.scrollLeft;
  };

  return (
    <div className={`${s.favorites} favorites`}>
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
                  <Layout
                    room={favorite}
                    favoritestyle={true}
                    key={favorite?.id}
                  ></Layout>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel className={s.tabpanel}>
            <div className={`${s.swiperwrapper} favorites__swiperwrapper`}>
              <Swiper
                className="swiper2"
                direction={"horizontal"}
                grabCursor={true}
                slidesPerView={windowWidth > 850 ? 3 : windowWidth > 370 ? 2 : 1}
                freeMode={true}
                scrollbar={{ draggable: "true" }}
                modules={[FreeMode, Scrollbar]}
              >
                  {favorites?.map((favorite) => (
                <SwiperSlide>
                    <div className={s.slide}>
                      <LayoutCompare room={favorite} key={favorite?.id} />
                    </div>
                </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}

export default Favorites;
