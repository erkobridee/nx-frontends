const path = require('path');

const assetsSharedLibPath = path.resolve(
  __dirname,
  '../../',
  'libs/shared/assets'
);
const uiComponentsSharedLibPath = path.resolve(
  __dirname,
  '../../',
  'libs/shared/ui-components/src'
);

module.exports = {
  siteMetadata: {
    title: `gatsby-site`,
    description: `This is a gatsby application created by Nx.`,
  },
  plugins: [
    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `local-images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shared-images`,
        path: path.resolve(assetsSharedLibPath, 'images'),
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.resolve(assetsSharedLibPath, 'images/logo.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@this': path.join(__dirname, 'src'),

        '@nx-frontends/shared/ui-components': uiComponentsSharedLibPath,
        '@nx-frontends/shared/assets': assetsSharedLibPath,

        // needed to be able to solve the scss imports
        // inside of the dependencies components
        'libs/shared/assets': assetsSharedLibPath,
      },
    },
  ],
};
