<template>
  <footer id="footer">
    <div class="container">
      <div class="row justify-content-center m-0">
        <div class="footer-item col-sm-12 col-md-6 col-lg-4">
          <div class="fw-bolder">Contato:</div>
          <div class="contato-email">
            <a href="mailto:%20douglas.ferreira@ifrj.edu.br">
              <i class="fa-solid fa-envelope fa"></i>
              douglas.ferreira@ifrj.edu.br</a
            >
          </div>
          <div class="fw-bolder">Endereço:</div>
          <div>
            <i class="fa-solid fa-map-marker fa"></i>
            IFRJ - Campus Paracambi. Laboratório de Instrumentação e Simulação
            Computacional Científicas Aplicadas 28. R. Sebastião de Lacerda, S/N
            Paracambi - RJ, 26600-000.
          </div>
        </div>
        <div
          id="IFRJ"
          class="align-items-center d-flex footer-item col-sm-12 col-md-6 col-lg-4"
        >
          <a
            href="https://ifrj.edu.br"
            id="logo-img"
            target="_blank"
            class="d-block-md d-none mx-auto"
          >
            <img
              class="rounded logo-ifrj-md"
              src="@/assets/logos/logo-ifrj.png"
              alt="Item"
            />
          </a>
          <a
            href="https://ifrj.edu.br"
            id="logo-img"
            target="_blank"
            class="d-none-md d-block mx-auto"
          >
            <img
              class="rounded logo-ifrj-sm"
              src="@/assets/logos/logo-ifrj.png"
              alt="Item"
            />
          </a>
        </div>
        <div class="text-center footer-item col-md-12 col-lg-4">
          <div class="w-100">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                frameborder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.8623423314486!2d-43.70712097075841!3d-22.59968866094861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x994f0f7228eb8d%3A0xbbd191aec46227d2!2sLaborat%C3%B3rio%20de%20Instrumenta%C3%A7%C3%A3o%20e%20Simula%C3%A7%C3%A3o%20Computacional!5e0!3m2!1spt-BR!2sbr!4v1599833010790!5m2!1spt-BR!2sbr"
                allowfullscreen="allowfullscreen"
                class="embed-responsive-item map"
                style="border: 0px"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="text-center copyright col-12">
          Copyright © 2016-2020 LISComp. Produzido por
          <a
            href="https://psloliveirajr.github.io/"
            target="_blank"
            class="paulinho"
            >Paulinho</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Rodape",
};
</script>

<style>
a.paulinho {
  color: #007bff !important;
}

.footer-item {
  padding: 0;
  margin-bottom: 10px;
  padding-top: 5px;
}
.copyright {
  border-top: gray solid 1px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.contato-email {
  margin-bottom: 3px;
  font-weight: 550;
}

footer {
  background-color: #3ef5d01c;
  border-top: 1px solid #ccc;
}

.logo-ifrj-md {
  height: 200px;
}

.logo-ifrj-sm {
  height: 170px;
}
</style>
