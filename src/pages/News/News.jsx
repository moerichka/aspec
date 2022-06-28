import React, {useState} from "react";
import s from "./news.module.css";
import PropTypes from "prop-types"

import { Tabs, Tab, TabPanel, TabList } from "react-tabs";

import Header from "../../components/header";
import Dashnav from "../../components/dashnav";
import NewsGrid from "../../components/newsGrid";
import Footer from "../../components/footer";

function News(props) {
  const [tabIndex, setTabIndex] = useState(props?.tabIndex);
  const wayArray = [{ title: "Главная" }, { title: "Акции и новости" }];

  return (
    <div className={s.news}>
      <Header withLine={true} />
      <div className={s.dashnav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.Newsgrid}>
        <Tabs
          className={s.tableader}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <div className="container">
            <div className={s.topwrapper}>
              <h2 className={`${s.toptitle} h2-title`}>{tabIndex === 1 ? "Новости" : "Акции"}</h2>
              <TabList className={s.tabs}>
                <Tab className={s.tab} selectedClassName={s.tabselected}>
                  Акции
                </Tab>
                <Tab className={s.tab} selectedClassName={s.tabselected}>
                  Новости
                </Tab>
              </TabList>
            </div>
          </div>
          <TabPanel className={s.tabpanel}>
            <NewsGrid
              buttonShowMore={true}
              maxAmountNews={3}
              buttonAll={false}
              titlewrapper={false}
            />
          </TabPanel>
          <TabPanel className={s.tabpanel}>
            <NewsGrid
              buttonShowMore={true}
              maxAmountNews={12}
              buttonAll={false}
              titlewrapper={false}
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

export default News;
