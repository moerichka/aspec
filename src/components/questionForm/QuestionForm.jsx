/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";

import Button from "../button";

import { telChecker } from "../../helpers/stringsFun";

import s from "./questionForm.module.css";

function QuestionForm(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [congrat, setCongrat] = useState("");

  const [personName, setPersonName] = useState("");
  const [personTel, setPersonTel] = useState("");

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
    } else if (!telChecker(personTel)) {
      setError(`Поле телефон не заполнено или заполнено не верно`);
    } else {
      setError("");
      setCongrat("Спасибо, ваше сообщение успешно отправлено!");
      setPersonName("");
      setPersonTel("");
      setIsChecked(false);
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await axios.post(`/ask/forcall`, requestData);
      } catch (errorReq) {
        // eslint-disable-next-line no-console
        console.error("error: ", errorReq);
      }
    }
  };

  return !props?.isPopup ? (
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
                // eslint-disable-next-line no-nonoctal-decimal-escape
                mask="+7\ (\999) 999-99-99"
                className={s.input}
                placeholder="Ваш номер телефона"
                value={personTel}
                onChange={(e) => {
                  e.preventDefault();
                  setPersonTel(e.target.value);
                }}
                required
              />
              <Button content="Отправить" BGColor="green" width="184px" />
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
                  <Link to="/" className={s.agreementLink}>
                    персональных данных
                  </Link>
                </label>
              </div>
            </div>
          </form>
          <div className={s.error} data-visible={error ? "true" : false}>
            {error}
          </div>
          <div className={s.congrat} data-visible={congrat ? "true" : false}>
            {congrat}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={s.questionForm}>
      <div className={s.containerPopup}>
        <div className={s.wrapperPopup}>
          <div className={s.closePopup} onClick={()=>props?.closeClick(false)}>
            <span className="icon-cancel" />
          </div>
          <div className={s.titleWrapper}>
            <h2 className={s.titlePopup}>Остались вопросы? Ответим</h2>
            <p className={s.descPopup}>
              Заполните необходимые поля, и наши менеджеры свяжутся с Вами в
              ближайшее время
            </p>
          </div>
          <form className={s.form} onSubmit={submitHandler}>
            <div className={s.inputsWrapperPopup}>
              <input
                type="text"
                className={s.inputPopup}
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
                // eslint-disable-next-line no-nonoctal-decimal-escape
                mask="+7\ (\999) 999-99-99"
                className={s.inputPopup}
                placeholder="Ваш номер телефона"
                value={personTel}
                onChange={(e) => {
                  e.preventDefault();
                  setPersonTel(e.target.value);
                }}
                required
              />
              <div className={s.cbWrapperPopup}>
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
                  <Link to="/" className={s.agreementLink}>
                    персональных данных
                  </Link>
                </label>
              </div>
              <div className={s.buttonPopup}>
                <Button content="Отправить" BGColor="green" width="184px" />
              </div>
            </div>
          </form>
          <div className={s.error} data-visible={error ? "true" : false}>
            {error}
          </div>
          <div className={s.congrat} data-visible={congrat ? "true" : false}>
            {congrat}
          </div>
        </div>
      </div>
    </div>
  );
}

QuestionForm.propTypes = {
  isPopup: PropTypes.bool,
  closeClick: PropTypes.func,
};

QuestionForm.defaultProps = {
  isPopup: true,
  closeClick: ()=>{},
};

export default QuestionForm;
