# Security Checklist

## Project

MoveIt App

## Secure Coding Improvements

### Input Validation

Implemented input validation in two places:

- Name validation
- Email validation

Validation helps prevent invalid, empty, or unsafe user input from being accepted.

### Basic Authentication

Added simple token-based authentication using an application token.

The token is checked before allowing protected behavior.

### Protected Sensitive Values

Sensitive values should not be committed directly to the repository.

The project uses:

- `.env.example` for sample environment values
- `.gitignore` to ignore real `.env` files
- `VITE_APP_TOKEN` as an environment variable

### Dependency Audit

A dependency audit was run using:

```bash
npm audit