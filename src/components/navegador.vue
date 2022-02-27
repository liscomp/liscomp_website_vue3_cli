<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navegador",
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
  <header>
    <nav
      id="navbar-main"
      class="navbar justify-content-center navbar-light navbar-expand-xl"
    >
      <div class="justify-content-center align-items-center">
        <div
          class="justify-content-center d-flex align-items-end"
          id="navbar-header"
        >
          <router-link class="navbar-brand" :to="{ name: 'home' }">
            <img
              class="logo-md d-none d-md-block"
              :src="require(`@/assets/logos/site-banner-nobg.png`)"
            />

            <img
              class="logo-sm d-none d-sm-block d-md-none"
              src="@/assets/logos/1800x500-nobg.png"
              alt="banner-liscomp-1"
            />
            <img
              class="logo d-block d-sm-none"
              src="@/assets/logos/1800x500-nobg.png"
              alt="banner-liscomp-1"
            />
          </router-link>
          <router-link
            class="d-none d-md-block lab-nome"
            :to="{ name: 'home' }"
          >
            <h1 class="titulo text-left">
              Laboratório de Instrumentação <br />
              e Simulação Computacional <br />
              Científicas Aplicadas
            </h1>
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
        </div>

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
  </header>
</template>

<style>
#navbar-main {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  background-color: whitesmoke;
  min-height: 130px;
}
#navbar-header {
  padding-bottom: 10px;
  padding-right: 20px;
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
  font-weight: 700;
  color: #036365;
  text-transform: uppercase;
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
.logo-md {
  width: 200px;
}
.logo-sm {
  height: 80px;
}
.logo {
  height: 55px;
}
</style>
