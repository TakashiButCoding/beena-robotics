// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: '/beena-robotics/',
    head: {
      title: 'Beena Robotics', 
      charset: 'utf-8',
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // build: {
  //   transpile: ['@iconify/vue'],
  // },
  ssr: false, // Disable SSR for a purely static site
})
