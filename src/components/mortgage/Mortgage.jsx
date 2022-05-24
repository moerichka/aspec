import React, { useState, useRef, useEffect } from "react";
import s from "./mortgage.module.css";

import CustomRange from "../customRange/CustomRange";
import Button from "../button/Button";
import { getUnique } from "../../helpers/arrayFun";

import bankopen from "../../assets/images/bankopen.svg";
import banksber from "../../assets/images/banksber.svg";
import bankraif from "../../assets/images/bankraif.svg";
import bankuni from "../../assets/images/bankuni.png";

function Mortgage(props) {
  const [rangeValuesPrice, setRangeValuesPrice] = useState([]);
  const [rangeValuesContribution, setRangeValuesContribution] = useState([]);
  const [rangeValuesTerm, setRangeValuesTerm] = useState([]);

  const [isCheckedFamily, setIsCheckedFamily] = useState(false);
  const [isCheckedMother, setIsCheckedMother] = useState(false);
  const [isCheckedMilitary, setIsCheckedMilitary] = useState(false);

  const minPrice = Math.min(...getUnique(props?.project?.flats, "price"));
  const maxPrice = Math.max(...getUnique(props?.project?.flats, "price"));
  const minTerm = 1;
  const maxTerm = 30;

  useEffect(() => {
    setRangeValuesPrice([maxPrice]);
    setRangeValuesContribution([maxPrice]);
    setRangeValuesTerm([maxTerm]);
  }, [maxPrice, maxTerm]);

  const bankinfo = [
    {
      logo: banksber,
      title: "ПАО “Сбербанк”",
      percentage: "1.85",
      payment: "33 900",
      bottomContent: "Ставка до сдачи дома, ипотека от 3 млн",
    },
    {
      logo: bankopen,
      title: "Банк “Открытие”",
      percentage: "5.80",
      payment: "51 400",
      bottomContent: "Ставка до сдачи дома, ипотека от 3 млн",
    },
    {
      logo: bankuni,
      title: "АО “ЮниКредит Банк”",
      percentage: "5.99",
      payment: "59 000",
      bottomContent: "Ставка до сдачи дома, ипотека от 3 млн",
    },
    {
      logo: bankraif,
      title: "Банк “Райффайзен”",
      percentage: "5.80",
      payment: "51 400",
      bottomContent: "Ставка до сдачи дома, ипотека от 3 млн",
    },
    {
      logo: banksber,
      title: "ПАО “Сбербанк”",
      percentage: "1.85",
      payment: "33 900",
      bottomContent: "Ставка до сдачи дома, ипотека от 3 млн",
    },
    {
      logo: bankopen,
      title: "Банк “Открытие”",
      percentage: "5.80",
      payment: "51 400",
      bottomContent: "Ставка до сдачи дома, ипотека от 3 млн",
    },
  ];

  return (
    <div className={s.mortgage}>
      <div className={s.container}>
        <div className={s.innercontainer}>
          <div className={`container ${s.innerinnercontainer}`}>
            <h2 className="h2-title">Ипотечный калькулятор</h2>
            <div className={s.contentwrapper}>
              <div className={s.inputs}>
                <div className={s.inputcard}>
                  <h6 className={s.inputtitle}>Стоимость квартиры</h6>
                  <div className={s.inputswrapper}>
                    <input
                      type="text"
                      className={s.inputtext}
                      value={rangeValuesPrice[0]}
                    />
                    <CustomRange
                      MIN={minPrice}
                      MAX={maxPrice}
                      oneThumb={true}
                      STEP={10000}
                      rangeValues={rangeValuesPrice}
                      onChange={setRangeValuesPrice}
                      isWhite={true}
                      withText={false}
                    />
                  </div>
                </div>
                <div className={s.inputcard}>
                  <h6 className={s.inputtitle}>Первый взнос</h6>
                  <div className={s.inputswrapper}>
                    <div className={s.withpercetnage}>
                      <input
                        type="text"
                        className={`${s.inputtext} ${s.percentage}`}
                        value={rangeValuesContribution[0]}
                      />
                    </div>
                    <CustomRange
                      MIN={minPrice}
                      MAX={maxPrice}
                      oneThumb={true}
                      STEP={10000}
                      rangeValues={rangeValuesContribution}
                      onChange={setRangeValuesContribution}
                      isWhite={true}
                      withText={false}
                    />
                  </div>
                </div>
                <div className={s.inputcard}>
                  <h6 className={s.inputtitle}>Срок кредита</h6>
                  <div className={`${s.inputswrapper} ${s.term}`}>
                    <input
                      type="text"
                      className={s.inputtext}
                      value={rangeValuesTerm[0]}
                    />
                    <CustomRange
                      MIN={minTerm}
                      MAX={maxTerm}
                      oneThumb={true}
                      STEP={1}
                      rangeValues={rangeValuesTerm}
                      onChange={setRangeValuesTerm}
                      isWhite={true}
                      withText={false}
                    />
                  </div>
                </div>
                <div className={s.checkboxes}>
                  <div className={`${s.cbWrapper} ${s.firstcb}`}>
                    <input
                      type="checkbox"
                      id="familycb"
                      className={s.checkbox}
                      onChange={() => {
                        setIsCheckedFamily((prev) => !prev);
                      }}
                      checked={isCheckedFamily}
                    />
                    <label htmlFor="familycb" className={s.checkboxLabel}>
                      Семейная ипотека
                    </label>
                  </div>
                  <div className={`${s.cbWrapper} ${s.secondcb}`}>
                    <input
                      type="checkbox"
                      id="mothercb"
                      className={s.checkbox}
                      onChange={() => {
                        setIsCheckedMother((prev) => !prev);
                      }}
                      checked={isCheckedMother}
                    />
                    <label htmlFor="mothercb" className={s.checkboxLabel}>
                      Есть материнский капитал
                    </label>
                  </div>
                  <div className={`${s.cbWrapper} ${s.thirdcb}`}>
                    <input
                      type="checkbox"
                      id="militarycb"
                      className={s.checkbox}
                      onChange={() => {
                        setIsCheckedMilitary((prev) => !prev);
                      }}
                      checked={isCheckedMilitary}
                    />
                    <label htmlFor="militarycb" className={s.checkboxLabel}>
                      Военная ипотека
                    </label>
                  </div>
                </div>
                <Button
                  content={"Заказать консультацию"}
                  bgColor={"blue"}
                  width={244}
                />
              </div>
              <div className={s.banks}>
                {bankinfo.map((bank) => (
                  <div className={s.bankcard}>
                    <div className={s.top}>
                      <img src={bank.logo} alt="" className={s.logo} />
                      <h6 className={s.title}>{bank.title}</h6>
                    </div>
                    <div className={s.middle}>
                      <div className={s.middleelem}>
                        <div className={s.middletitle}>Ставка</div>
                        <div className={s.middlevalue}>
                          от <span className={s.bold}>{bank.percentage}%</span>
                        </div>
                      </div>
                      <div className={s.middleelem}>
                        <div className={s.middletitle}>Ежемесячный платеж</div>
                        <div className={s.middlevalue}>
                          <span className={s.bold}>{bank.payment} ₽</span> / мес
                        </div>
                      </div>
                    </div>
                    <div className={s.bottom}>
                      {bank.bottomContent}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mortgage;
