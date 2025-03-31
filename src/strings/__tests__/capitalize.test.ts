import { capitalize } from "../capitalize";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  });

  it("should not change an already capitalized string", () => {
    const result = capitalize("Hello");
    expect(result).toBe("Hello");
  });

  it("should handle strings with mixed casing", () => {
    const result = capitalize("hElLo WoRlD");
    expect(result).toBe("Hello world");
  });

  it("should handle strings with leading and trailing spaces", () => {
    const result = capitalize("  hello world  ");
    expect(result).toBe("  hello world  ");
  });

  it("should return the input if it is not a string (number)", () => {
    const result = capitalize(123 as unknown as string);
    expect(result).toBe(123);
  });

  it("should return the input if it is not a string (null)", () => {
    const result = capitalize(null as unknown as string);
    expect(result).toBe(null);
  });

  it("should return the input if it is not a string (undefined)", () => {
    const result = capitalize(undefined as unknown as string);
    expect(result).toBe(undefined);
  });

  it("should handle empty strings", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });
});
