import { isNumber } from '../checks';

export const randomInt = (min: number, max: number): number => {
  if (!isNumber(min) || !isNumber(max)) {
    throw new Error('Parameters must be numbers');
  }
  
  if (min > max) {
    throw new Error('Min cannot be greater than max');
  }

  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
};