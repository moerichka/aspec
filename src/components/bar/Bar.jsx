import React from "react";

import s from "./bar.module.css"

function Bar() {
  return (
    <div className={s.bar}>
      <div className={s.gradientBar} />
      <div className={s.yellowBar} />
    </div>
  );
}

export default Bar;
