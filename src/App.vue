<script>
/* eslint-disable no-unused-vars */
import NavBar from "@/components/NavBar.vue";
import Rodape from "@/components/FooterComponent.vue";
import { firebaseApp } from "@/firebase";
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    NavBar,
    Rodape,
  },
};
</script>

<template>
  <NavBar />

  <main>
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <Rodape />
</template>

<style lang="scss">
#app {
  #page-header {
    min-height: 210px;
    background-color: #3ef5d01c;
  }
  .inner-pages {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  body {
    color: black;
    background-color: #ffffff;
  }
  a {
    color: #000000;
    text-decoration: none;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  a:hover {
    color: #028f8f;
    text-decoration: none;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  .sessao {
    font-size: 2.5em;
    border-bottom: 2px solid black;
    font-weight: 700;
    margin-bottom: 50px;
  }
  .preview-image {
    width: 100%;
    height: 175px;
    min-height: 110px;
    object-fit: cover;
  }
  ol.breadcrumb {
    margin-top: 30px;
    margin-bottom: 20px;
    background-color: #ffffff;
  }
  ol.breadcrumb .divisoria {
    margin-right: 5px;
    margin-left: 5px;
  }
  ol.breadcrumb a.active {
    color: black !important;
  }
  ol.breadcrumb a {
    color: #00a1a1 !important;
    font-weight: 700;
  }
  .title {
    font-weight: bold;
    color: #036365;
  }
  h1.title {
    font-size: 1.5em;
    border-bottom: none;
    line-height: var(--bs-body-line-height);
    margin: 0px;
    padding: 0px;
  }
  h2.title {
    font-size: 60px;
    text-align: center;
    line-height: var(--bs-body-line-height);
    margin: 0;
  }
  h2.category {
    font-size: 30px;
    text-align: center;
    font-style: italic;
    line-height: var(--bs-body-line-height);
    margin: 0;
  }

  h3.title {
    font-size: 40px;
    line-height: var(--bs-body-line-height);
    margin: 0px;
    text-align: center;
    padding: 10px;
  }
  h4.title {
    font-size: 2em;
    line-height: var(--bs-body-line-height);
    margin: 0px;
    text-align: center;
  }
  h5.title {
    font-size: 1.2em;
    line-height: var(--bs-body-line-height);
    margin: 0px;
  }
  h6.title {
    font-size: 1em;
    line-height: var(--bs-body-line-height);
    margin-bottom: 0px;
  }
  .title.nome {
    border: none;
    padding-left: 0px;
  }

  .pagina-nao-encontrada {
    height: 800px;
  }

  .erro {
    font-weight: 700;
    font-size: 60px;
    margin-bottom: 30px;
  }
  .mensagem {
    font-weight: 400;
    font-size: 30px;
  }

  .mensagem > a.router-link-active {
    color: #007bff !important;
  }
}
</style>
