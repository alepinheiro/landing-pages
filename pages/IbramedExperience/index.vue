<script>

    import { Icon } from '@iconify/vue2'
    import { pix, qrcode } from '@klawdyo/pix.js'
    import TheHeading from '../../components/IbramedExperience/TheHeading.vue'
    import TheForm from '../../components/IbramedExperience/TheForm.vue'

export default {
    data: function () {
        return {
            pixcode: null,
            qrcode: null,
            copied: false,
        }
    },
    methods: {
        getQrCode: async function (data){
            this.qrcode = await qrcode({
                key: '+5547999493409',
                name: data.name,
                city: data.city,
                txId: data.phone.slice(data.phone.length - 4, data.phone.length ),
                amount: 0.99,
                description: 'WorkShop RentalMed 09/07/22',
            })

            console.log(data)


        },
        getPixCode: async function (data){
            this.pixcode = await pix({
                key: '+5547999493409',
                name: data.name,
                city: data.city,
                txId: data.phone.slice(data.phone.length - 4, data.phone.length ),
                amount: 0.99,
                description: 'WorkShop RentalMed 09/07/22',
            })
            this.getQrCode(data)
            console.log(data)

        },
        copyToClipboard: async function() {
            await navigator.clipboard.writeText(this.code)
            this.copied = true
            setTimeout(() => {
                this.copied = false
            }, 2000)
        },
        scrollTo() {
                document.getElementById('#subscribe').scrollIntoView({
                behavior: "smooth"
            })
        }
    },
    components: { TheHeading, TheForm, Icon }
}

</script>

<template>
 <div class="w-full flex flex-col bg-ibramed-experience bg-cover font-metropolis">

    <div class="flex flex-col py-10 gap-4 px-5 container md:w-6/12 mx-auto">
        <div class="flex flex-row">

            <div class="md:w-1/3 w-1/2 m-auto flex flex-col items-center gap-2 my-auto">
                <img src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/id-ibramed-experience.webp' alt='' class="w-2/3 mx-auto"/>
                <div class="flex flex-col items-center text-white text-xs gap-2">
                    <p>REALIZAÇÃO</p>
                    <div class="flex flex-row justify-center items-center gap-2" >
                        <img src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/logo-ibramed.webp' alt='' class=" object-cover h-6"/>
                        <img src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/logo-rentalmed.webp' alt='' class="object-cover h-6"/>
                    </div>
                </div>
            </div>

            <div class="md:w-2/3 w-1/2 flex flex-col gap-2">
                <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/heading-1.webp" alt="" srcset="">
                <div class="bg-purple-900/80 p-4 rounded-lg flex flex-col gap-4 my-4">
                    <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/heading-2.webp" alt="" srcset="" class="md:px-10">
                    <button
                        @click="scrollTo"
                        class="bg-orange-500 text-white rounded-full px-6 py-1 uppercase font-bold mt-4 mx-auto text-xs md:text-base"
                    >
                        Garantir minha vaga
                    </button>
                </div>
            </div>

        </div>
    </div>

    <div class="bg-section-ibramed-experience w-full bg-cover bg-center px-5 text-white text-center md:py-32 py-16">
        <div class="bg-purple-900 px-6 w-fit mx-auto rounded-tr-lg rounded-bl-lg py-4 ">
            <h3 class="text-2xl font-black uppercase">Profissional da estética</h3>
            <p>Evolua seus procedimentos</p>
        </div>
    </div>

    <div class="text-center my-2 flex flex-col gap-4 text-white px-5">
        <p>Participe do</p>
        <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/heading-1.webp" alt="" srcset="" class="h-24 object-contain">
        <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/09-de-julho-Presencial-Florianopolis.webp" alt="" srcset="" class="h-12 object-contain">
        <!-- <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/heading-1.webp" alt="" srcset="" class="h-24 object-contain"> -->
    </div>

    <div class="px-5 md:w-6/12 md:mx-auto">
        <div class="bg-zinc-300/20 w-full h-fit rounded-lg relative">
            <p class="px-4 pb-8 pt-4 text-white">
                O que você vai aprender no IBRAMED EXPERIENCE Laser de Diodo e LIP :
                Nesta imersão de 7 horas, você aprenderá todos os pilares que compõem o universo da Fototerapia: desde características essenciais, que todo profissional da área precisa saber, até os pontos que farão de você um expert no assunto!
                Você aprenderá todas as diversas possibilidades que o Laser de Diodo e a Luz Intensa Pulsada podem trazer à sua carreira; todos os tratamentos possíveis com ambas tecnologias super lucrativas! Além disso, você terá protocolos com evidência clínica de última geração realizados em primeira mão para você!
                Ah! E as surpresas não param por aí: tanto o conteúdo teórico quanto o prático serão apresentados com o uso de aparelhos líderes do mercado e aprovados pelos maiores nomes da estética: LYRA e VEGA!
                Isso mesmo! Você terá TODO ESSE CONTEÚDO PRESENCIAL e na PRÁTICA por apenas R$87,00
            </p>
            <button
                @click="scrollTo"
                class="bg-orange-500 text-white rounded-full px-6 py-1 uppercase absolute -bottom-4 inset-x-0 w-fit mx-auto"
            >
                Garantir minha vaga
            </button>
        </div>
    </div>

    <div class="px-5 my-10 flex flex-col gap-4">
        <div class="w-full mx-auto mb-2">
            <img src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/renata-gomes-moreira.webp' alt='' class="w-32 h-32 mx-auto"/>
        </div>
        <div class="text-center text-white">
            <p>Prof.ª Esp</p>
            <p><b>Renata Gomes Moreira</b></p>
        </div>
        <div class="bg-zinc-300/60 w-full relative p-4 rounded-lg text-white md:w-6/12 md:mx-auto">
            <p> Fisioterapeuta;<br>
                Especialista em MBA em Dermatofuncional, Estética e Cosmética;<br>
                Especialização em andamento no curso de MBA em Ortopedia e Traumatologia;<br>
                Analista de Aperfeiçoamento e Apoio técnico IBRAMED;<br>
                Docente em cursos de pós-graduação;<br>
                Palestrante em congressos, workshops, simpósios e cursos.<br><br>
                <a class="hover:underline" href="http://lattes.cnpq.br/5286592247014757">CV Lattes: http://lattes.cnpq.br/5286592247014757</a> </p>
        </div>

    </div>

    <div class="flex flex-col gap-4 items-center my-10 ">
        <div class="flex flex-col gap-2 items-center text-white font-bold">
            <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/investimento.webp" alt="" srcset="" class="h-7">
            <h4>Preço especial</h4>
            <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/preco-189.webp" alt="" srcset="" class="h-7">
            <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/preco-87.webp" alt="" srcset="" class="w-1/3">
            <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/vagas-limitadas.webp" alt="" srcset="" class="h-7">
        </div>
    </div>


    <div id="#subscribe" class="px-5 pt-14" :class="{'mb-14': !pixcode}">
        <TheForm @form-data="getPixCode" />
    </div>

    <div v-if="pixcode" class="bg-purple-900/80 my-4 mx-5 rounded-lg p-6" >
        <p class="text-white text-center mb-4">Em alguns instantes você receberá uma mensagem em seu WhatsApp confirmando sua inscrição.</p>
        <div class="flex flex-row items-center border border-purple-400 rounded-lg text-white">

            <button @click="copyToClipboard" class="w-10 h-10 p-2 hover:bg-purple-800 rounded-l-lg">
                <Icon icon="ep:copy-document" height="100%"/>
            </button>


            <input
                class="w-full bg-transparent border-none rounded-r-lg transition-all duration-300"
                :class="{'bg-green-500': copied}"
                type="text"
                name="pixCode"
                id="pixCode"
                readonly
                v-model="pixcode"
                v-on:focus="copyToClipboard"
            >
        </div>
        <p class="text-center text-white my-2" v-if="copied">🎉 Copiado para área de transferência 🎉</p>
        <img :src="qrcode" alt="" srcset="" class="mx-auto py-4 rounded">

            <button class="w-fit hover:bg-green-800 rounded-lg bg-green-600 flex flex-row text-white items-center py-2 px-4 gap-2 mx-auto">
                <div class="w-6 h-6 ">
                    <Icon icon="akar-icons:whatsapp-fill" height="100%"/>
                </div>
                <span>Enviar comprovante de pagemento</span>
            </button>
    </div>

    <div class="bg-purple-900 py-4">
        <div class="flex flex-row justify-center items-center gap-2" >
            <img src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/logo-ibramed.webp' alt='' class=" object-cover h-10"/>
            <img src='https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/logo-rentalmed.webp' alt='' class="object-cover h-10"/>
        </div>
    </div>


 </div>
</template>

<style>



</style>