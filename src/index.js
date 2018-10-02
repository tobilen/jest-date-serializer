const test = input => input instanceof Date;
const print = d => {
  const dateWithoutOffset = new Date(
    d.getTime() - d.getTimezoneOffset() * 60000,
  );
  return dateWithoutOffset.toUTCString();
};

export default {
  test,
  print,
};
