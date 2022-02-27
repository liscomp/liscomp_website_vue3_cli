<template>
  <div class="row parceiro">
    <div class="col-12 col-lg-4 perfil">
      <div class="profile">
        <img
          class="avatar avatar-circle"
          :src="require(`@/assets/parceiros/${foto}`)"
        />
        <div class="portrait-title">
          <h4 class="titulo nome">{{ nome }}</h4>
          <h6 class="cargo">{{ cargo }}</h6>
          <h6 class="cargo">{{ faculdade.nome }}</h6>
          <ul class="network-icon" aria-hidden="true">
            <li>
              <a :href="email_completo">
                <i class="fa-solid fa-envelope fa fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="cols-12 col-lg-8 about">
      <h5 class="titulo">Parceria</h5>
      <div class="row">
        <div class="cols-12 text-justify">
          {{ sobre }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Parceiro",
  props: ["nome", "cargo", "foto", "email", "faculdade", "sobre"],
  data: function () {
    return {
      email_completo: "mailto:%20" + this.email,
    };
  },
};
</script>

<style></style>
