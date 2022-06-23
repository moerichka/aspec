import React from "react";
import s from "./noMatch.module.css";

import Header from "../../components/header";
import Dashnav from "../../components/dashnav";
import Footer from "../../components/footer";
import Button from "../../components/button";

import error404 from "../../assets/images/404error.png";
import error4042 from "../../assets/images/404error2.png";
import error405 from "../../assets/images/405error.png";
import error406 from "../../assets/images/406error.png";

function NoMatchPage() {
  return (
    <div className={s.noMatch}>
      <Header withLine={true} />
      <div className={s.errorcontent}>
        <div className={s.container}>
          <h2 className={s.nopagetitle}>Ой-ой страница не найдена...</h2>
          <div className={s.imgnopagewrapper}>
            <img src={error404} alt="" className={s.imgnopage} />
          </div>
          <div className={s.buttonnopage}>
            <Button
              content={"Показать 4850 предложений"}
              bgColor="green"
              width={"266px"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function NoMatch404() {
  const wayArray = [{ title: "Главная" }, { title: "404" }];

  return (
    <div className={s.noMatch}>
      <Header withLine={true} />
      <div className={s.dashnav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.content}>
        <div className={s.container404}>
          <div className={s.desctop}>
            <h2 className={s.errortitle}>Упс! Это ошибка 404.</h2>
            <p className={s.errordesc}>
              Мы посчитали и убедились, что это на 9 367 меньше, чем планировок
              у “Аспек Домстрой”. Убедитесь в этом сами.
            </p>
            <div className={s.button}>
              <Button
                content={"Показать 4850 предложений"}
                bgColor="green"
                width={"266px"}
              />
            </div>
          </div>
          <div className={s.tablet}>
            <div className={s.img404wrapper}>
              <img src={error4042} className={s.img404} alt="" />
            </div>
            <div className={s.separator}></div>
            <div className={s.rightpart}>
              <h2 className={s.errortitle}>Cтраница не найдена</h2>
              <div className={s.button}>
                <Button
                  content={"Показать 4850 предложений"}
                  bgColor="green"
                  width={"266px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function NoMatch405() {
  const wayArray = [{ title: "Главная" }, { title: "405" }];

  return (
    <div className={s.noMatch}>
      <Header withLine={true} />
      <div className={s.dashnav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.content}>
        <div className={s.container405}>
          <div className={s.img405wrapper}>
            <img src={error405} className={s.img405} alt="" />
          </div>
          <div className={s.rightpart405}>
            <h2 className={s.errortitle}>Упс! Это ошибка 404.</h2>
            <p className={s.errordesc}>
              Мы посчитали и убедились, что это на 9 367 меньше, чем планировок
              у “Аспек Домстрой”. Убедитесь в этом сами.
            </p>
            <div className={s.button}>
              <Button
                content={"Показать 4850 предложений"}
                bgColor="green"
                width={"266px"}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function NoMatch406() {
  const wayArray = [{ title: "Главная" }, { title: "406" }];

  return (
    <div className={s.noMatch}>
      <Header withLine={true} />
      <div className={s.dashnav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.content}>
        <div className={s.container406}>
          <div className={s.img406wrapper}>
            <img src={error406} className={s.img405} alt="" />
          </div>
          <div className={s.rightpart405}>
            <h2 className={s.errortitle}>Упс! Это ошибка 404.</h2>
            <p className={s.errordesc}>
              Мы посчитали и убедились, что это на 9 367 меньше, чем планировок
              у “Аспек Домстрой”. Убедитесь в этом сами.
            </p>
            <div className={s.button}>
              <Button
                content={"Показать 4850 предложений"}
                bgColor="green"
                width={"266px"}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { NoMatchPage, NoMatch404, NoMatch405, NoMatch406 };
