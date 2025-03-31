import type { NullOrUndefined } from "../types/index";
export function isNullOrUndefined(value: unknown): value is NullOrUndefined {
  return value === null || value === undefined;
}
