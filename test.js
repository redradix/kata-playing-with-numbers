const digPow = require("./index");

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

  //digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
  // digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
  // digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
  // digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
});
