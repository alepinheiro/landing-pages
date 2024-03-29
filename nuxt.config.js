export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: true,

  //gera arquivos somente destes locais
  // generate: {
  //   routes: ['/AssistenciaTecnica'],
  //   routes: ['/HeccusTurbo/'],
  // },

  router: {
    base: '/'
  },

  pwa: {
    icon: {
      /* icon options */
    },
    meta: {
      appleStatusBarStyle: 'black-translucent',
      name: 'rentalmed',
      author: 'rentalmed',
      description: 'Aparelhos de estética em até 60X',
      theme_color: '#7800FF',
      lang: 'pt-BR',
      ogHost: 'rentalmed.com.br',
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rentalmed',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    // meta: [
    //   { charset: 'utf-8' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { hid: 'description', name: 'description', content: '' },
    //   { name: 'format-detection', content: 'telephone=yes' },
    // ],
    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
    script: [
      // {
      //   type:'text/javascript',
      //   async: true,
      //   src: "https://d335luupugsy2.cloudfront.net/js/loader-scripts/1bd8e36c-12a1-4e87-98f7-690ec23e057e-loader.js",
      // },
      // {
      //   type:'text/javascript',
      //   async: true,
      //   src: "https://www.googletagmanager.com/gtag/js?id=G-WV2CGB0X1H",
      // },
      // {
      //   type:'text/javascript',
      //   async: true,
      //   src: "https://www.googletagmanager.com/gtag/js?id=G-KFTYYT12VY",
      // },
      
      {
        innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag(` + 'js' + `, new Date());
        gtag(` + 'config' + `, ` + 'G-KFTYYT12VY' + `);`
      },{
        src: 'js/facebook-pixel.js', type: 'text/javascript'
      }, {
        src: 'js/gtm.js', type: 'text/javascript'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],


  // env: {
  //   /** Configuración de google-analytics */
  //   gaId: '320357997',
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-the-mask.js',
    '~/plugins/axios.js',
    // '~/plugins/gtag',
    // '~/plugins/vue-the-mask.js',
    // '~/plugins/vue-gtag.client.js',
    // '~/plugins/vue-gtag.server.js',
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
    // '@nuxtjs/google-analytics',

    //https://github.com/BKWLD/vue-ssr-carousel
    'vue-ssr-carousel/nuxt',

    // '@nuxtjs/google-analytics',


    // https://pwa.nuxtjs.org/setup
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/http',
    // '@nuxtjs/google-analytics',
    '@nuxtjs/google-gtag',

    //https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module
    ['nuxt-facebook-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: '873102426546485',
      autoPageView: true,
      disabled: false
    }],
  ],

  'google-gtag':{
    id: 'G-KFTYYT12VY',
    config:{
      send_page_view: false,
    },
    debug: true,
  },

  googleFonts: {
    families: {
      Outfit: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  tailwindcss: {
    jit: true
  },
  // googleAnalytics: {
  //   id: '320357997',
  //   autoTracking: {
  //     screenview: true
  //   },
  //   debug: {
  //     enabled: true
  //   }
  // },



  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: "0.0.0.0",
    port: 3000
  }
}
