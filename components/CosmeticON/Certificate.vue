<template>

    <div class="border">
        <!-- <img ref="bg" src="https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/certificado_cosmeticON_2022.png"> -->
        <canvas ref="imagecanvas" class="w-full"></canvas>
        <img ref="imgConverted" src="">
        <button class="" @click="btnDownload">Download</button>
    </div>

</template>

<script>
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
    bgImage.src = 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/05/certificado_cosmeticON_2022.png'
    bgImage.setAttribute('crossorigin', 'anonymous')

    let text = this.name

    bgImage.onload = function () {
      canvas.width = bgImage.width
      canvas.height = bgImage.height
      ctx.drawImage(bgImage, 0, 0)


      let startX = 100; //inicio do espaço de texto
      let endX = canvas.width; //fim do espaço de texto
      let szTotal = (endX - startX); //espaço total disponivel

      //variaveis do texto
      ctx.font = '230px Arial';
      let wTexto = ctx.measureText(text).width;

      //calcula o espaco que tem disponível entre as margens laterais
      let calculaMargem = (szTotal - wTexto) / 2;

      let posX = calculaMargem + startX; //posicaoX inicial do texto
      let posY = 1200; //posicaoy inicial do texto
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
      // alert('Hello ')
      console.log(this.$refs.imagecanvas)
      console.log(this.canvas)
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(this.$refs.imagecanvas.msSaveBlob(), 'canvas-image.png')
      } else {
        const a = document.createElement('a')
        document.body.appendChild(a)
        a.href = this.$refs.imagecanvas.toDataURL('image/png', 1.0)
        a.download = 'canvas-image.png'
        a.click()
        document.body.removeChild(a)
      }
    },
    // download(canvas, filename) {
    //     /// create an "off-screen" anchor tag
    //     var lnk = document.createElement('a'),
    //         e;

    //     /// the key here is to set the download attribute of the a tag
    //     lnk.download = filename;

    //     /// convert canvas content to data-uri for link. When download
    //     /// attribute is set the content pointed to by link will be
    //     /// pushed as "download" in HTML5 capable browsers
    //     lnk.href = this.$refs.imagecanvas.toDataURL("image/png;base64");

    //     /// create a "fake" click-event to trigger the download
    //     if (document.createEvent) {
    //         e = document.createEvent("MouseEvents");
    //         e.initMouseEvent("click", true, true, window,
    //             0, 0, 0, 0, 0, false, false, false,
    //             false, 0, null);

    //         lnk.dispatchEvent(e);
    //     } else if (lnk.fireEvent) {
    //         lnk.fireEvent("onclick");
    //     }
    // }
  }
}
</script>