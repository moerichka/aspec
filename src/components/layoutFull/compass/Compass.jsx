import React from "react";
import PropTypes from "prop-types";

import s from "./compass.module.css";

function Compass(props) {
  const compassDegree = {
    transform: `translate(-50%, 50%) rotate(${props?.degree}deg)`,
  };

  return (
    <div className={s.compass}>
      <span className={`${s.compassletter} ${s.compassN}`}>С</span>
      <span className={`${s.compassletter} ${s.compassE}`}>В</span>
      <span className={`${s.compassletter} ${s.compassS}`}>Ю</span>
      <span className={`${s.compassletter} ${s.compassW}`}>З</span>
      <div className={s.compasscircle} />
      <div className={s.compassvertical} />
      <div className={s.compasshorizontal} />
      <div className={s.compassline} style={compassDegree} />
    </div>
  );
}

Compass.propTypes = {
  degree: PropTypes.number,
};

Compass.defaultProps = {
  degree: 0,
};

export default Compass;
