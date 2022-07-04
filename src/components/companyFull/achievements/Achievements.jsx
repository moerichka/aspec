import React from "react";
import s from "./achievements.module.css";

import ProgressiveImage from "react-progressive-graceful-image";

import image1Full from "../../../assets/images/image30.jpg";
import image1FullSmall from "../../../assets/images/image30small.jpg";
import image2Full from "../../../assets/images/image31.jpg";
import image2FullSmall from "../../../assets/images/image31small.jpg";
import image3Full from "../../../assets/images/image32.jpg";
import image3FullSmall from "../../../assets/images/image32small.jpg";

function Achievements() {
  const image1 = { image: image1Full, smallimage: image1FullSmall };
  const image2 = { image: image2Full, smallimage: image2FullSmall };
  const image3 = { image: image3Full, smallimage: image3FullSmall };
  const achievementsArray = [
    { image: image1, result: "> 1000", text: "Сотрудников по всей России" },
    { image: image2, result: "> 3990", text: "Успешно выполненных проектов" },
    { image: image3, result: "> 10280", text: "Довольных покупателей" },
  ];

  return (
    <div className={s.achievements}>
      <div className="container">
        <div className={s.items}>
          {achievementsArray?.map((achievement) => (
            <div className={s.achievement}>
              {achievement?.image?.smallimage ? (
                <ProgressiveImage
                  src={achievement?.image?.image}
                  placeholder={achievement?.image?.smallimage}
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
              <div className={s.contentwrapper}>
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
