const serializer = require('../dist');

describe('jest-date-serializer', () => {
  it('serializes properly', () => {
    expect(new Date(2018, 6, 1, 0, 0, 0, 0)).toMatchSnapshot();
  });

  it('returns stripped date', () => {
    const utcDate = new Date(Date.UTC(2018, 6, 1, 0, 0, 0, 0));
    const cestDate = new Date(
      utcDate.getTime() - 120 * 60000,
    );
    expect(serializer.print(cestDate)).toBe('Date { 2018-07-01T00:00:00.000Z }');
  });

  it('ignores DST', () => {
    const utcSummerDate = new Date(Date.UTC(2018, 6, 1, 0, 0, 0, 0));
    const utcWinterDate = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
    const cestSummerDate = new Date(
      utcSummerDate.getTime() - 120 * 60000,
    );

    const cestWinterDate = new Date(
      utcWinterDate.getTime() - 60 * 60000,
    );
    expect(serializer.print(cestSummerDate)).toBe('Date { 2018-07-01T00:00:00.000Z }');
    expect(serializer.print(cestWinterDate)).toBe('Date { 2018-01-01T00:00:00.000Z }');
  })
});
