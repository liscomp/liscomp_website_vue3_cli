<template>
  <div id="prestacao-de-servicos">
    <div id="page-header" class="d-flex justify-content-center flex-column">
      <div>
        <h2 class="titulo">Serviços</h2>
      </div>
    </div>
    <!-- <ol class="breadcrumb">
      <router-link :to="{ name: 'HomeView' }">
        <i class="fa-solid fa-HomeView fa"></i>
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'prestacaoservico' }"
        >Prestação de Serviços</router-link
      >
    </ol> -->
    <div class="container inner-pages">
      <div id="pagenotfound container">
        <div
          class="pagina-nao-encontrada justify-content-center align-items-center d-flex flex-column"
        >
          <div class="erro text-center w-100">Página em construção</div>
          <div class="mensagem text-center w-100">
            Estamos trabalhando para oferecer uma site mais completo para você
          </div>
        </div>
      </div>
      <!-- <div class="row panel">
      <div class="col-sm-7">
        <div class="text-justify">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa esciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore VHS.
        </div>
      </div>
      <div class="col-sm-5">
        <img class="servico-imagem" src="@/assets/background-image.svg" />
      </div>
    </div>
    <div class="panel w-75 row">
      <div class="col-sm-12 panel-heading">
        <h3 class="panel-title titulo">
          <a
            href="#servico1"
            class="collapsed"
            aria-expanded="false"
            aria-controls="servico1"
            style="overflow-anchor: none"
          >
            Serviço 1
            <i class="fa-solid fa-angle-down fa fa-lg"></i>
          </a>
        </h3>
      </div>
      <div
        class="collapse"
        style="display: none"
        id="servico1"
        accordion="my-accordion"
        role="tabpanel"
      >
        <div class="col-sm-12 text-justify">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa esciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore VHS.
        </div>
      </div>
    </div>
    <div class="panel w-75 row">
      <div class="col-sm-12 panel-heading">
        <h3 class="panel-title titulo">
          <a
            href="#servico2"
            class="collapsed"
            aria-expanded="false"
            aria-controls="servico2"
            style="overflow-anchor: none"
          >
            Serviço 2
            <i class="fa-solid fa-angle-down fa fa-lg"></i>
          </a>
        </h3>
      </div>
      <div
        class="collapse"
        style="display: none"
        id="servico2"
        accordion="my-accordion"
        role="tabpanel"
      >
        <div class="col-sm-12 text-justify">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa esciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore VHS.
        </div>
      </div>
    </div>
    <div class="panel w-75">
      <div class="col-sm-12 panel-heading">
        <h3 class="panel-title titulo">
          <a
            href="#servico3"
            class="collapsed"
            aria-expanded="false"
            aria-controls="servico3"
            style="overflow-anchor: none"
          >
            Serviço 3
            <i class="fa-solid fa-angle-down fa fa-lg"></i>
          </a>
        </h3>
      </div>
      <div
        class="collapse"
        style="display: none"
        id="servico3"
        accordion="my-accordion"
        role="tabpanel"
      >
        <div class="col-sm-12 text-justify">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa esciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore VHS.
        </div>
      </div>
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Prestacaoservico",
  data() {
    return {};
  },
};
</script>

<style>
.big-icon {
  font-size: 1.5rem;
}
.panel-heading svg {
  float: right;
  transition: all 0.5s;
}
a.not-collapsed svg {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  transform: rotate(180deg);
}
.panel {
  margin-bottom: 30px;
}
.servico-imagem {
  width: 475px;
  height: 300px;
}
</style>
