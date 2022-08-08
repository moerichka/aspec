import React from "react";
import PropTypes from "prop-types";

import s from "./button.module.css";

function Button(props) {
  const buttonStyles = {
    fontSize: props?.fz ? props?.fz : "14px",
    lineHeight: props?.lh ? props?.lh : "22px",
    // width: props?.width ? props?.width : "200px",
    maxWidth: props?.width ? props?.width : "200px",
    height: props?.height ? props?.height : "54px",
    color: props?.color ? props?.color : "",
  };

  return (
    <button
      type="button"
      style={buttonStyles}
      className={s.button}
      data-role={props?.BGColor}
      onClick={props?.onClick}
    >
      {props?.content}
    </button>
  );
}

Button.propTypes = {
  fz: PropTypes.string,
  lh: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  BGColor: PropTypes.string,
  onClick: PropTypes.func,
  content: PropTypes.string,
};

Button.defaultProps = {
  fz: "14px",
  lh: "22px",
  width: "200px",
  height: "54px",
  color: "",
  BGColor: "green",
  onClick: ()=>{},
  content: "Нажать",
};

export default Button;
