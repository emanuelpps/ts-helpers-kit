import { describe, it, expect } from "vitest";
import { isWeekend } from "../isWeekend";

describe("isWeekend", () => {
  it("retorna true para un sábado", () => {
    const saturday = new Date("2025-04-05");
    expect(isWeekend(saturday)).toBe(true);
  });

  it("retorna true para un domingo", () => {
    const sunday = new Date("2025-04-06");
    expect(isWeekend(sunday)).toBe(true);
  });

  it("retorna false para un lunes", () => {
    const monday = new Date("2025-04-07");
    expect(isWeekend(monday)).toBe(false);
  });

  it("retorna false para un miércoles", () => {
    const wednesday = new Date("2025-04-09");
    expect(isWeekend(wednesday)).toBe(false);
  });

  it("retorna false para un viernes", () => {
    const friday = new Date("2025-04-04");
    expect(isWeekend(friday)).toBe(false);
  });
});
