import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
  ],
  sitemap: {
    siteUrl: "https://nurullahnergiz.com/",
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  robots: {
    indexable: true,
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
          content: `Nurullah Nergiz, Frontend developer`,
        },
        {
          name: "og:title",
          content: "Nurullah nergiz",
        },
      ],
    },
  },
});
