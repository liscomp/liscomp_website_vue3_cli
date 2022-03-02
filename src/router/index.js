import { createRouter, createWebHistory } from "vue-router";
import { useProductsStore } from "@/stores/ProductsStore";
import { getArticle, getProject } from "@/firebase";
// eslint-disable-next-line no-unused-vars
import { firebaseApp } from "@/firebase";

const routes = [
  {
    path: "/",
    name: "HomeView",
    meta: {
      title: "LISComp",
    },
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "@/views/HomeView.vue"),
  },
  {
    path: "/labmovel",
    name: "labmovel",
    meta: {
      title: "Laboratório Móvel",
    },
    component: () =>
      import(/* webpackChunkName: "labmovel" */ "@/views/LabMovel.vue"),
  },
  {
    path: "/infraestrutura",
    name: "infraestrutura",
    meta: {
      title: "Infraestrutura",
    },
    component: () =>
      import(
        /* webpackChunkName: "infraestrutura" */ "@/views/InfrastructureView.vue"
      ),
  },
  {
    path: "/prestacao-de-servico",
    name: "prestacaoservico",
    meta: {
      title: "Prestação de Serviços",
    },
    component: () =>
      import(
        /* webpackChunkName: "prestacaoservico" */ "@/views/ServiceView.vue"
      ),
  },
  {
    path: "/linhaspesquisa",
    name: "linhaspesquisa",
    meta: {
      title: "LISComp",
    },
    component: () =>
      import(
        /* webpackChunkName: "linhaspesquisa" */ "@/views/linhaspesquisa.vue"
      ),
  },
  {
    path: "/equipe",
    name: "equipe",
    meta: {
      title: "TeamView",
    },
    component: () =>
      import(/* webpackChunkName: "equipe" */ "@/views/TeamView.vue"),
  },
  {
    path: "/publicacoes",
    name: "publicacoes",
    meta: {
      title: "Produções",
    },
    component: () =>
      import(/* webpackChunkName: "producao" */ "@/views/PublicationView.vue"),
  },
  {
    path: "/publicacoes/:id",
    name: "producaofiltro",
    component: () =>
      import(/* webpackChunkName: "producao" */ "@/views/PublicationView.vue"),
  },
  {
    path: "/publicacoes/resumo/:id",
    name: "producaoresumo",
    component: () =>
      import(/* webpackChunkName: "producao" */ "@/views/ArticleResume.vue"),
    beforeEnter: (to, from, next) => {
      const exist = getArticle(to.params.id);
      if (exist) {
        document.title = to.params.id;
        next();
      } else {
        next({ name: "naoEcontrada" });
      }
    },
  },
  {
    path: "/projetos",
    name: "projetos",
    meta: {
      title: "Projetos",
    },
    component: () =>
      import(/* webpackChunkName: "projetos" */ "@/views/ProjectView.vue"),
    children: [],
  },
  {
    path: "/projetos/:id",
    name: "ProjectView",
    component: () =>
      import(/* webpackChunkName: "projetos" */ "@/views/ProjectResume.vue"),
    beforeEnter: (to, from, next) => {
      const exist = getProject(to.params.id);
      if (exist) {
        document.title = to.params.id;
        next();
      } else {
        next({ name: "naoEcontrada" });
      }
    },
  },
  {
    path: "/parcerias-internacionais",
    name: "parinternacionais",
    meta: {
      title: "Parcerias Internacionais",
    },
    component: () =>
      import(
        /* webpackChunkName: "parinternacionais" */ "@/views/PartnersView.vue"
      ),
  },
  {
    path: "/noticias",
    name: "noticias",
    meta: {
      title: "Notícias",
    },
    component: () =>
      import(/* webpackChunkName: "destaques" */ "@/views/NewsView.vue"),
  },
  {
    path: "/noticias/:id",
    name: "noticiasdescricao",
    component: () =>
      import(
        /* webpackChunkName: "noticiasdescricao" */ "@/views/NewsDescription.vue"
      ),
    beforeEnter: (to, from, next) => {
      const ProductsStore = useProductsStore();
      const exists = ProductsStore.noticias.find(
        (noticias) =>
          noticias.title.toLowerCase().replace(/\s/g, "-") === to.params.id
      );
      document.title = exists.title;
      if (exists) {
        next();
      } else {
        next({ name: "naoEcontrada" });
      }
    },
  },
  {
    path: "/admin",
    name: "AdminLogin",
    meta: {
      title: "Admin",
    },
    component: () =>
      import(/* webpackChunkName: "destaques" */ "@/views/AdminLogin.vue"),
  },
  {
    path: "/dataview",
    name: "DataView",
    meta: {
      title: "Visualizar Dados",
    },
    component: () =>
      import(/* webpackChunkName: "destaques" */ "@/views/DataView.vue"),
  },
  {
    path: "/articleedit/:id",
    name: "ArticleEdit",
    meta: {
      title: "Editar Artigos",
    },
    component: () =>
      import(/* webpackChunkName: "destaques" */ "@/views/ArticleEdit.vue"),
  },
  {
    path: "/studentedit/:id",
    name: "StudentEdit",
    meta: {
      title: "Editar Artigos",
    },
    component: () =>
      import(/* webpackChunkName: "destaques" */ "@/views/StudentEdit.vue"),
  },
  {
    path: "/projectedit/:id",
    name: "ProjectEdit",
    meta: {
      title: "Editar Artigos",
    },
    component: () =>
      import(/* webpackChunkName: "destaques" */ "@/views/ProjectEdit.vue"),
  },
  {
    path: "/companyedit/:id",
    name: "CompanyEdit",
    meta: {
      title: "Editar Artigos",
    },
    component: () =>
      import(/* webpackChunkName: "destaques" */ "@/views/CompanyEdit.vue"),
  },
  {
    path: "/researcherpartneredit/:id",
    name: "ResearcherPartnerEdit",
    meta: {
      title: "Editar Artigos",
    },
    component: () =>
      import(
        /* webpackChunkName: "destaques" */ "@/views/ResearcherPartnerEdit.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "naoEcontrada",
    meta: {
      title: "Página Não Encontra",
    },
    component: () =>
      import(/* webpackChunkName: "pagenotfound" */ "@/views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    const position = {};
    if (to.hash) {
      position.selector = to.hash;
      position.offset = { y: 100 };
      if (document.querySelector(to.hash)) {
        return position;
      }

      return false;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes,
});

export default router;
