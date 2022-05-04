<style>
    ul {
        @apply text-center;
    }

    li {
        @apply text-white bg-zinc-600 rounded my-2 py-2;
    }

</style>

<template>

    <div class="p-5 mx-auto bg-zinc-800 min-h-screen">

        <div class="bg-blue-800 px-4 rounded shadow">
            <h1 class=" text-center text-white text-3xl font-bold py-2">
                Páginas:
            </h1>
        </div>

        <ul>

            <NuxtLink to="/HeccusTurbo/">
                <li>
                    Heccus Turbo
                </li>
            </NuxtLink>

            <NuxtLink to="/RentalShop/">
                <li>
                    RentalShop
                </li>
            </NuxtLink>

            <NuxtLink to="/AssistenciaTecnica/">
                <li>
                    Assistência Técnica
                </li>
            </NuxtLink>

            <NuxtLink to="/CosmeticON/">
                <li>
                    CosmeticON
                </li>
            </NuxtLink>

        </ul>
    </div>

</template>

<script>

    export default{

        data(){
            return {
                title: '<DEV> Landing Pages <DEV>',
                description: 'Alessandro Pinheiro',
                keywords: 'Desenvolvimento LPS',
                url: 'https://rentalmed.com.br/',
                image: 'http://unsplash.it/300/300?random&gravity=center',
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    { charset: "utf-8" },
                    { name: "viewport", content: "width=device-width, initial-scale=1" },
                    { hid: "title", property: 'title', name: "title", content: this.title},
                    { hid: "description", property: 'description', name: "description", content: this.description},
                    { hid: "keywords", property: 'keywords', name: "keywords", content: this.keywords},

                    { hid: 'og-title', property: 'og:title', content: this.title },
                    { hid: 'og-description', property: 'og:description', content: this.description },
                    { hid: 'og-url', property: 'og:url', content: this.url },

                    { hid: 'og:image', property: 'og:image', content: this.image },
                    { hid: 'og:image:image:secure_url', property: 'og:image:image:secure_url', content: this.image },
                    { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
                    { property: 'og:image:width', content: "300" },
                    { property: 'og:image:height', content: "300" },

                    { hid: 'og-type', property: 'og:type', content: "website" },
                ]
            }
        },
        methods: {},
        components:{},
    }
</script>

