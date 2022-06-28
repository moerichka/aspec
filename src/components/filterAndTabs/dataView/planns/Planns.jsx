import React, { useState, useEffect } from "react";
import s from "./planns.module.css";

import Layout from "../../../../components/layout";
import Button from "../../../../components/button";
import { flats } from "../../../../data";

function Planns(props) {
  return (
    <div className={s.planns}>
      <div className={s.contentContainer}>
        <div className={s.grid}>
          {flats?.map((element) => (
            <Layout room={element} key={element?.id}></Layout>
          ))}
        </div>
        <div className={s.button}>
          <Button
            content="Смотреть все квартиры"
            bgColor="blue"
            width="245px"
          />
        </div>
      </div>
    </div>
  );
}

export default Planns;
