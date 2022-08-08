/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import "./buildingProgress.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import { FreeMode, Scrollbar } from "swiper";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {
  dateConverterToDayMonth,
  dateConverterToYear,
} from "../../helpers/dateFun";

import s from "./buildingProgress.module.css";

function BuildingProgress(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [data, setData] = useState(props?.project);
  const [chosenGalleryId, setChosenGalleryId] = useState(1);
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const buildingsArray = data?.buildings;

  const gallerySlides = useMemo(() => {
    const chosenBuilding = buildingsArray?.filter(
      (elem) => elem?.id === chosenGalleryId
    )[0];

    return chosenBuilding?.images?.map((elem) => ({ src: `${PF}${elem}`, width: 2000 }));
  }, [chosenGalleryId, buildingsArray]);


  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    setData(props?.project);
  }, [props?.project]);

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={gallerySlides}
        carousel={{ preload: 1 }}
        plugins={[Thumbnails]}
      />

      <div className="buildingProgress">
        <div className={`container ${s.container}`}>
          <h2 className="h2-title">Ход строительства</h2>
        </div>
        <div className="buildingProgress__swiperWrapper">
          <Swiper
            className="swiper3"
            direction="horizontal"
            spaceBetween={30}
            slidesPerView={1}
            freeMode
            grabCursor
            scrollbar={{ draggable: "true" }}
            modules={[FreeMode, Scrollbar]}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              374: {
                slidesPerView: 1.5,
                spaceBetween: 10
              },
              550: {
                slidesPerView: 1.5,
                spaceBetween: 20
              },
              720: {
                slidesPerView: 1.8,
                spaceBetween: 10
              },
              850: {
                slidesPerView: 2.3,
                spaceBetween: 30
              }
            }}
          >
            {buildingsArray?.map((elem) => (
              <React.Fragment key={elem?.id}>
                {elem?.images && (
                  <SwiperSlide>
                    <div
                      className={s.housewrapper}
                      data-is-image="true"
                      onClick={() => {
                        setOpen(true);
                        setChosenGalleryId(elem?.id);
                      }}
                    >
                      <div className={s.amountpics}>
                        {elem?.images?.length} фото
                      </div>
                      <div className={s.housedatewrapper}>
                        <div className={s.housedate}>
                          {dateConverterToDayMonth(elem?.datePic)}
                        </div>
                        <div className={s.houseyear}>
                          {dateConverterToYear(elem?.datePic)}
                        </div>
                      </div>
                      <div className={s.darkPanel} />
                      <img
                        src={`${PF}${elem?.images[0]}`}
                        alt=""
                        className={s.houseimg}
                      />
                    </div>
                  </SwiperSlide>
                )}
                {elem?.video && (
                  <SwiperSlide>
                    <div className={s.housewrapper}>
                      <div className={s.videoContainer}>
                        <iframe
                          width="100%"
                          height="100%"
                          src={elem?.video}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )}
                {elem?.stream && (
                  <SwiperSlide>
                    <div className={s.housewrapper}>
                      <div className={s.videoContainer}>
                        <iframe
                          width="100%"
                          height="100%"
                          src={elem?.stream}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )}
              </React.Fragment>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

BuildingProgress.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object,
};

BuildingProgress.defaultProps = {
  project: {},
};

export default BuildingProgress;
