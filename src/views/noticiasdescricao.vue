<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Noticiadescricao",
  data: function () {
    return {
      pagina: this.$route.params.id,
    };
  },
  setup() {
    const ProductsStore = useProductsStore();
    return {
      noticiaEspecifico: ProductsStore.noticiaEspecifico,
      artigoEspecifico: ProductsStore.artigoEspecifico,
    };
  },
  computed: {
    noticia() {
      return this.noticiaEspecifico(this.$route.params.id);
    },
    textosArmazenados() {
      return this.$data.textos;
    },
    componentFile() {
      return () => import(`@/components/noticias/${this.$route.params.id}.vue`);
    },
  },
  mounted() {
    this.$route.meta.title = this.$route.params.title;
  },
};
</script>

<template>
  <div class="container" id="noticias-descricao">
    <ol class="breadcrumb p-0">
      <router-link :to="{ name: 'HomeView' }">
        <i class="fa-solid fa-HomeView fa"></i>
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link :to="{ name: 'noticias' }">Notícias</router-link>
      <span class="divisoria">></span>
      <router-link
        :to="{
          name: 'producaoresumo',
          params: {
            id: noticia.title.toLowerCase().replace(/\s/g, '-'),
            title: noticia.title,
          },
        }"
        class="active"
      >
        {{ noticia.title }}
      </router-link>
    </ol>
    <div class="noticia">
      <div class="col-sm-12">
        <div class="noticia-descricao-title">
          {{ noticia.title }}
        </div>
      </div>
      <div class="col-sm-12">
        <img
          :src="require(`@/assets/equipe/${noticia.foto}`)"
          class="noticia-descricao-avatar noticia-descricao-avatar-cicle"
        />
      </div>
      <div class="col-sm-12">
        <div class="noticia-descricao-data">
          {{ noticia.data }}
        </div>
      </div>
      <div class="col-sm-12">
        <component v-bind:is="componentFile"></component>
      </div>
    </div>
  </div>
</template>

<style>
.about-us {
  font-weight: 700px;
  border-bottom: 2px solid black;
  margin-bottom: 15px;
  font-size: 1.5em;
  padding-left: 7px;
}
.about-us-text {
  padding-left: 10px;
  padding-right: 10px;
}
.noticia-descricao-avatar {
  width: 100%;
  height: 600px;
  object-fit: cover;
  background-color: gray;
  margin-bottom: 20px;
}
.noticia-descricao-title {
  font-weight: 700;
  font-size: 2.2em;
  margin-bottom: 20px;
}
.noticia {
  margin-bottom: 20px;
}
.noticia-descricao-data {
  font-size: 1.2em;
  margin-bottom: 20px;
}
</style>
