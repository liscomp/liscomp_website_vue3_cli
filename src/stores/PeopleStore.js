import { defineStore } from "pinia";
import researchers from "@/data/researchers.json";
import contributors from "@/data/contributors.json";
import { useLoadStudents } from "@/firebase";

const students = useLoadStudents();

export const usePeopleStore = defineStore("PeopleStore", {
  state: () => {
    return {
      researchers,
      students,
      contributors,
    };
  },
  getters: {
    pesquisadoresOrdenados: (state) => {
      return state.researchers.sort(function (a, b) {
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
    alunosDoutoradoOrdenados: (state) => {
      return state.students
        .filter((students) => students.level == "doutorado")
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
    alunosMestradoOrdenados: (state) => {
      return state.students
        .filter((students) => students.level == "mestrado")
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
    alunosIniciacaoOrdenados: (state) => {
      return state.students
        .filter((students) => students.level == "iniciacao")
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
    parceriasOrdenados: (state) => {
      return state.contributors.sort(function (a, b) {
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
    pegarfaculdade: (state) => {
      return new Set(
        state.contributors.map((parcerias) => parcerias.faculdade)
      );
    },
  },
});
