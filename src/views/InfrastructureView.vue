<script>
// @ is an alias to @
import Equipamento from "@/components/EquipCard.vue";
import { mapState } from "pinia";
import { useProductsStore } from "../stores/ProductsStore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Infraestrutura",
  components: {
    Equipamento,
  },
  computed: {
    ...mapState(useProductsStore, {
      equipamentos: "equipment",
    }),
  },
};
</script>

<template>
  <div id="infraestrutura">
    <div id="page-header" class="d-flex justify-content-center flex-column">
      <div>
        <h2 class="title">Infraestrutura</h2>
      </div>
    </div>
    <!-- <ol class="breadcrumb">
      <RouterLink to="/"> <i class="fa-solid fa-home fa"></i> Home </RouterLink>
      <span class="divisoria">></span>
      <RouterLink class="active" to="/infraestrutura"
        >Infraestrutura</RouterLink
      >
    </ol> -->
    <div class="container inner-pages">
      <div class="row">
        <Equipamento
          v-for="equipamento in equipamentos"
          v-bind:key="equipamento.nome"
          v-bind:nome="equipamento.nome"
          v-bind:descricao="equipamento.descricao"
          v-bind:foto="equipamento.foto"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
