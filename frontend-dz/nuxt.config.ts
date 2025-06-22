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
      GRECAPTCHA_SITE_KEY: process.env.GRECAPTCHA_SITE_KEY,
    },
  },
  app: {
    head: {
      script: [
        {
          src: `https://www.google.com/recaptcha/api.js?render=${process.env.GRECAPTCHA_SITE_KEY}`,
          async: true,
        },
      ],
    },
  },
  modules: ["@vee-validate/nuxt"],
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
