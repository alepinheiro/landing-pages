<style>
    .body-rentalshop{
        @apply bg-cover min-h-screen bg-rentalshop;
    }

</style>

<template>

    <div class="body-rentalshop">

        <RentalShopTopBanner />


        <RentalShopMainContent />

        <RentalShopIconGroup />

        <RentalShopFooterLinks />
    </div>

</template>

<script>



    export default{

        data(){
            return {
                title: '[LIVE] A sua Live de Ofertas - RentalShop',
                description: 'As melhores ofertas de estética',
                keywords: 'RentalShop RentalMed Live',
                url: 'https://rentalmed.com.br/rentalshop',
                image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/04/TRILHA_Heccus_Landing_Page_Ebook.png',
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
        methods: {
            sendWhatsApp(){
                window.location.href = 'https://wa.me/5548985050350?text=Estou+na+Landing+Page+do+%2AHeccus+Turbo%2A+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+este+aparelho.'
            }
        },

    }
</script>