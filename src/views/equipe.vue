<script>
// @ is an alias to @
import Pesquisador from "@/components/pesquisador.vue";
import Aluno from "@/components/aluno.vue";
import { usePeopleStore } from "@/stores/PeopleStore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Equipe",
  components: {
    Pesquisador,
    Aluno,
  },
  setup() {
    const PeopleStore = usePeopleStore();
    return {
      pesquisadores: PeopleStore.pesquisadoresOrdenados,
      alunosDoutorado: PeopleStore.alunosDoutoradoOrdenados,
      alunosMestrado: PeopleStore.alunosMestradoOrdenados,
      alunosIniciacao: PeopleStore.alunosIniciacaoOrdenados,
    };
  },
};
</script>

<template>
  <div id="equipe" class="container">
    <ol class="breadcrumb">
      <RouterLink to="/"> <i class="fa-solid fa-home fa"></i> Home </RouterLink>
      <span class="divisoria">></span>
      <RouterLink class="active" to="/equipe">Equipe</RouterLink>
    </ol>
    <div>
      <h2 class="titulo">Equipe</h2>
      <h3 class="titulo cargo">Pesquisadores</h3>
      <Pesquisador
        v-for="professor in pesquisadores"
        v-bind:key="professor.nome"
        v-bind:nome="professor.nome"
        v-bind:contato="professor.contato"
        v-bind:foto="professor.foto"
        v-bind:educacao="professor.educacao"
        v-bind:pesquisas="professor.pesquisas"
      />
      <h3 class="titulo cargo">Alunos de Doutorado</h3>
      <div class="row">
        <Aluno
          v-for="aluno in alunosDoutorado"
          v-bind:key="aluno.abbreviation"
          v-bind:name="aluno.name"
          v-bind:scholarship="aluno.scholarship"
          v-bind:abbreviation="aluno.abbreviation"
          v-bind:email="aluno.email"
          v-bind:lattes="aluno.lattes"
          v-bind:college="aluno.college"
          v-bind:imgUrl="aluno.imgUrl"
        />
      </div>
      <h3 class="titulo cargo">Alunos de Mestrado</h3>
      <div class="row">
        <Aluno
          v-for="aluno in alunosMestrado"
          v-bind:key="aluno.abbreviation"
          v-bind:name="aluno.name"
          v-bind:scholarship="aluno.scholarship"
          v-bind:abbreviation="aluno.abbreviation"
          v-bind:email="aluno.email"
          v-bind:lattes="aluno.lattes"
          v-bind:college="aluno.college"
          v-bind:imgUrl="aluno.imgUrl"
        />
      </div>
      <h3 class="titulo cargo">Alunos de Iniciação Científica</h3>
      <div class="row">
        <Aluno
          v-for="aluno in alunosIniciacao"
          v-bind:key="aluno.abbreviation"
          v-bind:name="aluno.name"
          v-bind:scholarship="aluno.scholarship"
          v-bind:abbreviation="aluno.abbreviation"
          v-bind:email="aluno.email"
          v-bind:lattes="aluno.lattes"
          v-bind:college="aluno.college"
          v-bind:imgUrl="aluno.imgUrl"
        />
      </div>
    </div>
  </div>
</template>

<style>
.home-section:first-of-type {
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

.pesquisador {
  margin-bottom: 30px;
}
.aluno {
  margin-bottom: 20px;
}

.cargo {
  margin-left: 10px;
}
</style>
