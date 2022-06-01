import React from "react";
import s from "./layoutPoligons.module.css";

function LayoutPoligons(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div
      className={`${s.layoutwrapper} ${
        props?.styleVarient === "levels" ? s.levels
          : props?.styleVarient === "genplan" ? s.genplan
          : props?.styleVarient === "parking" ? s.parking
          : ""
      }`}
    >
      <img className={s.img} src={`${PF}${props?.layout}`} alt="" />

      {props?.polygons?.map((polygon) => {

        const { width, height, top, left, clipPath } = polygon?.styles;

        return (
          <div
            className={s.polygonwrapper}
            style={{ width, height, top, left }}
            onClick={()=>{props?.clickHandler(polygon)}}
            key={polygon?.number}
          >
            <div
              className={s.polygon}
              style={{ clipPath }}
              onClick={props?.layoutClickHandler}
            />
            {polygon?.number && !props?.hidenumber && (
              <div
                className={s.number}
                onClick={props?.layoutClickHandler}
              >
                № {polygon?.number}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default LayoutPoligons;
