module.exports = ({
  contentPath = __dirname,
  themePath = `${__dirname}/theme.ts`,
  blogsBasePath = '/blogs',
  mediumUserName,
}) => {
  process.env.BLOGS_BASE_HREF = blogsBasePath;
  return {
    pathPrefix: process.env.NX_PATH_PREFIX || '/',
    siteMetadata: {
      title: `blog-medium`,
      description: `This is a gatsby application created by Nx.`,
    },
    plugins: [
      {
        resolve: `gatsby-source-medium`,
        options: {
          username: mediumUserName,
        },
      },
      {
        resolve: `gatsby-plugin-material-ui`,
        options: {
          pathToStylesProvider: `${contentPath}/theme`,
        },
      },
      {
        resolve: `gatsby-plugin-layout`,
        options: {
          component: require.resolve(`./src/layout.tsx`),
        },
      },
      `gatsby-plugin-remove-trailing-slashes`,
      {
        resolve: `gatsby-plugin-env-variables`,
        options: {
          allowList: ['BLOGS_BASE_HREF'],
        },
      },
      {
        resolve: require.resolve(`../../libs/ui`),
      },

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
          name: `images`,
          path: `${contentPath}/src/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `material-theme-path`,
          path: themePath,
        },
      },
      `gatsby-transformer-sharp`,
      {
        resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
        options: {
          path: contentPath,
        },
      },
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `blog-medium`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/logo.svg`,
        },
      },
    ],
  };
};
