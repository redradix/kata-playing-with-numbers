const digPow = (num, pow) => {
  const aux = Math.pow(num, pow);

  if (aux % num === 0) return aux / num;
};

module.exports = {
  digPow,
};