<script>
/* eslint-disable no-unreachable */
import Artigo from "@/components/ArticleRow.vue";
import Filtro from "@/components/FilterArticle.vue";
import { useLoadArticles } from "@/firebase";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PublicationView",
  components: {
    Artigo,
    Filtro,
  },
  setup() {
    const articles = useLoadArticles();
    return {
      articles,
    };
  },
  methods: {
    orderArticles: (articles) => {
      return articles.sort(function (a, b) {
        if (new Date(a.date) > new Date(b.date)) {
          return -1;
        }
        if (new Date(a.date) < new Date(b.date)) {
          return 1;
        }
        return 0; // a must be equal to b
      });
    },
    articlesYear: (articles, year) => {
      return articles.filter(
        (articles) => new Date(articles.date).getFullYear() == year
      );
    },
    articlesTopic: (articles, topic) => {
      return articles.filter((articles) =>
        articles.topics
          .split(";")
          .map((topic) => topic.trim())
          .includes(topic)
      );
    },
  },
  computed: {
    articleSorted() {
      return this.orderArticles(this.articles);
    },
    articlesInThisYear() {
      return this.articlesYear(this.articleSorted, this.$route.params.id);
    },
    articlesInThisTopic() {
      return this.articlesTopic(this.articleSorted, this.$route.params.id);
    },
    takeYears() {
      return Array.from(
        // eslint-disable-next-line prettier/prettier
        new Set(this.articleSorted.map((articles) => new Date(articles.date).getFullYear()))
      )
        .sort()
        .reverse();
    },
    takeTopics() {
      return Array.from(
        new Set(
          [].concat(
            ...this.articleSorted.map((articles) =>
              articles.topics.split(";").map((topic) => topic.trim())
            )
          )
        )
      ).sort();
    },
  },
};
</script>

<template>
  <div id="producao">
    <div v-if="articlesInThisYear.length != 0">
      <div id="page-header" class="d-flex justify-content-center flex-column">
        <div>
          <router-link
            class="active"
            :to="{
              name: 'publicacoes',
            }"
          >
            <h2 class="title">Artigos</h2>
          </router-link>
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
          <div class="col-sm-12 col-md-9 col-xl-10">
            <Artigo
              v-for="artigo in articlesInThisYear"
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
          <div class="col-sm-12 col-md-3 col-xl-2">
            <Filtro v-bind:anos="takeYears" v-bind:topicos="takeTopics" />
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="articlesInThisTopic.length != 0">
      <div id="page-header" class="d-flex justify-content-center flex-column">
        <router-link
          class="active"
          :to="{
            name: 'publicacoes',
          }"
        >
          <h2 class="title">Artigos</h2>
        </router-link>
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
          <div class="col-sm-12 col-md-9 col-xl-10">
            <Artigo
              v-for="artigo in articlesInThisTopic"
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
          <div class="col-sm-12 col-md-3 col-xl-2">
            <Filtro v-bind:anos="takeYears" v-bind:topicos="takeTopics" />
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
          <div class="col-sm-12 col-md-9 col-xl-10">
            <Artigo
              v-for="artigo in articleSorted"
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
          <div class="col-sm-12 col-md-3 col-xl-2">
            <Filtro v-bind:anos="takeYears" v-bind:topicos="takeTopics" />
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
