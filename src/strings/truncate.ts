import { isString } from "@src/checks/isString";
import { isNumber } from "@src/checks/isNumber";

export const truncate = (text: string, length: number): string => {
  if (!isString(text) && !isNumber(length)) return text && length;
  return text.length > length ? text.slice(0, length) + "..." : text;
};
