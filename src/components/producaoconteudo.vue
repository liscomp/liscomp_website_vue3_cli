<template>
  <div class="row">
    <div class="col-sm-12 col-md-9">
      <Artigo
        v-for="artigo in artigos"
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
      <Filtro v-bind:anos="anosPublicacao" v-bind:topicos="topicosPublicacao" />
    </div>
  </div>
</template>

<script>
import Artigo from "@/components/ArticleRow.vue";
import Filtro from "@/components/filtro.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Producaoconteudo",
  props: ["artigos", "anosPublicacao", "topicosPublicacao"],
  components: {
    Artigo,
    Filtro,
  },
};
</script>

<style></style>
