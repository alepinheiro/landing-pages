export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  //gera arquivos somente destes locais
  generate: {
    routes: ['/RentalShop/'],
    routes: ['/HeccusTurbo/'],
  },

  router: {
    base: '/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'landing-page',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=yes' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        type:'text/javascript',
        async: true,
        //src: "https://d335luupugsy2.cloudfront.net/js/loader-scripts/1bd8e36c-12a1-4e87-98f7-690ec23e057e-loader.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-the-mask.js',
    '~/plugins/axios.js',
    '~/plugins/gtag',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',

    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',

    //https://github.com/uNmAnNeR/imaskjs/tree/master/packages/vue-imask
    '@nuxtjs/composition-api/module',

    //https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',

    //https://github.com/BKWLD/vue-ssr-carousel
    'vue-ssr-carousel/nuxt',
  ],

  googleFonts: {
    families: {
      Outfit: true
    }
  },
  tailwindcss: {
    jit: true
  },
  googleAnalytics: {
    id: 'UA-108335612-1'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/http',

    //https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module
    ['nuxt-facebook-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: '873102426546485',
      autoPageView: true,
      disabled: false
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
