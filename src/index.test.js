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
    expect(serializer.print(cestDate)).toBe(utcDate.toUTCString());
  })
});
