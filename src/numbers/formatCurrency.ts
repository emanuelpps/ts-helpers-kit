export const formatCurrency = (
  amount: number,
  locale: string = "en-US",
  currency: string = "USD"
): string => {
  if (typeof amount !== "number" || isNaN(amount)) {
    throw new Error("Amount must be a valid number");
  }

  if (typeof locale !== "string" || locale.trim() === "") {
    throw new Error("Locale must be a valid non-empty string");
  }

  if (typeof currency !== "string" || !/^[A-Z]{3}$/.test(currency)) {
    throw new Error("Currency must be a valid 3-letter ISO currency code");
  }

  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  } catch (error) {
    throw new Error(
      `Unsupported locale or currency: ${(error as Error).message}`
    );
  }
};
