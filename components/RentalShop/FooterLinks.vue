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
            <a href="#">
                <li>
                    Direitos autorais
                </li>
            </a>
            <a href="#">
                <li>
                    Termos de uso
                </li>
            </a>
            <a href="#">
                <li>
                    Política de privacidade
                </li>
            </a>
        </ul>
    </div>

</template>