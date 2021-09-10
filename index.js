const digPow = (n, p) => {
  const splitedNumber = String(n).split("").map(Number);

  let acc = 0;
  for (let i = 0; i < splitedNumber.length; i++) {
    const digit = splitedNumber[i];
    acc += digit ** (p + i);
  }

  const result = acc / n;

  return Number.isInteger(result) ? result : -1;
};

module.exports = digPow;
