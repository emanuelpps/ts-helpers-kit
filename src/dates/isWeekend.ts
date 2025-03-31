export const isWeekend = (date: Date): boolean => {
  const result = new Date(date);
  const dayWeek = result.getDay();
  return dayWeek >= 6 ? true : false;
};
