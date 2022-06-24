import React, { useState, useEffect } from "react";
import s from "./poligons.module.css";

import { Infocorpus, InfoSection, Infolevel } from "../smallinfo";

import { percentageConverter, pxConverter } from "../../../helpers/stringsFun";

function Poligons(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  console.log("isInfoVisible: ", isInfoVisible);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    window.innerWidth <= 768 ? setIsTablet(true) : setIsTablet(false);
  }, [windowWidth]);

  const checkTop = (top, height) => {
    const valueTop = percentageConverter(top);
    const valueHeight = percentageConverter(height);
    if (valueTop < 0.2) {
      return "toHigh";
    } else if (valueTop + valueHeight / 2 > 0.6) {
      return "toLow";
    } else {
      return "okay";
    }
  }; // 0.53 // 0.48 // 0.9

  const checkLeft = (left, width) => {
    const valueLeft = Number(pxConverter(left));
    const valueWidth = Number(pxConverter(width));

    if (valueLeft < -70) {
      return "toLeft";
    } else if (valueLeft + valueWidth > 70) {
      return "toRight";
    } else {
      return "okay";
    }
  };

  const clickHandler = (polygon, index) => {
    if (isTablet) {
      isInfoVisible === index || props?.oneClick
        ? props?.onClick(polygon)
        : setIsInfoVisible(index);
    } else {
      props?.onClick(polygon);
    }
  };

  return (
    <>
      <div
        className={s.holeground}
        onClick={() => {
          isInfoVisible !== false && setIsInfoVisible(false);
        }}
      >
        {props?.poligons?.map((polygon, index) => {
          let { width, height, top, left, clipPath } = polygon?.styles;

          if (props?.centred) {
            const widthNumber = pxConverter(width);
            const leftNumber = pxConverter(left);

            if (windowWidth <= 1030 && windowWidth > 750) {
              width = `${widthNumber * 0.715}px`;
              left = `${leftNumber * 0.715}px`;
            } else if (windowWidth <= 750 && windowWidth > 450) {
              width = `${widthNumber * 0.485}px`;
              left = `${leftNumber * 0.485}px`;
            } else if (windowWidth <= 450) {
              width = `${widthNumber * 0.3}px`;
              left = `${leftNumber * 0.3}px`;
            }
          }

          return (
            <>
              <div
                className={s.polygonwrapper}
                data-current={isInfoVisible === index}
                data-centred={props?.centred}
                style={{
                  width,
                  height,
                  top,
                  left: props?.centred ? `calc(50% + ${left})` : left,
                }}
                onClick={() => {
                  clickHandler(polygon, index);
                }}
                key={polygon?.number}
              >
                <div
                  className={s.polygon}
                  style={{ clipPath }}
                  onClick={() => clickHandler(polygon, index)}
                />
                {props?.infocorpus && (
                  <div
                    className={s.number}
                    onClick={() => clickHandler(polygon, index)}
                  >
                    {polygon?.number}
                  </div>
                )}
                {props?.infosection && (
                  <div
                    className={s.number}
                    onClick={() => clickHandler(polygon, index)}
                  >
                    {polygon?.number} секция
                  </div>
                )}
                {props?.flatlevel && (
                  <div
                    className={`${s.number} ${s.flatnumber}`}
                    onClick={() => clickHandler(polygon, index)}
                  >
                    {polygon?.rooms}К
                  </div>
                )}
                <div
                  className={`${s.infowrapper} ${
                    isInfoVisible === index ? s.infowrappervisible : ""
                  }`}
                  data-top={checkTop(top, height)}
                  data-left={checkLeft(left, width)}
                  onClick={() => {
                    isTablet && clickHandler(polygon, index);
                  }}
                >
                  {props?.infocorpus && <Infocorpus data={polygon} />}
                  {props?.infosection && <InfoSection data={polygon} />}
                  {props?.infolevel && <Infolevel data={polygon} />}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className={s.holegroundoutside}>
        {props?.poligons?.map((polygon, index) => {
          return (
            <div
              className={`${s.outsideinfo} ${
                isInfoVisible === index ? s.outsideinfovisible : ""
              }`}
              onClick={() => {
                isTablet && clickHandler(polygon, index);
              }}
            >
              {props?.infocorpus && <Infocorpus data={polygon} />}
              {props?.infosection && <InfoSection data={polygon} />}
              {props?.infolevel && <Infolevel data={polygon} />}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Poligons;
