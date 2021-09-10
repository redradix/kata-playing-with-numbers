const bla = require("./index");

describe("Playing with digits", () => {
  it("fails when empty arguments passed", () => {
    expect(bla.digPow()).toBe(-1);
  });
  it("digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1", () => {
    expect(bla.digPow(89, 1)).toBe(1);
  });
  it("digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k", () => {
    expect(bla.digPow(92, 1)).toBe(-1);
  });
  it("digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2", () => {
    expect(bla.digPow(695, 2)).toBe(2);
  });
  it("digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51", () => {
    expect(bla.digPow(46288, 3)).toBe(51);
  });
});
