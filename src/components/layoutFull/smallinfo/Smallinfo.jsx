import React from "react";
import s from "./smallinfo.module.css";

import Button from "../../button/Button";

function Smallinfo(props) {
  return (
    <div className={s.smallinfo}>
      <div>
        <h6 className={s.smallinfotitle}>
          {props?.title} №{props?.infoVisible?.number}
        </h6>
        <div className={s.smallinfoprice}>
          <span>Цена</span>
          <span className={s.smallinfobold}>{props?.infoVisible?.price} ₽</span>
        </div>
        <Button bgColor="green" content="Забронировать" width="174" />
      </div>
      <div
        className={s.iconclose}
        onClick={() => {
          props.setInfoVisible(false);
        }}
      >
        <span className="icon-cancel"></span>
      </div>
    </div>
  );
}

export default Smallinfo;
