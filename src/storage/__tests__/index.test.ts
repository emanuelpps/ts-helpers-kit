import * as Utils from "../index";

describe("index.ts exports", () => {
  it("should export getCookie function", () => {
    expect(Utils.getCookie).toBeDefined();
  });

  it("should export getLocalStorage function", () => {
    expect(Utils.getLocalStorage).toBeDefined();
  });

  it("should export setLocalStorage function", () => {
    expect(Utils.setLocalStorage).toBeDefined();
  });

  it("should export setCookie function", () => {
    expect(Utils.setCookie).toBeDefined();
  });
});
