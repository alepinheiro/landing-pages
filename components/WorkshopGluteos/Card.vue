<script setup>
    import { Icon } from '@iconify/vue2'

</script>

<script>
    export default {
        props: {
            icon: String,
            text: String,
        }
    }
</script>

<template>
    <div class="card-glu">
        <div class="w-16 h-16 ">
            <Icon :icon="icon" height="100%"/>
        </div>
        <p class="break-words text-center uppercase">
            {{ text }}
        </p>
    </div>
</template>

<style>
    .card-glu {
        @apply w-full bg-violet-100 rounded-lg flex flex-col justify-center items-center px-10 py-5 gap-5;
    }
</style>