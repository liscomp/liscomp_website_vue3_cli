<template>
  <div id="filter">
    <div class="categorias">
      <h4 class="title">Anos</h4>
      <div class="box">
        <div
          v-for="ano in anos.slice(0, 1)"
          v-bind:key="ano"
          class="filtro-item first"
        >
          <router-link
            :to="{
              name: 'producaofiltro',
              params: {
                id: ano,
                title: ano,
              },
            }"
            >{{ ano }}</router-link
          >
        </div>
        <div v-for="ano in anos.slice(1)" v-bind:key="ano" class="filtro-item">
          <router-link
            :to="{
              name: 'producaofiltro',
              params: {
                id: ano,
                title: ano,
              },
            }"
            >{{ ano }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="categorias">
      <h4 class="title">Tópicos</h4>
      <div class="box">
        <div
          v-for="topico in topicos.slice(0, 1)"
          v-bind:key="topico"
          class="filtro-item first"
        >
          <router-link
            :to="{
              name: 'producaofiltro',
              params: {
                id: topico,
                title: topico,
              },
            }"
            >{{ topico }}</router-link
          >
        </div>
        <div
          v-for="topico in topicos.slice(1)"
          v-bind:key="topico"
          class="filtro-item"
        >
          <router-link
            :to="{
              name: 'producaofiltro',
              params: {
                id: topico,
                title: topico,
              },
            }"
            >{{ topico }}</router-link
          >
        </div>
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
  border-top: 1px solid #036365b6;
  font-weight: 400;
  text-align: center;
  padding: 5px;
}
.first {
  border-top: 0px;
}
.categorias {
  margin-bottom: 40px;
}
.box {
  width: 100%;
  border-bottom: 4px solid #036365b6;
  border-top: 4px solid #036365b6;
  border-right: 2px solid #036365b6;
  border-left: 2px solid #036365b6;
  border-radius: 25px;
}
</style>
