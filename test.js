const digPow = require("./index");
const digPowFn = digPow.digPowFn;

describe("digPow", () => {
  it("should return an integer k that satisfies the equation", () => {
    expect(digPow(89, 1)).toBe(1);
    expect(digPow(695, 2)).toBe(2);
    expect(digPow(46288, 3)).toBe(51);
  });

  it("should return -1 if no such integer k exists", () => {
    expect(digPow(92, 1)).toBe(-1);
    expect(digPow(93, 1)).toBe(-1);
  });
});

describe("digPowFn", () => {
  it("should return an integer k that satisfies the equation", () => {
    expect(digPowFn(89, 1)).toBe(1);
    expect(digPowFn(695, 2)).toBe(2);
    expect(digPowFn(46288, 3)).toBe(51);
  });

  it("should return -1 if no such integer k exists", () => {
    expect(digPowFn(92, 1)).toBe(-1);
    expect(digPowFn(93, 1)).toBe(-1);
  });
});
