<script>
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-unused-components */
import ArticleCreate from "@/components/ArticleCreate.vue";
import ArticleList from "@/components/ArticleList.vue";
import ArticleAddImage from "@/components/ArticleAddImage.vue";
import StudentCreate from "@/components/StudentCreate.vue";
import StudentList from "@/components/StudentList.vue";
import ProjectCreate from "@/components/ProjectCreate.vue";
import ProjectList from "@/components/ProjectList.vue";
import { adminLogout, firebaseApp } from "@/firebase";
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "DataView",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ArticleCreate,
    ArticleList,
    ArticleAddImage,
    StudentCreate,
    StudentList,
    ProjectCreate,
    ProjectList,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebaseApp.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace("/admin");
        } else if (route.path == "/admin") {
          router.replace("/dataview");
        }
      });
    });
    return { adminLogout };
  },
};
</script>

<template>
  <div class="container mt-4 mb-4">
    <div class="bd-example">
      <ul class="nav napills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-article-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-article"
            type="button"
            role="tab"
            aria-controls="pills-article"
            aria-selected="true"
          >
            Artigos
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-student-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-student"
            type="button"
            role="tab"
            aria-controls="pills-student"
            aria-selected="false"
          >
            Estudantes
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-project-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-project"
            type="button"
            role="tab"
            aria-controls="pills-project"
            aria-selected="false"
          >
            Projetos
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button type="button" class="logout" @click="adminLogout">
            Logout
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-article"
          role="tabpanel"
          aria-labelledby="pills-article-tab"
        >
          <ul class="nav nav-pills mb-3" id="pills-article-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-article-create-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-article-create"
                type="button"
                role="tab"
                aria-controls="pills-article-create"
                aria-selected="true"
              >
                Adicionar
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-article-list-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-article-list"
                type="button"
                role="tab"
                aria-controls="pills-article-list"
                aria-selected="false"
              >
                Listar
              </button>
            </li>
          </ul>

          <div class="tab-content" id="pills-article-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-article-create"
              role="tabpanel"
              aria-labelledby="pills-article-create-tab"
            >
              <ArticleCreate />
            </div>
            <div
              class="tab-pane fade"
              id="pills-article-list"
              role="tabpanel"
              aria-labelledby="pills-article-list-tab"
            >
              <ArticleList />
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="pills-student"
          role="tabpanel"
          aria-labelledby="pills-student-tab"
        >
          <ul class="nav nav-pills mb-3" id="pills-student-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-student-create-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-student-create"
                type="button"
                role="tab"
                aria-controls="pills-student-create"
                aria-selected="true"
              >
                Adicionar
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-student-list-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-student-list"
                type="button"
                role="tab"
                aria-controls="pills-student-list"
                aria-selected="false"
              >
                Listar
              </button>
            </li>
          </ul>

          <div class="tab-content" id="pills-student-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-student-create"
              role="tabpanel"
              aria-labelledby="pills-student-create-tab"
            >
              <StudentCreate />
            </div>
            <div
              class="tab-pane fade"
              id="pills-student-list"
              role="tabpanel"
              aria-labelledby="pills-student-list-tab"
            >
              <StudentList />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade show active"
          id="pills-project"
          role="tabpanel"
          aria-labelledby="pills-project-tab"
        >
          <ul class="nav nav-pills mb-3" id="pills-project-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-project-create-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-project-create"
                type="button"
                role="tab"
                aria-controls="pills-project-create"
                aria-selected="true"
              >
                Adicionar
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-project-list-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-project-list"
                type="button"
                role="tab"
                aria-controls="pills-project-list"
                aria-selected="false"
              >
                Listar
              </button>
            </li>
          </ul>

          <div class="tab-content" id="pills-project-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-project-create"
              role="tabpanel"
              aria-labelledby="pills-project-create-tab"
            >
              <ProjectCreate />
            </div>
            <div
              class="tab-pane fade"
              id="pills-project-list"
              role="tabpanel"
              aria-labelledby="pills-project-list-tab"
            >
              <ProjectList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid #036365;
}

.logout {
  color: #fff;
  background-color: #00a1a1;
  border: 0;
  border-radius: 0.25rem;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
.logout:hover {
  background-color: #036365;
}
.napills .nav-link.active,
.napills .show > .nav-link {
  color: #fff;
  background-color: #00a1a1;
}
.nav-link {
  color: #036365;
  background: 0 0;
  border: 0;
  border-radius: 0.25rem;
}
</style>
