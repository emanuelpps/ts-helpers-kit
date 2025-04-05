import { describe, it, expect, vi, beforeEach } from "vitest";
import { setLocalStorage } from "../setLocalStorage";

describe("setLocalStorage", () => {
  const setItemMock = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      setItem: setItemMock,
    });
    setItemMock.mockReset();
  });

  it("stores a stringified value under the given key", () => {
    setLocalStorage("token", { value: "12345" });

    expect(setItemMock).toHaveBeenCalledWith(
      "token",
      JSON.stringify({ value: "12345" })
    );
  });
});
