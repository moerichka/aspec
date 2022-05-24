import React, { useState, useEffect } from "react";
import "./header.css";
import Select from "react-select";

import { createOptions, getUnique } from "../../helpers/arrayFun";
import { Link } from "react-router-dom";

import headerBar from "../../assets/images/Elem1.png";
import logo from "../../assets/images/logo.svg";

import { citys } from "../../dummyData";

export default function Header(props) {
  const [isFavored, setIsFavored] = useState(false);
  const [linkChangeCounter, setLinkChangeCounter] = useState(0);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [chosenCity, setChosenCity] = useState({
    value: "Москва",
    label: "Москва",
  });
  const [href, setHref] = useState("");

  const citysOptions = createOptions(citys);

  useEffect(() => {
    setIsBurgerOpen(false);
  }, [linkChangeCounter]);

  useEffect(() => {
    setHref(window.location.href);
  }, []);

  // const linkClickHandler = (url) => {
  //   setActiveLink("#projects")
  //   setLinkChangeCounter(prev => prev + 1)
  // }

  return (
    <header
      className={`header 
      ${props.BGcolor === "gray" ? "header-gray" : ""} 
      ${props.withLine ? "header-line" : ""}`}
      id="header"
    >
      <div
        className={`header__navMenu ${
          isBurgerOpen && "header__navMenu-active"
        }`}
      >
        <div className="header__navMenuContainer">
          <div className="header__navMenuTop">
            <Link to="/">
              <img className="header__logo" src={logo} alt="" />
            </Link>
            <span
              className="header__navMenuCancel icon-cancel"
              onClick={() => {
                setIsBurgerOpen((prev) => !prev);
              }}
            ></span>
          </div>
          <nav className="header__navMenuNav">
            <ul className="header__navMenuList">
              <Link to="/">
                <li
                  className={`header__navMenuItem ${
                    href?.lastIndexOf("/") === href.length - 1
                      ? "header__link-active"
                      : ""
                  }`}
                >
                  Компания
                </li>
              </Link>
              <Link to="/projects">
                <li
                  className={`header__navMenuItem ${
                    href?.includes("project") ? "header__link-active" : ""
                  }`}
                >
                  Проекты
                </li>
              </Link>
              <Link to="/">
                <li className="header__navMenuItem">Подбор недвижимости</li>
              </Link>
              <Link to="/">
                <li className="header__navMenuItem">Коммерческая</li>
              </Link>
              <Link to="/">
                <li className="header__navMenuItem">Способы покупки</li>
              </Link>
            </ul>
          </nav>
          <div className="header__contacts">
            <span className="header__tel">+7 (3412) 209-519</span>
            <span className="header__callback">Перезвоните мне</span>
          </div>
        </div>
        <img className="header__topBar" src={headerBar} alt="" />
      </div>
      <div className="header__container">
        <span
          className="header__burger icon-burger"
          onClick={() => {
            setIsBurgerOpen((prev) => !prev);
          }}
        ></span>
        <Link to="/" className="header__logoWrapper">
          <img className="header__logo" src={logo} alt="" />
        </Link>
        <nav className="header__nav">
          <ul className="header__navList">
            <Link to="/">
              <li
                className={`header__navItem ${
                  href?.lastIndexOf("/") === href.length - 1
                    ? "header__link-active"
                    : ""
                }`}
              >
                Компания
              </li>
            </Link>
            <Link to="/">
              <li className="header__navItem">Подбор недвижимости</li>
            </Link>
            <Link to="/projects">
              <li
                className={`header__navItem ${
                  href?.includes("project") ? "header__link-active" : ""
                }`}
              >
                Проекты
              </li>
            </Link>
            <Link to="/">
              <li className="header__navItem">Акции</li>
            </Link>
            <Link to="/">
              <li className="header__navItem">Способы покупки</li>
            </Link>
            <Link to="/">
              <li className="header__navItem">Инвесторам</li>
            </Link>
          </ul>
        </nav>
        <div className="header__city">
          <Select
            placeholder="Выберите..."
            options={citysOptions}
            classNamePrefix="header"
            className="header__select"
            defaultValue={chosenCity}
            value={chosenCity}
            onChange={(selected) => {
              setChosenCity(selected);
            }}
          />
        </div>
        <div className="header__rightPart">
          <div className="header__contacts">
            <span className="header__tel">+7 (3412) 209-519</span>
            <span className="header__callback">Перезвоните мне</span>
          </div>
        </div>
        <span
          className={`header__marker ${
            isFavored ? "icon-mark-fill" : "icon-mark"
          }`}
          onClick={() => {
            setIsFavored((prev) => !prev);
          }}
        ></span>
      </div>
    </header>
  );
}
