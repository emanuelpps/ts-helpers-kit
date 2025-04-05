export const setCookie = (name: string, value: string, days?: number): void => {
  let expires = "";
  if (typeof days === "number") {
    const date = new Date();
    date.setTime(date.getTime() + days * 864e5);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
};
