<script setup>
    import { Icon } from '@iconify/vue2'
</script>

<script>

    export default {
        data: function(){
            return {
                title: 'Técnicas de Harmonização Corporal - HTM Training - rentalmed',
                description: 'Técnicas de Harmonização Corporal e Lipo 3D',
                keywords: 'RentalMed WorkShop HTM harmonizaçao corporal',
                url: 'https://lp.rentalmed.com.br/htm-training',
                image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/06/workshop-emily-santos-featured-image.jpg',
                timeTable: [{
                    time: '08h45',
                    content: 'Abertura'
                },{
                    time: '09h00',
                    content: 'Lipo 3D não invasiva com os recursos de lipocavitação, ultracavitação e ativação da metabolização com eletroterapia associada a exercícios ativos'
                },{
                    time: '10h30',
                    content: 'Intervalo'
                },{
                    time: '11h00',
                    content: 'Prática'
                },{
                    time: '12h00',
                    content: 'Almoço'
                },{
                    time: '14h00',
                    content: 'Harmonização corporal com Criolipólise - Teoria e Prática'
                },{
                    time: '16h30',
                    content: 'Coquetel'
                },{
                    time: '17h00',
                    content: 'Sorteios e encerramento'
                },]
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
                    { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpg' },
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

        <!-- cabecalho -->
        <div class=" bg-gradient-to-tr from-purple-300 to-pink-300 w-full ">
            
            <div class="flex flex-col md:flex-row md:items-center md:justify-between px-5 py-6 gap-3 max-w-7xl m-auto">

                <div class="flex flex-row gap-2 w-3/4">
                    <div class="w-1 bg-white"></div>
                    <div class="flex flex-col items-start w-full h-full">
                        <img src="/htm-training/header-logo-htm.png" alt="" srcset="" class="h-10 object-contain mb-2">
                        <img src="/htm-training/header-logo-training.png" alt="" srcset="" class="h-12 object-contain bg-blend-overlay">
                        
                    </div>
                </div>

                <div class="text-white md:text-center">
                    <p>17 de setembro</p>
                    <p>Florianópolis - SC</p>
                </div>

            </div>
        </div>

        <div class="flex flex-col md:flex-row max-w-5xl m-auto md:justify-between md:items-center">

            <!-- secao principal -->
            <div class="px-5 py-6 flex flex-col gap-3 md:w-3/5">

                <h1 class="font-bold text-xl">Venha conhecer na prática:</h1>

                <div class="flex flex-col md:flex-row md:items-end gap-4">
                
                    <div class="flex flex-col gap-2">
                        <h2><strong>Harmonização corporais</strong> com</h2>
                        <span class="font-black text-5xl text-roxo-primary">Criolipólise</span>
                    </div>

                    <span class="font-black text-5xl text-rosa-primary">+</span>

                    <div class="flex flex-col gap-2">
                        <h2><strong>Técnica não invasiva</strong> de</h2>
                        <span class="font-black text-5xl text-roxo-primary">Lipo 3D</span>
                    </div>
                
                </div>
                
                <p>com os recursos de <strong>lipocavitação, ultracavitação</strong> e ativação da <strong>metabolização</strong> com <strong>eletroterapia</strong> associada a exercícios ativos.</p>
            </div>


            <!-- formulario -->
            <div ref="subscribe" class="px-5 py-6 flex flex-col gap-3 md:w-2/5">
                <HtmTrainingForm />
            </div>

        </div>
        <!-- corpo docente -->
        
        <div class="px-5 py-6 flex flex-col md:items-center max-w-5xl m-auto">

            <h2 class="text-2xl font-bold mb-6">Conheça as suas professoras</h2>

            <div class="flex flex-col md:flex-row gap-4">

                <div class="px-5 py-6 flex flex-col gap-3 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-xl items-center flex-1">
                    <img class="w-24 h-24 rounded-full shadow-lg shadow-pink-600/40" src='/htm-training/renata.png' alt=''/>
                    <h3 class="w-full text-xl font-bold text-center">Ft. Esp. Renata Taylor</h3>
                    <ul class="list-disc list-inside text-center gap-3 flex flex-col">
                        <li>Fisioterapeuta graduada pela Universidade São Francisco;</li>
                        <li>Pós-graduada em Fisioterapia Dermato Funcional pela Universidade Metodista de Piracicaba;</li>
                        <li>Professora em cursos de pós graduação em gisioterapia dermato funcional e cursos técnicos em estética e eletrocosmética;</li>
                        <li>Fisioterapeuta consultora comercial sênior na HTM;</li>
                    </ul>
                </div>

                <div class="px-5 py-6 flex flex-col gap-3 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-xl items-center flex-1">
                    <img class="w-24 h-24 rounded-full shadow-lg shadow-pink-600/40" src='/htm-training/adrielle.png' alt=''/>
                    <h3 class="w-full text-xl font-bold text-center">Ft. Esp. Adrielle Cazotti</h3>
                    <ul class="list-disc list-inside text-center gap-3 flex flex-col">
                        <li>Fisioterapeuta graduada pela Universidade Federal de São Carlos;</li>
                        <li>Pós-graduada pelo Programa de Residência Multiprofissional em Gestão Integrada de Serviços de Saúde do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo;</li>
                        <li>Consultora Comercial Pleno na HTM;</li>
                    </ul>
                </div>

            </div>
        </div>

        <!-- local & data -->
        <div class=" text-white bg-roxo-primary">

            <div class="px-5 py-6 flex flex-col md:flex-row items-center md:justify-center gap-1 max-w-5xl m-auto">

                <div class="flex flex-col w-fit itens-center gap-1 p-4">
                    <Icon icon="akar-icons:calendar" height="100%" class="w-12 mx-auto" />
                    <h3 class="text-lg font-bold text-center mt-2">Data: 17/09/2022</h3>
                    <p class="text-center">Carga Horária: 06h</p>
                </div>

                <div class="flex flex-col w-fit itens-center gap-1 p-4">
                    <Icon icon="bx:map" height="100%" class="w-12 mx-auto" />
                    <h3 class="text-lg font-bold text-center mt-2">Local: rentalmed</h3>
                    <p class="text-center">Cidade: Florianópolis/SC</p>
                </div>

            </div>

        </div>
        
        <div class="px-5 py-6 flex flex-col items-center gap-2 max-w-5xl m-auto">

            <h3 class="text-2xl font-bold text-roxo-primary tracking-widest">Chegue na frente!</h3>
            <p>garanta sua vaga agora mesmo!</p>
            <p>apenas</p>
            <h3 class="text-4xl font-bold text-rosa-primary ">R$ 187</h3>
            <p class="text-2xl font-bold text-roxo-primary uppercase">vagas limitadas!</p>
            <button 
            @click="scrollTo"
            class="w-fit items-center justify-center text-white bg-verde-primary hover:bg-green-600 hover:scale-110 transition-all rounded-full text-center py-3 px-8 font-black leading-tight">
                quero me inscrever
            </button>

        </div>

        <!-- timetable -->
        <div class=" bg-roxo-primary text-white">
            <div class=" px-5 py-6 flex flex-col gap-3 md:w-2/5 m-auto">
                <h3 class="text-2xl font-bold md:text-center">Conteúdo Programático:</h3>
                <div v-for="i in timeTable" class="flex flex-row w-full">
                    <div class="w-1/4 m-auto">
                        <p>{{i.time}}</p>
                    </div>
                    <div class="w-3/4">
                        <p>{{i.content}}</p>
                    </div>
                </div>
            </div>

        </div>

        <!-- footer -->
        <div class="px-5 py-6 flex flex-col items-center gap-2 text-white bg-gradient-to-tr from-purple-300 to-pink-300">

            <p>Realização</p>
            <div class="flex flex-row w-1/2 gap-2 md:gap-8 items-center md:justify-center">
                <div class="w-full md:w-fit ">
                    <img src="/htm-training/footer-logo-rentalmed.png" alt="" class="md:h-14" >
                </div>
                <div class="w-full md:w-fit ">
                    <img src="/htm-training/footer-logo-htm.png" alt="" class="md:h-14" >
                </div>

                
            </div>

        </div>

    </div>

</template>

<style>



</style>