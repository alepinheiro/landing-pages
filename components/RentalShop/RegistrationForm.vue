<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .rentalshop-form{
        @apply p-4 text-zinc-900;
    }
    .input-wrapper {
        @apply relative z-0 w-full mb-6 ;
    }
    .input-form {
        @apply block py-2.5 px-2 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-800 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600;
    }
    .label-form {
        @apply px-2 peer-focus:font-medium absolute text-sm text-zinc-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6;
    }
    .checkbox-wrapper {
        @apply flex items-center mb-4;
    }
    .checkbox-input {
        @apply w-4 h-4 text-orange-600 bg-orange-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 ;
    }
    .rentalshop-form button{
        @apply w-full m-auto bg-orange-600 text-white rounded py-2 px-4 uppercase flex flex-row items-center justify-center;
    }
    .btn-loading{
        @apply w-14 h-14 px-2;
    }
    .msg-box{
        @apply mt-4 text-center rounded p-2;
    }
</style>

<template>
    <form id="form" class="rentalshop-form" @submit="submitForm" :name="form_name">

        <div class="input-wrapper group">
          <input
            type="text"
            name="name"
            class="input-form peer"
            v-model="nameInput"
            placeholder=" "
            required=""
          >
          <label for="name" class="label-form">Nome Completo</label>
        </div>

        <div class="input-wrapper group">
            <the-mask
                :mask="['(##) ####-####', '(##) #####-####']"
                class="input-form peer"
                name="whatsapp"
                id="whatsapp"
                placeholder=" "
                v-model="whatsappInput"
                required
            />
          <label for="whatsapp" class="label-form">WhatsApp</label>
        </div>

        <div class="input-wrapper group">
            <input
                class="input-form peer"
                type="email"
                name="email"
                id="email"
                placeholder=" "
                v-model="emailInput"
                required
            >
            <label for="email" class="label-form">E-mail</label>
        </div>

        <div class="input-wrapper ">
          <label for="jobs" class="block mb-2 text-sm font-medium text-gray-900 ">Você é:</label>
          <select id="jobs" class="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 focus:outline-none "  v-model="jobInput">
            <option v-for="job in jobs" :value="job.value">
                {{job.text}}
            </option>
          </select>
        </div>

        <div class="checkbox-wrapper">
            <input checked id="terms-conditions" type="checkbox" value="" class="checkbox-input checked:bg-orange-500" >
            <label for="terms-conditions" class="ml-2 text-sm font-medium text-gray-900 ">Estou de acordo com os <a href="https://rentalmed.com.br/termos-e--condicoes" class="text-orange-600 hover:underline ">termos e condições</a>.</label>
        </div>

        <div class="checkbox-wrapper">
            <input checked id="promotional-communication" type="checkbox" value="" class="checkbox-input">
            <label for="promotional-communication" class="ml-2 text-sm font-medium text-gray-900 ">Aceito receber ofertas e promoções</label>
        </div>


        <button type="submit">
            <div class="btnText">
                Quero receber ofertas no meu WhatsApp
            </div>
            <div v-if="loadingStatus" class="btn-loading">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path></svg>
            </div>
        </button>

        <transition name="fade">
            <div v-if="isError || isSuccess" class="msg-box" :class="{'bg-green-400 text-green-600': isSuccess, 'bg-red-400 text-red-600': isError,}">
                <p>{{apiMessage}}</p>
            </div>
        </transition>
    </form>
</template>

<script>
    import {mask} from 'vue-the-mask'
    import axios from 'axios'

    export default{
        data(){
            return {
                nameInput: null,
                whatsappInput: null,
                emailInput: null,
                jobInput: null,
                loadingStatus: false,
                form_name: '[EQP][RENTALSHOP]',
                apiStatus: null,
                apiMessage: '',
                isSuccess: false,
                isError: false,
                apiMessageSuccess: 'Sucesso! Em alguns instantes você receberá o conteúdo em seu WhatsApp.',
                apiMessageError: 'Erro ao cadastrar os dados! Tente novamente em alguns instantes.',
                jobs:[
                    {text: 'Esteticista', value: 'esteticista'},
                    {text: 'Fisiterapeuta', value: 'fisioterapeuta'},
                    {text: 'Médica', value: 'medica'},
                    {text: 'BioMédica', value: 'biomedica'},
                    {text: 'Dentista', value: 'dentista'},
                    {text: 'Outros', value: 'outros'},
                ]
            }
        },
        methods: {
            async submitForm(e){
                e.preventDefault();
                const formData = {
                    name: this.nameInput + ' | ' + this.jobInput,
                    phone: '55' + this.whatsappInput,
                    email: this.emailInput,
                    job: this.jobInput,
                    form_name: this.form_name,
                }
                //console.log(data)
                if(!this.loadingStatus){
                    this.loadingStatus = true
                }

                //this.apiResponse = !this.apiResponse
                // console.log(formData)

                axios
                    .post('https://api.rentalmed.com.br/LandingPage/', formData)
                    .then((res) => {
                        console.log(res)
                        if (res.status == 200){
                            this.loadingStatus = false
                            this.apiMessage = this.apiMessageSuccess
                            this.isError = false
                            this.isSuccess = true
                        }
                    })
                    .catch((err) => {
                        //console.log(err.response.status)
                        if(err.response.status == 400){
                            this.loadingStatus = false
                            this.apiMessage = this.apiMessageError
                            this.isError = true
                            this.isSuccess = false
                        }
                    })

            },
        },
        mounted(){},
        components: {},
        directives: {
            mask
        }
    }
</script>

