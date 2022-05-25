<script>
    import {Icon} from '@iconify/vue2'

    export default {
        components: {
            Icon
        }
    }

</script>

<template>
    <div class="flex flex-col justify-between min-h-screen w-full">

        <div class="bg-red-200 flex items-center justify-center w-full">
            <img
                src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/Pagina-Ingressos_01.webp"
                alt=""
                srcset=""
                class="h-52 md:h-auto md:object-contain object-cover"
            >
        </div>

        <div class="py-8 flex flex-col gap-4 items-center">
            <div class="flex flex-wrap justify-center items-center gap-4 w-full ">
                <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/ibramed-experience-next-events-01.webp" alt="" srcset="" class="w-32">
                <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/ibramed-experience-next-events-02.webp" alt="" srcset="" class="w-32">
                <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/ibramed-experience-next-events-03.webp" alt="" srcset="" class="w-32">
                <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/ibramed-experience-next-events-04.webp" alt="" srcset="" class="w-32">
                <img src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/ibramed-experience-next-events-05.webp" alt="" srcset="" class="w-32">
            </div>
            <div class="grid gap-4 grid-flow-row mx-auto w-fit py-4 text-white">

                <a href="https://www.esteticainsul.com.br/eisul2022/inscricao/feira_323/">
                    <button class="w-full h-12 rounded bg-[#df0537] hover:bg-[#920324] uppercase font-bold flex flex-row items-center gap-2 px-4 justify-center" >
                        <div class="w-6 h-6">
                            <Icon icon="fontisto:ticket-alt" height="100%"/>
                        </div>
                        <span>Ingressos para congressos</span>
                    </button>
                </a>

                <a href="#">
                    <button class="w-full h-12 rounded bg-zinc-400 hover:bg-[#920324] uppercase font-bold flex flex-row items-center gap-2 px-4 justify-center" >
                        <div class="w-6 h-6">
                            <Icon icon="clarity:store-line" height="100%"/>
                        </div>
                        <span>Acesso livre para a feira</span>
                    </button>
                </a>

                <a href="#">
                    <button class="w-full h-12 rounded bg-zinc-400 hover:bg-[#920324] uppercase font-bold flex flex-row items-center gap-2 px-4 justify-center" >
                        <div class="w-6 h-6">
                            <Icon icon="carbon:document-download" height="100%"/>
                        </div>
                        <span>Baixe o comunicado</span>
                    </button>
                </a>

            </div>
        </div>

        <div class="bg-[#df7380] flex flex-col items-center justify-center py-8 text-white gap-4">
            <img
                src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/logo-rentalmed.webp"
                alt=""
                srcset=""
                class="w-24"
            >
            <span class="text-sm uppercase">Mais informações</span>

            <a href="https://wa.me/5548999050170?text=Olá, gostaria de mais informações sobre o Estética In Sul">
                <button class="w-fit h-12 rounded bg-[#df0537] hover:bg-[#920324] uppercase font-bold flex flex-row items-center gap-2 px-4 justify-center" >
                    <div class="w-5 h-5">
                        <Icon icon="akar-icons:whatsapp-fill" height="100%"/>
                    </div>
                    <span>48 99905-0170</span>
                </button>
            </a>

        </div>
    </div>
</template>

<style>
</style>