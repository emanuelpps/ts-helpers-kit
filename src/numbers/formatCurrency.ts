export const formatCurrency = (
  amount: number,
  locale: string,
  currency: string
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
};
