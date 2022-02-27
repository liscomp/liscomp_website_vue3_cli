<script>
import Noticiaspainel from "@/components/noticiaspainel.vue";
import { useProductsStore } from "@/stores/ProductsStore";

export default {
  name: "NoticiasPainel",
  components: {
    Noticiaspainel,
  },
  setup() {
    const ProductsStore = useProductsStore();
    return {
      noticiasOrdenados: ProductsStore.noticiasOrdenados,
    };
  },
};
</script>

<template>
  <div id="noticias" class="container noticias">
    <ol class="breadcrumb p-0">
      <router-link :to="{ name: 'home' }">
        <i class="fa-solid fa-home fa"></i>
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'noticias' }"
        >Notícias</router-link
      >
    </ol>
    <div class="row noticia">
      <div class="sessao w-100">Notícias</div>
      <div
        class="col-sm-12 col-md-6"
        v-for="noticia in noticiasOrdenados.slice(0, 3)"
        v-bind:key="noticia.title"
      >
        <Noticiaspainel
          v-bind:title="noticia.title"
          v-bind:foto="noticia.foto"
          v-bind:data="noticia.data"
        />
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
.noticia-avatar-circle {
  border-radius: 10%;
}
.noticia-avatar {
  width: 100%;
  height: 250px;
  margin: 0 auto;
  object-fit: cover;
  background-color: gray;
}
.noticia-titulo {
  font-weight: 700;
  font-size: 1.35em;
}
.noticia {
  margin-bottom: 20px;
}
</style>
