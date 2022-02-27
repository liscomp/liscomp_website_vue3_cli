<template>
  <div class="row pesquisador">
    <div class="col-12 col-lg-4">
      <div class="profile">
        <div>
          <img
            class="avatar avatar-circle"
            v-bind:src="require(`@/assets/equipe/${foto}`)"
          />
        </div>
        <div class="portrait-title">
          <h4 class="titulo nome">{{ nome }}</h4>
        </div>
        <ul class="network-icon" aria-hidden="true">
          <li>
            <a :href="email_completo">
              <i class="fa-solid fa-envelope fa fa-2x"></i>
            </a>
          </li>
          <li>
            <a :href="contato.lattes" target="_blank" rel="noopener">
              <i class="ai ai-lattes fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-lg-8">
      <div class="row about">
        <div class="col-md-5">
          <h5 class="titulo nome">Formação</h5>
          <ul id="educacao" class="ul-edu fa-ul">
            <Educacao
              v-for="formacao in formacoes"
              v-bind:key="formacao.curso"
              v-bind:curso="formacao.curso"
              v-bind:termino="formacao.termino"
              v-bind:instituto="formacao.instituicao"
              v-bind:sigla="formacao.sigla"
              v-bind:pais="formacao.pais"
            />
          </ul>
        </div>
        <div class="col-md-7">
          <h5 class="titulo nome">Experiência</h5>
          <div class="text-justify">
            <p
              v-for="linha in linhasPesquisa"
              v-bind:key="linha.pesquisa"
              class="m-0"
            >
              {{ linha.pesquisa }};
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Educacao from "@/components/educacao.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pesquisador",
  props: ["nome", "foto", "contato", "educacao", "pesquisas"],
  data: function () {
    return {
      linhasPesquisa: this.pesquisas,
      formacoes: this.educacao,
      email_completo: "mailto:%20" + this.contato.email,
    };
  },
  components: {
    Educacao,
  },
};
</script>

<style></style>
