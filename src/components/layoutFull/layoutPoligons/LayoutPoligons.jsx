import React from "react";
import s from "./layoutPoligons.module.css";
import { ErrorBoundary } from "react-error-boundary";

function LayoutPoligons(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div
      className={s.layoutwrapper} data-style={props?.styleVarient}
    >
      <img className={s.img} src={`${PF}${props?.layout}`} alt="" />

      <ErrorBoundary FallbackComponent={<div>Error</div>}>
          {props?.polygons?.map((polygon) => {
            let width, height, top, left, clipPath = ""
            width = polygon?.styles?.width;
            height = polygon?.styles?.height;
            top = polygon?.styles?.top;
            left = polygon?.styles?.left;
            clipPath = polygon?.styles?.clipPath

           

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

export default LayoutPoligons;
