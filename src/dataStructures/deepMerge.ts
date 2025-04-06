export function deepMerge<
  T extends Record<string, unknown>,
  U extends Record<string, unknown>
>(
  target: T,
  source: U
): T & U {
  const result: Record<string, unknown> = { ...target }

  const isObject = (
    val: unknown
  ): val is Record<string, unknown> =>
    typeof val === 'object' &&
    val !== null &&
    !Array.isArray(val)

  for (const key in source) {
    const targetValue = target[key as keyof T]
    const sourceValue = source[key as keyof U]

    if (
      isObject(targetValue) &&
      isObject(sourceValue)
    ) {
      result[key] = deepMerge(targetValue, sourceValue)
    } else if (!(key in target)) {
      result[key] = sourceValue
    } else {
      result[key] = targetValue
    }
  }

  return result as T & U
}