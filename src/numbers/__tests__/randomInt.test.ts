import { describe, it, expect } from "vitest";
import { randomInt } from "../randomInt";

describe("randomInt", () => {
  it("generates number within range", () => {
    const result = randomInt(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it("handles negative ranges", () => {
    const result = randomInt(-5, 5);
    expect(result).toBeGreaterThanOrEqual(-5);
    expect(result).toBeLessThanOrEqual(5);
  });

  it("returns same number when min equals max", () => {
    expect(randomInt(3, 3)).toBe(3);
  });

  it('throws error for non-number inputs', () => {
    // @ts-expect-error - Testing invalid input
    expect(() => randomInt('a', 10)).toThrow('Parameters must be numbers');
    
    // @ts-expect-error - Testing invalid input
    expect(() => randomInt(1, 'b')).toThrow('Parameters must be numbers');
  });

  it("throws error if min > max", () => {
    expect(() => randomInt(10, 1)).toThrow("Min cannot be greater than max");
  });
});
