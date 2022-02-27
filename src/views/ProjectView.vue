<script>
import { useProductsStore } from "@/stores/ProductsStore";

export default {
  name: "ProjectView",
  setup() {
    const ProductsStore = useProductsStore();
    return {
      projetoEspecifico: ProductsStore.projetoEspecifico,
    };
  },
  computed: {
    project() {
      return this.projetoEspecifico(this.$route.params.id);
    },
  },
};
</script>

<template>
  <div id="projeto-resumo" class="container">
    <ol class="breadcrumb">
      <router-link :to="{ name: 'home' }">
        <i class="fa-solid fa-home fa"></i>
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link :to="{ name: 'projetos' }">Projetos</router-link>
      <span class="divisoria">></span>
      <router-link
        :to="{
          name: 'ProjectView',
          params: {
            id: project.title.toLowerCase().replace(/\s/g, '-'),
            title: project.title,
          },
        }"
        class="active"
      >
        {{ project.short_title }}
      </router-link>
    </ol>
    <h2 class="titulo">
      {{ project.title }}
    </h2>
    <div class="row">
      <img
        class="featured-image"
        :src="require(`/src/assets/projetos/${project.foto}`)"
      />
      <div class="col-sm-12 col-md-8">
        <div class="row">
          <div class="p-0 col-sm-12"></div>
          <div class="resumo col-sm-12">
            <h4 class="titulo">Resumo</h4>
            <div class="text-justify">
              {{ project.resumo }}
            </div>
          </div>
        </div>
      </div>
      <div class="info-quadro col-sm-12 col-md-4">
        <div class="info">
          <div class="info-items">
            <h5 class="titulo nome">Autores</h5>
            <p
              v-for="author in project.autores
                .split(';')
                .map((author) => author.trim())"
              :key="author"
            >
              {{ author }}
            </p>
          </div>
          <div class="info-items">
            <h5 class="titulo nome">Financiadores</h5>
            <div>{{ project.financiadores }}</div>
          </div>
          <div class="info-items">
            <h5 class="titulo nome">Edital</h5>
            <div>{{ project.edital }}</div>
          </div>
          <div class="info-items last-line">
            <h5 class="titulo nome">Período de Execução</h5>
            <div>{{ project.periodo }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
.resumo {
  margin-bottom: 20px;
}
.info-low {
  background-color: #f8f8f8;
  padding: 15px;
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
  width: 100%;
  height: 110px;
  margin-bottom: 10px;
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
.info-items p {
  margin: 0;
}
</style>
