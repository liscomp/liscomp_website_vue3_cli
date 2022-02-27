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
    artigosOrdenados: (state) => {
      return state.articles.sort(function (a, b) {
        if (new Date(a.date) > new Date(b.date)) {
          return -1;
        }
        if (new Date(a.date) < new Date(b.date)) {
          return 1;
        }
        return 0; // a must be equal to b
      });
    },
    pegarAnos: (state) => {
      return Array.from(
        // eslint-disable-next-line prettier/prettier
        new Set(state.articles.map((articles) => new Date(articles.date).getFullYear()))
      )
        .sort()
        .reverse();
    },
    pegarTopicos: (state) => {
      return Array.from(
        new Set(
          [].concat(
            ...state.articles.map((articles) =>
              articles.topics.split(";").map((topic) => topic.trim())
            )
          )
        )
      ).sort();
    },
    projetoEspecifico: (state) => (identidade) => {
      return state.projects.find(
        (projects) =>
          projects.title.toLowerCase().replace(/\s/g, "-") === identidade
      );
    },
    artigoEspecifico: (state) => (id) => {
      return state.articles.find((articles) => articles.id === id);
    },
    noticiaEspecifico: (state) => (label) => {
      return state.news.find(
        (noticias) => noticias.title.toLowerCase().replace(/\s/g, "-") === label
      );
    },
    artigosAnos: (state) => (year) => {
      return state.articles
        .sort(function (a, b) {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          if (new Date(a.date) < new Date(b.date)) {
            return 1;
          }
          // a must be equal to b
          return 0;
        })
        .filter((articles) => new Date(articles.date).getFullYear() == year);
    },
    artigosTopicos: (state) => (topic) => {
      return state.articles
        .filter((articles) =>
          articles.topics
            .split(";")
            .map((topic) => topic.trim())
            .includes(topic)
        )
        .sort(function (a, b) {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          if (new Date(a.date) < new Date(b.date)) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
    },
  },
});
