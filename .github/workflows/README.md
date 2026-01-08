# GitHub Actions Workflows

This directory contains automated workflows for the KC Website project.

## Azure Static Web Apps CI/CD

**File**: `azure-static-web-apps.yml`

This workflow automates deployment to Azure Static Web Apps.

### Features

- **Automatic Deployment**: Triggered on push to `main` or `master` branches
- **Preview Environments**: Creates preview deployments for pull requests
- **Automatic Cleanup**: Removes preview environments when pull requests are closed
- **No Build Required**: Deploys static HTML files directly from the repository

### Required Secrets

- `AZURE_STATIC_WEB_APPS_API_TOKEN`: Azure deployment token (automatically configured when linking the repository to Azure)

### Workflow Jobs

1. **build_and_deploy_job**: Deploys the site to Azure Static Web Apps
   - Runs on: Push to main/master, or when PR is opened/updated
   - Uses: `Azure/static-web-apps-deploy@v1` action

2. **close_pull_request_job**: Cleans up preview environments
   - Runs on: When PR is closed
   - Removes the staging environment for the PR

### Monitoring

View deployment status:
- Check the **Actions** tab in the GitHub repository
- View deployment logs for troubleshooting
- Monitor Azure Portal for live site status

### Configuration

The workflow is configured for a static HTML site with no build step:
- **App Location**: `/` (root directory)
- **API Location**: (empty - no API)
- **Output Location**: `/` (serves files directly)

To modify the configuration, edit the `azure-static-web-apps.yml` file.
