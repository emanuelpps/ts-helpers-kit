import * as Utils from "../index";

describe("index.ts exports", () => {
  it("should export deepClone function", () => {
    expect(Utils.deepClone).toBeDefined();
  });

  it("should export deepMerge function", () => {
    expect(Utils.deepMerge).toBeDefined();
  });

  it("should export groupBy function", () => {
    expect(Utils.groupBy).toBeDefined();
  });
});
