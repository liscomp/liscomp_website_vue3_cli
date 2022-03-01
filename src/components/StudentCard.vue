<template>
  <div class="col-12 col-md-6 col-lg-4 col-xl-3 aluno">
    <div class="profile">
      <img class="avatar avatar-circle" v-bind:src="`${imgUrl}`" />
      <div class="portrait-title text-center">
        <h5 class="title nome">{{ name }}</h5>
        <h6 class="cargo">{{ scholarship }}</h6>
        <h6 class="cargo">{{ college }}</h6>
        <ul
          class="network-icon d-flex justify-content-center"
          aria-hidden="true"
        >
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

<script scoped>
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

<style lang="scss" scoped>
.aluno {
  padding: 20px;
  .profile {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    height: 100%;
    border-radius: 15px;
    padding: 10px;
  }
}
</style>
