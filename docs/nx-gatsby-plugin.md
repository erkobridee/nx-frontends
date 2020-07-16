[⬅️ README](../README.md)

# Nx Gatsby Plugin

- [Gatsby support, custom workspace layouts, and more in Nx 9.4! | Nrwl](https://blog.nrwl.io/gatsby-support-custom-workspace-layouts-and-more-in-nx-9-4-497ae105bf4)

  - [[GitHub] nrwl/gatsby](https://github.com/nrwl/gatsby) - Nx plugin for Gatsby

## Known limitation

- The TypeScript support on Gatsby is manage by the [babel-plugin-transform-typescript](https://babeljs.io/docs/en/babel-plugin-transform-typescript.html) which does not support the `baseUrl` from the `tsconfig.json`. So to solve that it's needed to use the [gatsby-plugin-root-import](https://www.gatsbyjs.org/packages/gatsby-plugin-root-import/) on the `gatsby-config.js` to fix the alias paths.

- Using the MS VS Code, it needs to have a proper paths mapping on the `tsconfig.json` inside of the project directory, and to be able to map the current project with the `@this` alias, it was need to map again the alias mapped on the root tsconfig file.

> extra information could be found on the step 12 of the [project creation commands](project-creation-commands.md)

## Further help

- [Gatsby](https://www.gatsbyjs.org/)

  - [Gatsby Docs](https://www.gatsbyjs.org/docs/)

  - [gatsby-plugin-typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/) - [caveats](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/?=#caveats)

  - [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)

    - [Sourcing from the Filesystem](https://www.gatsbyjs.org/docs/sourcing-from-the-filesystem/)
