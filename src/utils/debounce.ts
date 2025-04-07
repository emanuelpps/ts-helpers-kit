export function debounce<Args extends unknown[], R>(
    func: (...args: Args) => R,
    delay: number
  ): (...args: Args) => void {
    let timer: ReturnType<typeof setTimeout> | null = null;
  
    return (...args: Args): void => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  