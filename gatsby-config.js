module.exports = {
  siteMetadata: {
    title: `Mohammed Amaou | Independent 3D designer`,
    description: `My 3D designer portfolio`,
    author: `MBK`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mohammed Amaou | Independent 3D designer`,
        short_name: `Mohammed Amaou`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
