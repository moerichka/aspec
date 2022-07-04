import React from "react";
import s from "./helloElement.module.css";

import ProgressiveImage from "react-progressive-graceful-image";
import {Link} from "react-router-dom"

import backPicture from "../../../assets/images/image29.jpg";
import backPictureSmall from "../../../assets/images/image29small.jpg";

function HelloElement() {
  const image1 = {image: backPicture, smallimage: backPictureSmall}
  return (
    <div className={s.helloelement}>
      <div className={s.dashnav}><Link className="dashnav__link" to="/">Главная</Link> / Компания</div>
      <div className={s.container}>
        <h2 className={s.hellotitle}>О компании</h2>
      </div>
      {image1?.smallimage ? (
        <ProgressiveImage src={image1?.image} placeholder={image1?.smallimage}>
          {(src, loading) => (
            <img
              style={{
                filter: loading ? "blur(10px)" : "blur(0px)",
                transition: "0.3s",
              }}
              src={src}
              alt=""
              className={s.helloback}
            />
          )}
        </ProgressiveImage>
      ) : (
        <img src={image1?.image} alt="" className={s.helloback} />
      )}
    </div>
  );
}

export default HelloElement;
