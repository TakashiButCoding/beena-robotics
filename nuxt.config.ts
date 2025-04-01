export default defineNuxtConfig({
  app: {
    head: {
      title: 'Beena Robotics',
      charset: 'utf-8',
    },
    router: {
      base: '/beena-robotics/',  // Set the base path correctly here
    },
  },
  ssr: false,  // Disable SSR if you're using static site generation
  build: {
    publicPath: '/beena-robotics/_nuxt/',  // Ensure that the assets are correctly referenced
  },
  css: ['~/assets/css/main.css'],  // Include your CSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
