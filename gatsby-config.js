module.exports = {
  siteMetadata: {
    title: 'Cassie Tarakajian',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
  pathPrefix: '/cassietarakajian.com'
};
