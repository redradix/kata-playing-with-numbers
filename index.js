const numberToDigits = (n, accDigits = []) => {
  if (n < 10) return [n, ...accDigits];

  const units = n % 10; // 9
  const tens = Math.trunc(n / 10); // 8

  return numberToDigits(tens, [units, ...accDigits]);
};

const digPow = (n, p) => {
  const digits = numberToDigits(n);

  const k = -1;
  return k;
};

module.exports = digPow;
