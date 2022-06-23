import React, { useState } from "react";
import s from "./list.module.css";

import { separator } from "../../../../helpers/stringsFun";

function List(props) {
  const [pageNumber, setPageNumber] = useState(7);

  return (
    <div className={s.list}>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.tabletitle}>№ помещения</th>
            <th className={s.tabletitle}>Полная цена</th>
            <th className={s.tabletitle}>Площадь м²</th>
            <th className={s.tabletitle}>Статус</th>
            <th className={s.tabletitle}>К-во комнат</th>
            <th className={s.tabletitle}>Подъезд</th>
            <th className={s.tabletitle}>Этаж</th>
            <th className={s.tabletitle}>Название дома</th>
            <th className={s.tabletitle}>Название ЖК</th>
            <th className={s.tabletitle}>Тип помещения</th>
          </tr>
        </thead>
        <tbody>
          {props?.data?.map((project, index) =>
            project?.buildings?.map((building) =>
              building?.levels?.map((level) =>
                level?.flats?.map((room) => (
                  <tr className={s.cortage} key={index}>
                    <th className={s.tablevalue}>{room?.number}</th>
                    <th className={s.tablevalue}>
                      {room?.type === "flat"
                        ? separator(room?.price + room?.finishingPrice)
                        : separator(room?.price)}{" "}
                      ₽
                    </th>
                    <th className={s.tablevalue}>{room?.space}</th>
                    <th className={s.tablevalue}>{room?.status}</th>
                    <th className={s.tablevalue}>{room?.rooms}</th>
                    <th className={s.tablevalue}>{room?.entrance}</th>
                    <th className={s.tablevalue}>{level?.level}</th>
                    <th className={s.tablevalue}>{building?.number}</th>
                    <th className={s.tablevalue}>{project?.name}</th>
                    <th className={s.tablevalue}>
                      {room?.type === "flat" ? "Квартира" : "Кладовая"}
                    </th>
                  </tr>
                ))
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
