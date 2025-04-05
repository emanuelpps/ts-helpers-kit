import { describe, expect, it, beforeEach } from "vitest";
import { getCookie } from "../getCookie";

describe("getCookie", () => {
  const mockDocument = {} as Document;

  beforeEach(() => {
    Object.defineProperty(mockDocument, "cookie", {
      writable: true,
      value: "",
      configurable: true,
    });

    Object.defineProperty(globalThis, "document", {
      value: mockDocument,
      configurable: true,
    });
  });

  it("returns the cookie value when the cookie exists", () => {
    mockDocument.cookie = "token=12345";
    expect(getCookie("token")).toBe("12345");
  });

  it("returns null when the cookie does not exist", () => {
    mockDocument.cookie = "foo=bar";
    expect(getCookie("token")).toBeNull();
  });

  it("handles multiple cookies correctly", () => {
    mockDocument.cookie = "foo=bar; token=abc123; hello=world";
    expect(getCookie("token")).toBe("abc123");
  });

  it("returns null if document.cookie is empty", () => {
    mockDocument.cookie = "";
    expect(getCookie("token")).toBeNull();
  });

  it('handles cookie values with "=" character', () => {
    mockDocument.cookie = "token=abc=123";
    expect(getCookie("token")).toBe("abc=123");
  });

  it("decodes encoded values", () => {
    mockDocument.cookie = "token=" + encodeURIComponent("a b=c");
    expect(getCookie("token")).toBe("a b=c");
  });
});
