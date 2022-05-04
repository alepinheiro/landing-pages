<style>
    .cosmeticon-btn{
        @apply bg-green-700 px-4 py-2 rounded text-white uppercase;
    }
</style>

<template>
    <div class="bg-white min-h-screen">

        <div class=" border-b-green-600 border-b-4">
            <img class="h-48 object-cover md:object-contain md:h-auto" src="@/static/cosmeticON/página-pós-evento_01.png" alt="" srcset="">
        </div>

        <div class=" px-8 my-8 max-w-md mx-auto">
            <h1 class="text-center uppercase text-2xl">Pós Evento</h1>
            <img src="@/static/cosmeticON/página-pós-evento_05.png" alt="" srcset="">
        </div>

        <div class="flex flex-col md:flex-row gap-4 w-fit mx-auto my-20">
            <button class="cosmeticon-btn"> Fotos Evento</button>
            <button class="cosmeticon-btn"> Gere seu certificado</button>
            <button class="cosmeticon-btn"> Pesquisa de satisfação</button>
        </div>

        <div class="flex flex-row px-8 mx-auto w-full justify-center">
            <img class="h-24" src="@/static/cosmeticON/página-pós-evento_09.png" alt="" srcset="">
            <img class="h-24" src="@/static/cosmeticON/página-pós-evento_12.png" alt="" srcset="">
        </div>

        <div class="flex flex-col mx-auto">
            <h1 class="text-center uppercase my-4"><strong>Próximos</strong> eventos</h1>
            <div class="flex flex-row mx-auto justify-center gap-4">
                <div v-for="event in events" class="break-words">
                    <img class="h-20 w-20 mx-auto rounded-full" :src="event.image" alt="" srcset="">
                    <p class="text-center w-20">{{event.name}}</p>
                </div>
            </div>
        </div>

        <div class="mt-20">
            <img src="@/static/cosmeticON/página-pós-evento_01.png" alt="" srcset="">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'CosmeticON - RentalMed',
      description: '01/05/2022',
      keywords: 'Heccus Turbo RentalMed Ebook',
      url: 'https://rentalmed.com.br/cosmeticON',
      image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/04/TRILHA_Heccus_Landing_Page_Ebook.png',
      events: [
        {
            name: 'Estética In Sul',
            date: '25 a 27 de junho',
            image: 'http://unsplash.it/600/600?random=1&gravity=center'
        },{
            name: 'Ibramed',
            date: '25 a 27 de junho',
            image: 'http://unsplash.it/600/600?random=2&gravity=center'
        },{
            name: 'Roxo',
            date: '25 a 27 de junho',
            image: 'http://unsplash.it/600/600?random=3&gravity=center'
        },{
            name: 'HTM',
            date: '25 a 27 de junho',
            image: 'http://unsplash.it/600/600?random=4&gravity=center'
        },{
            name: 'Revela Estética',
            date: '25 a 27 de junho',
            image: 'http://unsplash.it/600/600?random=5&gravity=center'
        },

      ],
    }
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
