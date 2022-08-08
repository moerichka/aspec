/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";

import s from "./toggler.module.css";

function Toggler(props) {
  const [finishingOn, setFinishingOn] = useState(false);

  return (
    <div className={s.togglerWrapper}>
      <div
        className={`${s.toggler} ${finishingOn ? s.togglerOn : ""}`}
        onClick={() => {
          setFinishingOn((prev) => !prev);
        }}
      >
        <div className={s.togglerpoint} />
      </div>
      <span
        onClick={() => {
          setFinishingOn((prev) => !prev);
        }}
      >
        Добавить отделку{" "}
        <span className={s.togglerbold}>
          <span className={s.disappear}>стоимость</span> +{" "}
          {props?.finishingPrice} ₽
        </span>
      </span>
    </div>
  );
}

Toggler.propTypes = {
  finishingPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Toggler.defaultProps = {
  finishingPrice: 0,
};

export default Toggler;
