export const isWeekend = (date: Date): boolean => {
  const result = new Date(date);
  const dayWeek = result.getDay();
  return dayWeek >= 5 ? true : false;
};
