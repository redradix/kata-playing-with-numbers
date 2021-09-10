const digPow = (n, p) => {
  const digits = String(n).split("").map(Number);

  const acc = digits.reduce((acc, digit, i) => acc + digit ** (p + i), 0)

  const result = acc / n;

  return Number.isInteger(result) ? result : -1;
};

module.exports = digPow;
