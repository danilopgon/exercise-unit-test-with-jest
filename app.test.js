test("1 euro should be 1.2 dollars", () => {
  //import the function from app.js
  const { fromEuroToDollar } = require("./app.js");

  const euros = 3.5;

  const expected = 4.2;

  expect(fromEuroToDollar(euros)).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("1 dollar should be 106.583 yen", () => {
  const { fromDollarToYen } = require("./app.js");

  const dollars = 1;

  const dollarValue = 1.2;
  const yenValue = 127.9;

  const expected = (dollars / dollarValue) * yenValue;

  expect(fromDollarToYen(dollars)).toBe(expected);
});

test("1 yen should be 0.006253 pounds", () => {
  const { fromYenToPound } = require("./app.js");

  const yen = 1;

  const yenValue = 127.9;
  const poundValue = 0.8;

  const expected = (yen / yenValue) * poundValue;

  expect(fromYenToPound(yen)).toBe(expected);
});
