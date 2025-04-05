import { describe, it, expect } from "vitest";
import { formatCurrency } from "../formatCurrency";

describe("formatCurrency", () => {
  it("formats USD correctly", () => {
    expect(formatCurrency(1000)).toBe("$1,000.00");
  });

  it("formats EUR in spanish", () => {
    const result = formatCurrency(50.5, "es-ES", "EUR");
    expect(result.includes("50,50")).toBe(true);
    expect(result.includes("€")).toBe(true);
  });

  it("handle negative values", () => {
    expect(formatCurrency(-75.25)).toBe("-$75.25");
  });

  it("rounds decimals correctly", () => {
    expect(formatCurrency(10.996)).toBe("$11.00");
  });

  it("error when amount is invalid", () => {
    const invalidInputs: unknown[] = ["abc", null, undefined, {}];
    
    invalidInputs.forEach(input => {
      expect(() => formatCurrency(input as number)).toThrow("Amount must be a valid number");
    });
  });

  it("error when currency is not valid", () => {
    expect(() => formatCurrency(100, "en-US", "ABC123")).toThrow();
  });

  it("error when locale is not valid", () => {
    expect(() => formatCurrency(100, "", "USD")).toThrow();
  });
});
