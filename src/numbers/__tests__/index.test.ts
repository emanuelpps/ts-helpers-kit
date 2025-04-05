import * as Utils from "../index";

describe("index.ts exports", () => {
  it("should export clamp function", () => {
    expect(Utils.clamp).toBeDefined();
  });

  it("should export formatCurrency function", () => {
    expect(Utils.formatCurrency).toBeDefined();
  });

  it("should export randomInt function", () => {
    expect(Utils.randomInt).toBeDefined();
  });
});
