module.exports = {
  ble: () => 1,
};

const integerToDigits = (integer) =>
  `${integer}`.split("").map((int) => Number(int));

const incrementalPowEachElementOfList = (array, pow) =>
  array.map((int, index) => int ** (index + pow));

module.exports = {
  digPow: (integer, p) => {
    if (!integer || !p) return -1;

    const integerList = integerToDigits(integer);
    const arrayOfPows = incrementalPowEachElementOfList(integerList, p);
    const sumOfDigits = arrayOfPows.reduce((acc, val) => acc + val);
    const result = sumOfDigits % integer === 0 ? sumOfDigits / integer : -1;
    return result;
  },
};
