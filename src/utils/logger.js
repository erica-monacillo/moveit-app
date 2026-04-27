export function logInfo(message, details = {}) {
  console.info("[INFO]", message, details);
}

export function logWarning(message, details = {}) {
  console.warn("[WARNING]", message, details);
}

export function logError(message, details = {}) {
  console.error("[ERROR]", message, details);
}