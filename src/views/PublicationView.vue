<script>
import Artigo from "@/components/ArticleRow.vue";
import Filtro from "@/components/FilterArticle.vue";
import { useProductsStore } from "@/stores/ProductsStore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PublicationView",
  components: {
    Artigo,
    Filtro,
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
    <div v-if="nao_vazio_ano">
      <div id="page-header" class="d-flex justify-content-center flex-column">
        <div>
          <h2 class="title">Artigos</h2>
        </div>
        <div>
          <h2 class="category">{{ this.$route.params.id }}</h2>
        </div>
      </div>
      <div class="container inner-pages">
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
        <div class="row">
          <div class="col-sm-12 col-md-9">
            <Artigo
              v-for="artigo in artigosAnos(this.$route.params.id)"
              v-bind:key="artigo.id"
              v-bind:id="artigo.id"
              v-bind:title="artigo.title"
              v-bind:journal="artigo.journal"
              v-bind:doi="artigo.doi"
              v-bind:url="artigo.url"
              v-bind:date="artigo.date"
              v-bind:authors="artigo.authors"
              v-bind:topics="artigo.topics"
              v-bind:abstract="artigo.abstract"
              v-bind:imgUrl="artigo.imgUrl"
            />
          </div>
          <div class="col-sm-12 col-md-3">
            <Filtro
              v-bind:anos="anosPublicacao"
              v-bind:topicos="topicosPublicacao"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="nao_vazio_topico">
      <div id="page-header" class="d-flex justify-content-center flex-column">
        <div>
          <h2 class="title">Artigos</h2>
        </div>
        <div>
          <h2 class="category">{{ this.$route.params.id }}</h2>
        </div>
      </div>
      <div class="container inner-pages">
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
        <div class="row">
          <div class="col-sm-12 col-md-9">
            <Artigo
              v-for="artigo in artigosTopicos(this.$route.params.id)"
              v-bind:key="artigo.id"
              v-bind:id="artigo.id"
              v-bind:title="artigo.title"
              v-bind:journal="artigo.journal"
              v-bind:doi="artigo.doi"
              v-bind:url="artigo.url"
              v-bind:date="artigo.date"
              v-bind:authors="artigo.authors"
              v-bind:topics="artigo.topics"
              v-bind:abstract="artigo.abstract"
              v-bind:imgUrl="artigo.imgUrl"
            />
          </div>
          <div class="col-sm-12 col-md-3">
            <Filtro
              v-bind:anos="anosPublicacao"
              v-bind:topicos="topicosPublicacao"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div id="page-header" class="d-flex justify-content-center flex-column">
        <div>
          <h2 class="title">Artigos</h2>
        </div>
      </div>
      <div class="container inner-pages">
        <!-- <ol class="breadcrumb">
        <RouterLink to="/">
          <i class="fa-solid fa-home fa"></i> Home
        </RouterLink>
        <span class="divisoria">></span>
        <RouterLink to="/publicacoes" class="active">
          Produção Científica
        </RouterLink>
      </ol> -->
        <div class="row">
          <div class="col-sm-12 col-md-9">
            <Artigo
              v-for="artigo in artigosOrdenados"
              v-bind:key="artigo.id"
              v-bind:id="artigo.id"
              v-bind:title="artigo.title"
              v-bind:journal="artigo.journal"
              v-bind:doi="artigo.doi"
              v-bind:url="artigo.url"
              v-bind:date="artigo.date"
              v-bind:authors="artigo.authors"
              v-bind:topics="artigo.topics"
              v-bind:abstract="artigo.abstract"
              v-bind:imgUrl="artigo.imgUrl"
            />
          </div>
          <div class="col-sm-12 col-md-3">
            <Filtro
              v-bind:anos="anosPublicacao"
              v-bind:topicos="topicosPublicacao"
            />
          </div>
        </div>
      </div>
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
