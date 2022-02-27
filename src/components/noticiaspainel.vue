<template>
  <div class="noticia">
    <router-link
      :to="{
        name: 'noticiasdescricao',
        params: {
          id: title.toLowerCase().replace(/\s/g, '-'),
          title: title,
        },
        hash: '#app',
      }"
    >
      <div class="col-sm-12">
        <img
          :src="require(`@/assets/equipe/${foto}`)"
          class="noticia-avatar noticia-avatar-cicle"
        />
      </div>
      <div class="col-sm-12">
        <div class="noticia-titulo">{{ title }}</div>
      </div>
    </router-link>
    <div class="col-sm-12">
      <div class="noticia-data">{{ data }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "noticias",
  props: ["title", "foto", "data"],
};
</script>

<style></style>
