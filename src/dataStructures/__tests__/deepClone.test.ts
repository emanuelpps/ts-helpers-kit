import { describe, it, expect } from "vitest";
import { deepClone } from "../deepClone";

describe("deepClone", () => {
  it("clones a plain object deeply", () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
  });

  it("clones arrays deeply", () => {
    const original = [1, 2, { a: 3 }];
    const cloned = deepClone(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned[2]).not.toBe(original[2]);
  });

  it("handles nested objects and arrays", () => {
    const original = {
      x: [1, { y: 2 }],
      z: { w: [3, 4] },
    };
    const cloned = deepClone(original);

    expect(cloned).toEqual(original);
    expect(cloned.x).not.toBe(original.x);
    expect(cloned.x[1]).not.toBe(original.x[1]);
    expect(cloned.z.w).not.toBe(original.z.w);
  });

  it("works with Date objects", () => {
    const original = { date: new Date() };
    const cloned = deepClone(original);

    expect(cloned).toEqual(original);
    expect(cloned.date).not.toBe(original.date);
  });

  it("throws if unsupported data types are used (e.g. function)", () => {
    const objWithFn = { fn: () => {} };

    expect(() => deepClone(objWithFn)).toThrowError();
  });
});
