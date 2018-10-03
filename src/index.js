const addLeadingZero = value => `0${value}`.slice(-2);
const addDoubleLeadingZero = value => `00${value}`.slice(-3);

const dateToI18n = d =>
  `${d.getUTCFullYear()}-${addLeadingZero(
    d.getUTCMonth() + 1,
  )}-${addLeadingZero(d.getUTCDate())}T${addLeadingZero(
    d.getUTCHours(),
  )}:${addLeadingZero(d.getUTCMinutes())}:${addLeadingZero(
    d.getUTCSeconds(),
  )}.${addDoubleLeadingZero(d.getUTCMilliseconds())}Z`;

const test = input => Object.prototype.toString.call(input) === '[object Date]';
const print = d => {
  const dateWithoutOffset = new Date(
    d.getTime() - d.getTimezoneOffset() * 60000,
  );
  return `Date { ${dateToI18n(dateWithoutOffset)} }`;
};

export default {
  test,
  print,
};
