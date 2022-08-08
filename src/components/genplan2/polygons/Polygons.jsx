/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { InfoCorpus, InfoSection, InfoLevel } from "../infoSmall";

import s from "./polygons.module.css";

const validateDots = (dots) => dots?.some(({x, y}) => x === null || y === null)

const findSquare = (dots) => {
  const newDots = [...dots];

  const sortedX = newDots?.sort((a, b) => a.x - b.x);

  const leftestDot = sortedX[0];
  const left = leftestDot.x;
  const rightestDot = sortedX[newDots.length - 1];
  const right = rightestDot.x;

  const sortedY = newDots?.sort((a, b) => a.y - b.y);

  const highestDot = sortedY[0];
  const top = highestDot.y;
  const lowestDot = sortedY[newDots.length - 1];
  const bottom = lowestDot.y;

  const height = bottom - top;
  const width = right - left;

  const factorX = width / 100;
  const factorY = height / 100;

  return {
    squareStyles: {
      width: `${width.toFixed(2)}%`,
      height: `${height.toFixed(2)}%`,
      left: `${left.toFixed(2)}%`,
      top: `${top.toFixed(2)}%`,
    },
    squareParams: {
      width: Math.round(width * 100) / 100,
      height: Math.round(height * 100) / 100,
      left: Math.round(left * 100) / 100,
      top: Math.round(top * 100) / 100,
      factorX: Math.round(factorX * 10000) / 10000,
      factorY: Math.round(factorY * 10000) / 10000,
    },
  };
};

const findPolygon = (dots, squareParams) => {
  const newDots = dots?.map((elem) => ({
    x: ((elem.x - squareParams.left) / squareParams.factorX).toFixed(2),
    y: ((elem.y - squareParams.top) / squareParams.factorY).toFixed(2),
  }));

  const clipPath = `polygon(${newDots.map(
    (elem) => ` ${elem.x}% ${elem.y}%`
  )})`;

  return clipPath;
};

const checkTop = (squareParams) => {
  const {top, height} = squareParams

  if (top < 20) {
    return "toHigh";
  }
  if (top + height / 2 > 60) {
    return "toLow";
  }
  return "okay";
}; 

const checkLeft = (squareParams) => {
  const {left, width} = squareParams

  if (left < 10) {
    return "toLeft";
  }
  if (left + width > 70) {
    return "toRight";
  }
  return "okay";
};

function Polygons(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  useEffect(() => {
    const windowSizeListener = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", windowSizeListener);

    return () => window.addEventListener("resize", windowSizeListener);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    window.innerWidth <= 768 ? setIsTablet(true) : setIsTablet(false);
  }, [windowWidth]);

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
        className={s.wholeGround}
        onClick={() => {
          // eslint-disable-next-line no-unused-expressions
          isInfoVisible !== false && setIsInfoVisible(false);
        }}
      >
        {props?.polygons?.map((polygon, index) => {

          if(validateDots(polygon?.dots)) return "";

          const { squareStyles, squareParams } = findSquare(polygon?.dots);

          const polygonStyles = findPolygon(polygon?.dots, squareParams);

          return (
            <div
              className={s.polygonWrapper}
              data-current={isInfoVisible === index}
              key={polygon?.id}
              style={{ ...squareStyles }}
              onClick={() => {
                clickHandler(polygon, index);
              }}
            >
              <div
                className={s.polygon}
                style={{ clipPath: polygonStyles }}
                onClick={() => clickHandler(polygon, index)}
              />
              {props?.infocorpus && polygon?.number && (
                <div
                  className={s.number}
                  onClick={() => clickHandler(polygon, index)}
                >
                  {polygon?.number}
                </div>
              )}
              {props?.infosection && polygon?.number && (
                <div
                  className={s.number}
                  onClick={() => clickHandler(polygon, index)}
                >
                  {polygon?.number} секция
                </div>
              )}
              {props?.flatlevel && polygon?.number && (
                <div
                  className={`${s.number} ${s.flatnumber}`}
                  onClick={() => clickHandler(polygon, index)}
                >
                  {polygon?.number}К
                </div>
              )}
              <div
                className={`${s.infowrapper}`}
                data-top={checkTop(squareParams)}
                data-left={checkLeft(squareParams)}
                onClick={() => {
                  // eslint-disable-next-line no-unused-expressions
                  isTablet && clickHandler(polygon, index);
                }}
              >
                {props?.infocorpus && <InfoCorpus data={polygon} />}
                {props?.infosection && <InfoSection data={polygon} />}
                {props?.infolevel && <InfoLevel data={polygon} />}
              </div>
            </div>
          );
        })}
      </div>
      <div className={s.wholeGroundOutside}>
        {props?.polygons?.map((polygon, index) => (
          <div
            key={polygon?.id}
            className={`${s.outsideinfo} ${
              isInfoVisible === index ? s.outsideinfovisible : ""
            }`}
            onClick={() => {
              // eslint-disable-next-line no-unused-expressions
              isTablet && clickHandler(polygon, index);
            }}
          >
            {props?.infocorpus && <InfoCorpus data={polygon} />}
            {props?.infosection && <InfoSection data={polygon} />}
            {props?.infolevel && <InfoLevel data={polygon} />}
          </div>
        ))}
      </div>
    </>
  );
}

Polygons.propTypes = {
  onClick: PropTypes.func,
  infocorpus: PropTypes.bool,
  infosection: PropTypes.bool,
  infolevel: PropTypes.bool,
  flatlevel: PropTypes.bool,
  oneClick: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  polygons: PropTypes.array,
};

Polygons.defaultProps = {
  onClick: () => {},
  infocorpus: false,
  infosection: false,
  infolevel: false,
  flatlevel: false,
  oneClick: false,
  polygons: [],
};

export default Polygons;
