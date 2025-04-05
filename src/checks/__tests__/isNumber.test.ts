import { isNumber } from "../isNumber";
import { describe, it, expect } from "vitest";

describe("isNumber", () => {
  it("identifies valid numbers", () => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-3.14)).toBe(true);
  });

  it("rejects non-numbers", () => {
    expect(isNumber("42")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
  });

  it("rejects special number cases", () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(Infinity)).toBe(false);
    expect(isNumber(-Infinity)).toBe(false);
  });
});
