<template>
  <div id="pagenotfound container">
    <div
      class="pagina-nao-encontrada justify-content-center align-items-center d-flex flex-column"
    >
      <div class="erro text-center w-100">Página não encontrada</div>
      <div class="mensagem text-center w-100">
        Não conseguimos encontrar essa página. Tente voltar para
        <router-link :to="{ name: 'home' }">
          <i class="fa-solid fa-home fa"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
.pagina-nao-encontrada {
  height: 800px;
}

.erro {
  font-weight: 700;
  font-size: 60px;
  margin-bottom: 30px;
}
.mensagem {
  font-weight: 400;
  font-size: 30px;
}

.mensagem > a.router-link-active {
  color: #007bff !important;
}
</style>
