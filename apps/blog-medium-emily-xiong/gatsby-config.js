module.exports = {
  siteMetadata: {
    title: `blog-medium-emily-xiong`,
    description: `This is a gatsby application created by Nx.`,
  },
  plugins: [
    {
      resolve: require.resolve(`../blog-medium`),
      options: {
        mediumUserName: '@emilyxiong',
      },
    },
  ],
};
