import React, { useState, useEffect } from "react";
import s from "./poligons.module.css";

import { Infocorpus, InfoSection, Infolevel } from "../smallinfo";

import { percentageConverter, pxConverter } from "../../../helpers/stringsFun";

function Poligons(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const checkTop = (top, height) => {
    const valueTop = percentageConverter(top);
    const valueHeight = percentageConverter(height);
    if (valueTop < 0.2) {
      return "toHigh";
    } else if (valueTop + valueHeight / 2 > 0.8) {
      return "toLow";
    } else {
      return "okay";
    }
  }; // 0.53 // 0.48 // 0.9

  const checkLeft = (left, width) => {
    const valueLeft = percentageConverter(left);
    const valueWidth = percentageConverter(width);

    if (valueLeft < 0.2) {
      return "toLeft";
    } else if (valueLeft + valueWidth > 0.75) {
      return "toRight";
    } else {
      return "okay";
    }
  };

  return (
    <>
      {props?.poligons?.map((polygon) => {
        let { width, height, top, left, clipPath } = polygon?.styles;

        if (props?.centred) {
          const widthNumber = pxConverter(width);
          const leftNumber = pxConverter(left);

          if (windowWidth < 1030 && windowWidth > 750) {
            width = `${widthNumber * 0.715}px`;
            left = `${leftNumber * 0.715}px`;
          } else if (windowWidth < 750 && windowWidth > 450) {
            width = `${widthNumber * 0.485}px`;
            left = `${leftNumber * 0.485}px`;
          } else if (windowWidth < 450) {
            width = `${widthNumber * 0.3}px`;
            left = `${leftNumber * 0.3}px`;
          }

          left = `calc(50% + ${left})`;
        }

        return (
          <div
            className={s.polygonwrapper}
            data-centred={props?.centred}
            style={{ width, height, top, left }}
            onClick={() => {
              props?.onClick(polygon);
            }}
            key={polygon?.number}
          >
            <div
              className={s.polygon}
              style={{ clipPath }}
              onClick={() => props?.onClick(polygon)}
            />
            {props?.infocorpus && (
              <div className={s.number} onClick={() => props?.onClick(polygon)}>
                {polygon?.number}
              </div>
            )}
            {props?.infosection && (
              <div className={s.number} onClick={() => props?.onClick(polygon)}>
                {polygon?.number} секция
              </div>
            )}
            {props?.flatlevel && (
              <div
                className={`${s.number} ${s.flatnumber}`}
                onClick={() => props?.onClick(polygon)}
              >
                {polygon?.rooms}К
              </div>
            )}
            <div
              className={s.infowrapper}
              data-top={checkTop(top, height)}
              data-left={checkLeft(left, width)}
            >
              {props?.infocorpus && <Infocorpus data={polygon} />}
              {props?.infosection && <InfoSection data={polygon} />}
              {props?.infolevel && <Infolevel data={polygon} />}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Poligons;
