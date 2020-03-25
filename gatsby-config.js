//dot env to hide keys
require("dotenv").config({
  path: `.env`,
})


//module
module.exports = {
  siteMetadata: {
    title: `Developer Jahid`,
    description: `Gatsby Srarter by Developer Jahid`,
    author: `@developerjahid`,
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
        name: `developerjahid-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/developerjahid-icon.webp`,
      },
    },

  ],
}
