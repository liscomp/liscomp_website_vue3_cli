<script>
import { useLoadStudents, deleteStudent } from "@/firebase";
export default {
  name: "StudentList",
  setup() {
    const students = useLoadStudents();
    return { students, deleteStudent };
  },
};
</script>

<template>
  <div class="card mt-4 mb-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th class="d-none d-sm-block" scope="col">Abrevicação</th>
          <th scope="col">Nome</th>
          <th class="d-none d-sm-block" scope="col">Nivel do Vinculo</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ abbreviation, name, level } in students.sort(function (
            a,
            b
          ) {
            return a.name > b.name;
          })"
          :key="abbreviation"
        >
          <td class="align-middle d-none d-sm-block">
            {{ abbreviation }}
          </td>
          <td class="align-middle">{{ name }}</td>
          <td class="align-middle d-none d-sm-block">
            {{ level }}
          </td>
          <td class="align-middle">
            <router-link :to="`/studentedit/${abbreviation}`">
              <button class="btn btn-primary btn-sm me-2 mb-2">Edit</button>
            </router-link>
            <button
              class="btn btn-danger btn-sm me-2 mb-2"
              @click="deleteStudent(abbreviation)"
            >
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
