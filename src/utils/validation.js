export function validateName(name) {
  if (!name || typeof name !== "string") {
    return "Name is required.";
  }

  if (name.trim().length < 2) {
    return "Name must be at least 2 characters.";
  }

  if (name.length > 50) {
    return "Name must be less than 50 characters.";
  }

  return "";
}

export function validateEmail(email) {
  if (!email || typeof email !== "string") {
    return "Email is required.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return "Enter a valid email address.";
  }

  return "";
}