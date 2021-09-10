const bigPow = (n, p) => {
  const sum = String(n)
    .split('')
    .map(d => Number(d))
    .map((d, i) => Math.pow(d, i + p))
    .reduce((sum, d) => sum + d)

  return sum % n === 0 ? sum / n : -1
}

module.exports = bigPow