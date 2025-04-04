import { formatDate } from "../formatDate";
import { describe, it, expect } from "vitest";

describe("formatDate", () => {
  const validDate = new Date("2023-05-15T14:30:45");
  const invalidDate = new Date("invalid");

  it("formats correctly with different valid values", () => {
    expect(formatDate(validDate, "YYYY-MM-DD")).toBe("2023-05-15");
    expect(formatDate(validDate, "HH:mm:ss")).toBe("14:30:45");
    expect(formatDate(validDate, "DD/MM/YYYY")).toBe("15/05/2023");
    expect(formatDate(validDate, "YYYYMMDD")).toBe("20230515");
  });

  it("return an error when the values are invalid", () => {
    expect(formatDate(invalidDate, "YYYY-MM-DD")).toBe(
      "Date or format not valid"
    );
    expect(formatDate(validDate, "")).toBe("Date or format not valid");
    expect(formatDate(validDate, "INVALID_FORMAT")).toBe(
      "Date or format not valid"
    );
  });
});
