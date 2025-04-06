// debounce.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { debounce } from "../debounce";

describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("should call the function after the delay", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 300);

    debounced();
    vi.advanceTimersByTime(299);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should only call the function once if called multiple times quickly", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 200);

    debounced();
    vi.advanceTimersByTime(100);
    debounced();
    vi.advanceTimersByTime(100);
    debounced();
    vi.advanceTimersByTime(200);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should call the function with the correct arguments", () => {
    const fn = vi.fn((a: number, b: number) => a + b);
    const debounced = debounce(fn, 150);

    debounced(5, 10);
    vi.advanceTimersByTime(150);

    expect(fn).toHaveBeenCalledWith(5, 10);
  });
});
