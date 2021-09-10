module.exports = {
  ble: () => 1,
};

module.exports = {
  digPow: (integer, p) => {
    const integerArray = `${integer}`.split("").map((int) => Number(int));
    let incrementalPower = p;
    const sumOfDigits = integerArray.reduce((acc, val) => {
      acc = val ** incrementalPower;
      incrementalPower += 1;

      return acc;
    }, 0);
    return sumOfDigits;
  },
};
