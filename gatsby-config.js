module.exports = {
  siteMetadata: {
    title: "SINS - Secure Interactive Malware Sandbox",
    description: "Safely analyze and understand malware in an isolated environment with our interactive sandbox.",
    author: "SINS Team",
    siteUrl: "https://example.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "SINS Malware Sandbox",
        short_name: "SINS",
        start_url: "/",
        background_color: "#e0e5ec",
        theme_color: "#4d5b9e",
        display: "minimal-ui",
        icon: "src/images/sins-icon.png", // Create this icon file
      },
    },
    "gatsby-plugin-offline",
  ]
}
