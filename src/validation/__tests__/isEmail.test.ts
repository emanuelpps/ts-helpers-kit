// isEmail.test.ts
import { describe, it, expect } from "vitest";
import { isEmail } from "../isEmail";

describe("isEmail", () => {
  it("returns true for a valid email", () => {
    expect(isEmail("user@example.com")).toBe(true);
    expect(isEmail("first.last@domain.co")).toBe(true);
    expect(isEmail("email+alias@sub.domain.com")).toBe(true);
  });

  it("returns false for an invalid email", () => {
    expect(isEmail("userexample.com")).toBe(false);
    expect(isEmail("user@.com")).toBe(false);
    expect(isEmail("user@domain")).toBe(false);
    expect(isEmail("user@domain.")).toBe(false);
    expect(isEmail("@domain.com")).toBe(false);
    expect(isEmail("user@domain,com")).toBe(false);
  });

  it("returns false for empty or whitespace only strings", () => {
    expect(isEmail("")).toBe(false);
    expect(isEmail("   ")).toBe(false);
  });
});
