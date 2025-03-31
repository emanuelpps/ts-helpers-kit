import { describe, it, expect } from "vitest";
import { isNumber } from "../isNumber";
describe("isNumber", () => {
  it("Should return TRUE if the value is number", () => {
    expect(isNumber(100)).toBe(true);
    expect(isNumber(0)).toBe(true);
  });

  it("Should return FALSE if the value is not a number", () => {
    expect(isNumber("")).toBe(false);
    expect(isNumber("hola")).toBe(false);
    expect(isNumber("123")).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(null)).toBe(false);
  });
});
