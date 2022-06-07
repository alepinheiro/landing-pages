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
                form_name: '[COS][LP_WORKSHOP_EMILY]',
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
    <form id="form" class="registration-form" @submit="submitForm" :name="form_name">

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
          <label for="jobs" class="block mb-2 text-sm font-medium text-white ">Você é:</label>
          <select
            id="jobs"
            class="form-select bg-white border-white text-purple-600 text-sm rounded-lg focus:ring-white/60 focus:ring-2 focus:border-white block w-full p-2.5 focus:outline-none "  v-model="jobInput">
            <option value="null" disabled selected>Selecione</option>
            <option v-for="job in jobs" :value="job.value">
                {{job.text}}
            </option>
          </select>
        </div>

        <div class="checkbox-wrapper">
            <input checked id="terms-conditions" type="checkbox" value="" class="checkbox-input " >
            <label
                for="terms-conditions"
                class="ml-2 text-sm font-medium text-white "
            >
            Estou de acordo com os
            <a href="https://rentalmed.com.br/termos-e--condicoes" class="font-bold hover:underline ">termos e condições</a>.</label>
        </div>

        <div class="checkbox-wrapper">
            <input checked id="promotional-communication" type="checkbox" value="" class="checkbox-input">
            <label
                for="promotional-communication"
                class="ml-2 text-sm font-medium text-white "
            >
            Aceito receber ofertas e promoções
            </label>
        </div>


        <button type="submit" class="btn-workshop-glu w-full flex flex-row items-center justify-center">
            <div class="btnText">
                Garantir minha vaga
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

<style >
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .registration-form{
        @apply p-4 text-white w-full;
    }
    .input-wrapper {
        @apply relative z-0 w-full mb-6 ;
    }
    .input-form {
        @apply block py-2.5 px-2 w-full text-sm text-white
        bg-transparent border-0 border-b border-white appearance-none focus:outline-none focus:ring-0
        focus:border-white;
    }
    .label-form {
        @apply px-2 peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6
        scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6;
    }
    .checkbox-wrapper {
        @apply flex flex-row items-center mb-4;
    }
    .checkbox-input {
        @apply w-4 h-4 text-purple-600 bg-purple-100 border-gray-300 rounded focus:ring-purple-600 focus:ring-2 ;
    }
    /* .registration-form button{
        @apply w-full m-auto bg-purple-600 text-white rounded-full py-2 px-4 uppercase flex flex-row items-center justify-center;
    } */
    .btn-loading {
        @apply w-10 h-10 px-2;
    }
    .msg-box {
        @apply mt-4 text-center rounded p-2;
    }

</style>