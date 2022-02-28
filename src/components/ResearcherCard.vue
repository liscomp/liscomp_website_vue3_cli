<script>
/* eslint-disable vue/no-unused-components */
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
      abbreviation: this.foto.split(".")[0],
    };
  },
  components: {
    Educacao,
  },
};
</script>

<template>
  <div class="pesquisador col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="profile">
      <div class="d-flex justify-content-center">
        <img
          class="avatar avatar-circle"
          v-bind:src="require(`@/assets/equipe/${foto}`)"
        />
      </div>
      <div class="portrait-title text-center">
        <h5 class="title name">{{ nome }}</h5>
      </div>
      <ul class="network-icon d-flex justify-content-center" aria-hidden="true">
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
      <div class="resume">
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="resume-button"
            data-bs-toggle="modal"
            :data-bs-target="`#${abbreviation}`"
          >
            Resumo
          </button>
        </div>
        <div
          class="modal fade"
          :id="`${abbreviation}`"
          tabindex="-1"
          aria-labelledby="researcherModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="title name" id="researcherModalLabel">{{ nome }}</h5>
                <h5 class="modal-title"></h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row about">
                  <div class="col-md-5">
                    <h6 class="title name">Formação</h6>
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
                    <h6 class="title name">Experiência</h6>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pesquisador {
  padding: 20px;
  .profile {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    height: 100%;
    border-radius: 15px;
    padding: 10px;
  }
}
.resume-button {
  background-color: white;
  border: 2px solid #036365;
  border-radius: 15px;
  color: #036365;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  padding: 16px 24px;
  text-align: center;
  width: 50%;
}

.resume-button:hover {
  color: white;
  background-color: #036365;
  transition: background 500ms;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
}
</style>
