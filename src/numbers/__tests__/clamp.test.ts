import { clamp } from "../clamp";

describe("clamp", () => {
  it("should return the value if it is within the range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("should return the minimum value if the input is less than the minimum", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it("should return the maximum value if the input is greater than the maximum", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it("should handle edge cases when value is equal to min or max", () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });

  it("should handle negative numbers correctly", () => {
    expect(clamp(-5, -10, 0)).toBe(-5);
    expect(clamp(-15, -10, 0)).toBe(-10);
    expect(clamp(5, -10, 0)).toBe(0);
  });

  it("should handle cases where min is greater than max (invalid range)", () => {
    expect(clamp(5, 10, 0)).toBe(10);
  });

  it("should handle zero values correctly", () => {
    expect(clamp(0, 0, 0)).toBe(0);
    expect(clamp(-1, 0, 0)).toBe(0);
    expect(clamp(1, 0, 0)).toBe(0);
  });

  it("should handle floating point numbers", () => {
    expect(clamp(5.5, 0, 10)).toBe(5.5);
    expect(clamp(10.5, 0, 10)).toBe(10);
    expect(clamp(-0.5, 0, 10)).toBe(0);
  });
});
