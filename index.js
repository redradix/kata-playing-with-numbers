const numberToDigits = (n, accDigits = []) => {
  if (n < 10) return [n, ...accDigits];

  const units = n % 10;
  const tens = Math.trunc(n / 10);

  return numberToDigits(tens, [units, ...accDigits]);
};

const powWithIncrementalExponent = (p, ...numbers) =>
  numbers.map((number, index) => {
    const exponent = p + index;
    return Math.pow(number, exponent);
  });

const sum = (...numbers) =>
  numbers.reduce((acc, number) => acc + number, 0);

const isInteger = (n) => Number.isInteger(n);

const digPow = (n, p) => {
  const digits = numberToDigits(n);

  const sumOfPows = sum(...powWithIncrementalExponent(p, ...digits));

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
