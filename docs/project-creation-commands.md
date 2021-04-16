[⬅️&nbsp;&nbsp;README](../README.md)

# Project creation commands

## Steps

1. creation command

`npx create-nx-workspace nx-frontends`

```
preset: empty
cli: nx
```

2. add the react dev dependency to the nx workspace

`npm i --save-dev @nrwl/react`

3. add the `yarn` as a dev dependency

`npm i --save-dev yarn`

4. create the react web application

`nx generate @nrwl/react:app`

```
name: frontend-app-1
styles: SASS (.scss)
router: yes
```

5. check the created react web app

`nx serve frontend-app-1`

- open on the web browser the URL: `http://localhost:4200/`

6. create another react web app

`nx generate @nrwl/react:app`

```
name: frontend-app-2
router: yes
```

7. check the created react web app

`nx serve frontend-app-2`

- open on the web browser the URL: `http://localhost:4200/`

8. create a shared assets lib

`nx g @nrwl/workspace:lib assets --directory=shared`

useful reference: [[YouTube] 9. Shared assets library and nx.json - Nx Workspaces Course, by Nrwl](https://youtu.be/LYjX2V-eQa8), the code of the example is available on the [[GitHub] nrwl/board-game-hoard](https://github.com/nrwl/board-game-hoard)

after define the code and the libs code structure

- update the `tsconfig.json` to expose the full content of the lib
- update the lib configuration on the `workspace.json`
- update the `frontend-app-1` and the `frontend-app-2` to load resources from the shared assets lib (code of each project and also the projects configuration on the `workspace.json`)
- update the `nx.json` to add as implicity dependency the `shared-assets` to the `frontend-app-1` and `frontend-app-2`

9. create a shared ui components lib

`nx g @nrwl/react:lib ui-components --directory=shared`

also added a new project dependency to the components

`npm i --save-dev clsx`

to load the SASS mixins and variables definitions from the `shared-assets` lib, we should use an import on the .scss file like the following one:

`@import 'libs/shared/assets/styles/_base';`

and also update the configuration on the `tsconfig.json` to expose the whole content from the lib to have more flexibility to access the components from it

10. add the gatsby dev dependency to the nx workspace:

`npm i --save-dev @nrwl/gatsby gatsby-cli gatsby-plugin-root-import`

11. create a gatsby site inside of the nx workspace:

`nx generate @nrwl/gatsby:app`

```
name: gatsby-site
styles: SASS
```

12. update the configs of the `gatsby-site`

- copy the paths from the root `tsconfig.json` into the local `tsconfig.json` and adjust the libs paths mapping to be at the same level used on the `extends` attribute
- add the local alias `@this/*` mapping to `src/*`
- update the `gatsby-config.js` and also add the config of `gatsby-plugin-root-import` that will map the alias to be set to the internal `webpack` used by the `gatsby-cli` (this step is needed because the Gastby relays on the babel typescript plugin which doesn't support preatty well the `baseUrl` config from the `tsconfig.js`)

13. add storybook support to the nx workspace:

> [Storybook | Nx Docs](https://nx.dev/latest/react/plugins/storybook/overview)

```
npm i --save-dev @nrwl/storybook

nx g @nrwl/react:storybook-configuration shared-ui-components
```
