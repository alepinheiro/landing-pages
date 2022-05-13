<style>
    .rtmd-menu-mobile {
        @apply absolute top-0 h-screen transition-all overflow-hidden ease-in-out;
    }
    .rtmd-menu-mobile-container {
        @apply flex flex-row h-full ;
    }
    .rtmd-menu-mobile-panel {
        @apply w-4/6 bg-white shadow-lg;
    }
    .rtmd-menu-mobile-overlay {
        @apply w-2/6 bg-black/30;
    }
    .rtmd-menu-mobile-panel-group {
        @apply flex gap-2 border-b border-zinc-200 pl-6 py-3 ;
    }
    .rtmd-menu-mobile-panel-group {
        @apply flex gap-2 border-b border-zinc-200 pl-6 py-3 ;
    }
    .rtmd-menu-mobile-panel-item {
        @apply flex flex-row items-center gap-2 py-1 ;
    }
</style>

<template>

    <div class="rtmd-menu-mobile">
        <div class="rtmd-menu-mobile-container">

            <div class="rtmd-menu-mobile-panel">

                <div class="rtmd-menu-mobile-panel-group flex-row">

                    <div class="w-8 h-8 text-black my-auto flex items-center">
                        <Icon icon="carbon:user-avatar" height="100%" />
                    </div>

                    <div class="flex flex-col text-sm leading-tight">
                        <div class="font-bold ">
                            Olá Visitante
                        </div>
                        <div>
                            Entrar ou Cadastrar
                        </div>
                    </div>

                </div>

                <div class="rtmd-menu-mobile-panel-group flex-col">
                    <div class="rtmd-menu-mobile-panel-item" v-for="item in menuItems">

                        <div class="w-6 h-6 text-zinc-400 " >
                            <Icon :icon="item.icon" height="100%" />
                        </div>
                        <div>
                            {{item.title}}
                        </div>

                    </div>
                </div>

                <div class="rtmd-menu-mobile-panel-group flex-col">
                    <div class="font-bold py-2">
                        Categorias
                    </div>
                    <ul v-for="item in categoryItems" >
                        <li>
                            {{item.title}}
                        </li>
                    </ul>

                </div>
            </div>

            <div class="rtmd-menu-mobile-overlay">
                <button @click="closeMenu" class="w-10 h-10 text-white m-3">
                    <Icon icon="ep:close-bold" height="100%" />
                </button>
            </div>

        </div>
    </div>

</template>

<script>
    import { Icon } from '@iconify/vue2'

    export default {
        props: ['menuIsOpen'],
        data () {
            return {
                menuItems:[
                    {
                        title:'Central de Atendimento',
                        icon: 'fluent:chat-multiple-24-regular'
                    },{
                        title:'Minha Conta',
                        icon: 'carbon:user-avatar'
                    },{
                        title:'Meus Pedidos',
                        icon: 'fluent:box-20-regular'
                    },{
                        title:'Desejos',
                        icon: 'bi:bag-heart'
                    },{
                        title:'Rastrear Pedido',
                        icon: 'fluent:box-search-20-regular'
                    },

                ],
                categoryItems:[
                    {
                        title: 'Aparelhos',
                    },{
                        title: 'Dermocosméticos',
                    },{
                        title: 'Acessórios',
                    },{
                        title: 'Móveis',
                    },{
                        title: 'Serviços',
                    },{
                        title: 'Cursos',
                    },{
                        title: 'Blog',
                    },
                ]

            }
        },
        methods:{
            closeMenu: function () {
                this.$emit('toggle-menu')
            }
        },
        components: {
            Icon
        }
    }

</script>