<style>
    .mainContent{
        @apply min-h-screen container md:min-w-full mx-0 md:px-4 bg-cover w-full;
        background-image: url('https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/04/TRILHA_Heccus_LandingPagebackground.webp')
    }
    .logo{
        @apply px-10 py-5 ;
    }
    .logo img {
        @apply mx-auto md:h-48;
    }
    .mainText{
        @apply text-white p-5 text-center md:text-xl;
    }
    .mainText p{
        @apply my-4 leading-5;
    }
    .formSection{
        @apply flex flex-col md:flex-row items-center;
    }
    .ebookImage{
        @apply mx-auto flex-1 md:py-4;
    }
    .ebookImage img{
        @apply h-64 md:h-96 mx-auto;
    }
    .formArea{
        @apply px-5 w-full flex-1;
    }
    .footerImage{
        @apply p-5 mx-auto;
    }
    .footerImage img{
        @apply w-3/5 mx-auto md:h-96 md:w-auto;
    }
    .btn-whats{
        @apply text-purple-800 bg-white flex flex-row items-center mx-auto my-4 rounded px-4 py-2 divide-x divide-purple-400 ;
    }
    .btn-icon{
        @apply w-1/3 h-10 py-2;
    }
    .btn-text{
        @apply font-bold uppercase;
    }
    .footerLogo{
        @apply w-48 mx-auto py-10;
    }
</style>

<template>
    <div class="mainContent">

        <div class="logo">
            <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/04/TRILHA_Heccus_LandingPage_logoeHeccus.webp" alt="" srcset="">
        </div>

        <div class="mainText">
            <p>Conheça o equipamento que os profissionais de alta performance estão usando!</p>
            <p>Otimize seu tempo e realize mais de um tratamento no mesmo momento</p>
        </div>

        <div class="formSection">
            <div class="ebookImage">
                <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/04/TRILHA_Heccus_Landing_Page_Ebook.webp" alt="" srcset="">
            </div>
            <div class="formArea">
                <HeccusTurboForm />
            </div>
        </div>

        <div class="footerImage">
            <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/04/TRILHA_Heccus_LandingPageHeccus_valor.webp" alt="">

            <button class="btn-whats" @click="sendWhatsApp">
                <div class="btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413" clip-rule="evenodd"/></svg>
                </div>
                <div class="btn-text">
                    <h2>Quero falar com um especialista</h2>
                </div>

            </button>
        </div>

        <div class="footerLogo">
            <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/04/TRILHA_Heccus_Landing_Page_logoRental.webp" alt="" srcset="">
        </div>
    </div>
</template>

<script>

    export default{

        data(){
            return {
                title: '[EBOOK] Conheça o Heccus Turbo - RentalMed',
                description: 'Conheça o equipamento que os profissionais de alta performance estão usando!',
                keywords: 'Heccus Turbo RentalMed Ebook',
                url: 'https://rentalmed.com.br/heccusturbo',
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
        components:{},
    }
</script>



