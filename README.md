# Turborepo with next app and playwright test workspaces

This monorepo has two next apps and their tests in playwright

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `test`: playwright tests for docs and web apps
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command:

```
cd turborepo-ui-tests
turbo build
```

### Develop

To develop all apps and packages, run the following command:

```
cd turborepo-ui-tests
turbo dev
```

### Run e2e tests
To run e2e tests, both apps need to be running on localhost
This is achieved by chaining turbo pipeline commands like this
`npx turbo dev test report`

The server will remain running after running tests, I am working on figuring out how to stop servers once tests finish


