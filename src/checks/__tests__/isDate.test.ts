import { isDate } from "../isDate";

describe("isDate", () => {
  it("should not throw for valid Date objects", () => {
    expect(() => isDate(new Date())).not.toThrow();
    expect(() => isDate(new Date("2023-09-15"))).not.toThrow();
  });

  it("should throw for invalid Date objects", () => {
    expect(() => isDate(new Date("invalid-date"))).toThrow(
      "Invalid date provided"
    );
  });

  it("should throw for non-Date values", () => {
    expect(() => isDate("2023-09-15")).toThrow("Invalid date provided");
    expect(() => isDate(12345)).toThrow("Invalid date provided");
    expect(() => isDate(null)).toThrow("Invalid date provided");
    expect(() => isDate(undefined)).toThrow("Invalid date provided");
    expect(() => isDate({})).toThrow("Invalid date provided");
  });
});
