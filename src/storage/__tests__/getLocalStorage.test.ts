import { describe, it, expect, vi, beforeEach } from "vitest";
import { getLocalStorage } from "../getLocalStorage";

describe("getLocalStorage", () => {
  const getItemMock = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: getItemMock,
    });
    getItemMock.mockReset();
  });

  it("returns the parsed object when value exists", () => {
    const value = { username: "emanuel" };
    getItemMock.mockReturnValue(JSON.stringify(value));

    const result = getLocalStorage("user");
    expect(result).toEqual(value);
  });

  it("returns null when no value exists", () => {
    getItemMock.mockReturnValue(null);

    const result = getLocalStorage("user");
    expect(result).toBeNull();
  });

  it("returns null when JSON.parse throws error", () => {
    getItemMock.mockReturnValue("invalid json");

    const result = getLocalStorage("data");
    expect(result).toBeNull();
  });
});
