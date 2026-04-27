import { validateName, validateEmail } from "./utils/validation";
import { isAuthorized } from "./utils/auth";
function runSecurityChecks() {
  const nameError = validateName("Erica");
  const emailError = validateEmail("student@example.com");
  const authPassed = isAuthorized("demo-token");

  console.log("Name validation:", nameError || "passed");
  console.log("Email validation:", emailError || "passed");
  console.log("Authentication:", authPassed ? "passed" : "failed");
}
const appTitle = "MoveIt App";

<button onClick={runSecurityChecks}>
  Run Security Checks
</button>