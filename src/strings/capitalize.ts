import { isString } from "@src/checks/isString";
export const capitalize = (text: string): string => {
  if (!isString(text)) return text;

  const normalized = text.toLocaleLowerCase();
  return normalized.charAt(0).toLocaleUpperCase() + normalized.slice(1);
};
