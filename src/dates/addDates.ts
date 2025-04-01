import { isDate } from "@src/checks/isDate";
import { isNumber } from "@src/checks";

export const addDates = (date: Date, days: number): Date => {
  if (!isDate(date)) {
    throw new Error("Invalid date provided");
  }

  if (!isNumber(days)) {
    throw new Error("Days must be a valid number");
  }

  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
