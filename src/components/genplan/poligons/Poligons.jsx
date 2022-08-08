/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Infocorpus, InfoSection, Infolevel } from "../smallinfo";

import { percentageConverter, pxConverter } from "../../../helpers/stringsFun";

import s from "./poligons.module.css";

function Poligons(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    window.innerWidth <= 768 ? setIsTablet(true) : setIsTablet(false);
  }, [windowWidth]);

  const checkTop = (top, height) => {
    const valueTop = percentageConverter(top);
    const valueHeight = percentageConverter(height);
    if (valueTop < 0.2) {
      return "toHigh";
    }
    if (valueTop + valueHeight / 2 > 0.6) {
      return "toLow";
    }
    return "okay";
  }; // 0.53 // 0.48 // 0.9

  const checkLeft = (left, width) => {
    const valueLeft = Number(pxConverter(left));
    const valueWidth = Number(pxConverter(width));

    if (valueLeft < -70) {
      return "toLeft";
    }
    if (valueLeft + valueWidth > 70) {
      return "toRight";
    }
    return "okay";
  };

  const clickHandler = (polygon, index) => {
    if (isTablet) {
      // eslint-disable-next-line no-unused-expressions
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
          // eslint-disable-next-line no-unused-expressions
          isInfoVisible !== false && setIsInfoVisible(false);
        }}
      >
        {props?.poligons?.map((polygon, index) => {
          let width = "";
          let height = "";
          let top = "";
          let left = "";
          let clipPath = "";
          width = polygon?.styles?.width;
          height = polygon?.styles?.height;
          top = polygon?.styles?.top;
          left = polygon?.styles?.left;
          clipPath = polygon?.styles?.clipPath;

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
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              <div
                className={s.polygonwrapper}
                data-current={isInfoVisible === index}
                data-centred={props?.centred}
                key={index}
                style={{
                  width,
                  height,
                  top,
                  left: props?.centred ? `calc(50% + ${left})` : left,
                }}
                onClick={() => {
                  clickHandler(polygon, index);
                }}
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
                  key={index}
                  data-top={checkTop(top, height)}
                  data-left={checkLeft(left, width)}
                  onClick={() => {
                    // eslint-disable-next-line no-unused-expressions
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
      <div className={s.wholeGroundOutside}>
        {props?.poligons?.map((polygon, index) => (
          <div
            className={`${s.outsideinfo} ${
              isInfoVisible === index ? s.outsideinfovisible : ""
            }`}
            onClick={() => {
              // eslint-disable-next-line no-unused-expressions
              isTablet && clickHandler(polygon, index);
            }}
          >
            {props?.infocorpus && <Infocorpus data={polygon} />}
            {props?.infosection && <InfoSection data={polygon} />}
            {props?.infolevel && <Infolevel data={polygon} />}
          </div>
        ))}
      </div>
    </>
  );
}

Poligons.propTypes = {
  onClick: PropTypes.func,
  infocorpus: PropTypes.bool,
  infosection: PropTypes.bool,
  infolevel: PropTypes.bool,
  centred: PropTypes.bool,
  flatlevel: PropTypes.bool,
  oneClick: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  poligons: PropTypes.array,
};

Poligons.defaultProps = {
  onClick: () => {},
  infocorpus: false,
  infosection: false,
  infolevel: false,
  centred: false,
  flatlevel: false,
  oneClick: false,
  poligons: [],
};

export default Poligons;
