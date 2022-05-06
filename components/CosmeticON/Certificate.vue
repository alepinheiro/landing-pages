<style>
    .cosmeticon-btn{
        @apply bg-green-700 hover:bg-green-800 px-4 py-2 rounded text-white uppercase text-center h-fit w-full whitespace-nowrap;
    }
</style>

<template>

    <div class="border mx-8 rounded">
        <!-- <img ref="bg" src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/certificado_cosmeticON_2022.png"> -->
        <canvas ref="imagecanvas" class="w-full" id="canvas"></canvas>
        <img ref="imgConverted" src="">

        <div class="flex flex-col md:flex-row p-4 gap-4">
          <button class="cosmeticon-btn" @click="btnDownload">Download</button>
          <a href="https://forms.gle/UDjC3qikhJSMdFGJA" class="cosmeticon-btn"> Pesquisa de satisfação</a>
        </div>
    </div>

</template>

<script>
import uriImage from '@/static/cosmeticOn/certificate'
export default {
  props:{
    name: String,
  },
  data () {
    return {

    }
  },
  computed: {
    canvas () {
      return this.$refs.imagecanvas
    },
  },
  mounted () {

    let canvas = this.$refs.imagecanvas
    let ctx = canvas.getContext("2d")
    let bgImage = new Image()
    let text = this.name

    bgImage.src = uriImage

    bgImage.onload = function () {
      canvas.width = bgImage.width
      canvas.height = bgImage.height
      ctx.crossOrigin = "Anonymous";
      ctx.drawImage(bgImage, 0, 0)


      let startX = 100; //inicio do espaço de texto
      let endX = canvas.width; //fim do espaço de texto
      let szTotal = (endX - startX); //espaço total disponivel

      //variaveis do texto
      ctx.font = '140px Arial';
      let wTexto = ctx.measureText(text).width;

      //calcula o espaco que tem disponível entre as margens laterais
      let calculaMargem = (szTotal - wTexto) / 2;

      let posX = calculaMargem + startX; //posicaoX inicial do texto
      let posY = 1250; //posicaoy inicial do texto
      let textoTotal = (wTexto + posX); //tamanho com recuo do texto

      //centraliza o texto de acordo com os outros elementos
      let szLeft = posX - startX; //posicao inicial do texto - posicao inicial livre

      // se o tamanho do texto for maior do que o desejado ele vai tentar diminuir a fonte
      if (szLeft < startX) {

          ctx.font = '80px Arial'; //define o tamanho da fonte
          let newWidth = ctx.measureText(text).width; //pega o tamanho do elemento

          let newMargem = (szTotal - newWidth) / 2;
          posX = newMargem + startX;
          ctx.fillText(text, posX, posY);

      } else {
          ctx.fillText(text, posX, posY);
      }
    }

  },
  methods: {
    btnDownload () {
      var canvas = document.getElementById("canvas");
      let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      var link = document.createElement('a');
      link.download = "certificado-cosmeticon.png";
      link.href = image;
      link.click();
    },

  }
}
</script>