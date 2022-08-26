<script setup>
    import { Icon } from '@iconify/vue2'
</script>

<script>

    export default {
        middleware: 'redirect',
        data: function(){
            return {
                title: 'Como ser um expert em intradermoterapia pressurizada de alta performance - rentalmed',
                description: 'Curso presencial com Pablo Acácio',
                url: 'https://lp.rentalmed.com.br/curso-de-intradermoterapia-pressurizada',
                image: '/cip/content-pablo-acacio.png',
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
        },
        mounted(){
            // this.$ga.page(this.$router)
        },
    }

</script>
<template>
<div class="font-outfit">

    <!-- header -->
    <section class="bg-pa-azul overflow-hidden px-5">
        <div class="w-full md:max-w-3xl mx-auto relative ">
            <div class="absolute overflow-hidden flex -right-20 -bottom-24">
                <img class="h-96 md:h-auto" src="/cip/header-pablo-acacio.png" alt="">
            </div>
            <div class="flex flex-col md:items-start  pt-11 pb-10 gap-6">
                <div class=" text-white flex flex-col gap-4">
                    <h1 class="pa-title-xl">seja um expert em <br class="hidden md:block"> <span class="text-roxo-primary">intradermoterapia <br class="hidden md:block">pressurizada</span></h1>
                    <h2 class="pa-title-lg">de alta performance</h2>
                </div>
                <div class="bg-rosa-primary/20 text-white py-2 px-6 rounded-full md:w-full">
                    <h2 class="pa-title-lg">curso presencial<br class="md:hidden"> com Pablo Acácio</h2>
                </div>
                <div class="m-auto md:m-0 z-10">
                    <button class="pa-btn-subscribe" @click="scrollTo" >quero me inscrever</button>
                </div>
            </div>
        </div>
    </section>

    <!-- local e data -->
    <section class="bg-rosa-primary py-8 px-5">
        <div class="w-full md:max-w-3xl mx-auto relative text-white flex flex-col md:flex-row gap-4 text-2xl font-bold font-outfit justify-between">
            <div class="flex flex-row gap-4 items-center w-full">
                <div class="w-16">
                    <Icon icon="ic:outline-calendar-month" height="100%" />
                </div>
                <h2>11 e 12 de setembro</h2>
            </div>
            <div class="flex flex-row gap-4 items-center w-full">
                <div class="w-16">
                    <Icon icon="bx:map" height="100%" />
                </div>
                <h2 >rentalmed | <span class="font-normal"> Florianópolis</span></h2>
            </div>
        </div>
    </section>

    <!-- conteudo -->
    <section class="bg-roxo-primary  text-white py-8 px-5 pa-content-section">
        <div class="flex flex-col gap-8 max-w-3xl mx-auto">
            <h1 class="text-5xl font-black">o que você vai aprender</h1>
            <div class="flex flex-col md:flex-row gap-6">

                <div class="bg-white/20 p-5 rounded-3xl gap-4 flex flex-col flex-1">
                    <h2 class="text-3xl font-semibold">protocolos <span class="text-rosa-primary">faciais</span></h2>
                    <div class="h-1 bg-rosa-primary w-3/4"></div>
                    <ul class="text-xl">
                        <li>labial;</li>
                        <li>rinomodelação;</li>
                        <li>nasogeniano;</li>
                        <li>zigomático;</li>
                        <li>mento;</li>
                        <li>mandíbula;</li>
                        <li>malar;</li>
                        <li>capilar e barba;</li>
                        <li>hipercromias por HPI;</li>
                        <li>melasmas;</li>
                        <li>top press harmony;</li>
                        <li>skinbooster;</li>
                        <li>cicatrizes de acne;</li>
                        <li>gordura submentoniana;</li>
                        <li>flacidez e redencificação facial;</li>
                        <li>rejuvenescimento de pescoço e colo.</li>
                    </ul>
                </div>

                <div class="bg-white/20 p-5 rounded-3xl gap-4 flex flex-col flex-1">
                    <h2 class="text-3xl font-semibold">protocolos <span class="text-pa-azul">corporais</span></h2>
                    <div class="h-1 bg-pa-azul w-3/4"></div>
                    <ul class="text-xl">
                        <li>estrias vermelhas;</li>
                        <li>estrias brancas;</li>
                        <li>fibroedemagelóide;</li>
                        <li>glúteos up total;</li>
                        <li>monte de vênus;</li>
                        <li>grandes lábios;</li>
                        <li>clareamento de virilha e axilas, flacidez, redução de medidas;</li>
                        <li>braços e pernas;</li>
                        <li>clareamento de lentigens e rejuvenescimento das mãos;</li>
                        <li>definição e flacidez abdominal;</li>
                        <li>gordura localizada (região do sutiã, costas, flancos, culote, região da bananinha, interno da coxa, peitoral masculino);</li>
                        <li>afinamento de cintura e despigmentação de HPI corporal.</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    <!-- bonus -->
    <section class="bg-rosa-primary py-8 px-5 text-white pa-content-section">
        <div class="flex flex-col md:flex-row gap-8 max-w-3xl mx-auto md:items-center">
            <h1 class="text-5xl font-black flex-1 text-center">+ bônus</h1>
            <ul class="text-xl flex-1">
                <li>técnicas de microagulhamento;</li>
                <li>taping voltado aos injetáveis;</li>
                <li>ledterapia;</li>
                <li>radiofrequência;</li>
                <li>ultrassom 1 e 3 MHZ.</li>
            </ul>
        </div>
    </section>

    <!-- corpo docente -->
    <section class="bg-pa-cinza py-8 px-5">
        <div class="flex flex-col md:flex-row gap-8 max-w-3xl mx-auto md:items-center">
            <img src="/cip/content-pablo-acacio.png" alt="" class="w-3/4 md:w-full mx-auto">
            <div class="flex flex-col gap-4 w-full" >
                <h1 class="text-4xl font-black text-roxo-primary">conheça o professor</h1>
                <h2 class="font-bold">Pablo Acácio</h2>
                <p>Esteticista, cosmetólogo e massoterapeuta;
                <br>
                <br>
                Especialista em harmonização corporal e facial das técnicas injetáveis;
                <br>
                <br>
                Graduando em biomedicina</p>
            </div>
        </div>
    </section>

    <!-- inclusos -->
    <section class="py-8 px-5">
        <div class="flex flex-col md:flex-row-reverse gap-8 max-w-3xl mx-auto md:items-center text-roxo-primary">
            <h1 class=" text-5xl font-black w-3/4 md:text-right w-full">o que oferecemos <span class="font-medium">com o curso</span></h1>
            <div class="grid grid-flow-col grid-rows-4 text-xl gap-4 w-full">
                <p>welcome coffe</p>
                <p>coffee break</p>
                <p>certificado</p>
                <p>mentoria pós curso para dúvidas</p>
                <p>apostila online</p>
                <p>brindes e sorteios</p>
                <p>material de apoio para execução das práticas durante o curso</p>
            </div>
        </div>
    </section>

    <!-- carga horária -->
    <section ref="subscribe" class="py-8 px-5 bg-rosa-primary">
        <div class="flex flex-col md:flex-row gap-8 max-w-3xl mx-auto ">
            <div class="flex-1 flex flex-col gap-8 w-full text-white">
                <h1 class=" text-5xl font-black w-3/4 leading-relaxed">seja um expert em 2 dias de curso</h1>
                <p class="text-xl">das 08:00 às 20:00</p>
            </div>
            <div class="flex-1 w-full">
                <CipPabloSubscribeForm />
            </div>
        </div>
    </section>

    <!-- footer -->
    <section class="py-8 px-5 bg-roxo-primary ">
        <a href="https://www.rentalmed.com.br">
            <img src="/logo-rentalmed.svg" alt="" class="h-10 mx-auto logo-rentalmed">
        </a>

    </section>
</div>
</template>

<style>
    .pa-title-xl {
        @apply font-outfit font-black text-4xl;
    }
    .pa-title-lg {
        @apply font-outfit font-bold text-xl;
    }
    .pa-btn-subscribe {
        @apply bg-roxo-primary hover:scale-125 rounded-3xl font-bold text-white hover:shadow-lg font-outfit tracking-wider py-3 px-8 transition-all;
    }
    .pa-content-section li{
        @apply mb-2
    }
    .logo-rentalmed {
        filter: invert(100%);
    }
</style>