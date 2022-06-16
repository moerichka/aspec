import React, { useRef, useState, useEffect } from "react";
import s from "./questionForm.module.css";
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
                ref={personName}
                required
              />
              <input
                type="tel"
                className={s.input}
                placeholder="Ваш номер телефона"
                ref={personTel}
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
                />
                <label
                  htmlFor="acceptcb"
                  className={s.checkboxLabel}
                >
                  Согласен на обработку{" "}
                  <span className={s.agreementLink}>
                    персональных данных
                  </span>
                </label>
              </div>
            </div>
          </form>
          {error && <div className={s.error}>{error}</div>}
          {congrat && <div className={s.congrat}>{congrat}</div>}
        </div>
      </div>
    </div>
  );
}
