import React from "react";
import s from "./buyOptions.module.css";
import PropsTypes from "prop-types";

import { Link, useNavigate } from "react-router-dom";

function BuyOptions(props) {
  const navigate = useNavigate();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={s.buyOptions}>
      <div className={`container ${s.container}`}>
        <h2 className="h2-title">С этой квартирой можно купить</h2>
        <div className={s.grid}>
          {props?.options?.map((option, index) => (
            <Link
              to={`/project/${props?.projectId}/layout/${props?.layoutId}/${
                option?.title === "Кладовку" ? "larder" : "parking"
              }`}
              key={index}
            >
              <div className={s.option}>
                <div className={s.title}>{option?.title}</div>
                <div className={s.darkPannel}></div>
                <img src={`${PF}${option?.image}`} alt="" className={s.image} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

BuyOptions.propsTypes = {
  options: PropsTypes.array,
};

BuyOptions.defaultProps = {
  option: [],
};

export default BuyOptions;
