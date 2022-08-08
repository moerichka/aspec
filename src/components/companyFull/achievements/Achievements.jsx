import React from "react";

import ProgressiveImage from "react-progressive-graceful-image";

import image1Full from "../../../assets/images/image30.jpg";
import image1FullSmall from "../../../assets/images/image30small.jpg";
import image2Full from "../../../assets/images/image31.jpg";
import image2FullSmall from "../../../assets/images/image31small.jpg";
import image3Full from "../../../assets/images/image32.jpg";
import image3FullSmall from "../../../assets/images/image32small.jpg";

import s from "./achievements.module.css";

function Achievements() {
  const image1 = { image: image1Full, imageSmall: image1FullSmall };
  const image2 = { image: image2Full, imageSmall: image2FullSmall };
  const image3 = { image: image3Full, imageSmall: image3FullSmall };
  const achievementsArray = [
    {id: 0, image: image1, result: "> 1000", text: "Сотрудников по всей России" },
    {id: 1, image: image2, result: "> 3990", text: "Успешно выполненных проектов" },
    {id: 2, image: image3, result: "> 10280", text: "Довольных покупателей" },
  ];

  return (
    <div className={s.achievements}>
      <div className="container">
        <div className={s.items}>
          {achievementsArray?.map((achievement) => (
            <div className={s.achievement} key={achievement?.id}>
              {achievement?.image?.imageSmall ? (
                <ProgressiveImage
                  src={achievement?.image?.image}
                  placeholder={achievement?.image?.imageSmall}
                >
                  {(src, loading) => (
                    <img
                      style={{
                        filter: loading ? "blur(10px)" : "blur(0px)",
                        transition: "0.3s",
                      }}
                      src={src}
                      alt=""
                      className={s.img}
                    />
                  )}
                </ProgressiveImage>
              ) : (
                <img src={achievement?.image?.image} alt="" className={s.img} />
              )}
              <div className={s.contentWrapper}>
                <div className={s.result}>{achievement?.result}</div>
                <div className={s.line} />
                <p className={s.text}>{achievement?.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
