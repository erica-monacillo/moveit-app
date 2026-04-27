# Deployment Plan

## Project

MoveIt App

## Target Environment

The application will be deployed to a development environment using Vercel.

The deployed system will be available online through a public deployment URL.

## Deployment Strategy

Selected strategy: Rolling deployment

A rolling deployment allows the system to be updated gradually while keeping the application available. The new version is deployed and verified before it is considered ready.

## Deployment Steps

1. Confirm all code changes are committed.
2. Confirm the latest changes are merged into the `dev` branch.
3. Confirm tests pass locally.
4. Confirm CI checks are green.
5. Confirm the release version is tagged.
6. Deploy the application to Vercel.
7. Open the deployed URL.
8. Verify the application loads correctly.
9. Test the main user flow.
10. Save the deployed system link as evidence.

## Rollback Steps

If the deployment fails or the application does not work online:

1. Stop using the failed deployment URL.
2. Go to the Vercel dashboard.
3. Open the project deployments list.
4. Select the last working deployment.
5. Promote or redeploy the last working version.
6. Verify the restored deployment works online.
7. Document the issue in the support notes.
8. Create a bugfix branch if code changes are needed.
9. Fix the issue and open a new Pull Request.
10. Redeploy after the fix is merged.

## Verification

The deployed system will be verified by checking:

- The site loads online.
- The homepage displays correctly.
- Navigation works.
- Main features work as expected.
- No major console errors appear.