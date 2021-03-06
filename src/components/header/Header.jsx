import React, { useState, useEffect } from "react";
import s from "./header.module.css";
import CustomSelector from "../customSelector";

import { createOptions, getUnique } from "../../helpers/arrayFun";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Button from "../button";
import headerBar from "../../assets/images/Elem1.png";
import logo from "../../assets/images/logo.svg";

import { citys } from "../../dummyData";

export default function Header(props) {
  const navigate = useNavigate();
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

  return (
    <header
      className={`${s.header} 
      ${props.BGcolor === "gray" ? s.headerGray : ""} 
      ${props.withLine ? s.headerLine : s.headerShadow}`}
      id="header"
    >
      <div className={s.navMenu} data-isOpen={isBurgerOpen}>
        <div className={s.navMenuContainer}>
          <div className={s.navMenuTop}>
            <Link to="/">
              <img className={s.logo} src={logo} alt="" />
            </Link>
            <span
              className={`${s.navMenuCancel} icon-cancel`}
              onClick={() => {
                setIsBurgerOpen((prev) => !prev);
              }}
            ></span>
          </div>
          <nav className={s.navMenuNav}>
            <div className={s.navMenuCityFavorit}>
              <div className={s.city}>
                <CustomSelector
                  options={citysOptions}
                  defaultValue={chosenCity}
                  value={chosenCity}
                  setChosen={setChosenCity}
                  isSearchable={false}
                  bgColor={"inherit"}
                  color={"blue"}
                  isHeader={true}
                  icon={"icon-dropdown"}
                  indicatorSize={"8px"}
                  outline={false}
                  padding={"0 0 0 0"}
                  indicatorPadding={"5px 0 3.5px 14px"}
                  menuWidth={"min-content"}
                />
              </div>
              {href?.includes("/favorites") ? (
                <span
                  className={`${s.marker} icon-mark-fill`}
                  data-active="true"
                  onClick={() => {
                    navigate("/favorites");
                  }}
                ></span>
              ) : (
                <span
                  className={`${s.marker} icon-mark`}
                  onClick={() => {
                    navigate("/favorites");
                  }}
                ></span>
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
              <Link to="/estateselection">
                <li
                  className={`${s.navItem} ${
                    href?.includes("/estateselection") ? s.linkActive : ""
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
              <Button content="Перезвоните мне" bgColor="green" width="188px" />
            </div>
          </div>
        </div>
        <img className={s.topBar} src={headerBar} alt="" />
      </div>
      <div className={s.container}>
        <span
          className={`${s.burger} icon-burger`}
          onClick={() => {
            setIsBurgerOpen((prev) => !prev);
          }}
        ></span>
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
            <Link to="/estateselection">
              <li
                className={`${s.navItem} ${
                  href?.includes("/estateselection") ? s.linkActive : ""
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
            <Link to="/newsandstocks/stocks">
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
            <Link to="/toinvestors">
              <li
                className={`${s.navItem} ${
                  href?.includes("/toinvestors") ? s.linkActive : ""
                }`}
              >
                Инвесторам
              </li>
            </Link>
          </ul>
        </nav>
        <div className={s.city}>
          <CustomSelector
            options={citysOptions}
            defaultValue={chosenCity}
            value={chosenCity}
            setChosen={setChosenCity}
            isSearchable={false}
            bgColor={"inherit"}
            color={"blue"}
            isHeader={true}
            icon={"icon-dropdown"}
            indicatorSize={"8px"}
            outline={false}
            padding={"0 0 0 0"}
            indicatorPadding={"5px 0 3.5px 14px"}
            menuWidth={"min-content"}
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
            className={`${s.marker} icon-mark-fill`}
            data-active="true"
            onClick={() => {
              navigate("/favorites");
            }}
          ></span>
        ) : (
          <span
            className={`${s.marker} icon-mark`}
            onClick={() => {
              navigate("/favorites");
            }}
          ></span>
        )}
      </div>
    </header>
  );
}
