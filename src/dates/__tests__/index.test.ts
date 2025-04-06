import * as Utils from "../index";

describe("index.ts exports", () => {
  it("should export addDates function", () => {
    expect(Utils.addDates).toBeDefined();
  });

  it("should export formatDate function", () => {
    expect(Utils.formatDate).toBeDefined();
  });

  it("should export isWeekend function", () => {
    expect(Utils.isWeekend).toBeDefined();
  });

  it("should export timeAgo function", () => {
    expect(Utils.timeAgo).toBeDefined();
  });
});
