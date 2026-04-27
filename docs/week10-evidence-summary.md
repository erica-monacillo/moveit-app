# Week 10 Evidence Summary

## CI/CD Upgrade

Updated the GitHub Actions pipeline to run on push to `main`.

## Pipeline

The pipeline follows this process:

test → build → deploy → smoke test

## Deployment

The project was deployed using GitHub Pages.

## Smoke Test

A smoke test was added after deployment to confirm that the homepage loads and contains the expected text.

## Documentation

Created:

- docs/cicd-diagram.md

## Evidence

Included screenshots of:

- Workflow file
- Successful GitHub Actions run
- Smoke test step
- Deployed GitHub Pages site