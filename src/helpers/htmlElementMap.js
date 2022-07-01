import { dateConverterToQuarter } from "./dateFun";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export const houseCardMap = (elem)=>{
    return `<div class="houseCard-map">
    <div class="houseCard__container">
      <div class="houseCard__imageWrapper-map">
        <div class="houseCard__imageNotifications">
          ${elem.discount ? ( `
            <div class="houseCard__imageNotification houseCard__imageNotification-yellow">
              Скидка ${elem.discount}
            </div>`
          ) : ""}
          ${elem.newShapes ? (`
            <div class="houseCard__imageNotification">Новые корпуса</div>
          `) : ""}
        </div>
        <img src="${PF}${elem.image}" class="houseCard__image-map" alt="" />
      </div>
      <div class="houseCard__infoWrapper houseCard__infoWrapper-map">
        <div class="houseCard__titleBar">
          <h6 class="houseCard__title">${elem.name}</h6>
          <span class="houseCard__price">
            от
            <span class="houseCard__priceBold">
             ${elem.minPrice/1000000 } млн 
            </span>
            ₽
          </span>
        </div>
        <div class="houseCard__adressWrapper">
          <span class="houseCard__icon icon-location"></span>
          <span class="houseCard__adress">${elem.adress}</span>
        </div>
      </div>
      <div class=" houseCard__moreInfoWrapper-map">
        <div class="houseCard__moreInfo-map"> 
          <ul class="houseCard__flats">
            ${elem?.flats?.map((flat) => (
              `<li class="houseCard__flat" >
                <span class="houseCard__flatType">${flat.name} ${flat.name !== "Студия" ? "квартиры" : ""}</span>
                <span class="houseCard__flatPrice">от ${flat.price/1000000 } млн ₽</span>
              </li>`
            )).join('')}
          </ul>
          <div class="houseCard__bottomWrapper houseCard__bottomWrapper-map">
            <div class="houseCard__openDateWrapper">
              <span class="houseCard__icon icon-home"></span>
              <span class="houseCard__openDate">
                Срок сдачи ${ dateConverterToQuarter(elem.openDate)} г.
              </span>
            </div>
            <span class="houseCard__more" data-projectId="${elem.id}">Подробнее</span>
          </div>
        </div>
      </div>
    </div>
  </div>`
} //href="/project/${elem.id}" 

export const legendMap = (elem) => `
  <div class="infrastructure__mapBallon">
    <div class="infrastructure__mapBallonTitle">${elem.title}</div>
    <div class="infrastructure__mapBallonInfoWrapper">
    ${elem.infoLeft ? `<div class="infrastructure__mapBallonInfoLeft">${elem.infoLeft}</div>` : ""}
      ${elem.infoRight ? `<div class="infrastructure__mapBallonInfoRight">${elem.infoRight}</div>` : ""}
    </div>
  </div>
`