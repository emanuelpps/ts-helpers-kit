export const timeAgo = (date: Date, lang: "es" | "en" = "en"): string => {
  const now = new Date();

  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const intervals: Record<string, { es: string; en: string; value: number }> = {
    year: { es: "año", en: "year", value: 31536000 },
    month: { es: "mes", en: "month", value: 2592000 },
    day: { es: "día", en: "day", value: 86400 },
    hour: { es: "hora", en: "hour", value: 3600 },
    minute: { es: "minuto", en: "minute", value: 60 },
  };

  for (const key in intervals) {
    const { es, en, value } = intervals[key];
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      const unit = lang === "es" ? es : en;
      return lang === "es"
        ? `hace ${interval} ${unit}${interval !== 1 ? "es" : ""}`
        : `${interval} ${unit}${interval !== 1 ? "s" : ""} ago`;
    }
  }

  return lang === "es" ? "hace unos segundos" : "a few seconds ago";
};
