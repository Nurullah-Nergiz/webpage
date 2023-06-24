import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["nuxt-simple-sitemap", "nuxt-simple-robots"],
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
        { name: "robots", content: "index, follow" },
        {
          name: "keywords",
          content: `Frontend developer,
              Web development,
              HTML,
              CSS,
              JavaScript,
              Mobile-friendly,
              React,
              Vue.js,
              Git`,
        },
      ],
    },
  },
});
