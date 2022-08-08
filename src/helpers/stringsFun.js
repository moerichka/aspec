export const getFlatAmount = (amount) => {
  const str = `${amount}`;
  const regExp = /[2-4]$/;
  const regExpForOne = /1$/;
  if (amount > 10 && amount < 21) {
    return `${str} квартир`;
  }
  if (regExpForOne.test(str)) {
    return `${str} квартира`;
  }
  if (regExp.test(str)) {
    return `${str} квартиры`;
  }
  return `${str} квартир`;
};

export const getDaysAmount = (amount) => {
  const str = `${amount}`;
  const regExp = /[2-4]$/;
  const regExpForOne = /1$/;
  if (amount > 10 && amount < 21) {
    return `${str} дней`;
  }
  if (regExpForOne.test(str)) {
    return `${str} день`;
  }
  if (regExp.test(str)) {
    return `${str} дня`;
  }
  return `${str} дней`;
};

export const separator = (num) => {
  const str = num?.toString();
  const sep = " ";
  return str?.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1${sep}`);
};

export const percentageConverter = (string) => {
  const newString = string?.toString()?.trim();

  const indexPercentage = newString?.indexOf("%");
  const result = newString ? newString.slice(0, indexPercentage) / 100 : ""
  return result;
};

export const pxConverter = (string) => {
  const newString = string?.toString()?.trim();

  const indexPercentage = newString?.indexOf("px");
  return newString?.slice(0, indexPercentage);
};

export const priceConverterToMln = (price) => `${price / 1000000} млн`;

export const telChecker = (tel) => {
  // const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
  const regExp = /(\+7|8)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/;
  return regExp.test(tel);
};
