# CI/CD Pipeline Diagram

## Project

MoveIt App

## Trigger

The CI/CD pipeline runs automatically when code is pushed to the `main` branch.

## Pipeline Flow

```text
Developer pushes to main
        |
        v
GitHub Actions workflow starts
        |
        v
Checkout repository
        |
        v
Run tests
        |
        v
Build static site
        |
        v
Deploy to GitHub Pages
        |
        v
Run smoke test
        |
        v
Verify homepage loads successfully