import React from "react";
import "./footer.css";
import {Link} from "react-router-dom"

import logo from "../../assets/images/logo.svg";
import headerBar from "../../assets/images/Elem1.png";
import logoCULT from "../../assets/images/logo-cult-black.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <Link to="/" className="footer__logoWrapper"><img src={logo} alt="" className="footer__logo" /></Link>
          <div className="footer__topContainer">
            <div className="footer__infoWrapper">
              <div className="footer__infoTitle">
                <span className="footer__infoIcon icon-location"></span>
                <span>Адрес офиса продаж</span>
              </div>
              <div className="footer__infoDescWrapper">
                <span className="footer__infoDesc">
                  г. Ижевск, ул.Пушкинская, 268 (этаж 1, каб. 20)
                </span>
                <Link to=""><span className="footer__infoLink link">Смотреть все адреса</span></Link>
              </div>
            </div>
            <div className="footer__infoWrapper">
              <div className="footer__infoTitle">
                <span className="footer__infoIcon icon-clock"></span>
                <span>Режим работы</span>
              </div>
              <span className="footer__infoDesc">
                Пн-Пт: 9:00-19:00, Сб: 10:00-14:00
              </span>
            </div>
            <div className="footer__infoWrapper">
              <div className="footer__infoTitle">
                <span className="footer__infoIcon icon-mail"></span>
                <span>Электронная почта </span>
              </div>
              <div className="footer__infoDesc">domstroy@aspec.ru</div>
            </div>
          </div>
          <div className="footer__contactUsWrapper">
            <a href="https://vk.com/" target="__blank"><span className="footer__sn icon-vkontacte"></span></a>
            <a href="https://www.youtube.com/" target="__blank"><span className="footer__sn icon-youtube"></span></a>
            <a href="https://web.telegram.org/" target="__blank"><span className="footer__sn icon-telegramm"></span></a>
          </div>
          <div className="footer__tel">+7 (3412) 209-519</div>
          <div className="footer__menu">
            <div className="footer__menuColumn">
              <h5 className="footer__menuColumnTitle">О компании</h5>
              <ul className="footer__list">
                <Link to="/">
                  <li className="footer__listItem">Официальные сведения</li>
                </Link>
                <Link to="/">
                  <li className="footer__listItem">Инвесторам</li>
                </Link>
                <Link to="/">
                  <li className="footer__listItem">Контакты</li>
                </Link>
              </ul>
            </div>
            <div className="footer__menuColumn">
              <h5 className="footer__menuColumnTitle">Проекты</h5>
              <ul className="footer__list">
                <Link to="/">
                  <li className="footer__listItem">Квартиры</li>
                </Link>
                <Link to="/">
                  <li className="footer__listItem">Коммерческая недвижимость</li>
                </Link>
              </ul>
            </div>
            <div className="footer__menuColumn">
              <h5 className="footer__menuColumnTitle">Подбор недвижимости</h5>
              <ul className="footer__list">
                <Link to="/">
                  <li className="footer__listItem">Подбор недвижимости</li>
                </Link>
                <Link to="/">
                  <li className="footer__listItem">Ипотека</li>
                </Link>
              </ul>
            </div>
            <div className="footer__menuColumn">
              <h5 className="footer__menuColumnTitle">Новости и акции</h5>
              <ul className="footer__list">
                <Link to="/">
                  <li className="footer__listItem">Новости</li>
                </Link>
                <Link to="/">
                  <li className="footer__listItem">Акции</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src={headerBar} alt="" className="footer__bar" />
      <div className="footer__container">
        <div className="footer__downBar">
          <div className="footer__rightsWrapper">
            <p className="footer__rightsText">
              ООО «АСПЭК-Домстрой» раскрывает информацию в сети Интернет на
              следующей странице сайта{" "}
              <a href="" className="link">ООО «Интерфакс-ЦРКИ» </a>—
              информационного агентства, аккредитованного ЦБ РФ на раскрытие
              информации. Перечень инсайдерской информации{" "}
              <a href="" className="link">по ссылке</a>
            </p>
            <div className="footer__rightsInfoWrapper">
              <span className="footer__rightsItem">
                © 2021. Все права защищены
              </span>
              <div className="footer__rightsItem">
                Сделано в <a href="https://www.cultbrand.ru/" target="__blank"><img src={logoCULT} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
