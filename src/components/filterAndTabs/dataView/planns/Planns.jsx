import React from "react";

import Layout from "../../../layout";
import Button from "../../../button";
import { flats } from "../../../../data";

import s from "./planns.module.css";

function Planns() {
  return (
    <div className={s.planns}>
      <div className={s.contentContainer}>
        <div className={s.grid}>
          {flats?.map((element) => (
            <Layout room={element} key={element?.id} />
          ))}
        </div>
        <div className={s.button}>
          <Button
            content="Смотреть все квартиры"
            BGColor="blue"
            width="245px"
          />
        </div>
      </div>
    </div>
  );
}

export default Planns;
