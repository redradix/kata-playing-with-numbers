const digPow = require('./index')

describe('Playing with numbers', () => {
  it('works', () => {
    expect(true).toBe(true)
  })

  it('returns -1 when find no k', () => {
    expect(digPow(8, 1)).toEqual(1)
  })
})