const siteMetadata = {
  // title: "Open Sourcery Software Development Club at UMD",
  title: 'Open Sourcery',
  shortTitle: 'Open Sourcery',
  description: 'Open Sourcery - An open-source focused software development club at the University of Maryland (UMD)',
  meta: {
    keywords: 'Open Sourcery,OpSrc,Programming,Coding,CS,Web Development,UMD,Club',
    author: 'Open Sourcery',
    contributors: [
      'Donald Isaac',
      'Mr. Bean'
    ]
  }
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
        icon: `static/images/Badge.png`
        /*
        background_color: TODO,
        theme_color: TODO,
        display: TODO,
        */
      }
    },
    'gatsby-plugin-offline', // should be listed after gatsby-plugin-manifest
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    // Content used to build pages
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    // Static assets, such as images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`,
        name: 'static',
      },
    },
    /* Parses markdown. Makes md data available through GraphQL.
     * https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/
     */
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      }
    },
  ],
}
