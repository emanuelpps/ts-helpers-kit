export const timeAgo = (date: Date, lang: "es" | "en" = "en"): string => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { seconds: 31536000, unit: { en: ["year", "years"], es: ["año", "años"] } },
    { seconds: 2592000, unit: { en: ["month", "months"], es: ["mes", "meses"] } },
    { seconds: 86400, unit: { en: ["day", "days"], es: ["día", "días"] } },
    { seconds: 3600, unit: { en: ["hour", "hours"], es: ["hora", "horas"] } },
    { seconds: 60, unit: { en: ["minute", "minutes"], es: ["minuto", "minutos"] } },
  ];

  for (const { seconds: intervalSeconds, unit } of intervals) {
    const count = Math.floor(seconds / intervalSeconds);
    if (count >= 1) {
      const [singular, plural] = unit[lang];
      const word = count === 1 ? singular : plural;
      return lang === "es"
        ? `hace ${count} ${word}`
        : `${count} ${word} ago`;
    }
  }

  return lang === "es" ? "hace unos segundos" : "a few seconds ago";
};
