<script>
    import { Icon } from '@iconify/vue2'
    import { pix, qrcode } from '@klawdyo/pix.js'
    import TheHeading from '../../components/IbramedExperience/TheHeading.vue'
    import TheForm from '../../components/IbramedExperience/TheForm.vue'

export default {
    data() {
        return {
            pixcode: null,
            qrcode: null,
            copied: false,
            title: 'Participe do WorkShop Ibramed Experience - RentalMed',
            description: 'Você aprenderá todas as diversas possibilidades que o Laser de Diodo e a Luz Intensa Pulsada podem trazer à sua carreira',
            keywords: 'Laser de Diodo Luz Intensa Pulsada RentalMed WorkShop',
            url: 'https://lp.rentalmed.com.br/ibramed-experience',
            image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/Id-ibramed-experience.png',
        }
    },
    head() {
        return {
        title: this.title,
        meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'title', property: 'title', name: 'title', content: this.title },
                { hid: 'description', property: 'description', name: 'description', content: this.description, },
                { hid: 'keywords', property: 'keywords', name: 'keywords', content: this.keywords, },

                { hid: 'og-title', property: 'og:title', content: this.title },
                { hid: 'og-description', property: 'og:description', content: this.description, },
                { hid: 'og-url', property: 'og:url', content: this.url },

                { hid: 'og:image', property: 'og:image', content: this.image },
                { hid: 'og:image:image:secure_url', property: 'og:image:image:secure_url', content: this.image, },
                { hid: 'og:image:type', property: 'og:image:type', content: 'image/png', },

                { property: 'og:image:width', content: '300' },
                { property: 'og:image:height', content: '300' },

                { hid: 'og-type', property: 'og:type', content: 'website' },
            ]
        }
    },
    mounted(){
        // this.$ga.page(this.$router)
    },
    methods: {

    },
    components: { TheHeading, TheForm, Icon }
}

</script>

<template>
 <div class="w-full min-h-screen flex flex-col bg-ibramed-experience bg-cover font-metropolis justify-between">
    <div class="flex flex-col py-10 gap-4 px-5 w-full justify-center my-auto">
        <div class="flex flex-col md:flex-row max-w-3xl mx-auto items-center gap-8">

            <div class="md:w-1/3 m-auto flex flex-col items-center my-auto justify-center">
                <img src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/id-ibramed-experience.webp' alt='' class="w-1/2 md:w-full mx-auto"/>
                <div class="flex flex-col items-center text-white text-xs gap-2">
                    <p>REALIZAÇÃO</p>
                    <div class="flex flex-row justify-center items-center gap-2" >
                        <img src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/logo-ibramed.webp' alt='' class=" object-cover h-6"/>
                        <img src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/logo-rentalmed.webp' alt='' class="object-cover h-6"/>
                    </div>
                </div>
            </div>

            <div class="md:w-2/3 flex flex-col gap-2">
                <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/heading-1.webp" alt="" srcset="" class="mx-2">
                <div class="bg-purple-900/80 p-4 rounded-lg flex flex-col gap-4 my-4">

                    <IbramedExperienceNavigationMenu />

                </div>
            </div>

        </div>
    </div>

    <!-- footer -->
    <div class="bg-purple-900 py-10">
        <div class="flex flex-row justify-center items-center gap-2" >
            <img src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/logo-ibramed.webp' alt='' class=" object-cover h-10"/>
            <img src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/logo-rentalmed.webp' alt='' class="object-cover h-10"/>
        </div>
    </div>


 </div>
</template>

<style>
    .ibramed-experience-btn{
        @apply bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 uppercase font-bold mx-auto w-full text-center;
    }

</style>