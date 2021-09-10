const { digPow } = require('./index')

describe('Playing with numbers', () => {
  it('works', () => {
    expect(true).toBe(true)
  })

  it('returns k when can be found (one digit input)', () => {
    expect(digPow(8, 1)).toEqual(1)
    expect(digPow(4, 2)).toEqual(4)
    expect(digPow(5, 2)).toEqual(5)
    expect(digPow(6, 2)).toEqual(6)    
  })

  it('returns k when can be found (+1 digit input)', () => {
    expect(digPow(89, 1)).toEqual(1)
    expect(digPow(695, 2)).toEqual(2)
  })

  it('returns -1 when cannot find k', () => {
    expect(digPow(92, 1)).toEqual(-1)
  })
})