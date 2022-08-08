import React, { useState, useEffect } from "react";

import "./favorites.css";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { FreeMode, Scrollbar } from "swiper";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";

import Scroller from "../../components/scroller";
import Dashnav from "../../components/dashnav";
import Footer from "../../components/footer";
import { NoMatchPage } from "../NoMatch";

import Header from "../../components/header";
import Layout from "../../components/layout";
import LayoutCompare from "../../components/layoutCompare";

import { favorites } from "../../dummyData";

import s from "./favorites.module.css";

function Favorites() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [tabIndex, setTabIndex] = useState(0);
  const wayArray = [
    {
      title: (
        <Link to="/" className="dash-nav__link">
          Главная
        </Link>
      ),
    },
    { title: "Избранное" },
  ];

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const sizeHandler = () => {
    if (windowWidth > 850) {
      return 3;
    }
    if (windowWidth > 370) {
      return 2;
    }
    return 1;
  };

  // const scrollHandler = (e, ref) => {
  //   ref.current.scrollLeft = e?.target?.scrollLeft;
  // };

  return (
    <div className={`${s.favorites} favorites`}>
      <Header withLine />
      <Scroller />
      <div className={s.dashNav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.content}>
        <Tabs
          className={s.tabLeader}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <div className="container">
            <TabList className={s.tabs}>
              <Tab className={s.tab} selectedClassName={s.tabSelected}>
                Избранное
              </Tab>
              <Tab className={s.tab} selectedClassName={s.tabSelected}>
                Сравнение
              </Tab>
            </TabList>
          </div>
          <TabPanel className={s.tabpanel}>
            <div className="container">
              <div className={s.favoritesGrid}>
                {favorites?.map((favorite) => (
                  <Layout room={favorite} favoriteStyle key={favorite?.id} />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel className={s.tabpanel}>
            <div className={`${s.swiperWrapper} favorites__swiper-wrapper`}>
              <Swiper
                className="swiper2"
                direction="horizontal"
                grabCursor
                slidesPerView={sizeHandler()}
                freeMode
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

export default withErrorBoundary(Favorites, {
  fallbackRender: () => <NoMatchPage />,
  onError(error, info) {
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  },
});
