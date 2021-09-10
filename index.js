const digPow = (num, pow) => {
  const numberArr = num.toString().split('')
  let sum = 0

  for (i=0; i<numberArr.length; i++) {
    const number = Number(numberArr[i])
    sum += Math.pow(number,pow + i)
  }
  
  if (sum % num === 0) return sum / num;

};

module.exports = {
  digPow,
};