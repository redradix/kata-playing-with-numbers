const { digPow, numberToDigits, isInteger, sumPows } = require("./index");

describe("Helpers", () => {
  it("splits a number into digits", () => {
    expect(numberToDigits(89)).toEqual([8, 9]);
    expect(numberToDigits(92)).toEqual([9, 2]);
    expect(numberToDigits(695)).toEqual([6, 9, 5]);
    expect(numberToDigits(46288)).toEqual([4, 6, 2, 8, 8]);
  });

  it("sums pows", () => {
    expect(sumPows([8, 9], 1)).toBe(89);
    expect(sumPows([9, 2], 1)).toBe(13);
    expect(sumPows([6, 9, 5], 2)).toBe(1390);
    expect(sumPows([4, 6, 2, 8, 8], 3)).toBe(2360688);
  });
  it("checks if it is an integer", () => {
    expect(isInteger(89)).toBe(true);
    expect(isInteger(92.3)).toBe(false);
  });
});

describe("Playing with numbers", () => {
  it("it solves the example cases", () => {
    expect(digPow(89, 1)).toBe(1);
    expect(digPow(92, 1)).toBe(-1);
    expect(digPow(695, 2)).toBe(2);
    expect(digPow(46288, 3)).toBe(51);
  });
});
