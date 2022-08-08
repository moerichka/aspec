/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useTable, usePagination, useSortBy } from "react-table";

import { separator } from "../../../../helpers/stringsFun";
import { flats } from "../../../../data";

import s from "./list.module.css";

function List() {
  const navigate = useNavigate();
  const data = useMemo(
    () =>
      flats?.map((flat) => ({
        col1: flat?.number,
        col2:
          flat?.type === "flat"
            ? `${separator(flat.price + flat.finishingPrice)} ₽`
            : `${separator(flat?.price)} ₽`,
        col3: flat?.space,
        col4:
          flat?.status === "available"
            ? "Свободно"
            : flat?.status === "booked"
            ? "Бронь"
            : "Продано",
        col5: flat?.rooms,
        col6: flat?.entrance,
        col7: flat?.level,
        col8: `${flat?.project} ${flat?.house}`,
        col9: flat?.projectType,
        col10: flat?.type === "flat" ? "Квартира" : "Помещение",
        col11: flat?.id,
        col12: flat?.projectId,
      })),
    []
  );

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
      {
        Header: "objectId",
        accessor: "col11",
      },
      {
        Header: "projectId",
        accessor: "col12",
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
    state: { pageIndex },
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
                  {
                    if(column.Header === "objectId" || column.Header === "projectId" ) return "";
                    return index !== 0 ? (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className={s.tabletitlewrapper}
                      >
                        <div className={s.tabletitle}>
                          <span className={s.sortindicator}>
                            <span
                              className={`icon-dropdown ${s.iconTop}`}
                              data-on={column.isSorted}
                              data-onDesc={column.isSortedDesc}
                            />
                            <span
                              className={`icon-dropdown ${s.iconDown}`}
                              data-on={column.isSorted}
                              data-onDesc={column.isSortedDesc}
                            />
                          </span>
                          {column.render("Header")}
                        </div>
                      </th>
                    ) : (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className={`${s.tabletitlewrapper} ${s.tabletitlenumber}`}
                        data-on={column.isSorted}
                      >
                        <div className={s.tabletitle}>
                          {column.render("Header")}
                        </div>
                      </th>
                    )}
                  )}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className={s.tableRow}
                    onClick={() =>
                      navigate(`/project/${row?.original?.col12}/layout/${row?.original?.col11}`)
                    }
                  >
                    {row.cells.map((cell) =>{
                      if(cell.column.Header === "objectId" || cell.column.Header === "projectId" ) return "";
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
                      )}
                    )}
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
              <span className={`icon-arrow-down ${s.pagicon}`} />
            </div>
            <div className={s.paginnercontent}>
              <span className={s.pagnumber} data-current="true">
                0{pageIndex + 1}
              </span>
              <div className={s.pagseparator} onClick={() => gotoPage(0)} />
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
                    <span className={s.pagnumber} data-noPointer="true">
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
              <span className={`icon-arrow-down ${s.pagicon}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
