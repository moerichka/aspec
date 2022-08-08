import React from "react";

import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/header";
import Dashnav from "../../components/dashnav";
import Footer from "../../components/footer";
import Button from "../../components/button";

import error404 from "../../assets/images/404error.png";
import error4042 from "../../assets/images/404error2.png";
import error405 from "../../assets/images/405error.png";
import error406 from "../../assets/images/406error.png";

import s from "./noMatch.module.css";

function NoMatchPage() {
  const navigate = useNavigate();
  return (
    <div className={s.noMatch}>
      <Header withLine />
      <div className={s.errorContent}>
        <div className={s.container}>
          <h2 className={s.noPageTitle}>Ой-ой страница не найдена...</h2>
          <div className={s.imgNoPageWrapper}>
            <img src={error404} alt="" className={s.imgNoPage} />
          </div>
          <div className={s.buttonNoPage}>
            <Button
              onClick={() => navigate("/estate-selection")}
              content="Показать 4850 предложений"
              BGColor="green"
              width="266px"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function NoMatch404() {
  const navigate = useNavigate();
  const wayArray = [
    {
      title: (
        <Link to="/" className="dash-nav__link">
          Главная
        </Link>
      ),
    },
    { title: "404" },
  ];

  return (
    <div className={s.noMatch}>
      <Header withLine />
      <div className={s.dashNav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.content}>
        <div className={s.container404}>
          <div className={s.descTop}>
            <h2 className={s.errorTitle}>Упс! Это ошибка 404.</h2>
            <p className={s.errorDesc}>
              Мы посчитали и убедились, что это на 9 367 меньше, чем планировок
              у “Аспек Домстрой”. Убедитесь в этом сами.
            </p>
            <div className={s.button}>
              <Button
                onClick={() => navigate("/estate-selection")}
                content="Показать 4850 предложений"
                BGColor="green"
                width="266px"
              />
            </div>
          </div>
          <div className={s.tablet}>
            <div className={s.img404wrapper}>
              <img src={error4042} className={s.img404} alt="" />
            </div>
            <div className={s.separator} />
            <div className={s.rightPart}>
              <h2 className={s.errorTitle}>Страница не найдена</h2>
              <div className={s.button}>
                <Button
                  onClick={() => navigate("/estate-selection")}
                  content="Показать 4850 предложений"
                  BGColor="green"
                  width="266px"
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
  const navigate = useNavigate();
  const wayArray = [
    {
      title: (
        <Link to="/" className="dash-nav__link">
          Главная
        </Link>
      ),
    },
    { title: "405" },
  ];

  return (
    <div className={s.noMatch}>
      <Header withLine />
      <div className={s.dashNav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.content}>
        <div className={s.container405}>
          <div className={s.img405wrapper}>
            <img src={error405} className={s.img405} alt="" />
          </div>
          <div className={s.rightPart405}>
            <h2 className={s.errorTitle}>Упс! Это ошибка 404.</h2>
            <p className={s.errorDesc}>
              Мы посчитали и убедились, что это на 9 367 меньше, чем планировок
              у “Аспек Домстрой”. Убедитесь в этом сами.
            </p>
            <div className={s.button}>
              <Button
                onClick={() => navigate("/estate-selection")}
                content="Показать 4850 предложений"
                BGColor="green"
                width="266px"
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
  const navigate = useNavigate();
  const wayArray = [
    {
      title: (
        <Link to="/" className="dash-nav__link">
          Главная
        </Link>
      ),
    },
    { title: "406" },
  ];

  return (
    <div className={s.noMatch}>
      <Header withLine />
      <div className={s.dashNav}>
        <Dashnav wayArray={wayArray} />
      </div>
      <div className={s.content}>
        <div className={s.container406}>
          <div className={s.img406wrapper}>
            <img src={error406} className={s.img405} alt="" />
          </div>
          <div className={s.rightPart405}>
            <h2 className={s.errorTitle}>Упс! Это ошибка 404.</h2>
            <p className={s.errorDesc}>
              Мы посчитали и убедились, что это на 9 367 меньше, чем планировок
              у “Аспек Домстрой”. Убедитесь в этом сами.
            </p>
            <div className={s.button}>
              <Button
                onClick={() => navigate("/estate-selection")}
                content="Показать 4850 предложений"
                BGColor="green"
                width="266px"
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
