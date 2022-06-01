import React from "react";
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
      <div className={s.compasscircle}></div>
      <div className={s.compassvertical}></div>
      <div className={s.compasshorizontal}></div>
      <div className={s.compassline} style={compassDegree}></div>
    </div>
  );
}

export default Compass;
