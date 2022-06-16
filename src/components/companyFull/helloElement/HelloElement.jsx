import React from "react";
import s from "./helloElement.module.css";

import backPicture from "../../../assets/images/image29.jpg";

function HelloElement() {
  return (
    <div className={s.helloelement}>
      <div className={s.dashnav}>Главная / Компания</div>
      <div className={s.container}>
        <h2 className={s.hellotitle}>О компании</h2>
      </div>
      <img src={backPicture} alt="" className={s.helloback} />
    </div>
  );
}

export default HelloElement;
