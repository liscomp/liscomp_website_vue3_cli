<script>
import { useLoadCompanys, deleteCompany } from "@/firebase";
export default {
  name: "CompanyList",
  setup() {
    const companys = useLoadCompanys();
    return { companys, deleteCompany };
  },
};
</script>

<template>
  <div class="card mt-4 mb-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th class="d-none d-sm-block" scope="col">Sigla</th>
          <th scope="col">Nome</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ name, acronym } in companys.sort(function (a, b) {
            return a.name > b.name;
          })"
          :key="acronym"
        >
          <td class="align-middle d-none d-sm-block">
            {{ acronym }}
          </td>
          <td class="align-middle">{{ name }}</td>
          <td class="align-middle">
            <router-link :to="`/companyedit/${acronym}`">
              <button class="btn btn-primary btn-sm me-2 mb-2">Edit</button>
            </router-link>
            <button
              class="btn btn-danger btn-sm me-2 mb-2"
              @click="deleteCompany(acronym)"
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
