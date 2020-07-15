[⬅️ README](../README.md)

# Nx

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins wich add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins wich you can add to your workspace:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app-e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Updating Nx

- [Nx Workspace Update | Nx Docs](https://nx.dev/react/workspace/update)

> to be able to update the current project, you first need to remove the references from the `libs/shared/assets` from the `workspace.json` and `nx.json`, run the migration and later add it back

## Environment Variables

- [Environment Variables | Nx Documentation](https://nx.dev/react/guides/environment-variables)

- [[GitHub] motdotla/dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from .env for nodejs projects.

  > available on the project added by the Nx tools
  >
  > besides the fact that the dependency is already available on the project only defining the `.env` file wasn't enough because those variable weren't available inside of the react application
  >
  > to be able to use the variables from the `.env` files I need to define a custom webpack config to be sure to load and make the variables available to the applications
  >
  > to define wich environment file to be load, the logic is defined on the `tools/scripts/lib/current-environment.js`

## Custom Webpack Config

- Unfortunally there is no mention on the [nx.dev](https://nx.dev/) site about how to define a custom webpack config

  - The only 'official' mention about the subject was founded on the following blog post: [Powering Up React Development With Nx | Nrwl Blog](https://blog.nrwl.io/powering-up-react-development-with-nx-cf0a9385dbec)

- The first mentions about the topic was in some issues on the nx github repository

  - [Babel and React ? Or maybe react-create-app's support ? #1510](https://github.com/nrwl/nx/issues/1510#issuecomment-504605552)

  - [Cannot load SVG in React application #1931](https://github.com/nrwl/nx/issues/1931)

  - [Custom Webpack Configuration - Url Loader #2112](https://github.com/nrwl/nx/issues/2112)

- after the knowledge aquired by the links above, that makes me read the code of [@nrwl/react/plugins/webpack](https://github.com/nrwl/nx/blob/master/packages/react/plugins/webpack.ts)

  - reading this code I notice that I just need to follow the same code pattern, do what I need and also use this plugin as well before return the webpack config object

    - custom webpack config: `tools/custom-webpack.config.js`

    - changed to use it on the `workspace.json`

      - previous webpack config: `"webpackConfig": "@nrwl/react/plugins/webpack"`

      - changed to use the custom webpack config: `"webpackConfig": "tools/custom-webpack.config.js"`

## Further help

- [How to develop React apps like Facebook, Microsoft, and Google | Nrwl](https://blog.nrwl.io/how-to-develop-react-apps-like-facebook-microsoft-and-google-bdcafcfbc9be)

- [React Microfrontends and Monorepos: A Perfect Match | Nrwl](https://blog.nrwl.io/monorepos-and-react-microfrontends-a-perfect-match-d49dca64489a)

- [[YouTube] Nx: Extensible Dev Tools for Monorepos (React)](https://www.youtube.com/watch?v=E188J7E_MDU)

- [[YouTube playlist] Nx Workspaces Course (Free version) - By Nrwl](https://www.youtube.com/watch?v=2mYLe9Kp9VM&list=PLakNactNC1dH38AfqmwabvOszDmKriGco)

- [Nx Workspaces (by Nrwl) | Nx Playbook](https://nxplaybook.com/p/nx-workspaces) - Introduction to Using an Nx Monorepo - free course

- Visit the [Nx Documentation](https://nx.dev) to learn more.

  - [Nx CLI](https://nx.dev/react/guides/cli)

    - [CLI commands to a React project with Nx](https://nx.dev/react/api/home)

  - [Using Nx at Enterprises](https://nx.dev/react/guides/monorepo-nx-enterprise)

  - [Rebuilding and Retesting What is Affected](https://nx.dev/react/guides/monorepo-affected)

---

- [[YouTube] Nx Quickstart - How to Scale a JavaScript Project](https://www.youtube.com/watch?v=VUyBY72mwrQ)

- [[YouTube] Nx - Extensible Dev Tools for Monorepos (React Apps)](https://www.youtube.com/watch?v=Jxh_--FeJeY)

- [[YouTube] Nx Storybook Integration: Demo by Isaac Mann of Nrwl](https://www.youtube.com/watch?v=sFpqyjT7u4s)

- [[YouTube] Scalable React Development for Large Projects - Jason Jean | React Conferences by GitNation](https://www.youtube.com/watch?v=Lr-u2ALSEQg)

---

- Nx Console

  - [[GitHub] nrwl/nx-console](https://github.com/nrwl/nx-console)

  - [VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)

## Project examples

- [[GitHub] erkobridee / nx-hello](https://github.com/erkobridee/nx-hello)

- [[GitHub] erkobridee / nx-todos](https://github.com/erkobridee/nx-todos)

- [[GitHub] nrwl/nx-examples](https://github.com/nrwl/nx-examples)

- [[GitHub] nrwl/board-game-hoard](https://github.com/nrwl/board-game-hoard)

- [[GitHub] nrwl/nx-azure-build](https://github.com/nrwl/nx-azure-build) - Example of setting up distributed Azure build for Nx workspace
