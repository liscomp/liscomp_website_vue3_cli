<script>
import ProjetoCards from "@/components/projetocards.vue";
import { useProductsStore } from "../stores/ProductsStore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projetos",
  components: {
    ProjetoCards,
  },
  setup() {
    const ProductsStore = useProductsStore();
    return {
      projetos: ProductsStore.projects,
    };
  },
};
</script>

<template>
  <div id="projetos" class="container">
    <ol class="breadcrumb">
      <router-link :to="{ name: 'home' }">
        <i class="fa-solid fa-home fa"></i>
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'projetos' }"
        >Projetos</router-link
      >
    </ol>
    <h2 class="titulo">Projetos</h2>
    <div class="row">
      <ProjetoCards
        v-for="projeto in projetos"
        v-bind:key="projeto.id"
        v-bind:id="projeto.id"
        v-bind:title="projeto.title"
        v-bind:short_title="projeto.short_title"
        v-bind:imgUrl="projeto.imgUrl"
      />
    </div>
  </div>
</template>

<style></style>
