<style>
    .rtmd-highlight-info {
        @apply bg-rtmd-primary h-6 flex justify-center items-center text-white;
    }
    .rtmd-highlight-info-container {
        @apply flex flex-row items-center gap-2;
    }
    .rtmd-highlight-info-container-icon {
        @apply flex flex-row h-4 w-4;
    }
    .rtmd-highlight-info-container-text {
        @apply text-sm;
    }
</style>

<template>
    <div class="rtmd-highlight-info">
        <div class="rtmd-highlight-info-container">
            <div class="rtmd-highlight-info-container-icon">
                <Icon icon="fa6-brands:pix" height="100%"/>
            </div>
            <div class="rtmd-highlight-info-container-text">
                <strong>Pague com PIX</strong> <span>e ganhe 10% de desconto</span>
            </div>
        </div>
    </div>
</template>

<script>

    import { Icon } from '@iconify/vue2'

    export default {

        components: {
            Icon
        },
    }

</script>

