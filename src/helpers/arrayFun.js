import { DateTime } from "luxon";

export const getUnique = (array, property) => {
  return array
    .map((elem) => (property ? elem[property] : elem))
    .filter((elem, index, arr) => arr.indexOf(elem) === index);
};

export const createOptions = (
  array,
  property = false,
  isUnique = false,
  valueArray = false
) => {
  const unique = isUnique ? array : getUnique(array, property);
  return unique.map((elem, index) => ({
    value: valueArray ? valueArray[index] : elem,
    label: elem,
  }));
};

export const sortDates = (array) => {
  return array.sort((a, b) => {
    if (
      DateTime.fromISO(a.value).toMillis() <
      DateTime.fromISO(b.value).toMillis()
    )
      return -1;
    else if (
      DateTime.fromISO(a.value).toMillis() >
      DateTime.fromISO(b.value).toMillis()
    )
      return 1;
    else return 0;
  });
}; // сортировка дат
