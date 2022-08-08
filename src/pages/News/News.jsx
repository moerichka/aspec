import React, {useState} from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import {withErrorBoundary} from "react-error-boundary"

import { Tabs, Tab, TabPanel, TabList } from "react-tabs";

import Header from "../../components/header";
import Scroller from "../../components/scroller";
import Dashnav from "../../components/dashnav";
import NewsGrid from "../../components/newsGrid";
import Footer from "../../components/footer";
import { NoMatchPage } from "../NoMatch";

import s from "./news.module.css";

function News(props) {
  const [tabIndex, setTabIndex] = useState(props?.tabIndex);
  const wayArray = [{ title: <Link to="/" className="dash-nav__link">Главная</Link> }, { title: "Акции и новости" }];

  return (
    <div className={s.news}>
      <Header withLine />
      <Scroller />
      <div className={s.dashNav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.Newsgrid}>
        <Tabs
          className={s.tabLeader}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <div className="container">
            <div className={s.topwrapper}>
              <h2 className={`${s.toptitle} h2-title`}>{tabIndex === 1 ? "Новости" : "Акции"}</h2>
              <TabList className={s.tabs}>
                <Tab className={s.tab} selectedClassName={s.tabSelected}>
                  Акции
                </Tab>
                <Tab className={s.tab} selectedClassName={s.tabSelected}>
                  Новости
                </Tab>
              </TabList>
            </div>
          </div>
          <TabPanel className={s.tabpanel}>
            <NewsGrid
              buttonShowMore
              maxAmountNews={6}
              buttonAll={false}
              titleWrapper={false}
            />
          </TabPanel>
          <TabPanel className={s.tabpanel}>
            <NewsGrid
              buttonShowMore
              maxAmountNews={6}
              buttonAll={false}
              titleWrapper={false}
            />
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}


News.propTypes = {
  tabIndex: PropTypes.number,
};

News.defaultProps = {
  tabIndex: 0,
};

export default withErrorBoundary(News, {
  fallbackRender: ()=><NoMatchPage/>,
  onError(error, info){
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  }
});
