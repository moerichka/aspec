import React, { useState, useMemo } from "react";
import s from "./list.module.css";
import { useTable, usePagination, useSortBy } from "react-table";

import { separator } from "../../../../helpers/stringsFun";
import { flats } from "../../../../data";

function List(props) {
  const data = useMemo(() => {
    return flats?.map((flat) => ({
      col1: flat?.number,
      col2:
        flat?.type === "flat"
          ? separator(flat?.price + flat?.finishingPrice) + " ₽"
          : separator(flat?.price) + " ₽",
      col3: flat?.space,
      col4: flat?.status === "available" ? "Свободно" : flat?.status === "booked" ? "Бронь" : "Продано",
      col5: flat?.rooms,
      col6: flat?.entrance,
      col7: flat?.level,
      col8: `${flat?.project} ${flat?.house}`,
      col9: flat?.porjectType,
      col10: flat?.type === "flat" ? "Квартира" : "Помещение",
    }));
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "№ помещения",
        accessor: "col1",
      },
      {
        Header: "Полная цена",
        accessor: "col2",
      },
      {
        Header: "Площадь м²",
        accessor: "col3",
      },
      {
        Header: "Статус",
        accessor: "col4",
      },
      {
        Header: "К-во комнат",
        accessor: "col5",
      },
      {
        Header: "Подъезд",
        accessor: "col6",
      },
      {
        Header: "Этаж",
        accessor: "col7",
      },
      {
        Header: "Название дома",
        accessor: "col8",
      },
      {
        Header: "Название ЖК",
        accessor: "col9",
      },
      {
        Header: "Тип помещения",
        accessor: "col10",
      },
    ],
    []
  );

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 7 } },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    // Pagination
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <div className={s.list}>
      <div className={s.contentContainer}>
        <div className={s.tablewrapper}>
          <table {...getTableProps()} className={s.table}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) =>
                    index !== 0 ? (
                      <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className={s.tabletitlewrapper}
                      >
                        <div className={s.tabletitle}>
                          <span className={s.sortindicator}>
                            <span
                              className={`icon-dropdown ${s.iconTop}`}
                              data-on={column.isSorted}
                              data-onDesc={column.isSortedDesc}
                            ></span>
                            <span
                              className={`icon-dropdown ${s.iconDown}`}
                              data-on={column.isSorted}
                              data-onDesc={column.isSortedDesc}
                            ></span>
                          </span>
                          {column.render("Header")}
                        </div>
                      </th>
                    ) : (
                      <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className={`${s.tabletitlewrapper} ${s.tabletitlenumber}`}
                        data-on={column.isSorted}
                      >
                        <div className={s.tabletitle}>
                          {column.render("Header")}
                        </div>
                      </th>
                    )
                  )}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      console.log("cell", cell);
                      return cell.column.Header === "Статус" ? (
                        <td {...cell.getCellProps()} className={s.tablevalue}>
                          <div className={s.flatstatus}>
                            <span
                              className={s.flatstatusindicator}
                              data-status={cell.value}
                            />
                            {cell.render("Cell")}
                          </div>
                        </td>
                      ) : (
                        <td {...cell.getCellProps()} className={s.tablevalue}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={s.pagwrapper}>
          <div className={s.pag}>
            <div
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              data-onLeftEnd={!canPreviousPage}
              className={s.pagleft}
            >
              <span className={`icon-arrow-down ${s.pagicon}`}></span>
            </div>
            <div className={s.paginnercontent}>
              <span className={s.pagnumber} data-current="true">
                0{pageIndex + 1}
              </span>
              <div className={s.pagseparator} onClick={() => gotoPage(0)}></div>
              <div className={s.pagnumbers}>
                {pageOptions.length - (pageIndex + 1) > 1 && (
                  <span
                    className={s.pagnumber}
                    onClick={() => gotoPage(pageIndex + 1)}
                  >
                    0{pageIndex + 2}
                  </span>
                )}
                {pageOptions.length - (pageIndex + 1) > 2 && (
                  <span
                    className={s.pagnumber}
                    onClick={() => gotoPage(pageIndex + 2)}
                  >
                    0{pageIndex + 3}
                  </span>
                )}
                {pageOptions.length - (pageIndex + 1) > 3 && (
                  <span
                    className={s.pagnumber}
                    onClick={() => gotoPage(pageIndex + 3)}
                  >
                    0{pageIndex + 4}
                  </span>
                )}
                {pageOptions.length - (pageIndex + 1) > 4 && (
                  <>
                    <span
                      className={s.pagnumber}
                      onClick={() => gotoPage(pageIndex + 4)}
                    >
                      0{pageIndex + 5}
                    </span>
                    <span
                      className={s.pagnumber}
                      data-noPointer="true"
                    >
                      ...
                    </span>
                  </>
                )}
              </div>
              <span
                className={s.pagnumber}
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                0{pageOptions.length}
              </span>
            </div>
            <div
              onClick={() => nextPage()}
              disabled={!canNextPage}
              data-onRigthEnd={!canNextPage}
              className={s.pagright}
            >
              <span className={`icon-arrow-down ${s.pagicon}`}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
