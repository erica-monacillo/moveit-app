# DevOps Practices

## Project

MoveIt App

## Overview

This project applies DevOps practices to improve collaboration, automation, deployment reliability, monitoring, and software delivery workflow.

---

# DevOps Practices Used

## Version Control

Git and GitHub are used for:

- Branching
- Pull requests
- Code merging
- Release tagging

Branch naming conventions:

- feature/<name>
- bugfix/<name>
- hotfix/<name>

---

## Continuous Integration (CI)

GitHub Actions automatically runs workflows after pushes or pull requests.

CI checks include:

- Build verification
- Deployment workflow checks
- Smoke testing

---

## Continuous Deployment (CD)

The project automatically deploys to GitHub Pages after successful workflow execution.

Deployment pipeline:

```text
Push to main
    ↓
Test
    ↓
Build
    ↓
Deploy
    ↓
Smoke Test