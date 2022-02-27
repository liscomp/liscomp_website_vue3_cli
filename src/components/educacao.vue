<template>
  <li class="mb-2">
    <i class="fa-solid fa-graduation-cap fa-li fa"></i>
    <div class="description">
      <h6 class="titulo nome">
        {{ curso_termino }}
      </h6>
      <p class="institution">
        {{ instituto_completo }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Educacao",
  props: ["curso", "termino", "instituto", "sigla", "pais"],
  data: function () {
    return {
      curso_termino: this.curso + " - " + this.termino,
      instituto_completo: this.instituto + ", " + this.sigla + ", " + this.pais,
    };
  },
};
</script>

<style></style>
