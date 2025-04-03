export default defineNuxtConfig({
  app: {
    head: {
      title: 'Beena Robotics',
      charset: 'utf-8',
    },
  },
  
  // Disable SSR if you're using static site generation
  ssr: false,

  // Include your CSS
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-04-02',

  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://www.beena-robotics.com',
    gzip: true,
    routes: [
      '/', 
      '/about', 
      '/services', 
      '/contact'
    ],
  },
})