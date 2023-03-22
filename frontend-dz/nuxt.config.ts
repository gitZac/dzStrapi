// https://nuxt.com/docs/api/configuration/nuxt-coznfig
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '~/assets/styles/main.scss'],
    build: {
      transpile: ['vuetify'],
    },
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    }, 
})