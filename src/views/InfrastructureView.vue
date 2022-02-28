<script>
// @ is an alias to @
import Equipamento from "@/components/equipamento.vue";
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
      <Equipamento
        v-for="equipamento in equipamentos"
        v-bind:key="equipamento.nome"
        v-bind:nome="equipamento.nome"
        v-bind:descricao="equipamento.descricao"
        v-bind:foto="equipamento.foto"
      />
    </div>
  </div>
</template>

<style>
.home-section:first-of-type {
  padding-top: 50px;
}
.avatar-circle {
  border-radius: 10%;
}
.avatar {
  width: 250px;
  height: 250px;
  margin: 0 auto;
  object-fit: cover;
  background-color: gray;
}

.profile {
  text-align: center;
}

.descricao {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.descricao-text {
  font-size: 1.1em;
}

.equipamento {
  margin-bottom: 50px;
}

.name-equip {
  font-size: 2em;
  margin: 20px 0 10px 0;
}
</style>
