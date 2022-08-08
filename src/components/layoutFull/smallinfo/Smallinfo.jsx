/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

import Button from "../../button/Button";

import s from "./smallinfo.module.css";

function Smallinfo(props) {
  // const width = props?.infoVisible?.styles?.width;
  // const height = props?.infoVisible?.styles?.height;
  const top = props?.infoVisible?.styles?.top;
  const left = props?.infoVisible?.styles?.left;
  // const clipPath = props?.infoVisible?.styles?.clipPath;

  return (
    <div className={s.smallinfo} style={{ top, left }}>
      <div>
        <h6 className={s.smallinfotitle}>
          {props?.title} №{props?.infoVisible?.number}
        </h6>
        <div className={s.smallinfoprice}>
          <span>Цена</span>
          <span className={s.smallinfobold}>{props?.infoVisible?.price} ₽</span>
        </div>
        <Button BGColor="green" content="Забронировать" width="174" />
      </div>
      <div
        className={s.iconclose}
        onClick={() => {
          props.setInfoVisible(false);
        }}
      >
        <span className="icon-cancel" />
      </div>
    </div>
  );
}

Smallinfo.propTypes = {
  infoVisible: {},
  title: PropTypes.string,
  setInfoVisible: PropTypes.func,
};

Smallinfo.defaultProps = {
  infoVisible: {},
  title: "",
  setInfoVisible: () => {},
};

export default Smallinfo;
