<style>

    body {
      @apply bg-white;
    }

</style>

<template>
    <div>


        <HomeRentalMedTheHeader />

        <div class="">
          <img class="object-cover min-w-full" src='http://unsplash.it/1000/500?random&gravity=center' alt=''/>
        </div>
        <div>
            content
        </div>
        <div>
            footer
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Assistência Técnica para esteticistas - RentalMed',
      description:
        'Conheça o equipamento que os profissionais de alta performance estão usando!',
      keywords: 'Heccus Turbo RentalMed Ebook',
      url: 'https://rentalmed.com.br/heccusturbo',
      image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/04/TRILHA_Heccus_Landing_Page_Ebook.png',
      brands: [],
    }
  },
  mounted(){
    this.$ga.page('/' + this.$route.name)
  },
  head() {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', property: 'title', name: 'title', content: this.title },
        {
          hid: 'description',
          property: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'keywords',
          property: 'keywords',
          name: 'keywords',
          content: this.keywords,
        },

        { hid: 'og-title', property: 'og:title', content: this.title },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.description,
        },
        { hid: 'og-url', property: 'og:url', content: this.url },

        { hid: 'og:image', property: 'og:image', content: this.image },
        {
          hid: 'og:image:image:secure_url',
          property: 'og:image:image:secure_url',
          content: this.image,
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/png',
        },
        { property: 'og:image:width', content: '300' },
        { property: 'og:image:height', content: '300' },

        { hid: 'og-type', property: 'og:type', content: 'website' },
      ],
    }
  },
  methods: {
    sendWhatsApp() {
      window.location.href =
        'https://wa.me/5548985050350?text=Estou+na+Landing+Page+do+%2AHeccus+Turbo%2A+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+este+aparelho.'
    },
    closeTab() {

    },
  },
  components: {},
}
</script>
