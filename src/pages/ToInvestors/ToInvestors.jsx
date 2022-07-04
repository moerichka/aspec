import React, { useState } from "react";
import s from "./toInvestors.module.css";

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

function ToInvestors() {
  const [tabIndex, setTabIndex] = useState(0);
  const image1 = { image: backPicture, smallimage: backPictureSmall };

  return (
    <div className={s.toInvestors}>
      <Header />
      <Scroller />
      <div className={s.helloelement}>
        <div className="container">
          <div className={s.dashnav}>
            <Link to="/" className="dashnav__link">
              Главная
            </Link>{" "}
            / Инвесторам
          </div>
          <div className={s.titlewrapper}>
            <h2 className={s.hellotitle}>Инвесторам</h2>
            <h5 className={s.hellodesc}>
              Старт продаж дома № 3, жилого комплекса «Плюс один»
            </h5>
          </div>
        </div>
        <div className={s.darkpanel}></div>
        {image1?.smallimage ? (
          <ProgressiveImage
            src={image1?.image}
            placeholder={image1?.smallimage}
          >
            {(src, loading) => (
              <img
                style={{
                  filter: loading ? "blur(10px)" : "blur(0px)",
                  transition: "0.3s",
                }}
                src={src}
                alt=""
                className={s.helloback}
              />
            )}
          </ProgressiveImage>
        ) : (
          <img src={image1?.image} alt="" className={s.helloback} />
        )}
      </div>
      <div className={s.content}>
        <Tabs
          className={s.tableader}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <div className={s.topcontainer}>
            <TabList className={s.tabs}>
              <Tab className={s.tab} selectedClassName={s.tabselected}>
                <span className={s.tabtitle}>Основные показатели</span>
              </Tab>
              <Tab className={s.tab} selectedClassName={s.tabselected}>
                <span className={s.tabtitle}>Раскрытие информации</span>
              </Tab>
            </TabList>
          </div>
          <TabPanel className={s.tabpanel}>
            <Tabs className={s.innertableader}>
              <div className={s.bottomcontainer}>
                <TabList className={s.innertablist}>
                  <Tab
                    className={s.innertab}
                    selectedClassName={s.innertabselected}
                  >
                    Финансовые
                  </Tab>
                  <Tab
                    className={s.innertab}
                    selectedClassName={s.innertabselected}
                  >
                    Операционные
                  </Tab>
                </TabList>
              </div>
              <TabPanel className={s.tabpaneltable}>
                <div className={s.tablecontainer}>
                  <table className={s.table}>
                    <thead>
                      <tr>
                        <th
                          className={`${s.tabletitle} ${s.tabletitlelong} ${s.tablelinetitle}`}
                        >
                          Наименование показателя
                        </th>
                        <th className={s.tabletitle}>1998</th>
                        <th className={s.tabletitle}>2001</th>
                        <th className={s.tabletitle}>2002</th>
                        <th className={s.tabletitle}>2003</th>
                        <th className={s.tabletitle}>2004</th>
                        <th className={s.tabletitle}>2005</th>
                        <th className={s.tabletitle}>2006</th>
                        <th className={s.tabletitle}>2007</th>
                        <th className={s.tabletitle}>2008</th>
                        <th className={s.tabletitle}>2009</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Материально-техническое обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel className={s.tabpaneltable}>
                <div className={s.tablecontainer}>
                  <table className={s.table}>
                    <thead>
                      <tr>
                        <th
                          className={`${s.tabletitle} ${s.tabletitlelong} ${s.tablelinetitle}`}
                        >
                          Наименование показателя
                        </th>
                        <th className={s.tabletitle}>1998</th>
                        <th className={s.tabletitle}>2001</th>
                        <th className={s.tabletitle}>2002</th>
                        <th className={s.tabletitle}>2003</th>
                        <th className={s.tabletitle}>2004</th>
                        <th className={s.tabletitle}>2005</th>
                        <th className={s.tabletitle}>2006</th>
                        <th className={s.tabletitle}>2007</th>
                        <th className={s.tabletitle}>2008</th>
                        <th className={s.tabletitle}>2009</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                      <tr>
                        <th className={s.tablelinetitle}>
                          Операционное обеспечение
                        </th>
                        <th className={s.tablevalue}>Показатель 1</th>
                        <th className={s.tablevalue}>Показатель 2</th>
                        <th className={s.tablevalue}>Показатель 3</th>
                        <th className={s.tablevalue}>Показатель 4</th>
                        <th className={s.tablevalue}>Показатель 5</th>
                        <th className={s.tablevalue}>Показатель 6</th>
                        <th className={s.tablevalue}>Показатель 7</th>
                        <th className={s.tablevalue}>Показатель 8</th>
                        <th className={s.tablevalue}>Показатель 9</th>
                        <th className={s.tablevalue}>Показатель 0</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel className={s.tabpanel}>
            <Tabs className={s.innertableader}>
              <div className={s.bottomcontainer}>
                <TabList className={s.innertablist}>
                  <Tab
                    className={s.innertab}
                    selectedClassName={s.innertabselected}
                  >
                    Финансовые
                  </Tab>
                  <Tab
                    className={s.innertab}
                    selectedClassName={s.innertabselected}
                  >
                    Операционные
                  </Tab>
                </TabList>
              </div>
              <TabPanel className={s.tabpaneldocument}>
                <div className={s.documentscontainer}>
                  <div className={s.documentswrapper}>
                    <div className={s.topdocuments}>
                      <div className={`${s.filterwrapper} ${s.filterwrapper1}`}>
                        <span className={s.filtertitle}>
                          Категория документов
                        </span>
                        <CustomSelector
                          placeholder={"Любые"}
                          bgColor={"white"}
                        ></CustomSelector>
                      </div>
                      <div className={`${s.filterwrapper} ${s.filterwrapper2}`}>
                        <span className={s.filtertitle}>Год документа</span>
                        <CustomSelector
                          placeholder={"Любые"}
                          bgColor={"white"}
                        ></CustomSelector>
                      </div>
                    </div>
                    <div className={s.bottomdocuments}>
                      <div className={s.documents}>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Материально-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
                              Скачать
                            </a>
                          </div>
                        </div>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Материально-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
                              Скачать
                            </a>
                          </div>
                        </div>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Материально-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
                              Скачать
                            </a>
                          </div>
                        </div>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Материально-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
                              Скачать
                            </a>
                          </div>
                        </div>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Материально-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
                              Скачать
                            </a>
                          </div>
                        </div>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Материально-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
                              Скачать
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className={s.tabpaneldocument}>
                <div className={s.documentscontainer}>
                  <div className={s.documentswrapper}>
                    <div className={s.topdocuments}>
                      <div className={`${s.filterwrapper} ${s.filterwrapper1}`}>
                        <span className={s.filtertitle}>
                          Категория документов
                        </span>
                        <CustomSelector
                          placeholder={"Любые"}
                          bgColor={"white"}
                        ></CustomSelector>
                      </div>
                      <div className={`${s.filterwrapper} ${s.filterwrapper2}`}>
                        <span className={s.filtertitle}>Год документа</span>
                        <CustomSelector
                          placeholder={"Любые"}
                          bgColor={"white"}
                        ></CustomSelector>
                      </div>
                    </div>
                    <div className={s.bottomdocuments}>
                      <div className={s.documents}>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Операционно-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
                              Скачать
                            </a>
                          </div>
                        </div>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Операционно-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
                              Скачать
                            </a>
                          </div>
                        </div>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Операционно-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
                              Скачать
                            </a>
                          </div>
                        </div>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Операционно-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
                              Скачать
                            </a>
                          </div>
                        </div>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Операционно-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
                              Скачать
                            </a>
                          </div>
                        </div>
                        <div className={s.document}>
                          <span className={s.documenttitle}>
                            Операционно-техическое обеспечение
                          </span>
                          <div className={s.documentcontent}>
                            <span className={s.documentformat}>PDF</span>
                            <a href="/" className={s.documentlink}>
                              Подробнее
                            </a>
                            <a href="/" className={s.documentdownload}>
                              <span
                                className={`icon-download ${s.documenticon}`}
                              ></span>{" "}
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
    console.log(error);
    console.log(info);
  },
});
