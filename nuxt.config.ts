export default defineNuxtConfig({
  app: {
    head: {
      title: 'Beena Robotics',
      charset: 'utf-8',
    },
  },
  ssr: false,  // Disable SSR if you're using static site generation

  css: ['~/assets/css/main.css'],  // Include your CSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
