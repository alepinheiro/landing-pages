import flowbite from 'flowbite';
import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(flowbite);
});