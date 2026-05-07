# System Architecture

## Project

MoveIt App

## Overview

MoveIt App is a lightweight demo web application deployed using GitHub Pages and automated with GitHub Actions CI/CD workflows.

The project demonstrates:

- Source control workflow
- CI/CD automation
- Deployment
- Security practices
- Monitoring/logging
- Documentation
- Metrics tracking

---

# Architecture Diagram

```text
+-------------------+
| Developer         |
| Local Development |
+-------------------+
          |
          v
+-------------------+
| GitHub Repository |
| Branch + PR Flow  |
+-------------------+
          |
          v
+---------------------------+
| GitHub Actions CI/CD      |
| Test → Build → Deploy     |
+---------------------------+
          |
          v
+-------------------+
| GitHub Pages      |
| Live Deployment   |
+-------------------+
          |
          v
+-------------------+
| End Users         |
| Browser Access    |
+-------------------+

