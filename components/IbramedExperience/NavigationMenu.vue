
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


<template>
    <div>
        <div class="flex flex-col gap-4 w-fit mx-auto justify-center items-center" v-if="showButtons">

            <a href="https://drive.google.com/drive/folders/1siZOd5p0AX1p0Iu_RYEbApAQUYJY9B4a" class="ibramed-experience-btn"> Fotos Evento </a>

            <button class="ibramed-experience-btn" @click="hideButtons"> Gere seu certificado</button>

            <a href="https://forms.gle/UDjC3qikhJSMdFGJA" class="ibramed-experience-btn"> Pesquisa de satisfação</a>

        </div>

        <div v-if="!showButtons && !getCertificate" class="mx-auto h-64 flex flex-col justify-center gap-4 max-w-md px-8">
          <h2 class="mx-auto uppercase font-bold text-orange-500">Gere sua certificação</h2>
          <input v-model="name" @input="inputHandler" @keyup.enter="showCertificate" :class="{ 'border-red-400 focus:ring-red-200 bg-red-100 placeholder:text-red-600': inputError, 'border-green-400 focus:ring-green-200': !inputError }" type="text" class="border rounded text-center  py-2 focus:outline-none focus:ring " placeholder="Escreva seu nome como sairá no certificado">
          <button @click="showCertificate" class="ibramed-experience-btn" >Gerar certificado</button>
        </div>

        <div v-if="getCertificate" class="h-auto mx-auto">
          <IbramedExperienceCertificate :name="name" />
        </div>
    </div>
</template>

<style>

</style>