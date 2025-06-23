# React S3 GitHub Actions

This project demonstrates how to automate the deployment of a React application to AWS S3 using GitHub Actions.

## Features

- React application setup
- Continuous Integration and Deployment (CI/CD) with GitHub Actions
- Automatic build and deployment to AWS S3

## Prerequisites

- Node.js and npm installed
- AWS account with S3 bucket configured
- GitHub repository

## Getting Started

1. **Clone the repository:**
  ```bash
  git clone https://github.com/your-username/react-s3-github-actions.git
  cd react-s3-github-actions
  ```

2. **Install dependencies:**
  ```bash
  npm install
  ```

3. **Configure AWS credentials:**
  - Store your AWS credentials as GitHub repository secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_REGION`.
  - Set your S3 bucket name as a secret: `S3_BUCKET_NAME`.

4. **GitHub Actions Workflow:**
  - The workflow file `.github/workflows/deploy.yml` handles build and deployment on push to the main branch.

## Deployment

On every push to the `main` branch, GitHub Actions will:

- Install dependencies
- Build the React app
- Sync the build output to the specified S3 bucket

