# Train Core

A shared library containing DTOs (Data Transfer Objects) and core utilities for both frontend and backend applications.

## Purpose

This package ensures type consistency between frontend and backend by providing a single source of truth for data structures used in API requests and responses.

## Structure

- `src/shared/dto/`: Contains all DTOs organized by domain
  - `user.dto.ts`: User-related DTOs (authentication, registration, etc.)

## Publishing to Private Registry

### Setup GitHub Packages (or other private registry)

1. Create a Personal Access Token (PAT) with the appropriate permissions:
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Generate new token
   - Select `read:packages`, `write:packages`, and `delete:packages` scopes
   - Copy the generated token

2. Authenticate with GitHub Packages:

```bash
# Create a .npmrc file in your home directory if you don't have one already
touch ~/.npmrc

# Add your GitHub token to the .npmrc file
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc

# Log in to GitHub Packages
npm login --registry=https://npm.pkg.github.com --scope=@train
# When prompted, use your GitHub username, the token as password, and your GitHub email
```

3. Update the repository URL in package.json to match your actual GitHub repository.

### Publishing the Package

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Publish to GitHub Packages
npm publish
```

## Usage in Your Projects

### Installation

1. Create a `.npmrc` file in your project root with the following content:

```
@seenelm:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

2. Install the package:

```bash
npm install @seenelm/train-core
```

### Importing DTOs

```typescript
// Import specific DTOs
import { UserRequest, UserResponse } from '@seenelm/train-core';

// Or import from specific path
import { UserLoginRequest } from '@seenelm/train-core/shared/dto/user.dto';
```

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build
```

## Adding New DTOs

1. Create a new file in `src/shared/dto/` for your domain (e.g., `workout.dto.ts`)
2. Define your interfaces/types
3. Export them from the file
4. Add the export to `src/shared/dto/index.ts`
5. Publish a new version by updating the version in package.json and running `npm publish`
