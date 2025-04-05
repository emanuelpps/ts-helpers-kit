import { describe, it, expect } from "vitest";
import { formatDate } from "../formatDate";

describe("formatDate", () => {
  it("formatea correctamente una fecha válida", () => {
    const date = new Date("2024-04-04T09:05:07");
    const formatted = formatDate(date, "YYYY-MM-DD HH:mm:ss");
    expect(formatted).toBe("2024-04-04 09:05:07");
  });

  it("devuelve mensaje de error si la fecha es inválida", () => {
    const invalidDate = new Date("invalid");
    const formatted = formatDate(invalidDate, "YYYY-MM-DD");
    expect(formatted).toBe("date or format not valid");
  });

  it("devuelve mensaje de error si el formato no es string", () => {
    const date = new Date();
    const formatted = formatDate(date, null as unknown as string);
    expect(formatted).toBe("date or format not valid");
  });
});
