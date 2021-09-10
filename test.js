const digPow = require("./index");

describe("Playing with numbers", () => {
  it("it solves the example cases", () => {
    expect(digPow(89, 1)).toBe(1);
    expect(digPow(91, 1)).toBe(-1);
    expect(digPow(695, 2)).toBe(2);
    expect(digPow(46288, 3)).toBe(51);
  });
});
