export const getCookie = (name: string): string | null => {
    if (typeof document === "undefined") return null;
  
    const cookies = document.cookie ? document.cookie.split("; ") : [];
  
    for (const cookie of cookies) {
      const [cookieName, ...rest] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(rest.join("="));
      }
    }
  
    return null;
  };  