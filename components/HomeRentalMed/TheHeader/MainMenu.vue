<style>
    .rtmd-main-menu {
        @apply flex flex-row justify-between shadow h-14 items-center px-4;
    }
    .rtmd-main-menu-toggler {
        @apply w-8 h-8 text-rtmd-primary;
    }
    .rtmd-main-menu-logo {
        @apply bg-transparent;
    }
    .rtmd-main-menu-logo img{
        @apply max-h-9;
    }
    .rtmd-main-menu-shop {
        @apply w-8 h-8 text-rtmd-primary;
    }

</style>


<template>

    <div class="rtmd-main-menu">
        <button @click="emitMenuToggler" class="rtmd-main-menu-toggler">
            <Icon icon="ant-design:menu-outlined" height="100%"/>
        </button>
        <div class="rtmd-main-menu-logo">
            <img src="https://cdn.awsli.com.br/400x300/2387/2387118/logo/e8d45aa3ed.png" alt="RentalMed">
        </div>
        <div class="rtmd-main-menu-shop">
           <Icon icon="akar-icons:shopping-bag" height="100%"/>
        </div>
    </div>

</template>

<script>

    import { Icon } from '@iconify/vue2'

    export default {

        data() {
            return {
                menuState: this.menuIsOpen
            }
        },
        methods: {
            emitMenuToggler: function () {
                this.$emit('toggle-menu')
            }
        },
        components: {
            Icon
        },
    }

</script>