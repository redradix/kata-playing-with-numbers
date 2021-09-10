const digPow = (n, p) => {
  const digits = String(n).split("").map(Number);

  let acc = 0;
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    acc += digit ** (p + i);
  }

  const result = acc / n;

  return Number.isInteger(result) ? result : -1;
};

module.exports = digPow;
