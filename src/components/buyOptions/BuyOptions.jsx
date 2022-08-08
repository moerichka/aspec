/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";

import s from "./buyOptions.module.css";

function BuyOptions(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={s.buyOptions}>
      <div className={`container ${s.container}`}>
        <h2 className="h2-title">С этой квартирой можно купить</h2>
        <div className={s.grid}>
          {props?.options?.map((option) => (
            <Link
              to={`/project/${props?.projectId}/layout/${props?.layoutId}/${
                option?.title === "Кладовку" ? "larder" : "parking"
              }`}
              key={option?.title}
            >
              <div className={s.option}>
                <div className={s.title}>{option?.title}</div>
                <div className={s.darkPannel} />
                {option?.image?.imageSmall ? (
                  <ProgressiveImage
                    src={`${PF}${option?.image?.image}`}
                    placeholder={`${PF}${option?.image?.imageSmall}`}
                  >
                    {(src, loading) => (
                      <img
                        style={{
                          filter: loading ? "blur(10px)" : "blur(0px)",
                          transition: "0.3s",
                        }}
                        src={src}
                        alt=""
                        className={s.image}
                      />
                    )}
                  </ProgressiveImage>
                ) : option?.image?.image ? (
                  <img
                    src={`${PF}${option?.image?.image}`}
                    alt=""
                    className={s.img}
                  />
                ) : (
                  <img
                    src={`${PF}${option?.image}`}
                    alt=""
                    className={s.image}
                  />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

BuyOptions.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array,
  projectId: PropTypes.string,
  layoutId: PropTypes.string,
};

BuyOptions.defaultProps = {
  options: [],
  projectId: "",
  layoutId: "",
};

export default BuyOptions;
