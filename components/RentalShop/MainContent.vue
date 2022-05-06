<style>
.content {
    @apply container m-auto flex flex-col md:flex-row justify-between;
}

.main-offer {
    @apply px-4;
}

.rentalshop-main-banner{
    @apply max-w-md mx-auto p-4 flex flex-col md:px-0 md:mx-4 w-full text-center md:text-left;
}
.rentalshop-main-banner h1{
    @apply my-2 first:mb-8;
}

.heat-rentalshop {
    @apply uppercase text-center my-4 md:text-left text-white;
}

.headline-h1 h1 {
    @apply text-xl font-bold text-center md:text-left my-4 text-white;
}

.offer-text {
    @apply text-center md:text-left text-white;
}

.registrationForm {
    @apply bg-white/40 mx-4 rounded shadow pt-1;
}
/* .title-form {
    @apply bg-white rounded m-4;
} */

.title-form h1 {
    @apply text-center py-4 text-xl  ;
}

.divisor {
    @apply border-b border-zinc-600 m-4;
}

.secure-data {
    @apply flex flex-row items-center justify-center pb-4;
}

.icon-secure {
    @apply w-8 h-8 mr-2 text-green-800;
}
</style>

<template>
    <div class="content">
        <div class="flex flex-col flex-1 md:my-8 justify-center my-auto max-w-md mx-auto md:max-w-xl">

            <div class="rentalshop-main-banner">
                <h1 class="text-white text-4xl font-bold">próximo programa:</h1>
                <h1 class="text-white text-4xl">12 de maio - quinta</h1>
                <h1 class="text-white text-4xl">20h30</h1>
            </div>

            <div class="main-offer">
                <div class="headline-h1">
                    <h1>Cadastre-se receba o spoiler das ofertas no seu WhatsApp!</h1>
                </div>

                <div class="heat-rentalshop">
                    o seu programa de ofertas da estética
                </div>

                <div class="offer-text">
                    <p>
                        Um programa perfeito para profissionais da estética onde você encontrará novidades, informações e o principal:
                        <strong>OFERTAS RELÂMPAGO COMO VOCÊ NUNCA VIU.</strong>

                        <br>Quer receber as ofertas antes de todo mundo e ser avisado quando a live vai começar?
                        <br> Cadastre-se e seja o primeiro a saber.
                    </p>
                </div>
            </div>
        </div>

        <div class="flex-1 my-8 max-w-md mx-auto">
            <div class="registrationForm">
                <div class="title-form">
                    <h1>Cadastre-se e receba um <strong class="font-bold">SPOILER</strong> no seu <strong>WhatsApp</strong> </h1>
                </div>
                <div class="form-group">
                    <RentalShopRegistrationForm />
                </div>
                <div class="divisor"></div>
                <div class="secure-data">
                    <div class="icon-secure">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
                                <path d="M13 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7" />
                                <path stroke-linejoin="round"
                                    d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011m7.982 9.126l2.556.649c.266.068.453.31.445.584C21.821 21.116 18.5 22 18.5 22s-3.321-.884-3.493-6.642a.588.588 0 0 1 .445-.584l2.556-.649c.323-.082.661-.082.984 0Z" />
                            </g>
                        </svg>
                    </div>
                    <div class="secure-text">Suas informações estão seguras</div>
                </div>
            </div>
        </div>
    </div>
</template>
