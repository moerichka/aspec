import React from "react";
import s from "./button.module.css";

export default function Button(props) {
  const buttonStyles = {
    fontSize: props.fz ? props.fz : "14px",
    lineHeight: props.lh ? props.lh : "22px",
    // width: props.width ? props.width : "200px",
    maxWidth: props.width ? props.width : "200px",
    height: props.height ? props.height : "54px",
    color: props.color ? props.color : "",
  };

  return (
    <button
      style={buttonStyles}
      className={s.button}
      data-role={props.bgColor}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
}
