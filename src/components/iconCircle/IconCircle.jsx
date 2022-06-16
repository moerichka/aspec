import React from "react";
import s from "./iconCircle.module.css";

function IconCircle(props) {
  return (
    <div className={s.icon}>
      {props?.icon === "share" && <span className="icon-share"></span>}
    </div>
  );
}

export default IconCircle;
