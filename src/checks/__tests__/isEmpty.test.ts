import { describe, it, expect } from "vitest";
import { isEmpty } from "../isEmpty";

describe("isEmpty", () => {
  it("Should return TRUE for empty values", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(123)).toBe(true);
    expect(isEmpty("hello")).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(Symbol())).toBe(true);
  });

  it("Should return FALSE for non-empty values", () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty(new Object())).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });
});
