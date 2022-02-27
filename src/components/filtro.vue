<template>
  <div>
    <div class="categorias">
      <h4 class="titulo">Anos</h4>
      <div v-for="ano in anos" v-bind:key="ano" class="filtro-item">
        <router-link
          :to="{
            name: 'producaofiltro',
            params: {
              id: ano,
              title: ano,
            },
            hash: '#producao',
          }"
          >{{ ano }}</router-link
        >
      </div>
    </div>
    <div class="categorias">
      <h4 class="titulo">Tópicos</h4>
      <div v-for="topico in topicos" v-bind:key="topico" class="filtro-item">
        <router-link
          :to="{
            name: 'producaofiltro',
            params: {
              id: topico,
              title: topico,
            },
            hash: '#producao',
          }"
          >{{ topico }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Filtro",
  props: ["anos", "topicos"],
};
</script>

<style>
.filtro-titulo {
  border-bottom: 2px solid black;
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 20px;
}
.filtro-item {
  border-bottom: 1px solid rgb(200, 200, 200);
  font-weight: 400;
  margin-bottom: 10px;
  padding-left: 10px;
}
.categorias {
  margin-bottom: 40px;
}
</style>
