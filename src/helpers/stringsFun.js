export const getFlatAmount = (amount) => {
  let str = `${amount}`;
  const regExp = /[2-4]$/;
  const regExpForOne = /1$/;
  if (amount > 10 && amount < 21) {
    return str + " квартир";
  } else if (regExpForOne.test(str)) {
    return str + " квартира";
  } else {
    return (str += regExp.test(str) ? " квартиры" : " квартир");
  }
};

export const getDaysAmount = (amount) => {
  let str = `${amount}`;
  const regExp = /[2-4]$/;
  const regExpForOne = /1$/;
  if (amount > 10 && amount < 21) {
    return str + " дней";
  } else if (regExpForOne.test(str)) {
    return str + " день";
  } else {
    return (str += regExp.test(str) ? " дня" : " дней");
  }
};

export const separator = (num) => {
  const str = num?.toString();
  const sep = " ";
  return str?.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + sep);
};

export const percentageConverter = (string) => {
  string = string.toString().trim();

  const indexPercentage = string.indexOf("%");
  return string.slice(0, indexPercentage) / 100;
};

export const pxConverter = (string) => {
  string = string.toString().trim();

  const indexPercentage = string.indexOf("px");
  return string.slice(0, indexPercentage);
};

export const priceConverterToMln = (price) => {
  return `${price / 1000000} млн`;
};

export const telChecker = (tel) => {
  const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
  return regExp.test(tel)
};
