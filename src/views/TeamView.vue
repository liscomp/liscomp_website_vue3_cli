<script>
// @ is an alias to @
import Pesquisador from "@/components/ResearcherCard.vue";
import Aluno from "@/components/StudentCard.vue";
import { usePeopleStore } from "@/stores/PeopleStore";
import { useLoadStudents } from "@/firebase";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "TeamView",
  components: {
    Pesquisador,
    Aluno,
  },
  setup() {
    const PeopleStore = usePeopleStore();
    const students = useLoadStudents();
    return {
      students,
      researchers: PeopleStore.researchers,
    };
  },
  methods: {
    orderStudents: (students, level) => {
      return students
        .filter((students) => students.level == level)
        .sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
    },
    orderResearchers: (researchers) => {
      return researchers.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    },
  },
  computed: {
    orderResearcher() {
      return this.orderResearchers(this.researchers);
    },
    orderStudentDoctorate() {
      return this.orderStudents(this.students, "doutorado");
    },
    orderStudentMaster() {
      return this.orderStudents(this.students, "mestrado");
    },
    orderStudentInitiation() {
      return this.orderStudents(this.students, "iniciacao");
    },
  },
};
</script>

<template>
  <div id="equipe">
    <div id="page-header" class="d-flex justify-content-center flex-column">
      <div>
        <h2 class="title">Equipe</h2>
      </div>
    </div>
    <!-- <ol class="breadcrumb">
      <RouterLink to="/"> <i class="fa-solid fa-home fa"></i> Home </RouterLink>
      <span class="divisoria">></span>
      <RouterLink class="active" to="/equipe">Equipe</RouterLink>
    </ol> -->
    <div class="container inner-pages">
      <h4 class="title position">Pesquisadores</h4>
      <div class="row box-positions">
        <Pesquisador
          v-for="professor in orderResearcher"
          v-bind:key="professor.nome"
          v-bind:nome="professor.nome"
          v-bind:contato="professor.contato"
          v-bind:foto="professor.foto"
          v-bind:educacao="professor.educacao"
          v-bind:pesquisas="professor.pesquisas"
        />
      </div>

      <h4 class="title position">Alunos de Doutorado</h4>
      <div class="row box-positions">
        <Aluno
          v-for="aluno in orderStudentDoctorate"
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
      <h4 class="title position">Alunos de Mestrado</h4>
      <div class="row box-positions">
        <Aluno
          v-for="aluno in orderStudentMaster"
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
      <h4 class="title position">Alunos de Iniciação Científica</h4>

      <div class="row box-positions">
        <Aluno
          v-for="aluno in orderStudentInitiation"
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

<style lang="scss">
.home-section:first-of-type {
  padding-top: 50px;
}
.avatar-circle {
  border-radius: 10%;
}
.avatar {
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
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
  padding: 2.5px 5px;
}

.big-icon {
  font-size: 2.5rem;
}

.position {
  padding: 20px;
}
.box-positions {
  width: 100%;
  border-bottom: 4px solid #036365b6;
  border-top: 4px solid #036365b6;
  border-radius: 25px;
}
.name {
  padding: 2.5px;
}
</style>
