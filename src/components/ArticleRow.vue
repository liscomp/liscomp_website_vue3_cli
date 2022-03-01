<template>
  <div class="row mb-5">
    <div class="col-sm-4 col-xl-3 mb-3">
      <router-link
        :to="{
          name: 'producaoresumo',
          params: {
            id: id,
            title: id,
          },
        }"
      >
        <img class="preview-image" :src="`${imgUrl}`" v-if="imgUrl != ''" />
        <img
          class="preview-image"
          src="https://firebasestorage.googleapis.com/v0/b/liscompwebsite.appspot.com/o/background-image.svg?alt=media&token=d4f93b17-c81e-448b-a1a4-470d43513ab1"
          v-else
        />
      </router-link>
    </div>
    <div class="col-sm-8 col-xl-9">
      <router-link
        :to="{
          name: 'producaoresumo',
          params: {
            id: id,
            title: id,
          },
        }"
      >
        <div class="article-title">{{ title }}</div>
      </router-link>
      <div class="article-autores">
        <span
          v-for="author in authors.split(';').map((author) => author.trim())"
          :key="author"
        >
          {{ author }} &nbsp;
        </span>
      </div>
      <div>
        <p v-if="journal" class="m-0">Publicado na revista: {{ journal }}</p>
        <p v-if="date" class="m-0">Data: {{ date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ArticleRow",
  props: [
    "id",
    "title",
    "journal",
    "doi",
    "url",
    "date",
    "authors",
    "topics",
    "abstract",
    "imgUrl",
  ],
};
</script>

<style>
.preview {
  overflow: hidden;
}
</style>
