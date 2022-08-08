import { DateTime, Interval } from "luxon";

export const dateConverterToQuarter = (originDate) => {
  const dateObj = DateTime.fromISO(originDate).toObject();
  const quarter = dateObj.month / 4 + 1;
  return `${parseInt(quarter, 10)} квартал ${dateObj?.year}`;
}; // функция по конвертации дат к формату к квартал гггг

export const dateConverterToDayMonth = (originDate) => 
   DateTime.fromISO(originDate).setLocale("ru").toFormat(`dd MMMM`)
  // .toLocaleString(DateTime.DATE_FULL);
; // функция по конвертации дат к формату дд месяц

export const dateConverterToYear = (originDate) => DateTime.fromISO(originDate).toFormat(`kkkk г.`); // функция по конвертации дат к формату гггг г.

export const dateConverterToDMY = (originDate = DateTime.now()) => DateTime.fromISO(originDate).toFormat(`dd.MM.kkkk г`); // функция по конвертации дат к формату дд мм гггг г.

export const dateConverterToMY = (originDate) => DateTime.fromISO(originDate).toFormat(`MM.kkkk`); // функция по конвертации дат к формату мм гггг

export const dateHowManyDays = (originDate) => {
  const now = DateTime.now().toISO();
  let result = Interval.fromDateTimes(
    DateTime.fromISO(originDate),
    DateTime.fromISO(now)
  );

  let isHappened = false
 
  if(result?.invalid){
    isHappened = true
    result = Interval.fromDateTimes(
      DateTime.fromISO(now),
      DateTime.fromISO(originDate)
    );
  }

  return {days: Math.ceil(result.length("days")), isHappened};
}; // функция подсчета дней до настоящего времени
