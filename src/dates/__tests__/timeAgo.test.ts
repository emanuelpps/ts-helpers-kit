import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { timeAgo } from "../timeAgo";

describe("timeAgo", () => {
  const fixedNow = new Date("2025-04-04T12:00:00Z");

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(fixedNow);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns 'a few seconds ago' if the difference is less than a minute", () => {
    const date = new Date("2025-04-04T11:59:50Z");
    expect(timeAgo(date, "en")).toBe("a few seconds ago");
  });

  it("returns 'hace unos segundos' in Spanish if less than a minute ago", () => {
    const date = new Date("2025-04-04T11:59:50Z");
    expect(timeAgo(date, "es")).toBe("hace unos segundos");
  });

  it("returns '1 minute ago'", () => {
    const date = new Date("2025-04-04T11:59:00Z");
    expect(timeAgo(date, "en")).toBe("1 minute ago");
  });

  it("returns 'hace 1 minuto' in Spanish", () => {
    const date = new Date("2025-04-04T11:59:00Z");
    expect(timeAgo(date, "es")).toBe("hace 1 minuto");
  });

  it("returns '3 minutes ago'", () => {
    const date = new Date("2025-04-04T11:57:00Z");
    expect(timeAgo(date, "en")).toBe("3 minutes ago");
  });

  it("returns 'hace 3 minutos' in Spanish", () => {
    const date = new Date("2025-04-04T11:57:00Z");
    expect(timeAgo(date, "es")).toBe("hace 3 minutos");
  });

  it("returns '2 hours ago'", () => {
    const date = new Date("2025-04-04T10:00:00Z");
    expect(timeAgo(date, "en")).toBe("2 hours ago");
  });

  it("returns '1 day ago'", () => {
    const date = new Date("2025-04-03T12:00:00Z");
    expect(timeAgo(date, "en")).toBe("1 day ago");
  });

  it("returns 'hace 1 día' in Spanish", () => {
    const date = new Date("2025-04-03T12:00:00Z");
    expect(timeAgo(date, "es")).toBe("hace 1 día");
  });

  it("returns '1 month ago'", () => {
    const date = new Date("2025-03-04T12:00:00Z");
    expect(timeAgo(date, "en")).toBe("1 month ago");
  });

  it("returns '1 year ago'", () => {
    const date = new Date("2024-04-04T12:00:00Z");
    expect(timeAgo(date, "en")).toBe("1 year ago");
  });
});
