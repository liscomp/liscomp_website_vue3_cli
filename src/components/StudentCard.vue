<template>
  <div class="col-12 col-lg-4 aluno">
    <div class="profile">
      <img class="avatar avatar-circle" v-bind:src="`${imgUrl}`" />
      <div class="portrait-title">
        <h5 class="titulo nome">{{ name }}</h5>
        <h6 class="cargo">{{ scholarship }}</h6>
        <h6 class="cargo">{{ college }}</h6>
        <ul class="network-icon" aria-hidden="true">
          <li>
            <a :href="'mailto:%20' + email">
              <i class="fa-solid fa-envelope fa fa-2x"></i>
            </a>
          </li>
          <li>
            <a :href="lattes" target="_blank" rel="noopener">
              <i class="ai ai-lattes fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "StudentCard",
  props: [
    "name",
    "scholarship",
    "abbreviation",
    "email",
    "lattes",
    "college",
    "imgUrl",
  ],
};
</script>

<style></style>
