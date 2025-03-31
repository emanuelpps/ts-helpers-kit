import { isNumber } from "@src/checks/isNumber";

export const randomString = (length: number): string => {
  if (!isNumber(length) || length <= 0) {
    throw new Error("The parameter must be a positive number");
  }

  let result = "";
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};
