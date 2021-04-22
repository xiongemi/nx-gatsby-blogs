module.exports = {
  siteMetadata: {
    title: `blog-medium-emily-xiong`,
    description: `This is a gatsby application created by Nx.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: process.env.NX_MEDIUM_USERNAME,
      },
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
        path: `${__dirname}/src/images`,
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
        name: `blog-medium-emily-xiong`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },

    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ['NX_BLOGS_BASE_HREF'],
      },
    },
    `gatsby-plugin-client-side-redirect`,
    {
      resolve: require.resolve(`../../libs/ui`),
    },
  ],
};
