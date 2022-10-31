module.exports = {
  siteMetadata: {
    description:
      "BHP PRZEGLĄD URZĄDZEŃ PRZECIWPOŻAROWYCH DOKUMENTACJA DO KONTROLI PRZECIWPOŻAROWYCH INSTRUKCJE BEZPIECZEŃSTWA SZKOLENIA PRZECIWPOŻAROWE I BHP",
    title: `interpoz`,
    siteUrl: `https://www.interpoz.com`,
    og: {
      siteName: "Interpoż - BHP i usługi przeciwpożarowe",
      title: "Interpoż",
      type: "website",
      url: "https://www.interpoz.com",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "pl",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Interpoż",
        short_name: "Interpoż",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
