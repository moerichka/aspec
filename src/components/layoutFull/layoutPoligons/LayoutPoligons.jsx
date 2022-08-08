/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import PropTypes from "prop-types";

import { ErrorBoundary } from "react-error-boundary";

import s from "./layoutPoligons.module.css";

function LayoutPoligons(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={s.layoutwrapper} data-style={props?.styleVarient}>
      <img className={s.img} src={`${PF}${props?.layout}`} alt="" />

      <ErrorBoundary FallbackComponent={<div>Error</div>}>
        {props?.polygons?.map((polygon) => {
          const width = polygon?.styles?.width;
          const height = polygon?.styles?.height;
          const top = polygon?.styles?.top;
          const left = polygon?.styles?.left;
          const clipPath = polygon?.styles?.clipPath;

          return (
            <div
              className={s.polygonwrapper}
              data-style={props?.styleVarient}
              data-chosen={props?.infoVisible?.number === polygon?.number}
              style={{ width, height, top, left }}
              onClick={() => {
                props?.clickHandler(polygon);
              }}
              key={polygon?.number}
            >
              <div
                className={s.polygon}
                data-style={props?.styleVarient}
                style={{ clipPath }}
                onClick={props?.layoutClickHandler}
              />
              {polygon?.number && !props?.hidenumber && (
                <div className={s.number} onClick={props?.layoutClickHandler}>
                  № {polygon?.number}
                </div>
              )}
            </div>
          );
        })}
      </ErrorBoundary>
    </div>
  );
}

LayoutPoligons.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  polygons: PropTypes.array,
  styleVarient: PropTypes.string,
  infoVisible: PropTypes.bool,
  hidenumber: PropTypes.bool,
  layoutClickHandler: PropTypes.func,
  clickHandler: PropTypes.func,
  layout: PropTypes.string,
};

LayoutPoligons.defaultProps = {
  polygons: [],
  styleVarient: "levels",
  infoVisible: false,
  hidenumber: false,
  layoutClickHandler: ()=>{},
  clickHandler: ()=>{},
  layout: "",
};

export default LayoutPoligons;
