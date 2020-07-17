[⬅️ README](../README.md)

# Nx Gatsby Plugin

- [Gatsby support, custom workspace layouts, and more in Nx 9.4! | Nrwl](https://blog.nrwl.io/gatsby-support-custom-workspace-layouts-and-more-in-nx-9-4-497ae105bf4)

  - [[GitHub] nrwl/gatsby](https://github.com/nrwl/gatsby) - Nx plugin for Gatsby

## Known limitation

- The TypeScript support on Gatsby is manage by the [babel-plugin-transform-typescript](https://babeljs.io/docs/en/babel-plugin-transform-typescript.html) which does not support the `baseUrl` from the `tsconfig.json`. So to solve that it's needed to use the [gatsby-plugin-root-import](https://www.gatsbyjs.org/packages/gatsby-plugin-root-import/) on the `gatsby-config.js` to fix the alias paths.

- Using the MS VS Code, it needs to have a proper paths mapping on the `tsconfig.json` inside of the project directory, and to be able to map the current project with the `@this` alias, it was need to map again the alias mapped on the root tsconfig file.

> extra information could be found on the step 12 of the [project creation commands](project-creation-commands.md)

- even using the nx gatsby plugin, the gatsby site/app generates the build on its internal `/public` folder, so `onPostBuild` defined on the `gatsby-node.js` we need to copy its content to the nx workspace build directory following the same structure from a react application inside of the nx workspace

## Further help

- [Gatsby](https://www.gatsbyjs.org/)

  - [Gatsby Docs](https://www.gatsbyjs.org/docs/)

    - [Node APIs | Gatsby Docs](https://www.gatsbyjs.org/docs/node-apis/)

    - [Adding Testing | Gatsby Docs](https://www.gatsbyjs.org/docs/testing/)

      - [Testing Components with GraphQL | Gatsby Docs](https://www.gatsbyjs.org/docs/testing-components-with-graphql/)

      - [Mock Gatsby's useStaticQuery with Jest | FE](https://florian.ec/blog/mock-gatsby-usestaticquery-jest/)

  - [gatsby-plugin-typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/) - [caveats](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/?=#caveats)

  - [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)

    - [Sourcing from the Filesystem](https://www.gatsbyjs.org/docs/sourcing-from-the-filesystem/)

  - handle the builded output

    - [[GitHub] gatsbyjs/gatsby - Configurable output folder #1878](https://github.com/gatsbyjs/gatsby/issues/1878)

    - [Gatsby Multi Website Deployments | AppFoundry](https://www.appfoundry.be/blog/gatsby-multi-website-deployments)

    - [Supporting multiple build outputs from one GatsbyJS setup | Glamanate](https://glamanate.com/blog/supporting-multiple-build-outputs-one-gatsbyjs-setup)

- [Jest](https://jestjs.io/)

  - [Manual Mocks | Jest](https://jestjs.io/docs/en/manual-mocks)

  - [Understanding Jest Mocks | by Rick Hanlon II - Medium](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)

  - [How to Use Jest to Mock Constructors | Brian Ambielli](https://bambielli.com/til/2018-01-07-mocking-constructors/)

  - [Writing the First Test & Component | dev.to](https://dev.to/_lexedwards/writing-the-first-test-component-5h1o) - [code example](https://github.com/lexedwards/alexedwards-co)
