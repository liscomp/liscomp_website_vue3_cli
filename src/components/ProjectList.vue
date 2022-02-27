<script>
import { useLoadProjects, deleteProject } from "@/firebase";
export default {
  name: "ProjectList",
  setup() {
    const projects = useLoadProjects();
    return { projects, deleteProject };
  },
};
</script>

<template>
  <div class="card mt-4 mb-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th class="d-none d-sm-block" scope="col">Id</th>
          <th scope="col">Titulo</th>
          <th class="d-none d-sm-block" scope="col">Autores</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ id, title, autores } in projects.sort(function (a, b) {
            return Date.parse(b.date) - Date.parse(a.date);
          })"
          :key="id"
        >
          <td class="align-middle d-none d-sm-block">
            <router-link
              :to="{
                name: 'producaoresumo',
                params: {
                  id: id,
                  title: id,
                },
              }"
            >
              {{ id }}
            </router-link>
          </td>
          <td class="align-middle">{{ title }}</td>
          <td class="align-middle d-none d-sm-block">
            <p
              v-for="author in autores.split(';')"
              :key="author"
              class="mb-0 text-nowrap"
            >
              {{ author }}
            </p>
          </td>
          <td class="align-middle">
            <router-link :to="`/projectedit/${id}`">
              <button class="btn btn-primary btn-sm me-2 mb-2">Edit</button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteProject(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
@media (min-width: 576px) {
  .d-sm-block {
    display: table-cell !important;
  }
}
</style>
