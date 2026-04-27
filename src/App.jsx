import { validateName, validateEmail } from "./utils/validation";
import { isAuthorized } from "./utils/auth";
import { logInfo, logWarning, logError } from "./utils/logger";


function runSecurityChecks() {
  const nameError = validateName("Erica");
  const emailError = validateEmail("student@example.com");
  const authPassed = isAuthorized("demo-token");

  console.log("Name validation:", nameError || "passed");
  console.log("Email validation:", emailError || "passed");
  console.log("Authentication:", authPassed ? "passed" : "failed");
}

function runLoggingCheck() {
  logInfo("Application loaded successfully");
  logWarning("Demo warning log for monitoring practice");
  logError("Demo error log for monitoring practice");
}

const appTitle = "MoveIt App";

<button onClick={runSecurityChecks}>
  Run Security Checks
</button>

