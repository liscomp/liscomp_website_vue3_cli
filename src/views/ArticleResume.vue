<script>
/* eslint-disable no-unused-vars */
import Artigolast from "@/components/artigolast.vue";
import { reactive, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getArticle } from "@/firebase";

export default {
  name: "ProducaoResumo",
  setup() {
    const route = useRoute();
    const articleId = computed(() => route.params.id);
    const specificArticle = reactive({
      id: "",
      title: "",
      journal: "",
      doi: "",
      url: "",
      authors: "",
      date: "",
      topics: "",
      abstract: "",
      imgUrl: "",
    });
    onMounted(async () => {
      const article = await getArticle(articleId.value);
      specificArticle.id = article.id;
      specificArticle.title = article.title;
      specificArticle.journal = article.journal;
      specificArticle.doi = article.doi;
      specificArticle.url = article.url;
      specificArticle.authors = article.authors;
      specificArticle.date = article.date;
      specificArticle.topics = article.topics;
      specificArticle.abstract = article.abstract;
      specificArticle.imgUrl = article.imgUrl;
    });
    return {
      specificArticle,
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Artigolast,
  },
};
</script>

<template>
  <div id="producao-resumo" class="container">
    <h2 class="title">
      {{ specificArticle.title }}
    </h2>
    <div class="row">
      <img class="featured-image" :src="`${specificArticle.imgUrl}`" />
      <div class="col-sm-12 col-md-8">
        <h4 class="title">Resumo</h4>
        <div class="text-justify">
          {{ specificArticle.abstract }}
        </div>
      </div>
      <div class="info-quadro col-sm-12 col-md-4">
        <div class="info">
          <div class="info-items">
            <h5 class="titulo nome">Autores</h5>
            <p
              v-for="author in specificArticle.authors.split(';')"
              :key="author"
              class="mb-0 text-nowrap"
            >
              {{ author }}
            </p>
          </div>
          <div class="info-items">
            <h5 class="titulo nome">Data da Publicação</h5>
            <div>
              {{ specificArticle.date }}
            </div>
          </div>
          <div class="info-items">
            <h5 class="titulo nome">Revista</h5>
            <div>
              {{ specificArticle.journal }}
            </div>
          </div>
          <div class="info-items last-line">
            <h5 class="titulo nome">Tópicos</h5>
            <div
              v-for="topic in specificArticle.topics.split(';')"
              :key="topic"
              class="m-0"
            >
              {{ topic }}
            </div>
          </div>
        </div>
        <div class="info">
          <div class="info-items last-line">
            <h5 class="titulo nome">Links</h5>
            <a :href="specificArticle.url" class="info-link" target="_blank"
              ><i class="fa-solid fa-external-link fa fa-1x"></i> Site da
              revista</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="about-us">Últimas publicações</div>
    <div class="row article-last">
      <Artigolast
        v-for="artigo in artigosOrdenados.slice(0, 3)"
        v-bind:key="artigo.id"
        v-bind:label="artigo.id"
        v-bind:propriedades="artigo"
      />
    </div> -->
  </div>
</template>

<style>
.title {
  text-transform: capitalize;
}
.resume-title {
  font-size: 1.5em;
  font-weight: 700;
  border-bottom: 2px solid black;
  margin-bottom: 30px;
}
.info {
  background-color: #f8f8f8;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 10px;
  margin-bottom: 15px;
}
.info-quadro {
  margin-top: 26px;
}
.info-items {
  border-bottom: 1px solid #e1e1e1;
  padding: 10px 0px 0px 10px;
}
.info-items div {
  margin-bottom: 7px;
}
.last-line {
  border-style: none;
}
.info-items .info-items-title {
  font-size: 1.2em;
  font-weight: 700;
}
.article-last-image {
  width: 70%;
  height: 175px;
  margin-bottom: 10px;
  object-fit: cover;
  margin-left: 15%;
  margin-right: 15%;
}
.article-last-title {
  font-weight: 700;
  font-size: 1.1em;
}
.article-last-journal {
  font-weight: 300;
  color: #8f8f8f;
}
.article-last {
  margin-bottom: 30px;
}
.about-us {
  margin-top: 50px;
  font-weight: 700px;
  border-bottom: 2px solid black;
  margin-bottom: 15px;
  font-size: 1.5em;
  padding-left: 7px;
}

.featured-image {
  width: 100%;
  max-height: 300px;
  min-height: 100px;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 20px;
  object-fit: cover;
}
</style>
