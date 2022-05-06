<template>
    <div class="flex flex-col mx-auto">
        <h1 class="text-center uppercase my-4"><strong>Próximos</strong> eventos</h1>
        <div class="flex flex-row flex-wrap mx-auto justify-center gap-4 px-8 ">
            <div v-for="event in events" class="flex flex-col items-center justify-between w-20">
                <img class="h-20 mx-auto rounded-full" :src="event.image" alt="" srcset="">
                <p class="text-center h-20 break-words font-bold my-auto flex items-center">{{event.name}}</p>
                <p class="text-center h-14 text-sm">{{event.date}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                events: [{
                    name: 'Estética In Sul',
                    date: '25 a 27 de junho',
                    image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/estetica-in-sul.webp'
                },{
                    name: 'Ibramed Experience',
                    date: '09  de julho',
                    image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/ibramed-experience.webp'
                },{
                    name: 'Congresso Nany Mota',
                    date: '27 de agosto',
                    image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/congresso-pre-pos-operatorio.webp'
                },{
                    name: 'HTM Scientific',
                    date: '17 e 18 de setembro',
                    image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/htm-scientific.webp'
                },{
                    name: 'Revela Estética',
                    date: '30 de outubro',
                    image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/revela-estetica.webp'
                }],
            }
        }
    }
</script>