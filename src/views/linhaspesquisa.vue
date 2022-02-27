<template>
  <div class="cointainer linhas-de-pesquisa">
    <ol class="breadcrumb p-0">
      <router-link :to="{ name: 'HomeView' }">
        <i class="fa-solid fa-HomeView fa"></i>
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'producao' }"
        >Produção Científica</router-link
      >
    </ol>
  </div>
</template>

<script>
export default {
  name: "LinhasPesquisa",
};
</script>

<style></style>
