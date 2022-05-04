<style>
    .cosmeticon-btn{
        @apply bg-green-700 hover:bg-green-800 px-4 py-2 rounded text-white uppercase;
    }
</style>

<template>
    <div class="bg-white min-h-screen">

        <div class=" border-b-green-600 border-b-4">
            <img class="h-48 object-cover md:object-contain md:h-auto" src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/pagina-pos-evento_01.webp" alt="" srcset="">
        </div>

        <div class=" px-8 my-8 max-w-md mx-auto">
            <h1 class="text-center uppercase text-2xl">Pós Evento</h1>
            <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/pagina-pos-evento_05.webp" alt="" srcset="">
        </div>

        <div class="flex flex-col md:flex-row gap-4 w-fit mx-auto my-20">
            <button class="cosmeticon-btn"> Fotos Evento</button>
            <button class="cosmeticon-btn"> Gere seu certificado</button>
            <button class="cosmeticon-btn"> Pesquisa de satisfação</button>
        </div>

        <div class="flex flex-row px-8 mx-auto w-full justify-center">
            <img class="h-24" src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/pagina-pos-evento_09.webp" alt="" srcset="">
            <img class="h-24" src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/pagina-pos-evento_12.webp" alt="" srcset="">
        </div>

        <div class="flex flex-col mx-auto">
            <h1 class="text-center uppercase my-4"><strong>Próximos</strong> eventos</h1>
            <div class="flex flex-row flex-wrap mx-auto justify-center gap-4 px-8 ">
                <div v-for="event in events" class="flex flex-col items-center justify-between">
                    <img class="h-20 w-20 mx-auto rounded-full" :src="event.image" alt="" srcset="">
                    <p class="text-center w-20 break-words font-bold">{{event.name}}</p>
                    <p class="text-center text-sm">{{event.date}}</p>
                </div>
            </div>
        </div>

        <div class="mt-20">
            <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/pagina-pos-evento_01.webp" alt="" srcset="">
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
            image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/pagina-pos-evento_19.webp'
        },{
            name: 'Ibramed Experience',
            date: '09  de julho',
            image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/pagina-pos-evento_20.webp'
        },{
            name: 'Congresso Nany Mota',
            date: '27 de agosto',
            image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/pagina-pos-evento_21.webp'
        },{
            name: 'HTM Scientific',
            date: '17 e 18 de setembro',
            image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/pagina-pos-evento_23.webp'
        },{
            name: 'Revela Estética',
            date: '30 de outubro',
            image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/pagina-pos-evento_25.webp'
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
