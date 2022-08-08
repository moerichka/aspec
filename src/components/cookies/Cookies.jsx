import React from "react";
import PropTypes from "prop-types";

import s from "./cookies.module.css";

function Cookies(props) {
  return (
    <div className={s.cookies} data-is-shown={!props?.cookiesAgreed}>
      <span className={s.text}>Мы используем cookies</span>
      <button
        type="button"
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

Cookies.propTypes = {
  cookiesAgreed: PropTypes.bool,
  setCookiesAgreed: PropTypes.func,
};

Cookies.defaultProps = {
  cookiesAgreed: "true",
  setCookiesAgreed: () => {},
};

export default Cookies;
