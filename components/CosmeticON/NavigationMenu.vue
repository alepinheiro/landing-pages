<style>
    .cosmeticon-btn{
        @apply bg-green-700 hover:bg-green-800 px-4 py-2 rounded text-white uppercase text-center h-fit w-full whitespace-nowrap;
    }
</style>

<template>
    <div>
        <div class="flex flex-col md:flex-row gap-4 w-fit mx-auto h-64 justify-center items-center" v-if="showButtons">
            <a href="#" class="cosmeticon-btn"> Fotos Evento </a>
            <button class="cosmeticon-btn" @click="hideButtons"> Gere seu certificado</button>
            <a href="https://forms.gle/UDjC3qikhJSMdFGJA" class="cosmeticon-btn"> Pesquisa de satisfação</a>
        </div>

        <div v-if="!showButtons && !getCertificate" class="mx-auto h-64 flex flex-col justify-center gap-4 max-w-md px-8">
          <h2 class="mx-auto uppercase font-bold text-green-800">Gere sua certificação</h2>
          <input v-model="name" @input="inputHandler" :class="{ 'border-red-400 focus:ring-red-200': inputError, 'border-green-400 focus:ring-green-200': !inputError }" type="text" class="border rounded text-center  py-2 focus:outline-none focus:ring " placeholder="Escreva seu nome como sairá no certificado">
          <button @click="showCertificate" class="cosmeticon-btn" >Gerar certificado</button>
        </div>

        <div v-if="getCertificate" class="h-auto mx-auto">
          <CosmeticONCertificate :name="name" />
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                showButtons: true,
                getCertificate: false,
                inputError: false,
                name: '',
            }
        },
        methods: {
            hideButtons: function () {
                this.showButtons = false
            },
            inputHandler: function () {
                if (this.inputError){
                    this.inputError = false
                }
            },
            showCertificate: function () {
                if(this.name.length > 0){
                    this.getCertificate = true
                } else {
                    this.inputError = true
                }
            },
        }
    }
</script>