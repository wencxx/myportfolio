// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  spaLoadingTemplate: false,
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],

  googleFonts: {
    families: {
      "Roboto Mono": true,
      "Ovo": true
    }
  }
})