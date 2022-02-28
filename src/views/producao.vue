<script>
import Producaoconteudo from "@/components/producaoconteudo.vue";
import { useProductsStore } from "@/stores/ProductsStore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "producao",
  components: {
    Producaoconteudo,
  },
  setup() {
    const ProductsStore = useProductsStore();
    return {
      artigosOrdenados: ProductsStore.artigosOrdenados,
      anosPublicacao: ProductsStore.pegarAnos,
      topicosPublicacao: ProductsStore.pegarTopicos,
      artigosAnos: ProductsStore.artigosAnos,
      artigosTopicos: ProductsStore.artigosTopicos,
    };
  },
  computed: {
    nao_vazio_ano() {
      if (this.artigosAnos(this.$route.params.id).length != 0) {
        return true;
      } else {
        return false;
      }
    },
    nao_vazio_topico() {
      if (this.artigosTopicos(this.$route.params.id).length != 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<template>
  <div id="producao">
    <div class="container" v-if="nao_vazio_ano">
      <!-- <ol class="breadcrumb">
        <RouterLink to="/">
          <i class="fa-solid fa-home fa"></i> Home
        </RouterLink>
        <span class="divisoria">></span>
        <RouterLink to="/publicacoes"> Produção Científica </RouterLink>
        <span class="divisoria">></span>
        <router-link
          class="active"
          :to="{
            name: 'publicacoes',
            params: {
              id: this.$route.params.id,
              title: this.$route.params.id,
            },
          }"
        >
          <div>{{ this.$route.params.id }}</div>
        </router-link>
      </ol> -->

      <h2 class="titulo">Artigos: {{ this.$route.params.id }}</h2>
      <Producaoconteudo
        :artigos="artigosAnos(this.$route.params.id)"
        :anosPublicacao="anosPublicacao"
        :topicosPublicacao="topicosPublicacao"
      />
    </div>

    <div class="container" v-else-if="nao_vazio_topico">
      <!-- <ol class="breadcrumb">
        <RouterLink to="/">
          <i class="fa-solid fa-home fa"></i> Home
        </RouterLink>
        <span class="divisoria">></span>
        <RouterLink to="/publicacoes"> Produção Científica </RouterLink>
        <span class="divisoria">></span>
        <router-link
          class="active"
          :to="{
            name: 'publicacoes',
            params: {
              id: this.$route.params.id,
              title: this.$route.params.id,
            },
          }"
        >
          <div>{{ this.$route.params.id }}</div>
        </router-link>
      </ol> -->

      <h2 class="titulo">Artigos: {{ this.$route.params.id }}</h2>
      <Producaoconteudo
        :artigos="artigosTopicos(this.$route.params.id)"
        :anosPublicacao="anosPublicacao"
        :topicosPublicacao="topicosPublicacao"
      />
    </div>

    <div class="container" v-else>
      <!-- <ol class="breadcrumb">
        <RouterLink to="/">
          <i class="fa-solid fa-home fa"></i> Home
        </RouterLink>
        <span class="divisoria">></span>
        <RouterLink to="/publicacoes" class="active">
          Produção Científica
        </RouterLink>
      </ol> -->

      <h2 class="titulo">Artigos</h2>
      <Producaoconteudo
        :artigos="artigosOrdenados"
        :anosPublicacao="anosPublicacao"
        :topicosPublicacao="topicosPublicacao"
      />
    </div>
  </div>
</template>

<style>
.pos,
.article-title {
  font-size: 1.3em;
  font-weight: 700;
  text-transform: capitalize;
}
.article-autores {
  font-weight: 300;
  color: rgb(77, 77, 77);
}
</style>
