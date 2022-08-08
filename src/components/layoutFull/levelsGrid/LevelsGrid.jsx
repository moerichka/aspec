/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CustomSelector from "../../customSelector";

import { separator } from "../../../helpers/stringsFun";

import s from "./levelsGrid.module.css";

function LevelsGrid(props) {
  const [options, setOptions] = useState([{ value: "", label: "" }]);
  const [chosenLevel, setChosenLevel] = useState(1);

  useEffect(() => {
    props?.levels &&
      setOptions(
        props?.levels?.map((level) => ({
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
    props?.setSelectedLevel(chosenLevel?.value);
  }, [chosenLevel, props]);

  return (
    <>
      <div className={s.levelsgrid}>
        {props?.levels?.map((level) => (
          <div
            className={`${s.level} ${
              level?.level === props?.selectedLevel ? s.selectedlevel : ""
            }`}
            onClick={() => props?.setSelectedLevel(level?.level)}
            key={level?.level}
          >
            {level?.level}
          </div>
        ))}
      </div>
      <div className={s.levelsselect}>
        <CustomSelector
          BGColor="white"
          options={options}
          value={chosenLevel}
          setChosen={setChosenLevel}
          onlytel
        />
      </div>
    </>
  );
}

LevelsGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  levels: PropTypes.array,
  selectedLevel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setSelectedLevel: PropTypes.func,
};

LevelsGrid.defaultProps = {
  levels: [],
  selectedLevel: 0,
  setSelectedLevel: () => {},
};

export default LevelsGrid;
