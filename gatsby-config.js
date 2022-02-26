require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
      title: `Simple Recipes`,
      description: "Nice and clean recipe site",
      author: "@MatthewLee",
      siteUrl: `https://www.yourdomain.tld`,
      person:{name:"Matthew Lee",age:25},
      simpleData: ['item 1','item 2'],
      complexData:[
        {name:"Matthew Lee",age:25},
        {name:"John Doe",age:40},
        {name:"Jane Smith",age:30}
      ]
    },
    plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/assets/images`,
        },
      },
      {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1jvd3gq005sp`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },

    ],
}