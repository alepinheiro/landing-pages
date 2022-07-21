<script>
    import {mask} from 'vue-the-mask'
    import axios from 'axios'

    // 61c45733503d16b17581eabe -> dermocosméticos

    export default{
        data(){
            return {
                nameInput: null,
                whatsappInput: null,
                emailInput: null,
                jobInput: null,
                loadingStatus: false,
                form_name: '[EVE][LP_HTM_TRAINING]',
                apiStatus: null,
                apiMessage: '',
                isSuccess: false,
                isError: false,
                apiMessageSuccess: 'Sucesso! Em alguns instantes você receberá a confirmação em seu WhatsApp.',
                apiMessageError: 'Erro ao cadastrar os dados! Talvez este telefone já esteja cadastrado.',
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

<template>
    <form id="form" class="htm-training-registration-form" @submit="submitForm" :name="form_name">

        <div class="htm-training-input-wrapper group">
          <input
            type="text"
            name="name"
            class="htm-training-input-form peer"
            v-model="nameInput"
            placeholder=" "
            required=""
          >
          <label for="name" class="htm-training-label-form">Nome Completo</label>
        </div>

        <div class="htm-training-input-wrapper group">
            <the-mask
                :mask="['(##) ####-####', '(##) #####-####']"
                class="htm-training-input-form peer"
                name="whatsapp"
                id="whatsapp"
                placeholder=" "
                v-model="whatsappInput"
                required
            />
          <label for="whatsapp" class="htm-training-label-form">WhatsApp</label>
        </div>

        <div class="htm-training-input-wrapper group">
            <input
                class="htm-training-input-form peer"
                type="email"
                name="email"
                id="email"
                placeholder=" "
                v-model="emailInput"
                required
            >
            <label for="email" class="htm-training-label-form">E-mail</label>
        </div>

        <div class="htm-training-input-wrapper ">
          <label for="jobs" class="block mb-2 text-white ">Você é:</label>
          <select
            id="jobs"
            class="form-select bg-white border-white text-purple-600 rounded-lg focus:ring-white/60 focus:ring-2 focus:border-white block w-full p-2.5 focus:outline-none "  v-model="jobInput">
            <option value="null" disabled selected>Selecione</option>
            <option v-for="job in jobs" :value="job.value">
                {{job.text}}
            </option>
          </select>
        </div>

        <div class="flex flex-col items-start w-full gap-2">
            <div class="htm-training-checkbox-wrapper">
                <input checked id="terms-conditions" type="checkbox" value="" class="htm-training-checkbox-input " >
                <label
                    for="terms-conditions"
                    class="ml-2 text-sm font-medium text-white "
                >
                Estou de acordo com a
                <a href="https://www.rentalmed.com.br/pagina/politica-de-privacidade.html" class="font-bold hover:underline ">política de privacidade</a>.</label>
            </div>

            <div class="htm-training-checkbox-wrapper">
                <input checked id="promotional-communication" type="checkbox" value="" class="htm-training-checkbox-input">
                <label
                    for="promotional-communication"
                    class="ml-2 text-sm font-medium text-white "
                >
                Aceito receber ofertas e promoções
                </label>
            </div>
        </div>


        <button type="submit" class="htm-training-btn-submit-form">
            <div class="btnText">
                quero me inscrever
            </div>
            <div v-if="loadingStatus" class="htm-training-btn-loading">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path></svg>
            </div>
        </button>

        <transition name="fade">
            <div v-if="isError || isSuccess" class="htm-training-msg-box" :class="{'bg-green-400 text-green-600': isSuccess, 'bg-red-400 text-red-600': isError,}">
                <p>{{apiMessage}}</p>
            </div>
        </transition>
    </form>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .htm-training-registration-form{
        @apply p-5 text-white w-full bg-roxo-primary rounded-xl flex flex-col items-center gap-4;
    }
    .htm-training-input-wrapper {
        @apply relative z-0 w-full;
    }
    .htm-training-input-form {
        @apply block py-2.5 px-2 w-full text-white
        bg-transparent border-0 border-b border-white appearance-none focus:outline-none focus:ring-0
        focus:border-white;
    }
    .htm-training-label-form {
        @apply px-2 peer-focus:font-medium absolute text-white  duration-300 transform -translate-y-6
        scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6;
    }
    .htm-training-checkbox-wrapper {
        @apply flex flex-row items-center;
    }
    .htm-training-checkbox-input {
        @apply w-4 h-4 text-rosa-primary bg-purple-100 border-gray-300 rounded focus:ring-purple-600 focus:ring-2 ;
    }
    .htm-training-btn-submit-form{
        @apply w-fit items-center justify-center bg-verde-primary hover:bg-green-600 hover:scale-110 transition-all rounded-full text-center py-3 px-8 font-black leading-tight;
    }
    .htm-training-btn-loading {
        @apply w-10 h-10 px-2;
    }
    .htm-training-msg-box {
        @apply mt-4 text-center rounded p-2;
    }

</style>