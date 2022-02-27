<template>
  <div class="col-sm-12 col-md-4 mb-3">
    <router-link
      :to="{
        name: 'producaoresumo',
        params: {
          id: label,
          title: label,
        },
      }"
    >
      <img
        class="article-last-image"
        :src="require(`@/assets/${propriedades.foto}`)"
      />
    </router-link>
    <div class="col-sm-12">
      <router-link
        :to="{
          name: 'producaoresumo',
          params: {
            id: label,
            title: label,
          },
        }"
      >
        <div class="article-last-title">
          {{ propriedades.title }}
        </div>
      </router-link>
      <a :href="propriedades.url" target="_blank">
        <div class="article-last-journal">
          {{ propriedades.journal }}
        </div>
      </a>
      <div>{{ propriedades.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Artigolast",
  props: ["propriedades", "label"],
  /* data: function() {
    return {};
  } */
};
</script>

<style></style>
