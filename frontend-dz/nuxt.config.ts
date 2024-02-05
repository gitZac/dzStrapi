// https://nuxt.com/docs/api/configuration/nuxt-coznfig
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass", "~/assets/styles/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  ssr: true,
  runtimeConfig: {
    public: {
      STRAPI_API_BASE: process.env.STRAPI_API_BASE,
      STRAPI_URL_BASE: process.env.STRAPI_URL_BASE,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @import "@/assets/styles/variables.scss";
              @import "@/node_modules/bulma/bulma.sass";
              `,
        },
      },
    },
  },
});
