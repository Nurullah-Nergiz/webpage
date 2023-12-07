import { defineNuxtConfig } from "nuxt/config";
import { getRepos } from "./services/githubRepos";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-simple-sitemap",
  ],
  sitemap: {
    siteUrl: "https://nurullahnergiz.com/",
    urls: async () => {
      const { data } = await getRepos();
      return data
        .filter(
          ({ name }) => name !== "Nurullah-Nergiz"
        )
        .map(
          (page: {
            name: string;
            default_branch: string;
          }) => ({
            loc: `/projects/${page.name}/${page.default_branch}`,
            lastmod: new Date(),
            changefreq: "daily",
            priority: 0.8,
          })
        );
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "tr",
      },
      link: [
        {
          rel: "icon",
          href: "https://nurullahnergiz.com/favicon.ico",
        },
        {
          rel: "canonical",
          href: "https://nurullahnergiz.com/",
        },
      ],
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
          content: `Nurullah Nergiz, nurullah, nergiz, nurullah nergiz, Frontend developer, github, linkedin, `,
        },
        {
          name: "og:title",
          content: "Nurullah nergiz",
        },
        {
          name: "theme-color",
          content: "rgb(17, 17, 17)",
        },
      ],
    },
  },
});
