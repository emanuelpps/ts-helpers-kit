import { addDates } from "../addDates";
import { describe, it, expect } from "vitest";

describe("addDates", () => {
  it("adds days correctly", () => {
    const result = addDates(new Date("2023-01-01"), 5);
    expect(result.toISOString()).toBe("2023-01-06T00:00:00.000Z");
  });

  it("throws for invalid date", () => {
    expect(() => addDates(new Date("invalid"), 5)).toThrow("Invalid date provided");
  });

  it("throws for non-number days", () => {
    expect(() => addDates(new Date(), NaN)).toThrow("Days must be a valid number");
  });
});