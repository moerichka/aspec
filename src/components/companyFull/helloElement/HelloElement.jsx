import React from "react";

import ProgressiveImage from "react-progressive-graceful-image";
import { Link } from "react-router-dom";

import backPicture from "../../../assets/images/image29.jpg";
import backPictureSmall from "../../../assets/images/image29small.jpg";

import s from "./helloElement.module.css";

function HelloElement() {
  const image1 = { image: backPicture, imageSmall: backPictureSmall };
  return (
    <div className={s.helloElement}>
      <div className={s.dashnav}>
        <Link className="dash-nav__link" to="/">
          Главная
        </Link>{" "}
        / Компания
      </div>
      <div className={s.container}>
        <h2 className={s.helloTitle}>О компании</h2>
      </div>
      {image1?.imageSmall ? (
        <ProgressiveImage src={image1?.image} placeholder={image1?.imageSmall}>
          {(src, loading) => (
            <img
              style={{
                filter: loading ? "blur(10px)" : "blur(0px)",
                transition: "0.3s",
              }}
              src={src}
              alt=""
              className={s.helloBack}
            />
          )}
        </ProgressiveImage>
      ) : (
        <img src={image1?.image} alt="" className={s.helloBack} />
      )}
    </div>
  );
}

export default HelloElement;
