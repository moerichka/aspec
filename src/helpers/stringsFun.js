export const getFlatAmount = (amount) => {
  let str = `${amount}`;
  const regExp = /[2-4]$/;
  const regExpForOne = /1$/;
  if (amount > 10) {
    return str + " квартир";
  }
  if (regExpForOne.test(str)) {
    return str + " квартира";
  } else {
    return (str += regExp.test(str) ? " квартиры" : " квартир");
  }
};

export const separator = (num) => {
  const str = num.toString();
  const sep = " ";
  return str.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + sep);
};
