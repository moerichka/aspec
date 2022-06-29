import React, { useEffect, useState } from "react";
import s from "./oneNewsText.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";
import DashNav from "../../components/dashnav";
import OneNewsFull from "../../components/oneNewsFull";
import NewsGrid from "../../components/newsGrid";

import { useParams } from "react-router-dom";

import { newsCards } from "../../dummyData.js";

function OneNews() {
  const navigate = useNavigate();
  const [oneNews, setOneNews] = useState(null);
  const { newsId } = useParams();

  useEffect(() => {
    setOneNews(newsCards?.filter((elem) => elem?.id?.toString() === newsId)[0]);
  }, [newsId]);

  useEffect(() => {
    if (!newsCards?.filter((elem) => elem?.id?.toString() === newsId)[0]) {
      navigate("/404");
    }
  });

  const wayArray = [
    { title: <Link to="/" className="dashnav__link">Главная</Link> },
    { title: <Link to="/newsandstocks/news" className="dashnav__link">Акции и новости</Link> },
    { title: `${oneNews?.title}` },
  ];

  return (
    <div className={s.oneNews}>
      <Header />
      <div className={s.dashNav}>
        <DashNav wayArray={wayArray} />
      </div>
      <div className={s.oneNewsFull}>
        <div className={s.mainpart}>
          <div className="container">
            <div className={s.textcontainer}>
              <h2 className={`h2-title ${s.h2title}`}>{oneNews?.title}</h2>
              <div className={s.maincontent}>
                <div className={s.mainsection}>
                  <h5 className={s.maintitle}>{oneNews?.title}</h5>
                  <div className={s.paragraphwrapper}>
                    <p className={s.mainparagraph}>
                      Кто подписан на нас в instagram, знает что мы активно
                      ведем работу по разработке стратегии компании. Некоторые
                      моменты описанные в ней будут для нас в новинку, так как
                      зародились совсем недавно, но что-то останется неизменным.
                      В частности, наше участие в различных социальных проектах,
                      или так называемая социальная ответственность.
                    </p>
                    <p className={s.mainparagraph}>
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
                    <p className={s.mainparagraph}>
                      Сегодня, мы стали не просто финалистами, а победителями
                      региональной бизнес-премии «Твердые знаки 2021» в
                      номинации «Социальная ответственность».
                    </p>
                  </div>
                  <ol className={s.mainol}>
                    <li className={s.mainelem}>
                      Утверждение устава Ассоциации, внесение в него изменений;
                    </li>
                    <li className={s.mainelem}>
                      Избрание тайным голосованием членов постоянно действующего
                      коллегиального органа управления Ассоциации - Совета
                      Ассоциации, досрочное прекращение полномочий Совета
                      Ассоциации или досрочное прекращение полномочий отдельных
                      его членов;
                    </li>
                    <li className={s.mainelem}>
                      Избрание тайным голосованием Председателя Совета
                      Ассоциации, досрочное прекращение его полномочий;
                    </li>
                    <li className={s.mainelem}>
                      Установление размеров вступительного и регулярных членских
                      взносов, порядка их уплаты;
                    </li>
                    <li className={s.mainelem}>
                      Установление размеров взносов в компенсационный фонд
                      Ассоциации, порядка его формирования, определение способов
                      размещения средств компенсационного фонда Ассоциации;
                    </li>
                    <li className={s.mainelem}>Утверждение документов.</li>
                  </ol>
                  <p className={s.mainparagraph} data-justpar="true">
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
                <div className={s.mainsection}>
                  <h5 className={s.maintitle}>
                    Лес начинается с тебя новые экологичные проекты для
                    комфортной жизни
                  </h5>
                  <div className={s.paragraphwrapper} data-padding="more">
                    <p className={s.mainparagraph}>
                      Кто подписан на нас в instagram, знает что мы активно
                      ведем работу по разработке стратегии компании. Некоторые
                      моменты описанные в ней будут для нас в новинку, так как
                      зародились совсем недавно, но что-то останется неизменным.
                      В частности, наше участие в различных социальных проектах,
                      или так называемая социальная ответственность.
                    </p>
                    <p className={s.mainparagraph}>
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
                    <p className={s.mainparagraph}>
                      Сегодня, мы стали не просто финалистами, а победителями
                      региональной бизнес-премии «Твердые знаки 2021» в
                      номинации «Социальная ответственность».
                    </p>
                  </div>
                  <ul className={s.mainul}>
                    <li className={s.mainelem}>
                      Утверждение устава Ассоциации, внесение в него изменений;
                    </li>
                    <li className={s.mainelem}>
                      Избрание тайным голосованием членов постоянно действующего
                      коллегиального органа управления Ассоциации - Совета
                      Ассоциации, досрочное прекращение полномочий Совета
                      Ассоциации или досрочное прекращение полномочий отдельных
                      его членов;
                    </li>
                    <li className={s.mainelem}>
                      Избрание тайным голосованием Председателя Совета
                      Ассоциации, досрочное прекращение его полномочий;
                    </li>
                    <li className={s.mainelem}>
                      Установление размеров вступительного и регулярных членских
                      взносов, порядка их уплаты;
                    </li>
                    <li className={s.mainelem}>
                      Установление размеров взносов в компенсационный фонд
                      Ассоциации, порядка его формирования, определение способов
                      размещения средств компенсационного фонда Ассоциации;
                    </li>
                    <li className={s.mainelem}>Утверждение документов.</li>
                  </ul>
                </div>
                <div className={s.mainsection}>
                  <h5 className={s.maintitle}>
                    Лес начинается с тебя новые экологичные проекты для
                    комфортной жизни
                  </h5>
                  <div className={s.paragraphwrapper} data-padding="more">
                    <p className={s.mainparagraph}>
                      Кто подписан на нас в instagram, знает что мы активно
                      ведем работу по разработке стратегии компании. Некоторые
                      моменты описанные в ней будут для нас в новинку, так как
                      зародились совсем недавно, но что-то останется неизменным.
                      В частности, наше участие в различных социальных проектах,
                      или так называемая социальная ответственность.
                    </p>
                    <p className={s.mainparagraph}>
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

export default OneNews;
