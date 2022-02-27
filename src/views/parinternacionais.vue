<script>
import Parceiro from "@/components/parceiro.vue";
import { usePeopleStore } from "@/stores/PeopleStore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Parcerias",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Parceiro,
  },
  setup() {
    const PeopleStore = usePeopleStore();
    return {
      parceiros: PeopleStore.parceriasOrdenados,
      faculdades: PeopleStore.pegarfaculdade,
    };
  },
};
</script>

<template>
  <div id="parcerias-internacionais" class="container">
    <ol class="breadcrumb">
      <router-link :to="{ name: 'home' }">
        <i class="fa-solid fa-home fa"></i>
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'parinternacionais' }"
        >Parcerias Internacionais</router-link
      >
    </ol>
    <h2 class="titulo">Parcerias</h2>
    <div id="pagenotfound container">
      <div
        class="pagina-nao-encontrada justify-content-center align-items-center d-flex flex-column"
      >
        <div class="erro text-center w-100">Página em construção</div>
        <div class="mensagem text-center w-100">
          Estamos trabalhando para oferecer uma site mais completo para você
        </div>
      </div>
    </div>
    <!-- <Parceiro
      v-for="parceiro in parceiros"
      v-bind:key="parceiro.nome"
      v-bind:nome="parceiro.nome"
      v-bind:e_mail="parceiro.e_mail"
      v-bind:foto="parceiro.foto"
      v-bind:cargo="parceiro.cargo"
      v-bind:faculdade="parceiro.faculdade"
      v-bind:sobre="parceiro.sobre"
    />
    <div class="logos row">
      <div
        v-for="faculdade in faculdades"
        v-bind:key="faculdade.sigla"
        class="col-12 col-sm-6 col-md-4 col-lg-3 align-items-center d-flex footer-item"
      >
        <a
          :href="faculdade.url"
          target="_blank"
          class="d-none-md d-block mx-auto"
        >
          <img
            class="rounded"
            :src="require(`@/assets/parceiros/logo-${faculdade.sigla}.png`)"
            :alt="faculdade.sigla"
            height="200px"
          />
        </a>
      </div>
    </div> -->
  </div>
</template>

<style>
home-section:first-of-type {
  padding-top: 50px;
}
.avatar-circle {
  border-radius: 10%;
}
.avatar {
  width: 250px;
  height: 250px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  object-fit: cover;
}
h6.cargo {
  color: rgb(0, 0, 0);
}
ul.network-icon {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
.profile {
  text-align: center;
  margin-bottom: 20px;
}
.about {
  padding-left: 10px;
}
ul.ul-edu li .description p {
  margin: 0;
}
ul.ul-edu li .description p.institution {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
}
.network-icon li {
  margin-right: 10px;
}
.big-icon {
  font-size: 2.5rem;
}
.parceiro {
  margin-bottom: 30px;
}
.cargo {
  margin-left: 10px;
}
.logos {
  margin-bottom: 30px;
}
</style>
