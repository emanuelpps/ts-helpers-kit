import { describe, it, expect } from "vitest";
import { isObject } from "../isObject";

describe("isObject", () => {
  it("Should return FALSE for non-object values", () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject("hello")).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(Symbol())).toBe(false);
    expect(isObject(() => {})).toBe(false);
  });

  it("Should return TRUE for objects and arrays", () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ key: "value" })).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(new Map())).toBe(true);
    expect(isObject(new Set())).toBe(true);
    expect(isObject(new Date())).toBe(true);
  });

  it("Should return TRUE for class instances", () => {
    class MyClass {}
    expect(isObject(new MyClass())).toBe(true);
  });
});
