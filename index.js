const numberToDigits = (n, accDigits = []) => {
  if (n < 10) return [n, ...accDigits];

  const units = n % 10;
  const tens = Math.trunc(n / 10);

  return numberToDigits(tens, [units, ...accDigits]);
};

const sumPows = (digits, p) =>
  digits.reduce((acc, digit, index) => {
    const exponent = p + index;
    const pow = Math.pow(digit, exponent);

    return acc + pow;
  }, 0);

const isInteger = (n) => Math.trunc(n) === n;

const digPow = (n, p) => {
  const digits = numberToDigits(n);

  const sumOfPows = sumPows(digits, p);

  const k = sumOfPows / n;
  return isInteger(k) ? k : -1;
};

module.exports = {
  numberToDigits,
  sumPows,
  isInteger,
  digPow,
};
