import { DateTime } from "luxon";

export const dateConverterToQuarter = (originDate) => {
  const dateObj = DateTime.fromISO(originDate).toObject();
  const quarter = dateObj.month / 4 + 1;
  return `${parseInt(quarter)} квартал ${dateObj?.year}`;
}; // функция по конвертации дат к формату к квартал гггг

export const dateConverterToDayMonth = (originDate) => {
  return DateTime.fromISO(originDate)
    .setLocale("ru")
    .toFormat(`dd MMMM`)
    // .toLocaleString(DateTime.DATE_FULL);
}; // функция по конвертации дат к формату дд месяц

export const dateConverterToYear = (originDate) => {
  return DateTime.fromISO(originDate)
    .toFormat(`kkkk г.`)
}; // функция по конвертации дат к формату гггг г.

export const dateConverterToDMY = (originDate) => {
  return DateTime.fromISO(originDate)
    .toFormat(`dd.MM.kkkk г`)
}; // функция по конвертации дат к формату гггг г.

