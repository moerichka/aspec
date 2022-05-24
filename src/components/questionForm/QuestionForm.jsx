import React, { useRef, useState, useEffect } from "react";
import "./questionForm.css";
import axios from "axios";

import Button from "../button";

export default function QuestionForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [congrat, setCongrat] = useState("");
  
  const personName = useRef();
  const personTel = useRef();

  useEffect(()=>{
    const hideCongrat = async ()=>{
      window.setTimeout(()=>{setCongrat("")}, 3000)
    }
    hideCongrat()
  }, [congrat])

  const submitHandler = async (e) => {
    e.preventDefault();
    const requestData = {
      name: personName.current.value,
      tel: personTel.current.value,
    };
    if (isChecked) {
      setError("")
      setCongrat("Спасибо, ваше сообщение успешно отправлено!")
      try {
        const res = await axios.post(`/ask/forcall`, requestData);
      } catch (error) {
        console.log("error: ", error);
      }
    } else {
      setError(`Вы не поставили согласие на обработку персональных данных`)
    }
  };

  return (
    <div className="questionForm">
      <div className="questionForm__container">
        <div className="questionForm__wrapper">
          <div className="questionForm__titleWrapper">
            <h2 className="questionForm__title">Остались вопросы? Ответим</h2>
            <p className="questionForm__desc">
              Заполните необходимые поля, и наши менеджеры свяжутся с Вами в
              ближайшее время
            </p>
          </div>
          <form className="questionForm__form" onSubmit={submitHandler}>
            <div className="questionForm__inputsWrapper">
              <input
                type="text"
                className="questionForm__input"
                placeholder="Ваше имя"
                ref={personName}
                required
              />
              <input
                type="tel"
                className="questionForm__input"
                placeholder="Ваш номер телефона"
                ref={personTel}
                required
              />
              <Button content="Отправить" bgColor="green" width="184px" />
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
                  Согласен на обработку{" "}
                  <span className="questionForm__agreementLink">
                    персональных данных
                  </span>
                </label>
              </div>
            </div>
          </form>
          {error && <div className="questionForm__error">{error}</div>}
          {congrat && <div className="questionForm__congrat">{congrat}</div>}
        </div>
      </div>
    </div>
  );
}
