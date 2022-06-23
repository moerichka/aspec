import React, { useState } from "react";
import s from "./companyFull.module.css";

import HelloElement from "./helloElement";
import Country from "./country";
import Awards from "./awards";
import Achievements from "./achievements";
import History from "./history";
import Info from "./info";

function CompanyFull() {

  return (
    <div className={s.company}>
      <HelloElement />
      <div className={s.country}>
        <Country />
      </div>
      <div className={s.awards}>
        <Awards />
      </div>
      <div className={s.achievements}>
        <Achievements />
      </div>
      <div className={s.history}>
        <History />
      </div>
      <div className={s.info}>
        <Info />
      </div>
    </div>
  );
}

export default CompanyFull;
