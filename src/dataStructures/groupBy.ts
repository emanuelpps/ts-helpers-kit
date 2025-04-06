export function groupBy<T extends Record<string, unknown>>(
  array: T[],
  key: keyof T
): Record<string, T[]> {
  return array.reduce<Record<string, T[]>>((acc, item) => {
    const groupKey = String(item[key]);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});
}
