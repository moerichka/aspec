import React from "react";

import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.svg";
import logoCULT from "../../../assets/images/logo-cult.svg";

import Bar from "../../bar";

import s from "./footerShort.module.css";

function FooterShort() {
  return (
    <footer className={s.footer}>
      <Bar />
      <div className={s.container}>
        <div className={s.top}>
          <Link to="/" className={s.logoWrapper}>
            <img src={logo} alt="" className={s.logo} />
          </Link>
          <div className={s.topContainer}>
            <div className={s.infoWrapper}>
              <div className={s.infoTitle}>
                <span className={`${s.infoIcon} icon-location`} />
                <span>Адрес офиса продаж</span>
              </div>
              <div className={s.infoDescWrapper}>
                <span className={s.infoDesc}>
                  г. Ижевск, ул.Пушкинская, 268 (этаж 1, каб. 20)
                </span>
              </div>
            </div>
            <div className={s.infoWrapper}>
              <div className={s.infoTitle}>
                <span className={`${s.infoIcon} icon-clock`} />
                <span>Режим работы</span>
              </div>
              <span className={s.infoDesc}>
                Пн-Пт: 9:00-19:00, Сб: 10:00-14:00
              </span>
            </div>
            <div className={s.infoWrapper}>
              <div className={s.infoTitle}>
                <span className={`${s.infoIcon} icon-mail`} />
                <span>Электронная почта </span>
              </div>
              <div className={s.infoDesc}>domstroy@aspec.ru</div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.line}/>
      </div>
      <div className={s.container}>
        <div className={s.downBar}>
          <div className={s.rightsWrapper}>
            <p className={s.rightsText}>
              ООО «АСПЭК-Домстрой» раскрывает информацию в сети Интернет на
              следующей странице сайта{" "}
              <a href="/" className="link">
                ООО «Интерфакс-ЦРКИ»{" "}
              </a>
              — информационного агентства, аккредитованного ЦБ РФ на раскрытие
              информации. Перечень инсайдерской информации{" "}
              <a href="/" className="link">
                по ссылке
              </a>
            </p>
            <div className={s.rightsInfoWrapper}>
              <span className={s.rightsItem}>© 2022. Все права защищены</span>
              <div className={s.rightsItem}>
                Сделано в{" "}
                <a href="https://www.cultbrand.ru/" target="__blank">
                  <img className={s.cult} src={logoCULT} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterShort