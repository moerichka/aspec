import React from "react";
import s from "./dashnav.module.css";
import PropsType from "prop-types";

function Dashnav(props) {
  return (
    <div className={s.dashnav}>
      <div className="container">
        {props?.wayArray?.map((elem, index) => {
          return index === 0 ? (
            <span key={index}><span className={elem?.gray ? s.gray : ""}>{elem.title}</span></span>
          ) : (
            <span key={index}> / <span className={elem?.gray ? s.gray : ""}>{elem.title}</span></span>
          );
        })}
      </div>
    </div>
  );
}

Dashnav.PropsType = {
    wayArray : PropsType.array
};

Dashnav.defaultProps = {
    wayArray : [{title: "Главная"}]
}

export default Dashnav;
