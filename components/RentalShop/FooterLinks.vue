<style>
.footer-links {
    @apply mt-10 bg-zinc-800 shadow-md text-white text-center;
}

.footer-links ul {
    @apply py-4 flex flex-col md:flex-row;
}

.footer-links li {
    @apply py-4 bg-transparent;
}

.footer-links a {
    @apply w-full h-full;
}
</style>

<template>
    <div class="footer-links ">
        <ul>
            <a href="https://rentalmed.com.br/politica-de-trocas-e-devolucoes">
                <li>
                    Política de trocas e devoluções
                </li>
            </a>
            <a href="https://rentalmed.com.br/termos-e--condicoes">
                <li>
                    Termos e condições
                </li>
            </a>
            <a href="https://rentalmed.com.br/politica-de-privacidade">
                <li>
                    Política de privacidade
                </li>
            </a>
        </ul>
    </div>

</template>