# Patientor CI/CD

Patientor is a full-stack application with a TypeScript/Express backend and a React frontend.

This repository contains both parts of the application and uses GitHub Actions to implement a CI/CD pipeline.

## Project structure

patientor-cicd/
├── backend/
└── frontend/

CI/CD pipeline

The project uses GitHub Actions to automatically check, version and deploy the application.

Pull Requests

When a Pull Request is opened or updated against main, GitHub Actions runs:

Backend linting
Backend tests
Backend build
Backend health check
Frontend linting
Frontend build

Pull Requests do not create a new version and do not trigger a deployment.

Main branch

When changes are merged into main, the pipeline runs the same checks again.

If all checks pass:

A new patch version tag is created automatically.
The backend is deployed to Render.
The frontend is deployed to Render.
A notification is sent to Discord.

The deployment is therefore only triggered by changes that reach the main branch.

Technologies
Backend
Node.js
TypeScript
Express
Vitest
ESLint
Frontend
React
TypeScript
Vite
Material UI
Axios
React Router
CI/CD
GitHub Actions
Render
Discord Webhooks
Deployment

The backend and frontend are deployed as separate services on Render.

The deployment is triggered automatically from GitHub Actions after a successful push to main.

Branch protection

The main branch is protected.

Changes must be submitted through a Pull Request and require:

At least one approving review
Successful backend and frontend status checks
Up-to-date status checks before merging
No force pushes

Administrators are also subject to these rules.