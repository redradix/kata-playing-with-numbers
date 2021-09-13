const { digPow, numberToDigits, isInteger, powWithIncrementalExponent, sum } = require("./index");

describe("Helpers", () => {
  it("splits a number into digits", () => {
    expect(numberToDigits(89)).toEqual([8, 9]);
    expect(numberToDigits(92)).toEqual([9, 2]);
    expect(numberToDigits(695)).toEqual([6, 9, 5]);
    expect(numberToDigits(46288)).toEqual([4, 6, 2, 8, 8]);
  });

  it("pows numbers incrementing the exponent each time", () => {
    expect(powWithIncrementalExponent(1, ...[8, 9])).toEqual([8, 81]);
    expect(powWithIncrementalExponent(1, ...[9, 2])).toEqual([9, 4]);
    expect(powWithIncrementalExponent(2, ...[6, 9, 5])).toEqual([36, 729, 625]);
    expect(powWithIncrementalExponent(3, ...[4, 6, 2, 8, 8])).toEqual([64, 1296, 32, 262144, 2097152]);
  });

  it("sums numbers", () => {
    expect(sum(...[8, 81])).toBe(89);
    expect(sum(...[9, 4])).toBe(13);
    expect(sum(...[36, 729, 625])).toBe(1390);
    expect(sum(...[64, 1296, 32, 262144, 2097152])).toBe(2360688);
  });

  it("checks if it is an integer", () => {
    expect(isInteger(89)).toBe(true);
    expect(isInteger(92.3)).toBe(false);
  });
});

describe("Playing with numbers", () => {
  it("solves the example cases", () => {
    expect(digPow(89, 1)).toBe(1);
    expect(digPow(92, 1)).toBe(-1);
    expect(digPow(695, 2)).toBe(2);
    expect(digPow(46288, 3)).toBe(51);
  });
});
