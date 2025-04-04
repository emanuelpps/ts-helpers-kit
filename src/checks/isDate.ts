export const isDate = (date: unknown): Date => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error("Invalid date provided");
    }
    return date;
  };
  