<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "NavBar",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleClick() {
      this.visible = false;
    },
  },
};
</script>

<template>
  <nav
    id="navbar-main"
    class="navbar justify-content-center navbar-light navbar-expand-lg sticky-top"
  >
    <div class="justify-content-center align-items-center container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <img
          class="logo d-block"
          src="@/assets/logos/1800x500-nobg.png"
          alt="banner-liscomp-1"
        />
      </router-link>

      <button
        class="navbar-toggler align-self-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-content"
        aria-controls="navbar-content"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="overflow-anchor: none"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="navbar-collapse collapse justify-content-md-center"
        id="navbar-content"
        :v-model="visible"
      >
        <div
          class="navbar-nav flex-wrap justify-content-sm-center"
          id="nav-list"
        >
          <router-link
            @click="handleClick"
            class="navegador-item"
            :to="{ name: 'equipe' }"
            >Equipe</router-link
          >

          <router-link
            @click="handleClick"
            class="navegador-item"
            :to="{ name: 'infraestrutura' }"
            >Infraestrutura</router-link
          >

          <router-link
            @click="handleClick"
            class="navegador-item"
            :to="{ name: 'labmovel' }"
            >Laboratório Móvel</router-link
          >

          <router-link
            @click="handleClick"
            class="navegador-item"
            :to="{ name: 'publicacoes' }"
            >Publicações</router-link
          >

          <router-link
            @click="handleClick"
            class="navegador-item"
            :to="{ name: 'projetos' }"
            >Projetos</router-link
          >

          <router-link
            @click="handleClick"
            class="navegador-item"
            :to="{ name: 'prestacaoservico' }"
            >Serviços</router-link
          >

          <router-link
            @click="handleClick"
            class="navegador-item"
            :to="{ name: 'parinternacionais' }"
            >Parceiros</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
#navbar-main {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  background-color: whitesmoke;

  #navbar-header {
    padding-right: 20px;
  }
  a {
    text-decoration: none;
  }

  .lab-nome {
    min-width: 420px !important;
  }
  a.lab-nome {
    text-decoration: none;
  }
  a.lab-nome:hover {
    color: black;
    text-decoration: none;
  }

  .navbar-toggler {
    position: absolute;
    border-style: none;
    line-height: 0.5;
    margin-left: 10px;
    padding: 10px;
    right: 5px;
  }
  .navbar-collapse {
    flex-grow: 0;
  }
  #navbar-header > button.navbar-toggler.collapsed.show {
    background-color: white;
  }
  .navbar-light .navbar-toggler-icon {
    background-image: url("@/assets/menu.png");
  }
  a.navegador-item {
    padding: 10px 10px;
    font-size: 16px;
    font-weight: 500;
    color: #036365;
    text-align: center;
    text-decoration: none;
  }
  .navbar-nav a:hover,
  .navbar-nav a:focus,
  .navbar-nav a.router-link-exact-active {
    color: white;
    background-color: #036365;
    transition: background 500ms;
  }
  .logo {
    width: 200px;
  }
}
</style>
