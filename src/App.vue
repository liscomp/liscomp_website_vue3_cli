<script>
/* eslint-disable no-unused-vars */
import Navegador from "@/components/navegador.vue";
import Rodape from "@/components/rodape.vue";
import { firebaseApp } from "@/firebase";
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    Navegador,
    Rodape,
  },
};
</script>

<template>
  <Navegador />

  <main>
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <Rodape />
</template>

<style>
#app body {
  color: black;
  background-color: #ffffff;
}
#app a {
  color: #000000;
  text-decoration: none;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
#app a:hover {
  color: #028f8f;
  text-decoration: none;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
#app .sessao {
  font-size: 2.5em;
  border-bottom: 2px solid black;
  font-weight: 700;
  margin-bottom: 50px;
}
#app .preview-image {
  width: 100%;
  height: 175px;
  min-height: 110px;
  object-fit: cover;
}
#app ol.breadcrumb {
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: #ffffff;
}
#app ol.breadcrumb .divisoria {
  margin-right: 5px;
  margin-left: 5px;
}
#app ol.breadcrumb a.active {
  color: black !important;
}
#app ol.breadcrumb a {
  color: #00a1a1 !important;
  font-weight: 700;
}
#app .titulo {
  font-weight: 700;
  border-bottom: 2px solid #036365;
  padding-bottom: 5px;
  padding-left: 15px;
  color: #036365;
}
#app h1.titulo {
  font-size: 1.5em;
  border-bottom: none;
  margin: 0px;
  padding: 0px;
}
#app h2.titulo {
  font-size: 1.8em;
  margin-bottom: 40px;
}
#app h3.titulo {
  font-size: 1.6em;
  margin-bottom: 30px;
}
#app h4.titulo {
  font-size: 1.4em;
  margin-bottom: 20px;
}
#app h5.titulo {
  font-size: 1.2em;
  margin-bottom: 15px;
}
#app h6.titulo {
  font-size: 1em;
  margin-bottom: 10px;
}
#app .titulo.nome {
  border: none;
  padding-left: 0px;
  margin-bottom: 10px;
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
</style>
