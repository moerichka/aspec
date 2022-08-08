import React, { useEffect, useState } from "react";

import { Link, useParams} from "react-router-dom";
import {withErrorBoundary} from "react-error-boundary"

import Header from "../../components/header";
import Scroller from "../../components/scroller";
import Footer from "../../components/footer";
import DashNav from "../../components/dashnav";
import { NoMatchPage } from "../NoMatch";

import { newsCards } from "../../dummyData";

import s from "./oneNewsText.module.css";

function OneNews() {
  const [oneNews, setOneNews] = useState(null);
  const { newsId } = useParams();

  useEffect(() => {
    setOneNews(newsCards?.filter((elem) => elem?.id?.toString() === newsId)[0]);
  }, [newsId]);

  // useEffect(() => {
  //   if (!newsCards?.filter((elem) => elem?.id?.toString() === newsId)[0]) {
  //     navigate("/404");
  //   }
  // });

  const wayArray = [
    { title: <Link to="/" className="dash-nav__link">Главная</Link> },
    { title: <Link to="/new-sand-stocks/news" className="dash-nav__link">Акции и новости</Link> },
    { title: `${oneNews?.title}` },
  ];

  return (
    <div className={s.oneNews}>
      <Header />
      <Scroller />
      <div className={s.dashNav}>
        <DashNav wayArray={wayArray} />
      </div>
      <div className={s.oneNewsFull}>
        <div className={s.mainPart}>
          <div className="container">
            <div className={s.textContainer}>
              <h2 className={`h2-title ${s.h2title}`}>{oneNews?.title}</h2>
              <div className={s.mainContent}>
                <div className={s.mainSection}>
                  <h5 className={s.mainTitle}>{oneNews?.title}</h5>
                  <div className={s.paragraphWrapper}>
                    <p className={s.mainParagraph}>
                      Кто подписан на нас в instagram, знает что мы активно
                      ведем работу по разработке стратегии компании. Некоторые
                      моменты описанные в ней будут для нас в новинку, так как
                      зародились совсем недавно, но что-то останется неизменным.
                      В частности, наше участие в различных социальных проектах,
                      или так называемая социальная ответственность.
                    </p>
                    <p className={s.mainParagraph}>
                      Общая концепция компании «АСПЭК» всегда учитывала
                      потребности и интересы общества, так появился Храм
                      Иверской иконы Божией Матери, ежегодные субботники, в том
                      числе с выездом в другие города, зародились традиционные
                      праздники, как «Масленичный кубок», «День флага на Берша»
                      и т.д., были проведены работы по проектированию
                      общественных пространств при участии горожан,
                      благотворительные акции и другие проекты. О таких вещах мы
                      рассказываем не часто, так как придерживаемся мнения, что
                      добрые дела «любят тишину». Однако, иногда всё же можем
                      себе позволить рассказать о них, к примеру, в день когда
                      получаем соответствующую награду.
                    </p>
                    <p className={s.mainParagraph}>
                      Сегодня, мы стали не просто финалистами, а победителями
                      региональной бизнес-премии «Твердые знаки 2021» в
                      номинации «Социальная ответственность».
                    </p>
                  </div>
                  <ol className={s.mainOl}>
                    <li className={s.mainElem}>
                      Утверждение устава Ассоциации, внесение в него изменений;
                    </li>
                    <li className={s.mainElem}>
                      Избрание тайным голосованием членов постоянно действующего
                      коллегиального органа управления Ассоциации - Совета
                      Ассоциации, досрочное прекращение полномочий Совета
                      Ассоциации или досрочное прекращение полномочий отдельных
                      его членов;
                    </li>
                    <li className={s.mainElem}>
                      Избрание тайным голосованием Председателя Совета
                      Ассоциации, досрочное прекращение его полномочий;
                    </li>
                    <li className={s.mainElem}>
                      Установление размеров вступительного и регулярных членских
                      взносов, порядка их уплаты;
                    </li>
                    <li className={s.mainElem}>
                      Установление размеров взносов в компенсационный фонд
                      Ассоциации, порядка его формирования, определение способов
                      размещения средств компенсационного фонда Ассоциации;
                    </li>
                    <li className={s.mainElem}>Утверждение документов.</li>
                  </ol>
                  <p className={s.mainParagraph} data-aloneparagraph="true">
                    Общая концепция компании «АСПЭК» всегда учитывала
                    потребности и интересы общества, так появился Храм Иверской
                    иконы Божией Матери, ежегодные субботники, в том числе с
                    выездом в другие города, зародились традиционные праздники,
                    как «Масленичный кубок», «День флага на Берша» и т.д., были
                    проведены работы по проектированию общественных пространств
                    при участии горожан, благотворительные акции и другие
                    проекты. О таких вещах мы рассказываем не часто, так как
                    придерживаемся мнения, что добрые дела «любят тишину».
                    Однако, иногда всё же можем себе позволить рассказать о них,
                    к примеру, в день когда получаем соответствующую награду.
                  </p>
                </div>
                <div className={s.mainSection}>
                  <h5 className={s.mainTitle}>
                    Лес начинается с тебя новые экологичные проекты для
                    комфортной жизни
                  </h5>
                  <div className={s.paragraphWrapper} data-padding="more">
                    <p className={s.mainParagraph}>
                      Кто подписан на нас в instagram, знает что мы активно
                      ведем работу по разработке стратегии компании. Некоторые
                      моменты описанные в ней будут для нас в новинку, так как
                      зародились совсем недавно, но что-то останется неизменным.
                      В частности, наше участие в различных социальных проектах,
                      или так называемая социальная ответственность.
                    </p>
                    <p className={s.mainParagraph}>
                      Общая концепция компании «АСПЭК» всегда учитывала
                      потребности и интересы общества, так появился Храм
                      Иверской иконы Божией Матери, ежегодные субботники, в том
                      числе с выездом в другие города, зародились традиционные
                      праздники, как «Масленичный кубок», «День флага на Берша»
                      и т.д., были проведены работы по проектированию
                      общественных пространств при участии горожан,
                      благотворительные акции и другие проекты. О таких вещах мы
                      рассказываем не часто, так как придерживаемся мнения, что
                      добрые дела «любят тишину». Однако, иногда всё же можем
                      себе позволить рассказать о них, к примеру, в день когда
                      получаем соответствующую награду.
                    </p>
                    <p className={s.mainParagraph}>
                      Сегодня, мы стали не просто финалистами, а победителями
                      региональной бизнес-премии «Твердые знаки 2021» в
                      номинации «Социальная ответственность».
                    </p>
                  </div>
                  <ul className={s.mainUl}>
                    <li className={s.mainElem}>
                      Утверждение устава Ассоциации, внесение в него изменений;
                    </li>
                    <li className={s.mainElem}>
                      Избрание тайным голосованием членов постоянно действующего
                      коллегиального органа управления Ассоциации - Совета
                      Ассоциации, досрочное прекращение полномочий Совета
                      Ассоциации или досрочное прекращение полномочий отдельных
                      его членов;
                    </li>
                    <li className={s.mainElem}>
                      Избрание тайным голосованием Председателя Совета
                      Ассоциации, досрочное прекращение его полномочий;
                    </li>
                    <li className={s.mainElem}>
                      Установление размеров вступительного и регулярных членских
                      взносов, порядка их уплаты;
                    </li>
                    <li className={s.mainElem}>
                      Установление размеров взносов в компенсационный фонд
                      Ассоциации, порядка его формирования, определение способов
                      размещения средств компенсационного фонда Ассоциации;
                    </li>
                    <li className={s.mainElem}>Утверждение документов.</li>
                  </ul>
                </div>
                <div className={s.mainSection}>
                  <h5 className={s.mainTitle}>
                    Лес начинается с тебя новые экологичные проекты для
                    комфортной жизни
                  </h5>
                  <div className={s.paragraphWrapper} data-padding="more">
                    <p className={s.mainParagraph}>
                      Кто подписан на нас в instagram, знает что мы активно
                      ведем работу по разработке стратегии компании. Некоторые
                      моменты описанные в ней будут для нас в новинку, так как
                      зародились совсем недавно, но что-то останется неизменным.
                      В частности, наше участие в различных социальных проектах,
                      или так называемая социальная ответственность.
                    </p>
                    <p className={s.mainParagraph}>
                      Общая концепция компании «АСПЭК» всегда учитывала
                      потребности и интересы общества, так появился Храм
                      Иверской иконы Божией Матери, ежегодные субботники, в том
                      числе с выездом в другие города, зародились традиционные
                      праздники, как «Масленичный кубок», «День флага на Берша»
                      и т.д., были проведены работы по проектированию
                      общественных пространств при участии горожан,
                      благотворительные акции и другие проекты. О таких вещах мы
                      рассказываем не часто, так как придерживаемся мнения, что
                      добрые дела «любят тишину». Однако, иногда всё же можем
                      себе позволить рассказать о них, к примеру, в день когда
                      получаем соответствующую награду.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withErrorBoundary(OneNews, {
  fallbackRender: ()=><NoMatchPage/>,
  onError(error, info) {
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  },
});
