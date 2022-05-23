<style>
  body{
    @apply bg-white;
  }
  .slide {
    @apply border border-zinc-300 mx-8 text-center shadow rounded;
  }

  .btn {
    @apply bg-purple-600 text-white px-4 py-2 rounded text-sm my-4 uppercase;
  }

  .badge {
    @apply inline-flex items-center justify-center px-2 py-1 text-xs whitespace-nowrap font-bold bg-green-200 rounded;
  }
  .input-wrapper {
    @apply relative z-0 w-full mb-6 ;
  }
  .form-input{
    @apply block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white ;
  }

  .form-label{
    @apply peer-focus:font-medium absolute text-sm text-blue-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6;
  }
</style>

<template>
  <div>



    <!-- main banner -->
    <div class="mx-auto relative mb-20">
      <div class="pb-[100%] relative bg-gradient-to-b from-purple-600 bg-blue-500">
        <img class="absolute block w-full h-full opacity-30" src="http://unsplash.it/g/1080/1080?random&gravity=center" alt="" sizes="1080px" />
        <div class="inset-x-1/2 inset-y-1/3 absolute">
          <div class="text-white text-3xl flex flex-col items-center">
            <p>Assistência</p>
            <p class="font-bold">Técnica</p>
          </div>
        </div>
      </div>

      <div class="bg-blue-500 w-2/3 rounded absolute inset-x-0 -bottom-10 mx-auto">
        <div class="flex flex-col items-center py-10 text-white mx-auto">
          <div class="w-20 h-20 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.721 5.003L11.255 5c-3.344-.008-6.247 2.709-6.27 6v3.79c0 .79-.1 1.561-.531 2.218l-.287.438C3.73 18.11 4.2 19 4.985 19h14.03c.785 0 1.254-.89.818-1.554l-.287-.438c-.43-.657-.531-1.429-.531-2.219v-3.788c-.04-3.292-2.95-5.99-6.294-5.998ZM15 19a3 3 0 1 1-6 0"/><path d="M12 2a2 2 0 0 1 2 2v1h-4V4a2 2 0 0 1 2-2Z"/></g></svg>
          </div>
          <div class="text-center text-2xl">
            Quero ser<br>
            <strong>atendida agora!</strong>
          </div>
        </div>
        <button class="uppercase text-white bg-purple-600 absolute inset-x-0 -bottom-4 w-fit rounded mx-auto py-2 px-4">
          Clique aqui
        </button>
      </div>
    </div>

    <!-- primeira seção estamos em florianópolis -->
    <div class="text-center my-4 max-w-md mx-auto px-4">
      <div class="w-10 h-10 mx-auto text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M253.924 127.592a64 64 0 1 0 64 64a64.073 64.073 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.037 32.037 0 0 1-32 32Z"/><path fill="currentColor" d="M376.906 68.515A173.922 173.922 0 0 0 108.2 286.426l120.907 185.613a29.619 29.619 0 0 0 49.635 0l120.911-185.613a173.921 173.921 0 0 0-22.747-217.911Zm-4.065 200.444l-118.916 182.55l-118.917-182.55c-36.4-55.879-28.593-130.659 18.563-177.817a141.92 141.92 0 0 1 200.708 0c47.156 47.158 54.962 121.938 18.562 177.817Z"/></svg>
      </div>
      <h1 class="text-2xl">Estamos em <br><strong>Florianópolis</strong></h1>
      <p class="my-2">
        Assistência técnica de aparelhos para estética e fisioterapia, das
        principais marcas do mercado, conta com profissionais treinados,
        certificados e especializados em avaliação, revisão e reparo.
      </p>
    </div>

    <!-- MAPA -->
    <div class="my-10 w-full h-96">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14150.029934798447!2d-48.50872185!3d-27.546756449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc8d083a06384076!2sRentalMed!5e0!3m2!1spt-BR!2sbr!4v1652121935510!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <!-- como funciona -->
    <div class="text-center my-4 max-w-md mx-auto">
      <div class="w-10 h-10 mx-auto text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492a3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0a2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/></g></svg>
      </div>
      <h1 class="text-2xl text-center">Como <br><strong>funciona</strong></h1>
    </div>

    <!-- carrousel -->
    <div class="mx-auto my-4 max-w-md">
      <ssr-carousel :slides-per-page="1" show-arrows show-dots >
        <template>

          <slide :index="1" class="m-auto bg-zinc-100 rounded h-48 flex items-center justify-center">
            <div class="w-2/3 flex flex-col items-center justify-center m-auto">
              <h2 class="font-bold text-center text-xl">Avaliação Técnica</h2>
              <p class="text-center">Você nos encaminhará o aparelho para avaliação técnica.</p>
            </div>
          </slide>

          <slide :index="2" class="m-auto bg-zinc-100 rounded h-48 flex items-center justify-center">
            <div class="w-2/3 flex flex-col items-center justify-center m-auto">
              <h2 class="font-bold text-center text-xl">Orçamento</h2>
              <p class="text-center">A RentalMed fará uma avaliação e passará um parecer com os problemas apresentados e com orçamento.</p>
            </div>
          </slide>

          <slide :index="3" class="m-auto bg-zinc-100 rounded h-48 flex items-center justify-center">
            <div class="w-2/3 flex flex-col items-center justify-center m-auto">
              <h2 class="font-bold text-center text-xl">Aprovação</h2>
              <p class="text-center">Se for necessária apenas a calibração, seu aparelho estará pronto de 1 a 2 dias após aprovação do orçamento.</p>
            </div>
          </slide>

          <slide :index="4" class="m-auto bg-zinc-100 rounded h-48 flex items-center justify-center">
            <div class="w-2/3 flex flex-col items-center justify-center m-auto">
              <h2 class="font-bold text-center text-xl">Serviço</h2>
              <p class="text-center">Se houver necessidade de reparo ou de troca de peças, o prazo de entrega será calculado com base na entrega das peças pela fábrica. Geralmente, este prazo varia entre 3 a 10 dias (após aprovação de orçamento).</p>
            </div>
          </slide>

        </template>

        <template #back-arrow>
          <div class="h-10 w-10 text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z"/></svg>
          </div>
        </template>

        <template #next-arrow>
          <div class="h-10 w-10 text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z"/></svg>
          </div>
        </template>

      </ssr-carousel>
    </div>

    <!-- principais serviços -->
    <div class="text-center my-4 max-w-md mx-auto">
      <div class="w-10 h-10 mx-auto text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M27.19 34a2.22 2.22 0 0 1-1.24-.38l-7.46-5a.22.22 0 0 0-.25 0l-7.46 5a2.22 2.22 0 0 1-3.38-2.41l2.45-8.64a.23.23 0 0 0-.08-.24l-7.06-5.55a2.22 2.22 0 0 1 1.29-4l9-.34a.23.23 0 0 0 .2-.15l3.1-8.43a2.22 2.22 0 0 1 4.17 0l3.1 8.43a.23.23 0 0 0 .2.15l9 .34a2.22 2.22 0 0 1 1.29 4L27 22.33a.22.22 0 0 0-.08.24l2.45 8.64A2.23 2.23 0 0 1 27.19 34Zm-8.82-7.42a2.21 2.21 0 0 1 1.23.42l7.46 5a.22.22 0 0 0 .34-.25l-2.45-8.64a2.21 2.21 0 0 1 .77-2.35l7.06-5.55a.22.22 0 0 0-.13-.4l-9-.34a2.22 2.22 0 0 1-2-1.46l-3.1-8.43a.22.22 0 0 0-.42 0L15.06 13a2.22 2.22 0 0 1-2 1.46l-9 .34a.22.22 0 0 0-.13.4L11 20.76a2.22 2.22 0 0 1 .77 2.35l-2.44 8.64a.21.21 0 0 0 .08.24a.2.2 0 0 0 .26 0l7.46-5a2.22 2.22 0 0 1 1.23-.37Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
      </div>
      <h1 class="text-2xl text-center">Principais <br><strong>serviços</strong></h1>
    </div>

    <!-- accordion services -->
    <div class=" flex flex-col gap-4 mx-auto my-4 rounded max-w-md">
      <details class="bg-zinc-100 rounded mx-auto w-full">
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Calibração de Equipamentos</summary>
        <div class="pt-1 pb-3 px-4 text-center">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

      <details class="bg-zinc-100 rounded mx-auto w-full">
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Manutenção e Reparo de Equipamentos
        </summary>
        <div class="pt-1 pb-3 px-4 text-center">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

      <details class="bg-zinc-100 rounded mx-auto w-full">
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Limpeza de Equipamentos</summary>
        <div class="pt-1 pb-3 px-4 text-center">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

      <details class="bg-zinc-100 rounded mx-auto w-full">
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Garantia</summary>
        <div class="pt-1 pb-3 px-4 text-center">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

    </div>

    <div class="bg-zinc-100 h-96 py-10">

      <div class="w-10 h-10 mx-auto text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10z"/><path d="m9 12l2 2l4-4"/></g></svg>
      </div>
      <h1 class="text-2xl text-center">Somos assistência <br><strong>multimarcas</strong></h1>

      <ssr-carousel :slides-per-page='3' show-arrows loop center paginate-by-slide class="my-10">
        <template  >

          <slide :index="1">
            <div class="bg-purple-600 rounded h-20 w-20 mx-auto"></div>
          </slide>

          <slide :index="2">
            <div class="bg-zinc-600 rounded h-20 w-20 mx-auto"></div>
          </slide>

          <slide :index="3">
            <div class="bg-zinc-600 rounded h-20 w-20 mx-auto"></div>
          </slide>

          <slide :index="4">
            <div class="bg-zinc-600 rounded h-20 w-20 mx-auto"></div>
          </slide>

          <slide :index="5">
            <div class="bg-zinc-600 rounded h-20 w-20 mx-auto"></div>
          </slide>

        </template>

        <template #back-arrow>
          <div class="h-10 w-10 text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z"/></svg>
          </div>
        </template>

        <template #next-arrow>
          <div class="h-10 w-10 text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z"/></svg>
          </div>
        </template>
      </ssr-carousel>

    </div>

    <!-- FAQ -->
    <div class="text-center my-4 max-w-md mx-auto">
      <div class="w-10 h-10 mx-auto text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="M10 8.484C10.5 7.494 11 7 12 7c1.246 0 2 .989 2 1.978s-.5 1.483-2 2.473V13m0 3.5v.5"/></g></svg>      </div>
      <h1 class="text-2xl text-center">Dúvidas <br><strong>frequentes</strong></h1>
    </div>

    <!-- accordion FAQ -->
    <div class=" flex flex-col gap-4 mx-auto my-4 rounded max-w-md">
      <details class="bg-zinc-100 rounded mx-auto w-full">
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Tem frete para assistência</summary>
        <div class="pt-1 pb-3 px-4 text-center">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

      <details class="bg-zinc-100 rounded mx-auto w-full">
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Manutenção e Reparo de Equipamentos
        </summary>
        <div class="pt-1 pb-3 px-4 text-center">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

      <details class="bg-zinc-100 rounded mx-auto w-full">
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Limpeza de Equipamentos</summary>
        <div class="pt-1 pb-3 px-4 text-center">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

      <details class="bg-zinc-100 rounded mx-auto w-full">
        <summary class="py-3 px-4 cursor-pointer select-none w-full outline-none">Garantia</summary>
        <div class="pt-1 pb-3 px-4 text-center">
          <p>Porchetta boudin hamburger ham hock. Sausage tongue porchetta prosciutto ground round bresaola tail.
            Brisket tri-tip bacon pork chop chislic, pig boudin jowl sausage chicken. Drumstick boudin pastrami ham hock
            jerky. </p>
          <button class="btn">Entrar em contato</button>
        </div>
      </details>

    </div>

    <!-- testimonials -->
    <div class="text-center my-4 max-w-md mx-auto">
      <div class="w-10 h-10 mx-auto text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M4.5 6.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0ZM6.75 3.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Zm5.687 11.645c.538.22 1.215.355 2.063.355c1.881 0 2.921-.668 3.469-1.434a2.916 2.916 0 0 0 .521-1.36a1.881 1.881 0 0 0 .01-.137V12.5A1.5 1.5 0 0 0 17 11h-4.63c.24.29.42.629.525 1H17a.5.5 0 0 1 .5.5v.054l-.005.05a1.918 1.918 0 0 1-.34.88c-.327.459-1.037 1.016-2.655 1.016c-.732 0-1.278-.114-1.687-.281c-.082.28-.201.596-.376.926ZM1.5 13a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2v.084c0 .01 0 .023-.002.04a3.618 3.618 0 0 1-.085.588c-.085.368-.254.86-.595 1.354C10.617 16.08 9.263 17 6.75 17c-2.513 0-3.867-.92-4.568-1.934a3.948 3.948 0 0 1-.67-1.807a2.589 2.589 0 0 1-.012-.175V13Zm1 .06v.018l.007.083a2.948 2.948 0 0 0 .498 1.336C3.492 15.201 4.513 16 6.75 16s3.258-.799 3.745-1.503a2.946 2.946 0 0 0 .498-1.336a.899.899 0 0 0 .006-.083l.001-.017V13a1 1 0 0 0-1-1H3.5a1 1 0 0 0-1 1v.06ZM13 7.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0ZM14.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Z"/></svg>
      </div>
      <h1 class="text-2xl text-center">O que nossas <br><strong>clientes dizem</strong></h1>
    </div>

    <!-- Testimonials -->
    <div class="mx-auto my-4 max-w-md">
      <ssr-carousel :slides-per-page="1" show-arrows show-dots >
        <template>

          <slide :index="1" class="m-auto bg-zinc-100 rounded h-48 flex items-center justify-center">
            <div class="w-2/3 flex flex-col items-center justify-center m-auto">
              <h2 class="font-bold text-center text-xl">Avaliação Técnica</h2>
              <p class="text-center">Você nos encaminhará o aparelho para avaliação técnica.</p>
            </div>
          </slide>

          <slide :index="2" class="m-auto bg-zinc-100 rounded h-48 flex items-center justify-center">
            <div class="w-2/3 flex flex-col items-center justify-center m-auto">
              <h2 class="font-bold text-center text-xl">Orçamento</h2>
              <p class="text-center">A RentalMed fará uma avaliação e passará um parecer com os problemas apresentados e com orçamento.</p>
            </div>
          </slide>

          <slide :index="3" class="m-auto bg-zinc-100 rounded h-48 flex items-center justify-center">
            <div class="w-2/3 flex flex-col items-center justify-center m-auto">
              <h2 class="font-bold text-center text-xl">Aprovação</h2>
              <p class="text-center">Se for necessária apenas a calibração, seu aparelho estará pronto de 1 a 2 dias após aprovação do orçamento.</p>
            </div>
          </slide>

          <slide :index="4" class="m-auto bg-zinc-100 rounded h-48 flex items-center justify-center">
            <div class="w-2/3 flex flex-col items-center justify-center m-auto">
              <h2 class="font-bold text-center text-xl">Serviço</h2>
              <p class="text-center">Se houver necessidade de reparo ou de troca de peças, o prazo de entrega será calculado com base na entrega das peças pela fábrica. Geralmente, este prazo varia entre 3 a 10 dias (após aprovação de orçamento).</p>
            </div>
          </slide>

        </template>

        <template #back-arrow>
          <div class="h-10 w-10 text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z"/></svg>
          </div>
        </template>

        <template #next-arrow>
          <div class="h-10 w-10 text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z"/></svg>
          </div>
        </template>

      </ssr-carousel>
    </div>

    <!-- Contact Form -->
    <div class="mx-auto py-8 bg-blue-600">
      <div class="w-10 h-10 mx-auto text-white">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413" clip-rule="evenodd"/></svg>      </div>
      <h1 class="text-2xl text-center text-white">O que nossas <br><strong>clientes dizem</strong></h1>

      <form class="px-8 my-4">

        <div class="input-wrapper group">
          <input type="text" name="name" class="form-input peer" placeholder=" " required="">
          <label for="name" class="form-label">Nome Completo</label>
        </div>

        <div class="input-wrapper group">
          <input type="email" name="email" class="form-input peer" placeholder=" " required="">
          <label for="email" class="form-label">E-mail</label>
        </div>

        <div class="input-wrapper group">
          <input type="whatsapp" name="whatsapp" class="form-input peer" placeholder=" " required="">
          <label for="whatsapp" class="form-label">WhatsApp</label>
        </div>

        <div class="input-wrapper ">
          <label for="brands" class="block mb-2 text-sm font-medium text-white ">Selecione a marca do seu aparellho</label>
          <select id="brands" class="bg-blue-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option v-for="brand in brands">{{brand.name}}</option>>
          </select>
        </div>

        <button type="submit"
          class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar
        </button>

      </form>

    </div>

    <div class="bg-zinc-800 h-48">

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Assistência Técnica para esteticistas - RentalMed',
      description:
        'Conheça o equipamento que os profissionais de alta performance estão usando!',
      keywords: 'Heccus Turbo RentalMed Ebook',
      url: 'https://rentalmed.com.br/heccusturbo',
      image: 'https://loja-wp-rentalmed.s3.amazonaws.com/wp-content/uploads/2022/04/TRILHA_Heccus_Landing_Page_Ebook.png',
      brands: [
        { name: 'HTM Eletrônica' },
        { name: 'KLD Biosistemas' },
        { name: 'CECBRA' },
        { name: 'DGM Eletrônica' },
        { name: 'Ibramed' },
        { name: 'Alben Life' },
        { name: 'Beauty Spell' },
        { name: 'Bioset' },
        { name: 'Icone Medical' },
      ],
    }
  },
  mounted(){
    this.$ga.page('/' + this.$route.name)
  },
  head() {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', property: 'title', name: 'title', content: this.title },
        {
          hid: 'description',
          property: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'keywords',
          property: 'keywords',
          name: 'keywords',
          content: this.keywords,
        },

        { hid: 'og-title', property: 'og:title', content: this.title },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.description,
        },
        { hid: 'og-url', property: 'og:url', content: this.url },

        { hid: 'og:image', property: 'og:image', content: this.image },
        {
          hid: 'og:image:image:secure_url',
          property: 'og:image:image:secure_url',
          content: this.image,
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/png',
        },
        { property: 'og:image:width', content: '300' },
        { property: 'og:image:height', content: '300' },

        { hid: 'og-type', property: 'og:type', content: 'website' },
      ],
    }
  },
  methods: {
    sendWhatsApp() {
      window.location.href =
        'https://wa.me/5548985050350?text=Estou+na+Landing+Page+do+%2AHeccus+Turbo%2A+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+este+aparelho.'
    },
    closeTab() {

    },
  },
  components: {},
}
</script>
