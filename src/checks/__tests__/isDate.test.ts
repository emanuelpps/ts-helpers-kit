import { describe, it, expect } from "vitest";
import { isDate } from "../isDate";

describe("isDate", () => {
  it("retorna true para fechas válidas", () => {
    const validDate = new Date("2024-04-04T12:00:00");
    expect(isDate(validDate)).toBe(true);
  });

  it("retorna false para fechas inválidas", () => {
    expect(isDate(new Date("invalid"))).toBe(false);
  });

  it("retorna false si el valor no es Date", () => {
    expect(isDate("2024-04-04")).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(123456)).toBe(false);
  });
});
