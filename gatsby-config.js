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
        icon: `src/assets/images/Badge.png`
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
