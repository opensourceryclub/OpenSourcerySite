const siteMetadata = {
  title: "Open Sourcery Software Development Club at UMD",
  shortTitle: "Open Sourcery"
}
module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortTitle,
        start_url: `/`,
        icon: ``
        /*
        background_color: TODO,
        theme_color: TODO,
        display: TODO,
        */
      }
    },
    'gatsby-plugin-offline', // should be listed after manifest plugin
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      }
    },
  ],
}
