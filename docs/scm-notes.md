# SCM Notes

## Week 5 Activity

This document records our source control management practice.

## Branching Rule

Branches should follow this format:

- feature/<name>
- bugfix/<name>
- hotfix/<name>

## Merge Conflict Practice

A merge conflict happened because the same section was edited in both the dev branch and the feature/conflict-practice branch.

The conflict was resolved by combining the changes into one final version.

## Resolution Steps

1. Tried to merge `feature/conflict-practice` into `dev`.
2. Git detected a conflict.
3. Opened the conflicted file.
4. Removed conflict markers.
5. Combined the useful changes.
6. Staged the resolved file.
7. Committed the fix.