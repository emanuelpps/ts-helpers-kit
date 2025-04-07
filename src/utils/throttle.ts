export function throttle<Args extends unknown[], R>(
  func: (...args: Args) => R,
  limit: number
): (...args: Args) => void {
  let inThrottle = false;

  return (...args: Args): void => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}
