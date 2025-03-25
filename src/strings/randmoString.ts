export const randomString = (length: number): string => {
  return Math.random().toString(36).substring(2, length);
};
