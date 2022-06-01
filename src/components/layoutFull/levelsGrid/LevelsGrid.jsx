import React, { useState, useEffect } from "react";
import s from "./levelsGrid.module.css";

import Select from "react-select";
import CustomSelector from "../../customSelector";

import { separator } from "../../../helpers/stringsFun";

function LevelsGrid(props) {
  const [options, setOptions] = useState([{ value: "", label: "" }]);
  const [chosenLevel, setChosenLevel] = useState(1);

  useEffect(() => {
    setOptions(
      props?.levels?.map((level, index) => ({
        value: level?.level,
        label: (
          <div className={s.labeltext}>
            {level?.level}{" "}
            <span className={s.graytext}> из {props?.levels?.length}</span>{" "}
            <span className={s.longdash} />{" "}
            <span className={s.greentext}>
              {separator(level?.flats[0]?.price)} ₽
            </span>
          </div>
        ),
      }))
    );
  }, [props?.levels]);

  useEffect(() => {
    setChosenLevel(options[0]);
  }, [options]);
  
  useEffect(() => {
    props?.setSelectedLevel(chosenLevel.value);
  }, [chosenLevel]);

  return (
    <>
      <div className={s.levelsgrid}>
        {props?.levels?.map((level, index) => (
          <div
            className={`${s.level} ${
              level?.level === props?.selectedLevel ? s.selectedlevel : ""
            }`}
            onClick={() => props?.setSelectedLevel(level?.level)}
            key={index}
          >
            {level?.level}
          </div>
        ))}
      </div>
      <div className={s.levelsselect}>
        <CustomSelector
          bgColor="white"
          options={options}
          value={chosenLevel}
          setChosen={setChosenLevel}
          onlytel={true}
        />
      </div>
    </>
  );
}

export default LevelsGrid;
