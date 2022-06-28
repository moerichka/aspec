import React, { useRef, useState, useEffect } from "react";
import s from "./questionForm.module.css";
import axios from "axios";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";

import Button from "../button";

import {telChecker} from "../../helpers/stringsFun"

export default function QuestionForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [congrat, setCongrat] = useState("");

  const [personName, setPersonName] = useState("");
  const [personTel, setPersonTel] = useState("");
  console.log('personTel: ', personTel);

  useEffect(() => {
    const hideCongrat = async () => {
      window.setTimeout(() => {
        setCongrat("");
      }, 15000);
    };
    hideCongrat();
  }, [congrat]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const requestData = {
      name: personName,
      tel: personTel,
    };
    if (!isChecked) {
      setError(`Вы не поставили согласие на обработку персональных данных`);
    } else if(!telChecker(personTel)){
      setError(`Поле телефон не заполнено или заполнено не верно`);
    } else {
      setError("");
      setCongrat("Спасибо, ваше сообщение успешно отправлено!");
      setPersonName("");
      setPersonTel("");
      setIsChecked(false);
      try {
        const res = await axios.post(`/ask/forcall`, requestData);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  return (
    <div className={s.questionForm}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.titleWrapper}>
            <h2 className={s.title}>Остались вопросы? Ответим</h2>
            <p className={s.desc}>
              Заполните необходимые поля, и наши менеджеры свяжутся с Вами в
              ближайшее время
            </p>
          </div>
          <form className={s.form} onSubmit={submitHandler}>
            <div className={s.inputsWrapper}>
              <input
                type="text"
                className={s.input}
                placeholder="Ваше имя"
                value={personName}
                onChange={(e) => {
                  e.preventDefault();
                  setPersonName(e.target.value);
                }}
                required
              />
              <InputMask
                type="tel"
                mask="+7\ (999) 999 99 99" maskChar=" "
                className={s.input}
                placeholder="Ваш номер телефона"
                value={personTel}
                onChange={(e) => {
                  e.preventDefault();
                  setPersonTel(e.target.value);
                }}
                required
              />
              <Button content="Отправить" bgColor="green" width="184px" />
              <div className={s.cbWrapper}>
                <input
                  type="checkbox"
                  id="acceptcb"
                  className={s.checkbox}
                  onChange={() => {
                    setIsChecked((prev) => !prev);
                  }}
                  checked={isChecked}
                />
                <label htmlFor="acceptcb" className={s.checkboxLabel}>
                  Согласен на обработку{" "}
                  <Link to="/" className={s.agreementLink}>персональных данных</Link>
                </label>
              </div>
            </div>
          </form>
          <div className={s.error} data-visible={error ? "true" : false}>{error}</div>
          <div className={s.congrat} data-visible={congrat ? "true" : false}>{congrat}</div>
        </div>
      </div>
    </div>
  );
}
