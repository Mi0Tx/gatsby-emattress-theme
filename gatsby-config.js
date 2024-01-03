module.exports = {
  siteMetadata: {
    title: `eMattress Outlet`,
    siteUrl: `https://emattressoutlet.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eMattressOutlet.com`,
        short_name: `eMattress`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
