import { defineStore } from "pinia";
import books from "@/data/books.json";
import news from "@/data/news.json";
import equipment from "@/data/equipment.json";
import moment from "moment";
import { useLoadArticles, useLoadProjects } from "@/firebase";

const articles = useLoadArticles();
const projects = useLoadProjects();

export const useProductsStore = defineStore("ProductsStore", {
  state: () => {
    return {
      articles,
      books,
      equipment,
      projects,
      news,
    };
  },
  getters: {
    noticiasOrdenados: (state) => {
      return state.news.sort(function (a, b) {
        if (moment(a.data, "DD/MM/YYYY") > moment(b.data, "DD/MM/YYYY")) {
          return -1;
        }
        if (moment(a.data, "DD/MM/YYYY") < moment(b.data, "DD/MM/YYYY")) {
          return 1;
        }
        return 0; // a must be equal to b
      });
    },
    projetoEspecifico: (state) => (identidade) => {
      return state.projects.find(
        (projects) =>
          projects.title.toLowerCase().replace(/\s/g, "-") === identidade
      );
    },
    noticiaEspecifico: (state) => (label) => {
      return state.news.find(
        (noticias) => noticias.title.toLowerCase().replace(/\s/g, "-") === label
      );
    },
  },
});
