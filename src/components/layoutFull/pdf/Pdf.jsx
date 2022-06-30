import React, { useState, useEffect } from "react";
import s from "./pdf.module.css";

import Compass from "../compass/Compass";
import LevelsGrid from "../levelsGrid/LevelsGrid";

import InfoShort from "./infoShort";
import LayoutPoligons from "../layoutPoligons/LayoutPoligons";

function LayoutFull(props) {
  const [selectedLevel, setSelectedLevel] = useState(1);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const amountOfLevels = 7;

  return (
    <div className={s.pdf}>
      <div className={`${s.flat} ${s.flatgrid}`}>
        <div className={s.levels}>
          <div className={s.compass}>
            <Compass degree={props?.layout?.degree} />
          </div>
        </div>
        <div className={s.layoutscolumn}>
          <div className={s.layout}>
            <div className={`${s.layoutimgwrapper} ${s.layoutlayout}`}>
              <img
                className={s.layoutimg}
                src={`${PF}${props?.layout?.layouts[0]}`}
                alt=""
              />
            </div>
          </div>
          <div className={s.levellayout}>
            <LayoutPoligons
              layout={props?.project?.levels[selectedLevel]?.image}
              polygons={[props?.project?.levels[selectedLevel]?.flats[0]]}
              styleVarient={"levels"}
            />
          </div>
        </div>
        <InfoShort
          project={props?.project}
          layout={props?.layout}
          selectedLevel={selectedLevel}
          amountOfLevels={amountOfLevels}
        />
      </div>
    </div>
  );
}

export default LayoutFull;
