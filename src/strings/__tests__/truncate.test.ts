import { describe, it, expect } from "vitest";
import { truncate } from "../truncate";

describe("truncate", () => {
  it("should return the text unchanged if its length is less than or equal to the specified length", () => {
    expect(truncate("hello", 5)).toBe("hello");
  });

  it("should truncate the text and add '...' if its length is greater than the specified length", () => {
    expect(truncate("hello world", 5)).toBe("hello...");
  });

  it("should return an empty string when the input text is empty", () => {
    expect(truncate("", 5)).toBe("");
  });

  it("should return '...' if the length is 0", () => {
    expect(truncate("hello", 0)).toBe("...");
  });

  it("should return the text unchanged if the length is greater than the text's length", () => {
    expect(truncate("hi", 5)).toBe("hi");
  });

  it("should handle special characters properly", () => {
    expect(truncate("hello @world!", 5)).toBe("hello...");
  });

  it("should handle extremely long text correctly", () => {
    expect(truncate("a".repeat(1000), 10)).toBe("aaaaaaaaaa...");
  });

  it("should return the text unchanged if its length is less than the specified length", () => {
    expect(truncate("hello", 10)).toBe("hello");
  });
});
