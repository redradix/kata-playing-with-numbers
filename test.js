const bigPow = require('./index')

describe('Bishop movement', () => {
  it('fails', () => {
    expect(bigPow(89, 1)).toBe(1)
    expect(bigPow(92, 1)).toBe(-1)
    expect(bigPow(695, 2)).toBe(2)
    expect(bigPow(46288, 3)).toBe(51)
  })
})