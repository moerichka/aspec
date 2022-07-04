import React from "react";
import s from "./cookies.module.css";

function Cookies(props) {
  return (
    <div className={s.cookies} data-isshown={!props?.cookiesAgreed}>
      <span className={s.text}>Мы используем cookies</span>
      <button
        className={s.agreement}
        onClick={(e) => {
          e.preventDefault();
          props?.setCookiesAgreed(true);
        }}
      >
        хорошо
      </button>
    </div>
  );
}

export default Cookies;
