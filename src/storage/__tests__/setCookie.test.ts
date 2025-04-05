import { describe, it, expect, beforeEach } from "vitest";
import { setCookie } from "../setCookie";

describe("setCookie", () => {
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

  it("sets a cookie without expiration", () => {
    setCookie("token", "12345");
    expect(mockDocument.cookie).toContain("token=12345");
    expect(mockDocument.cookie).toContain("path=/");
  });

  it("sets a cookie with expiration", () => {
    setCookie("session", "abc", 7);
    expect(mockDocument.cookie).toContain("session=abc");
    expect(mockDocument.cookie).toContain("expires=");
    expect(mockDocument.cookie).toContain("path=/");
  });

  it("encodes special characters in value", () => {
    setCookie("token", "a b=c&d");
    expect(mockDocument.cookie).toContain(
      "token=" + encodeURIComponent("a b=c&d")
    );
  });
});
