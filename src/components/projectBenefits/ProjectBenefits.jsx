import React from "react";

import ProgressiveImage from "react-progressive-graceful-image";

import imgChild from "../../assets/images/projectBenChild2.png";
import imgChildSmall from "../../assets/images/projectBenChild2small.png";
import imgHouse from "../../assets/images/projectBenHouse.png";
import imgHouseSmall from "../../assets/images/projectBenHousesmall.png";
import imgMoreHouse from "../../assets/images/projectBenMoreHouse.png";
import imgMoreHouseSmall from "../../assets/images/projectBenMoreHousesmall.png";
import imgYard from "../../assets/images/projectBenYard.png";
import imgYardSmall from "../../assets/images/projectBenYardsmall.png";

import s from "./projectBenefits.module.css";

function ProjectBenefits() {
  const imageChild = { image: imgChild, imageSmall: imgChildSmall };
  const imageHouse = { image: imgHouse, imageSmall: imgHouseSmall };
  const imageMoreHouse = { image: imgMoreHouse, imageSmall: imgMoreHouseSmall };
  const imageYard = { image: imgYard, imageSmall: imgYardSmall };

  return (
    <div className={s.benefits}>
      <div className={`${s.benefitsContainer} container`}>
        <h2 className="h2-title">Преимущества проекта</h2>
        <div className={s.grid}>
          <div className={`${s.item} ${s.item1}`}>
            <div className={s.itemFrontWrapper}>
              <span className={`icon-map ${s.icon}`} />
              <h6 className={s.itemTitle}>Инфраструктура</h6>
            </div>
          </div>
          <div className={`${s.item} ${s.item2}`}>
            <div className={`${s.itemFrontWrapper} ${s.end}`}>
              <h6 className={s.itemTitle}>Архитектура</h6>
            </div>
            <div className={s.itemImgWrapper}>
              <div className={s.itemDarkPanel} />
              {imageHouse?.imageSmall ? (
                <ProgressiveImage
                  src={imageHouse?.image}
                  placeholder={imageHouse?.imageSmall}
                >
                  {(src, loading) => (
                    <img
                      style={{
                        filter: loading ? "blur(10px)" : "blur(0px)",
                        transition: "0.3s",
                      }}
                      src={src}
                      alt=""
                      className={s.itemImg}
                    />
                  )}
                </ProgressiveImage>
              ) : (
                <img src={imageHouse?.image} alt="" className={s.itemImg} />
              )}
            </div>
          </div>
          <div className={`${s.item} ${s.item3}`}>
            <div className={`${s.itemFrontWrapper} ${s.end}`}>
              <h6 className={s.itemTitle}>Безопасность</h6>
            </div>
            <div className={s.itemImgWrapper}>
              <div className={s.itemDarkPanel} />
              {imageChild?.imageSmall ? (
                <ProgressiveImage
                  src={imageChild?.image}
                  placeholder={imageChild?.imageSmall}
                >
                  {(src, loading) => (
                    <img
                      style={{
                        filter: loading ? "blur(10px)" : "blur(0px)",
                        transition: "0.3s",
                      }}
                      src={src}
                      alt=""
                      className={s.itemImg}
                    />
                  )}
                </ProgressiveImage>
              ) : (
                <img src={imageChild?.image} alt="" className={s.itemImg} />
              )}
            </div>
          </div>
          <div className={`${s.item} ${s.item4}`}>
            <div className={`${s.itemFrontWrapper} ${s.end}`}>
              <h6 className={s.itemTitle}>Расположение</h6>
            </div>
            <div className={s.itemImgWrapper}>
              <div className={s.itemDarkPanel} />
              {imageMoreHouse?.imageSmall ? (
                <ProgressiveImage
                  src={imageMoreHouse?.image}
                  placeholder={imageMoreHouse?.imageSmall}
                >
                  {(src, loading) => (
                    <img
                      style={{
                        filter: loading ? "blur(10px)" : "blur(0px)",
                        transition: "0.3s",
                      }}
                      src={src}
                      alt=""
                      className={s.itemImg}
                    />
                  )}
                </ProgressiveImage>
              ) : (
                <img src={imageMoreHouse?.image} alt="" className={s.itemImg} />
              )}
            </div>
          </div>
          <div className={`${s.item} ${s.item5}`}>
            <div className={s.itemFrontWrapper}>
              <span className={`icon-buildigs ${s.icon}`} />
              <h6 className={s.itemTitle}>Концепция</h6>
            </div>
          </div>
          <div className={`${s.item} ${s.item6}`}>
            <div className={`${s.itemFrontWrapper} ${s.end}`}>
              <h6 className={s.itemTitle}>Экология</h6>
            </div>
            <div className={s.itemImgWrapper}>
              <div className={s.itemDarkPanel} />
              {imageYard?.imageSmall ? (
                <ProgressiveImage
                  src={imageYard?.image}
                  placeholder={imageYard?.imageSmall}
                >
                  {(src, loading) => (
                    <img
                      style={{
                        filter: loading ? "blur(10px)" : "blur(0px)",
                        transition: "0.3s",
                      }}
                      src={src}
                      alt=""
                      className={s.itemImg}
                    />
                  )}
                </ProgressiveImage>
              ) : (
                <img src={imageYard?.image} alt="" className={s.itemImg} />
              )}
            </div>
          </div>
          <div className={`${s.item} ${s.item7}`}>
            <div className={s.itemFrontWrapper}>
              <span className={`icon-planning ${s.icon}`} />
              <h6 className={s.itemTitle}>Полезное пространство</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBenefits;
