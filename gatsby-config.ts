import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === "production";

dotenv.config({
  path: `${isProd ? `.env.${NODE_ENV}` : `.env`}`,
});

const siteUrl = process.env.SITE_URL || "http://localhost:8000";
const isKillServiceWorker = process.env.SERVICE_WORKER_KILL_SWITCH == `true`;

const plugins = [
  `gatsby-plugin-typescript`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/src/assets`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Itekscope`,
      short_name: `Itekscope`,
      start_url: `/`,
      background_color: `#1a9596`,
      theme_color: `#1a9596`,
      display: `standalone`,
      icon: `src/assets/itekscope-icon.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-advanced-sitemap`,
    options: {
      exclude: [
        `/dev-404-page`,
        `/404`,
        `/404.html`,
        `/offline-plugin-app-shell-fallback`,
        `/data-schema`,
        `/README`,
        `/(\\/)?hash-\\S*/`, // exclude internal tags
      ],
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 0,
      // Enables Google Optimize using your container Id
      optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // Enables Google Optimize Experiment ID
      experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
      // Set Variation ID. 0 for original 1,2,3....
      variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      // Defers execution of google analytics script after page load
      defer: false,
      // Any additional optional fields
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: "itekscope.com",
    },
  },
  `gatsby-plugin-sass`,
  // {
  //   resolve: `gatsby-plugin-postcss`,
  //   options: {
  //     postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
  //   },
  // },
  {
    resolve: "@chakra-ui/gatsby-plugin",
    options: {
      /**
       * @property {boolean} [resetCSS=true]
       * if false, this plugin will not use `<CSSReset />
       */
      resetCSS: true,
      /**
       * @property {boolean} [isUsingColorMode=true]
       * if false, this plugin will not use <ColorModeProvider />
       */
      isUsingColorMode: true,
    },
  },
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: false,
      develop: false,
      tailwind: true,
    },
  },
];

// Global switch to either use or remove service worker
if (isKillServiceWorker) {
  console.log(`Remove service worker plugin`);
  plugins.push(`gatsby-plugin-remove-serviceworker`);
} else {
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  console.log(`Install service worker plugin`);
  plugins.push(`gatsby-plugin-offline`);
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Itekscope`,
    siteUrl: siteUrl,
    description: `Itekscope is a art application whether is your passion or profession, you've come to the right place.`,
    author: `Itekscope`,
  },
  plugins: plugins,
  graphqlTypegen: true,
  trailingSlash: "never",
};

export default config;
