# Metrics Report

## Project

MoveIt App

## Measurement Date

8 May 2026

## Summary

This report compares current KPI measurements against project targets and suggests improvements based on the results.

## KPI Results

| KPI | Current Measurement | Target | Interpretation | Action Plan |
|---|---:|---:|---|---|
| Defect Rate | 0 critical defects observed | 0 critical defects | Meets target | Continue reviewing PRs and checking workflow results |
| Lead Time | 1 day from branch creation to merge | 1-3 days | Meets target | Keep PRs small and focused |
| Deployment Frequency | 1 successful GitHub Pages deployment | At least 1 per release activity | Meets target | Continue using automated deployment |
| Response Time | 0.29 seconds, HTTP 200 | Under 2 seconds | Meets target | Continue monitoring after changes |
| Availability | Site reachable during test | Reachable online | Meets target | Keep GitHub Pages deployment active |
| Dependency Health | 0 vulnerabilities found | 0 high or critical vulnerabilities | Meets target | Run `npm audit` before releases |
| Documentation Completeness | 12 docs completed | Required docs completed | Meets target | Keep docs updated after each lab |

## Data Sources

Measurements were collected from:

- `npm audit`
- `curl` response time check
- GitHub Actions deployment history
- GitHub repository documentation files
- Browser console logging check

## Analysis

The project meets the basic KPI targets for the current demo stage. The deployed site responds successfully, dependency audit results are acceptable, and documentation is available for the required course outputs.

The main monitoring improvement added this week is basic logging. Logging helps identify whether important actions are working and makes debugging easier during testing.

## Suggested Improvements

- Add automated uptime monitoring in the future.
- Add a CI step that records response time after deployment.
- Review dependency audit results before every release.
- Track defects using GitHub Issues.
- Keep response time under 2 seconds as the project grows.