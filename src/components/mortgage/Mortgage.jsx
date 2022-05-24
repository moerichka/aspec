import React, { useState, useRef, useEffect } from "react";
import s from "./mortgage.module.css";
import "./mortgage.css";

import CustomRange from "../customRange/CustomRange";
import Button from "../button/Button";
import { getUnique } from "../../helpers/arrayFun";

function Mortgage(props) {
  const [rangeValuesPrice, setRangeValuesPrice] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const minPrice = Math.min(...getUnique(props?.project?.flats, "price"));
  const maxPrice = Math.max(...getUnique(props?.project?.flats, "price"));

  useEffect(() => {
    setRangeValuesPrice([maxPrice]);
  }, [maxPrice]);

  return (
    <div className="mortgage">
      <div className={s.container}>
        <div className={s.innercontainer}>
          <div className={`container ${s.innerinnercontainer}`}>
            <h2 className="h2-title">Ипотечный калькулятор</h2>
            <div className={s.contentwrapper}>
              <div className={s.inputs}>
                <div className={s.inputcard}>
                  <h6 className={s.inputtitle}>Стоимость квартиры</h6>
                  <div className={s.inputswrapper}>
                    <input type="text" className={s.input} />
                    <CustomRange
                      MIN={minPrice}
                      MAX={maxPrice}
                      oneThumb={true}
                      STEP={1}
                      rangeValues={rangeValuesPrice}
                      onChange={setRangeValuesPrice}
                      isWhite={true}
                    />
                  </div>
                </div>
                <div className={s.inputcard}>
                  <h6 className={s.inputtitle}>Первый взнос</h6>
                  <div className={s.inputswrapper}>
                    <input type="text" className={s.input} />
                    <CustomRange
                      MIN={minPrice}
                      MAX={maxPrice}
                      oneThumb={true}
                      STEP={1}
                      rangeValues={rangeValuesPrice}
                      onChange={setRangeValuesPrice}
                      isWhite={true}
                    />
                  </div>
                </div>
                <div className={s.inputcard}>
                  <h6 className={s.inputtitle}>Срок кредита</h6>
                  <div className={s.inputswrapper}>
                    <input type="text" className={s.input} />
                    <CustomRange
                      MIN={minPrice}
                      MAX={maxPrice}
                      oneThumb={true}
                      STEP={1}
                      rangeValues={rangeValuesPrice}
                      onChange={setRangeValuesPrice}
                      isWhite={true}
                    />
                  </div>
                </div>
                <div className={s.checkboxes}>
                  <div className="questionForm__cbWrapper">
                    <input
                      type="checkbox"
                      id="acceptcb"
                      className="questionForm__checkbox"
                      onChange={() => {
                        setIsChecked((prev) => !prev);
                      }}
                    />
                    <label
                      htmlFor="acceptcb"
                      className="questionForm__checkboxLabel"
                    >
                      Семейная ипотека
                    </label>
                  </div>
                </div>
                <Button content={"Заказать консультацию"} bgColor={"blue"} width={244}/>
              </div>
              <div className={s.banks}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mortgage;
