<template>
  <div class="overflow-hidden equipamento">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="require(`@/assets/equipamentos/${foto}`)"
          alt="Image"
          class="rounded-0 equipamento-imagem"
        />
      </div>
      <div class="col-md-8">
        <div class="equipamento-corpo">
          <h4 class="equipamento-nome titulo nome">{{ nome }}</h4>
          <div class="equipamento-descricao">
            <p
              v-for="info in descricao.split(';')"
              v-bind:key="info"
              class="m-0"
            >
              {{ info }};
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Equipamento",
  props: ["nome", "foto", "descricao"],
};
</script>

<style>
.equipamento {
  border: 2px solid #036365;
}
.equipamento-imagem {
  width: 100%;
  object-fit: cover;
}
.equipamento-corpo {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 10px;
}
</style>
