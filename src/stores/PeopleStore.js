import { defineStore } from "pinia";
import researchers from "@/data/researchers.json";
import contributors from "@/data/contributors.json";

export const usePeopleStore = defineStore("PeopleStore", {
  state: () => {
    return {
      researchers,
      contributors,
    };
  },
  getters: {
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
