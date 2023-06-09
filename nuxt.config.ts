
// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'tr'
            },
            meta: [
                {
                    hid: "author",
                    name: "author",
                    content: "Nurullah Nergiz",
                },
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
        }
    }
})
