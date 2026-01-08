# Azure Static Web Apps Deployment Configuration

This directory contains the workflow configuration for deploying the KC Website to Azure Static Web Apps.

## Workflow File

- `azure-static-web-apps-witty-tree-03584700f.yml` - Main deployment workflow

## Required Secrets

To enable deployment, you must configure one of the following secrets in your GitHub repository:

### Primary Secret (Recommended)
- **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
- **Description**: The deployment token from your Azure Static Web App
- **How to obtain**:
  1. Go to your Azure Portal
  2. Navigate to your Static Web App resource
  3. Go to "Overview" > "Manage deployment token"
  4. Copy the deployment token
  5. Add it to GitHub: Settings > Secrets and variables > Actions > New repository secret

### Alternative Secret (Legacy)
- **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN_WITTY_TREE_03584700F`
- **Description**: The deployment token specific to the "witty-tree" deployment

## Workflow Behavior

### On Push to Main Branch
- Checks for the presence of deployment token
- If token is available: Builds and deploys the site to Azure
- If token is missing: Logs a warning and skips deployment (no error)

### On Pull Request
- **Opened/Updated**: Deploys a preview environment
- **Closed**: Tears down the preview environment

## Troubleshooting

### Error: "deployment_token was not provided"

This error occurs when the required secret is not configured. To fix:

1. Ensure you have added the deployment token secret to GitHub (see above)
2. Verify the secret name matches exactly:
   - `AZURE_STATIC_WEB_APPS_API_TOKEN` (preferred), OR
   - `AZURE_STATIC_WEB_APPS_API_TOKEN_WITTY_TREE_03584700F` (legacy)
3. The workflow will automatically use whichever secret is available

### Workflow Not Running

If the workflow doesn't trigger:
1. Check that the workflow file is on the `main` branch
2. Verify the workflow is enabled in Settings > Actions
3. Make sure you have pushed to the `main` branch or created/updated a pull request

### Deployment Token Expired

Azure Static Web Apps deployment tokens do not expire, but if you need to regenerate:
1. Go to Azure Portal > Your Static Web App
2. Click "Manage deployment token"
3. Click "Reset deployment token"
4. Update the secret in GitHub with the new token

## Build Configuration

The workflow is configured to:
- **App Location**: `/` (root of repository)
- **API Location**: `` (no API)
- **Output Location**: `.` (static files served from root)

To modify these settings, edit the workflow file and update the values under "Repository/Build Configurations".

## Additional Resources

- [Azure Static Web Apps Documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/)
- [GitHub Actions for Azure Static Web Apps](https://github.com/Azure/static-web-apps-deploy)
- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
