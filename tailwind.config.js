/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors:{
        'rtmd-primary': '#ef476f',
        'roxo-primary': '#7800FF',
        'rosa-primary': '#FF55FF',
        'verde-primary': '#37CD69',
      },
      fontFamily: {
        outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
        metropolis: ["MetropolisNF", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'rentalshop': "url('https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/BG-Blur2.png')",
        'template-360-160': "url('http://unsplash.it/360/160?random=200&gravity=center')",
        'ibramed-experience': "url('https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/Backgound.webp')",
        'section-ibramed-experience': "url('https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/bg-section-ibramed-experience.webp')",
      },

    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ]
};
