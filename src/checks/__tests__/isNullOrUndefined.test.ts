import { describe, it, expect } from "vitest";
import { isNullOrUndefined } from "../isNullOrUndefined";
describe("isNullOrUndefined", () => {
  it("Should return TRUE if the value is Null or Undefined", () => {
    expect(isNullOrUndefined(null)).toBe(true);
    expect(isNullOrUndefined(undefined)).toBe(true);
  });

  it("Should return FALSE if the value is not Null or Undefined", () => {
    expect(isNullOrUndefined("")).toBe(false);
    expect(isNullOrUndefined("hola")).toBe(false);
    expect(isNullOrUndefined("123")).toBe(false);
    expect(isNullOrUndefined(true)).toBe(false);
    expect(isNullOrUndefined({})).toBe(false);
    expect(isNullOrUndefined([])).toBe(false);
    expect(isNullOrUndefined(123)).toBe(false);
  });
});
