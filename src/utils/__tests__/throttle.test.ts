// throttle.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { throttle } from "../throttle";

describe("throttle", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("should call the function immediately on first call", () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 200);

    throttled();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should not call the function again within the limit period", () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 200);

    throttled();
    throttled();
    throttled();

    expect(fn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(150);
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should allow calling the function after the limit period", () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 200);

    throttled();
    expect(fn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(200);
    throttled();
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("should pass the correct arguments to the function", () => {
    const fn = vi.fn((a: number, b: number) => a + b);
    const throttled = throttle(fn, 200);

    throttled(3, 4);
    expect(fn).toHaveBeenCalledWith(3, 4);

    vi.advanceTimersByTime(200);
    throttled(10, 5);
    expect(fn).toHaveBeenCalledWith(10, 5);
  });
});
