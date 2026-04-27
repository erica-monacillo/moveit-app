const APP_TOKEN = import.meta.env.VITE_APP_TOKEN || "demo-token";

export function isAuthorized(token) {
  return token === APP_TOKEN;
}