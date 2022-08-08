import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import ProgressiveImage from "react-progressive-graceful-image";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Scroller from "../../components/scroller";
import CustomSelector from "../../components/customSelector";

import { NoMatchPage } from "../NoMatch";

import backPicture from "../../assets/images/image28.jpg";
import backPictureSmall from "../../assets/images/image28small.jpg";

import s from "./toInvestors.module.css";

function ToInvestors() {
  const [tabIndex, setTabIndex] = useState(0);
  const [chosenCategory, setChosenCategory] = useState(null);

  const image1 = { image: backPicture, imageSmall: backPictureSmall };

  const docCategoryOptions = [
    { value: "issues", label: "Эмиссионные документы" },
    { value: "reports ", label: "Отчеты" },
    { value: "events", label: "Cущественные события" },
    { value: "docs", label: "Документы" },
  ];

  return (
    <div className={s.toInvestors}>
      <Header />
      <Scroller />
      <div className={s.helloElement}>
        <div className="container">
          <div className={s.dashnav}>
            <Link to="/" className="dash-nav__link">
              Главная
            </Link>{" "}
            / Инвесторам
          </div>
          <div className={s.titleWrapper}>
            <h2 className={s.helloTitle}>Инвесторам</h2>
            <h5 className={s.helloDesc}>
              Старт продаж дома № 3, жилого комплекса «Плюс один»
            </h5>
          </div>
        </div>
        <div className={s.darkPanel} />
        {image1?.imageSmall ? (
          <ProgressiveImage
            src={image1?.image}
            placeholder={image1?.imageSmall}
          >
            {(src, loading) => (
              <img
                style={{
                  filter: loading ? "blur(10px)" : "blur(0px)",
                  transition: "0.3s",
                }}
                src={src}
                alt=""
                className={s.helloBack}
              />
            )}
          </ProgressiveImage>
        ) : (
          <img src={image1?.image} alt="" className={s.helloBack} />
        )}
      </div>
      <div className={s.content}>
        <Tabs
          className={s.tabLeader}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <div className={s.topContainer}>
            <TabList className={s.tabs}>
              <Tab className={s.tab} selectedClassName={s.tabSelected}>
                <span className={s.tabTitle}>Основные показатели</span>
              </Tab>
              <Tab className={s.tab} selectedClassName={s.tabSelected}>
                <span className={s.tabTitle}>Раскрытие информации</span>
              </Tab>
            </TabList>
          </div>
          <TabPanel className={s.tabPanel}>
            <Tabs className={s.innerTabLeader}>
              <div className={s.bottomContainer}>
                <TabList className={s.innerTabList}>
                  <Tab
                    className={s.innerTab}
                    selectedClassName={s.innerTabSelected}
                  >
                    Финансовые
                  </Tab>
                  <Tab
                    className={s.innerTab}
                    selectedClassName={s.innerTabSelected}
                  >
                    Операционные
                  </Tab>
                </TabList>
              </div>
              <TabPanel className={s.tabPanelTable}>
                <div className={s.tableContainer}>
                  <table className={s.table}>
                    <thead>
                      <tr>
                        <th
                          className={`${s.tableTitle} ${s.tableTitleLong} ${s.tableLineTitle}`}
                        >
                          Наименование показателя
                        </th>
                        <th className={s.tableTitle}>1998</th>
                        <th className={s.tableTitle}>2001</th>
                        <th className={s.tableTitle}>2002</th>
                        <th className={s.tableTitle}>2003</th>
                        <th className={s.tableTitle}>2004</th>
                        <th className={s.tableTitle}>2005</th>
                        <th className={s.tableTitle}>2006</th>
                        <th className={s.tableTitle}>2007</th>
                        <th className={s.tableTitle}>2008</th>
                        <th className={s.tableTitle}>2009</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel className={s.tabPanelTable}>
                <div className={s.tableContainer}>
                  <table className={s.table}>
                    <thead>
                      <tr>
                        <th
                          className={`${s.tableTitle} ${s.tableTitleLong} ${s.tableLineTitle}`}
                        >
                          Наименование показателя
                        </th>
                        <th className={s.tableTitle}>1998</th>
                        <th className={s.tableTitle}>2001</th>
                        <th className={s.tableTitle}>2002</th>
                        <th className={s.tableTitle}>2003</th>
                        <th className={s.tableTitle}>2004</th>
                        <th className={s.tableTitle}>2005</th>
                        <th className={s.tableTitle}>2006</th>
                        <th className={s.tableTitle}>2007</th>
                        <th className={s.tableTitle}>2008</th>
                        <th className={s.tableTitle}>2009</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tableLineTitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tableValue}>Показатель 1</th>
                        <th className={s.tableValue}>Показатель 2</th>
                        <th className={s.tableValue}>Показатель 3</th>
                        <th className={s.tableValue}>Показатель 4</th>
                        <th className={s.tableValue}>Показатель 5</th>
                        <th className={s.tableValue}>Показатель 6</th>
                        <th className={s.tableValue}>Показатель 7</th>
                        <th className={s.tableValue}>Показатель 8</th>
                        <th className={s.tableValue}>Показатель 9</th>
                        <th className={s.tableValue}>Показатель 0</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel className={s.tabPanelDocument}>
            <div className={s.documentsContainer}>
              <div className={s.documentsWrapper}>
                <div className={s.topDocuments}>
                  <div className={`${s.filterWrapper} ${s.filterWrapper1}`}>
                    <span className={s.filterTitle}>Категория документов</span>
                    <CustomSelector
                      placeholder="Любые"
                      BGColor="white"
                      options={docCategoryOptions}
                      defaultValue={chosenCategory}
                      value={chosenCategory}
                      setChosen={setChosenCategory}
                      valueFS="16px"
                      isSearchable={false}
                    />
                  </div>
                  <div className={`${s.filterWrapper} ${s.filterWrapper2}`}>
                    <span className={s.filterTitle}>Год документа</span>
                    <CustomSelector
                      placeholder="Любые"
                      BGColor="white"
                      valueFS="16px"
                      isSearchable={false}
                    />
                  </div>
                </div>
                <div className={s.bottomDocuments}>
                  <div className={s.documents}>
                    <div className={s.document}>
                      <span className={s.documentTitle}>
                        Материально-техническое обеспечение
                      </span>
                      <div className={s.documentContent}>
                        <span className={s.documentFormat}>PDF</span>
                        <span className={s.documentDate}>4 квартал 2022</span>
                        <a href="/" className={s.documentDownload}>
                          <span className={`icon-download ${s.documentIcon}`} />{" "}
                          Скачать
                        </a>
                      </div>
                    </div>
                    <div className={s.document}>
                      <span className={s.documentTitle}>
                        Материально-техническое обеспечение
                      </span>
                      <div className={s.documentContent}>
                        <span className={s.documentFormat}>PDF</span>
                        <span className={s.documentDate}>4 квартал 2022</span>
                        <a href="/" className={s.documentDownload}>
                          <span className={`icon-download ${s.documentIcon}`} />{" "}
                          Скачать
                        </a>
                      </div>
                    </div>
                    <div className={s.document}>
                      <span className={s.documentTitle}>
                        Материально-техническое обеспечение
                      </span>
                      <div className={s.documentContent}>
                        <span className={s.documentFormat}>PDF</span>
                        <span className={s.documentDate}>4 квартал 2022</span>
                        <a href="/" className={s.documentDownload}>
                          <span className={`icon-download ${s.documentIcon}`} />{" "}
                          Скачать
                        </a>
                      </div>
                    </div>
                    <div className={s.document}>
                      <span className={s.documentTitle}>
                        Материально-техническое обеспечение
                      </span>
                      <div className={s.documentContent}>
                        <span className={s.documentFormat}>PDF</span>
                        <span className={s.documentDate}>4 квартал 2022</span>
                        <a href="/" className={s.documentDownload}>
                          <span className={`icon-download ${s.documentIcon}`} />{" "}
                          Скачать
                        </a>
                      </div>
                    </div>
                    <div className={s.document}>
                      <span className={s.documentTitle}>
                        Материально-техническое обеспечение
                      </span>
                      <div className={s.documentContent}>
                        <span className={s.documentFormat}>PDF</span>
                        <span className={s.documentDate}>4 квартал 2022</span>
                        <a href="/" className={s.documentDownload}>
                          <span className={`icon-download ${s.documentIcon}`} />{" "}
                          Скачать
                        </a>
                      </div>
                    </div>
                    <div className={s.document}>
                      <span className={s.documentTitle}>
                        Материально-техническое обеспечение
                      </span>
                      <div className={s.documentContent}>
                        <span className={s.documentFormat}>PDF</span>
                        <span className={s.documentDate}>4 квартал 2022</span>
                        <a href="/" className={s.documentDownload}>
                          <span className={`icon-download ${s.documentIcon}`} />{" "}
                          Скачать
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}

export default withErrorBoundary(ToInvestors, {
  fallbackRender: () => <NoMatchPage />,
  onError(error, info) {
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  },
});
