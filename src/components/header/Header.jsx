/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"

import { Link, useNavigate } from "react-router-dom";

import CustomSelector from "../customSelector";

import { createOptions } from "../../helpers/arrayFun";

import Bar from "../bar"
import Button from "../button";
import logo from "../../assets/images/logo.svg";

import { cities } from "../../dummyData";

import s from "./header.module.css";

function Header(props) {
  const navigate = useNavigate();
  const [linkChangeCounter] = useState(0);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [chosenCity, setChosenCity] = useState({
    value: "Москва",
    label: "Москва",
  });
  const [href, setHref] = useState("");

  const citiesOptions = createOptions(cities);

  useEffect(() => {
    setIsBurgerOpen(false);
  }, [linkChangeCounter]);

  useEffect(() => {
    setHref(window.location.href);
  }, []);

  return (
    <header
      className={`${s.header} 
      ${props.BGColor === "gray" ? s.headerGray : ""} 
      ${props.withLine ? s.headerLine : s.headerShadow}`}
      id="header"
    >
      <div className={s.navMenu} data-is-open={isBurgerOpen}>
        <div className={s.navMenuContainer}>
          <div className={s.navMenuTop}>
            <Link to="/">
              <img className={s.logo} src={logo} alt="" />
            </Link>
            <span
              tabIndex="0"
              aria-label="Save"
              role="link"
              className={`${s.navMenuCancel} icon-cancel`}
              onClick={() => {
                setIsBurgerOpen((prev) => !prev);
              }}
            />
          </div>
          <nav className={s.navMenuNav}>
            <div className={s.navMenuCityFavorit}>
              <div className={s.city}>
                <CustomSelector
                  options={citiesOptions}
                  defaultValue={chosenCity}
                  value={chosenCity}
                  setChosen={setChosenCity}
                  isSearchable={false}
                  BGColor="inherit"
                  color="blue"
                  isHeader
                  icon="icon-dropdown"
                  indicatorSize="8px"
                  outline={false}
                  padding="0 0 0 0"
                  indicatorPadding="5px 0 3.5px 14px"
                  menuWidth="min-content"
                />
              </div>
              {href?.includes("/favorites") ? (
                <span
                  tabIndex="1"
                  aria-label="Save"
                  role="link"
                  className={`${s.marker} icon-mark-fill`}
                  data-active="true"
                  onClick={() => {
                    navigate("/favorites");
                  }}
                />
              ) : (
                <span
                  tabIndex="2"
                  aria-label="Save"
                  role="link"
                  className={`${s.marker} icon-mark`}
                  onClick={() => {
                    navigate("/favorites");
                  }}
                />
              )}
            </div>
            <ul className={s.navMenuList}>
              <Link to="/company">
                <li
                  className={`${s.navMenuItem} ${
                    href?.includes("/company") ? s.linkActive : ""
                  }`}
                >
                  Компания
                </li>
              </Link>
              <Link to="/projects">
                <li
                  className={`${s.navMenuItem} ${
                    href?.includes("/project") ? s.linkActive : ""
                  }`}
                >
                  Проекты
                </li>
              </Link>
              <Link to="/estate-selection">
                <li
                  className={`${s.navItem} ${
                    href?.includes("/estate-selection") ? s.linkActive : ""
                  }`}
                >
                  Подбор недвижимости
                </li>
              </Link>
              <Link to="/">
                <li className={s.navMenuItem}>Коммерческая</li>
              </Link>
              <Link to="/buy">
                <li
                  className={`${s.navItem} ${
                    href?.includes("/buy") ? s.linkActive : ""
                  }`}
                >
                  Способы покупки
                </li>
              </Link>
            </ul>
          </nav>
          <div className={s.navContacts}>
            <span className={s.tel}>+7 (3412) 209-519</span>
            <div className={s.button}>
              <Button content="Перезвоните мне" BGColor="green" width="188px" />
            </div>
          </div>
        </div>
        <Bar />
      </div>
      <div className={s.container}>
        <span
          tabIndex="3"
          aria-label="Save"
          role="link"
          className={`${s.burger} icon-burger`}
          onClick={() => {
            setIsBurgerOpen((prev) => !prev);
          }}
        />
        <Link to="/" className={s.logoWrapper}>
          <img className={s.logo} src={logo} alt="" />
        </Link>
        <nav className={s.nav}>
          <ul className={s.navList}>
            <Link to="/company">
              <li
                className={`${s.navItem} ${
                  href?.includes("/company") ? s.linkActive : ""
                }`}
              >
                Компания
              </li>
            </Link>
            <Link to="/estate-selection">
              <li
                className={`${s.navItem} ${
                  href?.includes("/estate-selection") ? s.linkActive : ""
                }`}
              >
                Подбор недвижимости
              </li>
            </Link>
            <Link to="/projects">
              <li
                className={`${s.navItem} ${
                  href?.includes("/projects") ? s.linkActive : ""
                }`}
              >
                Проекты
              </li>
            </Link>
            <Link to="/new-sand-stocks/stocks">
              <li
                className={`${s.navItem} ${
                  href?.includes("stocks") ? s.linkActive : ""
                }`}
              >
                Акции
              </li>
            </Link>
            <Link to="/buy">
              <li
                className={`${s.navItem} ${
                  href?.includes("/buy") ? s.linkActive : ""
                }`}
              >
                Способы покупки
              </li>
            </Link>
            <Link to="/to-investors">
              <li
                className={`${s.navItem} ${
                  href?.includes("/to-investors") ? s.linkActive : ""
                }`}
              >
                Инвесторам
              </li>
            </Link>
          </ul>
        </nav>
        <div className={s.city}>
          <CustomSelector
            options={citiesOptions}
            defaultValue={chosenCity}
            value={chosenCity}
            setChosen={setChosenCity}
            isSearchable={false}
            BGColor="inherit"
            color="blue"
            isHeader
            icon="icon-dropdown"
            indicatorSize="8px"
            outline={false}
            padding="0 0 0 0"
            indicatorPadding="5px 0 3.5px 14px"
            menuWidth="min-content"
          />
        </div>
        <div className={s.rightPart}>
          <div className={s.contacts}>
            <span className={s.tel}>+7 (3412) 209-519</span>
            <span className={s.callback}>Перезвоните мне</span>
          </div>
        </div>
        {href?.includes("/favorites") ? (
          <span
            tabIndex="4"
            aria-label="Save"
            role="link"
            className={`${s.marker} icon-mark-fill`}
            data-active="true"
            onClick={() => {
              navigate("/favorites");
            }}
          />
        ) : (
          <span
            tabIndex="5"
            aria-label="Save"
            role="link"
            className={`${s.marker} icon-mark`}
            onClick={() => {
              navigate("/favorites");
            }}
          />
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  BGColor: PropTypes.string,
  withLine: PropTypes.bool,
};

Header.defaultProps = {
  BGColor: "gray",
  withLine: true,
};

export default Header;
