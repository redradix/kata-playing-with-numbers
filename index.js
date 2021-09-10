const digPow = (num, pow) => {
  const numberArr = num.toString().split('')
  
  const powSum = numberArr.reduce(
    (sum, number, i) => sum + Math.pow(parseInt(number, 10), pow + i),
    0
  )
  
  return powSum % num === 0 ? powSum / num : -1
};

module.exports = {
  digPow,
};