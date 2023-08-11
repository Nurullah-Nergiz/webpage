import { defineNuxtConfig } from "nuxt/config";
import { getRepos } from "./services/githubRepos";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
  ],
  sitemap: {
    siteUrl: "https://nurullahnergiz.com/",
    // urls: async () => {
    //   getRepos().then((data) => {
    //     return data.data.map((page) => ({
    //       loc: `/blog/${page.name}`,
    //       lastmod: page.updatedAt,
    //       changefreq: "daily",
    //       priority: 0.8,
    //     }));
    //   });
    // },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  robots: {
    indexable: true,
    UserAgent: '*',
    Disallow: '/'
    // sitemap: ["/sitemap.xml"],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "tr",
      },
      meta: [
        {
          hid: "author",
          name: "author",
          content: "Nurullah Nergiz",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "keywords",
          content: `Nurullah Nergiz,nurullah, nergiz,nurullah nergiz, Frontend developer`,
        },
        {
          name: "og:title",
          content: "Nurullah nergiz",
        },
      ],
    },
  },
});
