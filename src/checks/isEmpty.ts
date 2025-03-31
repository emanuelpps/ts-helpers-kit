export function isEmpty(value: unknown): boolean {
  const isCountable = value instanceof Object;
  if (!isCountable) return true;
  return Object.entries(value).length === 0;
}
