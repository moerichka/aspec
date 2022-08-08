import React from "react";
import PropTypes from "prop-types"

import s from "./iconCircle.module.css";

function IconCircle(props) {
  return (
    <div className={s.icon}>
      {props?.icon === "share" && <span className="icon-share" />}
    </div>
  );
}

IconCircle.propTypes = {
  icon: PropTypes.string,
};

IconCircle.defaultProps = {
  icon: "share",
};

export default IconCircle;
