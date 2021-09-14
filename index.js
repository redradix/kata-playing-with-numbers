const numberToDigits = (number, accDigits = []) => {
  if (number < 10) return [number, ...accDigits];

  const units = number % 10;
  const tens = Math.trunc(number / 10);

  return numberToDigits(tens, [units, ...accDigits]);
};

const powWithIncrementalExponent = (initialExponent, numbers) =>
  numbers.map((number, index) => {
    const exponent = initialExponent + index;
    return Math.pow(number, exponent);
  });

const sum = (numbers) =>
  numbers.reduce((acc, number) => acc + number, 0);

const isInteger = (number) => Number.isInteger(number);

const digPow = (n, p) => {
  const digits = numberToDigits(n);

  const sumOfPows = sum(powWithIncrementalExponent(p, digits));

  const k = sumOfPows / n;
  return isInteger(k) ? k : -1;
};

module.exports = {
  numberToDigits,
  powWithIncrementalExponent,
  sum,
  isInteger,
  digPow,
};
