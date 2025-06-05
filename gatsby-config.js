/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `\\ reflux \\`,
    siteUrl: `https://www.yourdomain.com`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Reflux - Security Solutions`,
      short_name: `Reflux`,
      start_url: `/`,
      background_color: `#7C3AED`,
      theme_color: `#7C3AED`,
      display: `minimal-ui`,
      icon: `static/favicon-32x32.png`,
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};