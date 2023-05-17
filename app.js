let oneEuroIs = {
  JPY: 127.9, // japan yen
  USD: 1.2, // us dollar
  GBP: 0.8, // british pound
};

const { JPY: yenValue, USD: dollarValue, GBP: poundValue } = oneEuroIs;

const fromEuroToDollar = (valueInEuro) => {
  const valueInDollar = valueInEuro * dollarValue;
  return valueInDollar;
};

const fromDollarToYen = (valueinDollar) => {
  const valueInYen = (valueinDollar / dollarValue) * yenValue;
  return valueInYen;
};

const fromYenToPound = (valueInYen) => {
  const valueInPound = (valueInYen / yenValue) * poundValue;
  return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
