<style>
.slide {
  @apply border border-zinc-300 mx-auto text-center shadow rounded;
}

.btn {
  @apply bg-zinc-500 text-white px-4 py-2 rounded text-sm my-4;
}

.badge {
  @apply inline-flex items-center justify-center px-2 py-1 text-xs whitespace-nowrap font-bold bg-green-200 rounded;
}
.input-wrapper {
  @apply relative z-0 w-full mb-6 ;
}
.form-input{
  @apply block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 ;
}

.form-label{
  @apply peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6;
}
</style>

<template>
  <div>
    <div>
      <img src="http://unsplash.it/g/1080/1080?random&blur&gravity=center" alt="" />
    </div>

    <div class="text-center my-4 px-8">
      <h1 class="text-2xl font-bold">Assistência técnica em Florianópolis</h1>
      <p class="my-2">
        Assistência técnica de aparelhos para estética e fisioterapia, das
        principais marcas do mercado, conta com profissionais treinados,
        certificados e especializados em avaliação, revisão e reparo.
      </p>
    </div>

    <div class="text-center my-4 px-8">
      <h1 class="text-2xl font-bold">Como funciona?</h1>
    </div>

    <div class="mx-auto my-4">
      <ssr-carousel :slides-per-page="1" peek="10%" feather>
        <div class="slide">
          <div class="flex flex-row border-b">
            <div class="bg-zinc-300 py-4 px-6">1</div>
            <div class="py-4 mx-auto font-bold">Avaliação Técnica</div>
          </div>
          <div class="p-4">
            <p>
              Bacon ipsum dolor amet frankfurter shank shankle meatball tongue
              pancetta. Doner cow venison jowl. Salami bresaola venison
              pancetta, sirloin beef ribs sausage flank alcatra kielbasa ham
              strip steak. Capicola andouille turducken boudin fatback jerky.
            </p>
          </div>
        </div>
        <div class="slide">
          <div class="flex flex-row border-b">
            <div class="bg-zinc-300 py-4 px-6">2</div>
            <div class="py-4 mx-auto font-bold">Orçamento</div>
          </div>
          <div class="p-4">
            <p>
              Bacon ipsum dolor amet frankfurter shank shankle meatball tongue
              pancetta. Doner cow venison jowl. Salami bresaola venison
              pancetta, sirloin beef ribs sausage flank alcatra kielbasa ham
              strip steak. Capicola andouille turducken boudin fatback jerky.
            </p>
          </div>
        </div>
        <div class="slide">
          <div class="flex flex-row border-b">
            <div class="bg-zinc-300 py-4 px-6">3</div>
            <div class="py-4 mx-auto font-bold">Aprovação</div>
          </div>
          <div class="p-4">
            <p>
              Bacon ipsum dolor amet frankfurter shank shankle meatball tongue
              pancetta. Doner cow venison jowl. Salami bresaola venison
              pancetta, sirloin beef ribs sausage flank alcatra kielbasa ham
              strip steak. Capicola andouille turducken boudin fatback jerky.
            </p>
          </div>
        </div>
        <div class="slide">
          <div class="flex flex-row border-b">
            <div class="bg-zinc-300 py-4 px-6">4</div>
            <div class="py-4 mx-auto font-bold">Reparo</div>
          </div>
          <div class="p-4">
            <p>
              Bacon ipsum dolor amet frankfurter shank shankle meatball tongue
              pancetta. Doner cow venison jowl. Salami bresaola venison
              pancetta, sirloin beef ribs sausage flank alcatra kielbasa ham
              strip steak. Capicola andouille turducken boudin fatback jerky.
            </p>
          </div>
        </div>
      </ssr-carousel>
    </div>

    <div class="text-center my-4 px-8">
      <h1 class="text-2xl font-bold">Principais Serviços</h1>
    </div>

    <div class="mx-8 my-4 border border-gray-200 divide-y divide-gray-200 rounded">
      <details>
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Calibração de Equipamentos</summary>
        <div class="pt-1 pb-3 px-4">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

      <details>
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Manutenção e Reparo de Equipamentos
        </summary>
        <div class="pt-1 pb-3 px-4">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

      <details>
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Limpeza de Equipamentos</summary>
        <div class="pt-1 pb-3 px-4">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

      <details>
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Garantia</summary>
        <div class="pt-1 pb-3 px-4">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

    </div>

    <div class="border rounded flex flex-col mx-8 my-4">
      <div class="flex flex-row w-full bg-zinc-200 items-center justify-center py-2 mx-auto">

        <div class="">
          <h1 class="mx-auto font-bold">Assistência Técnica Multimarcas</h1>
        </div>
        <div class="w-5 h-5 mx-2 text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%"
            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="m6.7 19.3l-2.75-.6q-.375-.075-.6-.388q-.225-.312-.175-.687L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.687q.225-.313.6-.388l2.75-.6l1.45-2.45q.2-.325.55-.425q.35-.1.7.025l2.6 1.1l2.6-1.1q.35-.125.7-.025t.55.425L17.3 4.7l2.75.6q.375.075.6.388q.225.312.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.687q-.225.313-.6.388l-2.75.6l-1.45 2.45q-.2.325-.55.425q-.35.1-.7-.025l-2.6-1.1l-2.6 1.1q-.35.125-.7.025t-.55-.425Zm3.55-4.45q.275.275.7.275q.425 0 .7-.275l4.25-4.25q.3-.3.3-.713q0-.412-.3-.712t-.712-.3q-.413 0-.713.3L10.95 12.7L9.5 11.275q-.3-.275-.712-.263q-.413.013-.688.288q-.275.275-.275.7q0 .425.275.7Z" />
          </svg>
        </div>
      </div>

      <div class="flex flex-wrap w-full justify-center items-center gap-4 p-4">
        <div class="badge" v-for="brand in brands">
          <span>{{ brand.name }}</span>
        </div>
      </div>
    </div>

    <div class="mx-8 my-8 border rounded">
      <div class="text-center my-8">
        <h1 class="text-2xl font-bold">Entre em contato pelo WhatsApp</h1>
      </div>

      <form class="px-8 my-4">

        <div class="input-wrapper group">
          <input type="text" name="name" class="form-input peer" placeholder=" " required="">
          <label for="name" class="form-label">Nome Completo</label>
        </div>

        <div class="input-wrapper group">
          <input type="email" name="email" class="form-input peer" placeholder=" " required="">
          <label for="email" class="form-label">E-mail</label>
        </div>

        <div class="input-wrapper group">
          <input type="whatsapp" name="whatsapp" class="form-input peer" placeholder=" " required="">
          <label for="whatsapp" class="form-label">WhatsApp</label>
        </div>

        <div class="input-wrapper ">
          <label for="brands" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a marca do seu aparellho</label>
          <select id="brands" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option v-for="brand in brands">{{brand.name}}</option>>
          </select>
        </div>

        <button type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar
        </button>

      </form>

    </div>

    <div class="bg-zinc-800 h-48">

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
      brands: [
        { name: 'HTM Eletrônica' },
        { name: 'KLD Biosistemas' },
        { name: 'CECBRA' },
        { name: 'DGM Eletrônica' },
        { name: 'Ibramed' },
        { name: 'Alben Life' },
        { name: 'Beauty Spell' },
        { name: 'Bioset' },
        { name: 'Icone Medical' },
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
