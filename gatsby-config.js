module.exports = {
  siteMetadata: {
    title: `David Andrews`,
    description: `Hi!  My name is David Andrews. I make web, mobile and desktop applications. I also make standard websites.`,
    author: `David Andrews`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Andrews (Web and Software Developer)`,
        short_name: `David Andrews`,
        start_url: `/`,
        background_color: `#343A40`,
        theme_color: `#343A40`,
        display: `minimal-ui`,
        icon: `src/images/da-logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-transition-link',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs'
          },
        ],
      } ,
    },
    'gatsby-plugin-sass'

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
