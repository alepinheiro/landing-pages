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
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'rentalshop': "url('https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/BG-Blur2.png')",
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
  ]
};
