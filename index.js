const fn = require('./fn')

const isNotInteger = fn.pipe(
  Number.isInteger,
  fn.not,
)

const digPowFn = (n, p) => fn.pipe(
  fn.toDigits,
  fn.map((d, i) => d ** (p + i)),
  fn.sum,
  fn.divisionBy(n),
  fn.branch(isNotInteger, fn.value(-1))
)(n)

const digPow = (n, p) => {
  const digits = String(n).split("").map(Number);

  const acc = digits.reduce((acc, digit, i) => acc + digit ** (p + i), 0)

  const result = acc / n;

  return Number.isInteger(result) ? result : -1;
};

module.exports = digPow;
module.exports.digPowFn = digPowFn
