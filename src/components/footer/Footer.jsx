import React from "react";
import s from "./footer.module.css";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import headerBar from "../../assets/images/Elem1.png";
import logoCULT from "../../assets/images/logo-cult.svg";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.top}>
          <Link to="/" className={s.logoWrapper}>
            <img src={logo} alt="" className={s.logo} />
          </Link>
          <div className={s.topContainer}>
            <div className={s.infoWrapper}>
              <div className={s.infoTitle}>
                <span className={`${s.infoIcon} icon-location`}></span>
                <span>Адрес офиса продаж</span>
              </div>
              <div className={s.infoDescWrapper}>
                <span className={s.infoDesc}>
                  г. Ижевск, ул.Пушкинская, 268 (этаж 1, каб. 20)
                </span>
                <Link to="/contacts">
                  <span className={`${s.infoLink} link`}>
                    Смотреть все адреса
                  </span>
                </Link>
              </div>
            </div>
            <div className={s.infoWrapper}>
              <div className={s.infoTitle}>
                <span className={`${s.infoIcon} icon-clock`}></span>
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
          <div className={s.contactUsWrapper}>
            <a href="https://vk.com/" target="__blank">
              <span className={`${s.sn} icon-vkontacte`}></span>
            </a>
            <a href="https://www.youtube.com/" target="__blank">
              <span className={`${s.sn} icon-youtube`}></span>
            </a>
            <a href="https://web.telegram.org/" target="__blank">
              <span className={`${s.sn} icon-telegramm`}></span>
            </a>
          </div>
          <div className={s.tel}>+7 (3412) 209-519</div>
          <div className={s.menu}>
            <div className={s.menuColumn}>
              <h5 className={s.menuColumnTitle}>О компании</h5>
              <ul className={s.list}>
                <Link to="/company">
                  <li className={s.listItem}>Официальные сведения</li>
                </Link>
                <Link to="/toinvestors">
                  <li className={s.listItem}>Инвесторам</li>
                </Link>
                <Link to="/contacts">
                  <li className={s.listItem}>Контакты</li>
                </Link>
              </ul>
            </div>
            <div className={s.menuColumn}>
              <h5 className={s.menuColumnTitle}>Проекты</h5>
              <ul className={s.list}>
                <Link to="/">
                  <li className={s.listItem}>Квартиры</li>
                </Link>
                <Link to="/estateselection">
                  <li className={s.listItem}>Коммерческая недвижимость</li>
                </Link>
              </ul>
            </div>
            <div className={s.menuColumn}>
              <h5 className={s.menuColumnTitle}>Подбор недвижимости</h5>
              <ul className={s.list}>
                <Link to="/estateselection">
                  <li className={s.listItem}>Подбор недвижимости</li>
                </Link>
                <Link to="/">
                  <li className={s.listItem}>Ипотека</li>
                </Link>
              </ul>
            </div>
            <div className={s.menuColumn}>
              <h5 className={s.menuColumnTitle}>Новости и акции</h5>
              <ul className={s.list}>
                <Link to="/newsandstocks/news">
                  <li className={s.listItem}>Новости</li>
                </Link>
                <Link to="/newsandstocks/stocks">
                  <li className={s.listItem}>Акции</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src={headerBar} alt="" className={s.bar} />
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
