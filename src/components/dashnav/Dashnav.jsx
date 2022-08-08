/* eslint-disable react/no-array-index-key */
import React from "react";

import PropsType from "prop-types";

import s from "./dashnav.module.css";

function Dashnav(props) {
  return (
    <div className={s.dashnav}>
      <div className="container">
        {props?.wayArray?.map((elem, index) => index === 0 ? (
            <span key={index}><span className={elem?.gray ? s.gray : ""}>{elem.title}</span></span>
          ) : (
            <span key={index}> / <span className={elem?.gray ? s.gray : ""}>{elem.title}</span></span>
          ))}
      </div>
    </div>
  );
}

Dashnav.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    wayArray : PropsType.array
};

Dashnav.defaultProps = {
    wayArray : [{title: "Главная"}]
}

export default Dashnav;
