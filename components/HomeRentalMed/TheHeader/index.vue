<template>

    <header>
            <HomeRentalMedTheHeaderHighlightInfo />
            <HomeRentalMedTheHeaderMainMenu @toggle-menu="menuToggler" />
            <HomeRentalMedTheHeaderMenuMobile :class="{'w-0': menuState, 'w-screen': !menuState}" :menuIsOpen="menuState" @toggle-menu="menuToggler" />
    </header>

</template>

<script>
    export default {
        data () {
            return {
                menuState: true,
            }
        },
        methods: {
            menuToggler: function () {
                this.menuState = !this.menuState
                console.log(this.menuState)
            }
        },
    }
</script>