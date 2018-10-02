'use strict';

const test = input => Object.prototype.toString.call(input) === '[object Date]';
const print = d => {
  const dateWithoutOffset = new Date(
    d.getTime() - d.getTimezoneOffset() * 60000,
  );
  return dateWithoutOffset.toUTCString();
};

var index = {
  test,
  print,
};

module.exports = index;
