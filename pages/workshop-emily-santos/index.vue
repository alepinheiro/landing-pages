<script setup>
    import { Icon } from '@iconify/vue2'
import Card from '~/components/WorkshopGluteos/Card.vue';
import Form from '~/components/WorkshopGluteos/Form.vue';

</script>

<script>

    export default {
        data: function(){
            return {
                title: 'Workshop de glúteos - RentalMed',
                description: 'Alessandro Pinheiro',
                keywords: 'Protocolos exclusivos para turbinar glúteos',
                url: 'https://lp.rentalmed.com.br/workshop-emily-santos',
                image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/06/workshop-emily-santos-featured-image.png',
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
            scrollTo: function () {
                this.$refs['subscribe'].scrollIntoView({
                    behavior: "smooth"
                })
            }
        }
    }

</script>

<template>
    <div class="font-outfit">

        <div class="bg-gradient-to-b to-[#0abcdc] from-[#7800ff] bg-violet-100 w-full md:h-96">

            <div class="w-full md:max-w-6xl mx-auto flex h-full flex-col-reverse md:flex-row items-center">

                <div class="main-banner ">
                    <h1 class="text-h1">Workshop de glúteos</h1>
                    <h2 class="text-h2">Venha conhecer na prática</h2>
                    <p>Protocolos exclusivos para turbinar glúteos</p>
                    <button
                        @click="scrollTo"
                        class="btn-workshop-glu"
                    >
                    quero ir no workshop
                    </button>
                </div>

                <div class="md:w-1/2 w-full">
                    <img
                        src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/06/imgworkshopgluteos.png'
                        alt=''
                        class="h-full object-cover w-full"
                    />
                </div>
            </div>

        </div>


        <div class="max-w-6xl my-8 px-5 md:w-8/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

            <Card
                :icon="'fluent:calendar-ltr-28-regular'"
                :text="'23 de julho de 2022'"
            />
            <Card
                :icon="'bytesize:clock'"
                :text="'das 09h às 13h'"
            />
            <Card
                :icon="'ep:map-location'"
                :text="'Rentalmed Florianópolis/SC'"
            />
            <Card
                :icon="'fluent:ticket-diagonal-24-regular'"
                :text="'Investimento   R$49,90'"
            />
        </div>

        <div class="full-section">
            <button
                @click="scrollTo"
                class="btn-workshop-glu mx-auto"
            >
            quero ir no workshop
            </button>
        </div>

        <div class="max-w-6xl flex flex-col-reverse md:flex-row h-full my-8 bg-violet-100 mx-5 md:mx-auto rounded-lg">

            <div class="w-full md:w-1/2 px-6 pb-5 my-auto h-full">
                <ul class="list-disc list-inside">
                    <li>
                        Doutoranda em Saúde e Meio Ambiente pelo Programa de Pós-graduação em Saúde e Meio Ambiente da FURJ/Univille;
                    </li>
                    <li>
                        Mestre em Saúde e Meio Ambiente pelo Programa de Pós-Graduação em Saúde e Meio Ambiente da FURJ/Univille;
                    </li>
                    <li>
                        Especialista em Farmácia Estética pelo Núcleo de Especializações Ana Carolina Puga – NEPUGA;
                    </li>
                    <li>
                        Bacharel em Farmácia pela Universidade da Região de Joinville – Univille;
                    </li>
                    <li>
                        Técnica em Gestão Empreendedora pela Sociedade Educacional de Santa Catarina – Unisociesc;
                    </li>
                    <li>
                        Docente das disciplinas de Fisiopatologia; Cosmetologia Clínica; Estética; Bases da Cosmetologia na Unisociesc e Instituto Mix, a níveis de graduação e profissionalizante;
                    </li>
                    <li>
                        Consultora Técnico/Científica da Biometikal – Dermocosméticos Estéreis;
                    </li>
                    <li>
                        Pesquisadora em Dermatogenética na FURJ/Univille;
                    </li>
                </ul>
            </div>

            <div class="w-full md:w-1/2 flex flex-col h-full py-5 items-center gap-5">
                    <img
                        src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/06/professora.png'
                        class="h-fit md:h-96 w-3/4 object-cover rounded shadow bg-gradient-to-b to-[#0abcdc] from-[#7800ff]"
                        alt=''

                    />
                <p class="font-bold">Dra. Emily dos Santos</p>
            </div>
        </div>

        <div class="max-w-6xl flex flex-col md:flex-row h-full my-8 bg-gradient-to-b to-[#0abcdc] from-[#7800ff] mx-5 md:mx-auto rounded-lg items-center">
            <div class="main-banner">
                <h1 class="text-h1">Workshop de glúteos</h1>
                <h2 class="text-h2">Venha conhecer na prática</h2>
                <p>Protocolos exclusivos para turbinar glúteos</p>
                <p>Data: 23/07/2022 - 09h às 13h</p>
                <p>Local: RentalMed - Florianópolis / SC</p>

            </div>
            <div class="w-full md:w-1/2 flex flex-col items-center py-5 " ref="subscribe">
                <h2 class="text-2xl font-semibold uppercase mx-auto text-white">Garanta jÁ sua vaga</h2>
                <Form  />
            </div>
        </div>

        <div class=" bg-gradient-to-b to-[#0abcdc] from-[#7800ff] ">
            <p class="text-white uppercase text-sm text-center pt-4">Realização</p>
            <div class="mx-auto">
                <img
                    class="h-24 mx-auto"
                    src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/06/workshop-emily-santos-logos-footer.png"
                    alt=""
                    srcset=""
                >
            </div>
            <div class=" flex flex-row gap-4 mx-auto text-white text-sm justify-center py-4">
                <a href="" class="flex flex-row w-fit bg-zinc-900/60 hover:bg-zinc-900/70 items-center rounded px-6 py-2 gap-2">
                    <div class="w-4 h-4 ">
                        <Icon icon="akar-icons:whatsapp-fill" height="100%"/>
                    </div>
                    <span>Suporte</span>
                </a>
                <a href="" class="flex flex-row w-fit bg-zinc-900/60 hover:bg-zinc-900/70 items-center rounded px-6 py-2 gap-2">
                    <div class="w-4 h-4 ">
                        <Icon icon="ci:mail" height="100%"/>
                    </div>
                    <span>Suporte</span>
                </a>
            </div>
        </div>


    </div>
</template>

<style>

    .full-section {
        @apply max-w-6xl mx-auto flex h-full;
    }

    .main-banner {
        @apply w-full md:w-1/2 my-auto flex flex-col p-5  gap-2 md:items-start items-center text-white;
    }

    .text-h1 {
        @apply text-4xl font-bold uppercase text-center md:text-left;
    }

    .text-h2 {
        @apply text-2xl uppercase text-center md:text-left;
    }

    .btn-workshop-glu {
        @apply bg-purple-600 hover:bg-purple-700 py-2 px-8
         text-white rounded-full uppercase transition-all
          hover:shadow-lg hover:shadow-purple-800/20;
    }

</style>