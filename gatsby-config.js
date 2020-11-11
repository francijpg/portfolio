require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Francisco's Portfolio`,
    description: `This is Francisco's Professional Portfolio Website`,
    author: `@francijpg`,
    twitterUsername: "@francijpg",
    image: "/twitter-img.png",
    siteUrl: "https://www.francijpg.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: process.env.GATSBY_STRAPI,
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`, `certificates`, `categories`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Encode Sans Expanded`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
