<template>
    <form id="form" class="form" @submit="submitForm" :name="form_name">

        <div class="input-group">
            <label for="name">Nome completo</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                v-model="nameInput"
                required
            >
        </div>

        <div class="input-group">
            <label for="whatsapp">WhatsApp</label>
            <the-mask :mask="['(##) ####-####', '(##) #####-####']"
                name="whatsapp"
                id="whatsapp"
                placeholder="WhatsApp com DDD"
                v-model="whatsappInput"
                required
            />
        </div>

        <div class="input-group">
            <label for="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                v-model="emailInput"
                required
            >
        </div>

        <div class="input-group">

            <label for="job">Cargo</label>
            <select
                name="job"
                id="job"
                v-model="jobInput"
                required
            >
                <option v-for="job in jobs" :value="job.value">
                    {{job.text}}
                </option>
            </select>

        </div>

        <div class="checkbox-wrapper ">
            <div class="checkbox">
                <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" checked required>
                <label for="checkbox-1" >Estou de acordo com os <a href="#" class=" hover:underline">termos e condições.</a></label>
            </div>

            <div class="checkbox">
                <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" checked required>
                <label for="checkbox-2">Autorizo o envio de comunicações.</label>
            </div>
        </div>

        <button type="submit">
            <div class="btnText">
                Quero conhecer tudo sobre o heccus turbo!
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
                form_name: '[EQP][LP_HECCUS_TURBO]',
                //apiResponse: false,
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

                if(!this.loadingStatus){
                    this.loadingStatus = true
                }

                axios
                    .post('https://api.rentalmed.com.br/LandingPage/', formData)
                    .then((res) => {
                        //console.log(res)
                        if (res.status == 200){

                            //envia os dados para o google analytics
                            this.$ga.event({
                                eventCategory: 'conversion',
                                eventAction: 'subscribe',
                                eventLabel: this.form_name,
                                //eventValue: true
                            })

                            //envia os dados para o fb
                            this.$fb.track('Lead', {content_name: this.form_name })

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

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .form{
        @apply bg-green-600 p-4 rounded text-white shadow-md shadow-green-800/60;
    }
    .input-group{
        @apply flex flex-col mb-4;
    }
    .input-group label{
        @apply mb-1;
    }
    .input-group input{
        @apply
            w-full border-0 rounded bg-green-700 p-2
            focus:outline-none focus:ring focus:ring-green-400
            placeholder:text-white/20;
    }
    .input-group select{
        @apply
            w-full border-0 rounded bg-green-700 p-2
            focus:outline-none focus:ring focus:ring-green-400
            placeholder:text-white/20;
    }
    .checkbox-wrapper{
        @apply my-4 w-full;
    }
    .checkbox{
        @apply flex items-center mb-2;
    }
    .checkbox input{
        @apply w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 focus:ring-2 ;
    }
    .checkbox label{
        @apply ml-3 text-sm font-medium;
    }
    .form button{
        @apply  w-full m-auto bg-purple-800 rounded p-2 uppercase flex flex-row items-center justify-center;
    }

    .btn-loading{
        @apply w-14 h-14 px-2;
    }

    .msg-box{
        @apply mt-4 text-center rounded p-2;
    }
</style>