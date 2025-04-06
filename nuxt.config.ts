export default defineNuxtConfig({
  app: {
    head: {
      title: 'Beena Robotics',
      charset: 'utf-8',
        link: [
        { rel: 'icon', type: 'image/png', href: '/logo/icon.png' }
      ]
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

  modules: ['@nuxtjs/sitemap','@vueuse/motion/nuxt'],
  sitemap: {
    hostname: "https://www.beenarobotics.com",
    gzip: true,
    routes: [
      '/',
      '/aboutus',
      '/awards',
      '/contactus',
      '/courses'
    ]
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  }
})