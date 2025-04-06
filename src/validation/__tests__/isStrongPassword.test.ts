// isStrongPassword.test.ts
import { describe, it, expect } from "vitest";
import { isStrongPassword } from "../isStrongPassword";

describe("isStrongPassword", () => {
  it("returns true for a valid strong password", () => {
    // Ejemplo de contraseña fuerte
    expect(isStrongPassword("Abcd1234!")).toBe(true);
    expect(isStrongPassword("P@ssw0rd123")).toBe(true);
    expect(isStrongPassword("My_Str0ng-P@ss")).toBe(true);
  });

  it("returns false for a password shorter than 8 characters", () => {
    expect(isStrongPassword("Ab1!")).toBe(false);
  });

  it("returns false if missing an uppercase letter", () => {
    expect(isStrongPassword("abcd1234!")).toBe(false);
  });

  it("returns false if missing a lowercase letter", () => {
    expect(isStrongPassword("ABCD1234!")).toBe(false);
  });

  it("returns false if missing a digit", () => {
    expect(isStrongPassword("Abcdefgh!")).toBe(false);
  });

  it("returns false if missing a special character", () => {
    expect(isStrongPassword("Abcd12345")).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isStrongPassword("")).toBe(false);
  });
});
