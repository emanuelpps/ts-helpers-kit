import { describe, it, expect } from "vitest";
import { isString } from "../isString";

describe("isString", () => {
  it("Should return TRUE if the value is string", () => {
    expect(isString("Is String")).toBe(true);
    expect(isString("")).toBe(true);
  });

  it("Should return FALSE if the value is not a string", () => {
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(null)).toBe(false);
  });
});
