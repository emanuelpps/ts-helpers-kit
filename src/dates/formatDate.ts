import { isString } from "@src/checks";
import { isDate } from "@src/checks/isDate";

export const formatDate = (date: Date, format: string): string => {
  if (!isDate(date) || !isString(format)) {
    return "date or format not valid";
  }

  const map: { [key: string]: string } = {
    YYYY: date.getFullYear().toString(),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    DD: String(date.getDate()).padStart(2, "0"),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => map[match]);
};
