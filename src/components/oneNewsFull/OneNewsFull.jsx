import React from "react";
import PropTypes from "prop-types"

import ProgressiveImage from "react-progressive-graceful-image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

import contentPic from "../../assets/images/buildingNews2.png";
import contentPicSmall from "../../assets/images/buildingNews2small.png";
import contentPicSlide1 from "../../assets/images/buildingNewsSlide1.png";
import contentPicSlide1Small from "../../assets/images/buildingNewsSlide1small.png";

import IconCircle from "../iconCircle/IconCircle";
import verticalBar from "../../assets/images/Elem2.png";

import s from "./oneNewsFull.module.css";
import "./oneNews.css";

function OneNewsFull(props) {
  const image1 = { id: 0,image: contentPic, imageSmall: contentPicSmall };
  const image2 = { id: 1,image: contentPicSlide1, imageSmall: contentPicSlide1Small };
  const image3 = { id: 2,image: contentPicSlide1, imageSmall: contentPicSlide1Small };
  const sliderarray = [image2, image1, image3];

  return (
    <div className="oneNews">
      <div className={s.toppart}>
        <div className="container">
          <div className={s.titlewrapper}>
            <span className={s.topdate}>9 октября 2021</span>
            <h2 className={`h2-title ${s.toptitle}`}>
              {props?.oneNews?.title}
            </h2>
            <div className={s.titleicon}>
              <IconCircle icon="share" />
            </div>
          </div>
        </div>
      </div>
      <div className={s.mainpart}>
        <div className="container">
          <div className={s.textcontainer}>
            <h5 className={s.maintitle}>
              Лес начинается с тебя новые экологичные проекты для комфортной
              жизни
            </h5>
            <div className={`${s.paragraphwrapper} ${s.main1}`}>
              <p className={s.mainparagraph}>
                Кто подписан на нас в instagram, знает что мы активно ведем
                работу по разработке стратегии компании. Некоторые моменты
                описанные в ней будут для нас в новинку, так как зародились
                совсем недавно, но что-то останется неизменным. В частности,
                наше участие в различных социальных проектах, или так называемая
                социальная ответственность.
              </p>
              <p className={s.mainparagraph}>
                Общая концепция компании «АСПЭК» всегда учитывала потребности и
                интересы общества, так появился Храм Иверской иконы Божией
                Матери, ежегодные субботники, в том числе с выездом в другие
                города, зародились традиционные праздники, как «Масленичный
                кубок», «День флага на Берша» и т.д., были проведены работы по
                проектированию общественных пространств при участии горожан,
                благотворительные акции и другие проекты. О таких вещах мы
                рассказываем не часто, так как придерживаемся мнения, что добрые
                дела «любят тишину». Однако, иногда всё же можем себе позволить
                рассказать о них, к примеру, в день когда получаем
                соответствующую награду.
              </p>
              <p className={s.mainparagraph}>
                Сегодня, мы стали не просто финалистами, а победителями
                региональной бизнес-премии «Твердые знаки 2021» в номинации
                «Социальная ответственность».
              </p>
            </div>
            <ol className={`${s.mainol} ${s.main2}`}>
              <li className={s.mainelem}>
                Утверждение устава Ассоциации, внесение в него изменений;
              </li>
              <li className={s.mainelem}>
                Избрание тайным голосованием членов постоянно действующего
                коллегиального органа управления Ассоциации - Совета Ассоциации,
                досрочное прекращение полномочий Совета Ассоциации или досрочное
                прекращение полномочий отдельных его членов;
              </li>
              <li className={s.mainelem}>
                Избрание тайным голосованием Председателя Совета Ассоциации,
                досрочное прекращение его полномочий;
              </li>
              <li className={s.mainelem}>
                Установление размеров вступительного и регулярных членских
                взносов, порядка их уплаты;
              </li>
              <li className={s.mainelem}>
                Установление размеров взносов в компенсационный фонд Ассоциации,
                порядка его формирования, определение способов размещения
                средств компенсационного фонда Ассоциации;
              </li>
              <li className={s.mainelem}>Утверждение документов.</li>
            </ol>
            <p className={`${s.mainparagraph} ${s.main3}`}>
              Общая концепция компании «АСПЭК» всегда учитывала потребности и
              интересы общества, так появился Храм Иверской иконы Божией Матери,
              ежегодные субботники, в том числе с выездом в другие города,
              зародились традиционные праздники, как «Масленичный кубок», «День
              флага на Берша» и т.д., были проведены работы по проектированию
              общественных пространств при участии горожан, благотворительные
              акции и другие проекты. О таких вещах мы рассказываем не часто,
              так как придерживаемся мнения, что добрые дела «любят тишину».
              Однако, иногда всё же можем себе позволить рассказать о них, к
              примеру, в день когда получаем соответствующую награду.
            </p>
          </div>
          <div className={s.mainimgwrapper}>
            {image1?.imageSmall ? (
              <ProgressiveImage
                src={image1?.image}
                placeholder={image1?.imageSmall}
              >
                {(src, loading) => (
                  <img
                    style={{
                      filter: loading ? "blur(10px)" : "blur(0px)",
                      transition: "0.3s",
                    }}
                    src={src}
                    alt=""
                    className={s.mainimg}
                  />
                )}
              </ProgressiveImage>
            ) : (
              <img src={image1?.image} alt="" className={s.mainimg} />
            )}
          </div>
          <div className={s.textcontainer}>
            <h5 className={s.maintitle}>
              Лес начинается с тебя новые экологичные проекты для комфортной
              жизни
            </h5>
            <div className={`${s.paragraphwrapper} ${s.main4}`}>
              <p className={s.mainparagraph}>
                Кто подписан на нас в instagram, знает что мы активно ведем
                работу по разработке стратегии компании. Некоторые моменты
                описанные в ней будут для нас в новинку, так как зародились
                совсем недавно, но что-то останется неизменным. В частности,
                наше участие в различных социальных проектах, или так называемая
                социальная ответственность.
              </p>
              <p className={s.mainparagraph}>
                Общая концепция компании «АСПЭК» всегда учитывала потребности и
                интересы общества, так появился Храм Иверской иконы Божией
                Матери, ежегодные субботники, в том числе с выездом в другие
                города, зародились традиционные праздники, как «Масленичный
                кубок», «День флага на Берша» и т.д., были проведены работы по
                проектированию общественных пространств при участии горожан,
                благотворительные акции и другие проекты. О таких вещах мы
                рассказываем не часто, так как придерживаемся мнения, что добрые
                дела «любят тишину». Однако, иногда всё же можем себе позволить
                рассказать о них, к примеру, в день когда получаем
                соответствующую награду.
              </p>
              <p className={s.mainparagraph}>
                Сегодня, мы стали не просто финалистами, а победителями
                региональной бизнес-премии «Твердые знаки 2021» в номинации
                «Социальная ответственность».
              </p>
            </div>
            <ul className={`${s.mainul} ${s.main5}`}>
              <li className={s.mainelem}>
                Утверждение устава Ассоциации, внесение в него изменений;
              </li>
              <li className={s.mainelem}>
                Избрание тайным голосованием членов постоянно действующего
                коллегиального органа управления Ассоциации - Совета Ассоциации,
                досрочное прекращение полномочий Совета Ассоциации или досрочное
                прекращение полномочий отдельных его членов;
              </li>
              <li className={s.mainelem}>
                Избрание тайным голосованием Председателя Совета Ассоциации,
                досрочное прекращение его полномочий;
              </li>
              <li className={s.mainelem}>
                Установление размеров вступительного и регулярных членских
                взносов, порядка их уплаты;
              </li>
              <li className={s.mainelem}>
                Установление размеров взносов в компенсационный фонд Ассоциации,
                порядка его формирования, определение способов размещения
                средств компенсационного фонда Ассоциации;
              </li>
              <li className={s.mainelem}>Утверждение документов.</li>
            </ul>
            <div className={s.whiteblock}>
              <img className={s.whiteblockimg} src={verticalBar} alt="" />
              <p className={s.whiteblocktext}>
                Установление размеров взносов в компенсационный фонд Ассоциации,
                порядка его формирования, определение способов размещения
                средств компенсационного фонда Ассоциации.
              </p>
            </div>
          </div>
        </div>
        <div className={s.swiperWrapper}>
          <Swiper
            className={s.swiper}
            direction="horizontal"
            spaceBetween={50}
            slidesPerView={1.5}
            grabCursor
            freeMode
            allowTouchMove
            scrollbar={{
              horizontalClass: s.swiperscroll,
              dragClass: s.swiperdrug,
              draggable: true,
            }}
            mousewheel
            modules={[FreeMode, Scrollbar, Mousewheel]}
          >
            {sliderarray?.map((slide) => (
              <SwiperSlide key={slide?.id}>
                <div className={s.swiperslide}>
                  {slide?.imageSmall ? (
                    <ProgressiveImage
                      src={slide?.image}
                      placeholder={slide?.imageSmall}
                    >
                      {(src, loading) => (
                        <img
                          style={{
                            filter: loading ? "blur(10px)" : "blur(0px)",
                            transition: "0.3s",
                          }}
                          src={src}
                          alt=""
                          className={s.slideimg}
                        />
                      )}
                    </ProgressiveImage>
                  ) : (
                    <img src={slide?.image} alt="" className={s.slideimg} />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="container">
          <div className={s.textcontainer}>
            <h5 className={s.maintitle}>
              Лес начинается с тебя новые экологичные проекты для комфортной
              жизни
            </h5>
            <div className={`${s.paragraphwrapper} ${s.main6}`}>
              <p className={s.mainparagraph}>
                Кто подписан на нас в instagram, знает что мы активно ведем
                работу по разработке стратегии компании. Некоторые моменты
                описанные в ней будут для нас в новинку, так как зародились
                совсем недавно, но что-то останется неизменным. В частности,
                наше участие в различных социальных проектах, или так называемая
                социальная ответственность.
              </p>
              <p className={s.mainparagraph}>
                Общая концепция компании «АСПЭК» всегда учитывала потребности и
                интересы общества, так появился Храм Иверской иконы Божией
                Матери, ежегодные субботники, в том числе с выездом в другие
                города, зародились традиционные праздники, как «Масленичный
                кубок», «День флага на Берша» и т.д., были проведены работы по
                проектированию общественных пространств при участии горожан,
                благотворительные акции и другие проекты. О таких вещах мы
                рассказываем не часто, так как придерживаемся мнения, что добрые
                дела «любят тишину». Однако, иногда всё же можем себе позволить
                рассказать о них, к примеру, в день когда получаем
                соответствующую награду.
              </p>
            </div>
            <div className={s.maintable}>
              <div className={s.tabletitle}>Характеристики</div>
              <div className={s.tabletitle}>Описание</div>
              <div className={s.tablevalue}>Характеристики</div>
              <div className={s.tablevalue}>Описание</div>
              <div className={s.tablevalue}>Характеристики</div>
              <div className={s.tablevalue}>Описание</div>
              <div className={s.tablevalue}>Характеристики</div>
              <div className={s.tablevalue}>Описание</div>
              <div className={s.tablevalue}>Характеристики</div>
              <div className={s.tablevalue}>Описание</div>
              <div className={s.tablevalue}>Характеристики</div>
              <div className={s.tablevalue}>Описание</div>
            </div>
            <h5 className={s.maintitle}>
              Лес начинается с тебя новые экологичные проекты для комфортной
              жизни
            </h5>
            <div className={`${s.paragraphwrapper} ${s.main7}`}>
              <p className={s.mainparagraph}>
                Кто подписан на нас в instagram, знает что мы активно ведем
                работу по разработке стратегии компании. Некоторые моменты
                описанные в ней будут для нас в новинку, так как зародились
                совсем недавно, но что-то останется неизменным. В частности,
                наше участие в различных социальных проектах, или так называемая
                социальная ответственность.
              </p>
              <p className={s.mainparagraph}>
                Общая концепция компании «АСПЭК» всегда учитывала потребности и
                интересы общества, так появился Храм Иверской иконы Божией
                Матери, ежегодные субботники, в том числе с выездом в другие
                города, зародились традиционные праздники, как «Масленичный
                кубок», «День флага на Берша» и т.д., были проведены работы по
                проектированию общественных пространств при участии горожан,
                благотворительные акции и другие проекты. О таких вещах мы
                рассказываем не часто, так как придерживаемся мнения, что добрые
                дела «любят тишину». Однако, иногда всё же можем себе позволить
                рассказать о них, к примеру, в день когда получаем
                соответствующую награду.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

OneNewsFull.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  oneNews: PropTypes.object,
};

OneNewsFull.defaultProps = {
  oneNews: {},
};

export default OneNewsFull;
