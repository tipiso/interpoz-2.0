module.exports = {
  siteMetadata: {
    description: '',
    title: `interpoz`,
    siteUrl: `https://www.interpoz.com`
  },
  plugins: [
      "gatsby-plugin-sass",
      {
        resolve: 'gatsby-plugin-html-attributes',
        options: {
          lang: 'pl'
        }
      },
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: 'Interpoż',
              short_name: 'Interpoż',
              start_url: '/',
              background_color: '#f7f0eb',
              theme_color: '#a2466c',
              display: 'standalone',
              icon: 'src/images/favicon.png',
          },
      }
  ]
};