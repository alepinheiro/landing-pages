// import Vue from 'vue';
// import VueGtag from 'vue-gtag';

// Vue.use(VueGtag, {
//     config: { id: 'UA-108335612-1' },
//     appName: 'VUE_DEVELOPMENT_RENTALMED',
// });

// init_gtag.js
import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default (context, inject) => {
  Vue.use(
    VueGtag,
    {
        config: { id: 'UA-108335612-1' },
    //   bootstrap: false, // load on consent
    },
    context.app.router
  )

  inject('gtag', Vue.$gtag) // this is the most important line to get gtag in nuxt-content
}