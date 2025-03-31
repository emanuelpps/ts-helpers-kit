import { randomString } from "../randomString";

describe("randomString", () => {
  it("should throw an error if the length is a negative number or zero", () => {
    expect(() => randomString(0)).toThrowError(
      "The parameter must be a positive number"
    );
  });

  it("should return a string of the specified length", () => {
    const length = 10;
    const result = randomString(length);
    expect(result).toHaveLength(length);
    expect(typeof result).toBe("string");
  });

  it("should return an empty string if the length is 1", () => {
    const result = randomString(1);
    expect(typeof result).toBe("string");
  });

  it("should generate a random string with alphanumeric characters", () => {
    const length = 15;
    const result = randomString(length);
    const regex = /^[a-zA-Z0-9]+$/;
    expect(result).toMatch(regex);
  });
});
