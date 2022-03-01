<script>
import Noticiaspainel from "@/components/noticiaspainel.vue";
import { useProductsStore } from "@/stores/ProductsStore";

export default {
  name: "HomeView",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Noticiaspainel,
  },
  setup() {
    const ProductsStore = useProductsStore();
    return {
      noticiasOrdenados: ProductsStore.noticiasOrdenados,
    };
  },
};
</script>

<template>
  <div id="home">
    <div id="carouselID" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselID"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselID"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/carrossel/equipe.jpg" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/carrossel/parque_de_preparacao_de_amostras.jpg"
            alt="Second slide"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselID"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselID"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="about-us">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 class="title">Sobre nós</h3>
            <div class="about-us-text">
              O Laboratório de Instrumentação e Simulação Computacional
              Científicas Aplicadas possui natureza fortemente multidisciplinar
              em sua composição, formação e atuação, utilizando técnicas de
              instrumentação em conjunto com métodos de simulação e modelagem
              computacional para a realização de pesquisas científicas em
              ciências puras e aplicadas. O LISComp atua principalmente nos
              temas de: física nuclear aplicada à arqueometria, física
              estatística aplicada à sistemas críticos, estudos de redes
              complexas, radiações ionizantes, microscopia ótica e eletrónica,
              estudos de análise de falhas e ciências dos materiais.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container news">
      <div class="row">
        <div class="col-12">
          <h3 class="title">Notícias</h3>
          <!-- <Noticiaspainel
          v-for="noticia in noticiasOrdenados.slice(0, 3)"
          v-bind:key="noticia.title"
          v-bind:title="noticia.title"
          v-bind:foto="noticia.foto"
          v-bind:data="noticia.data"
        />
        <router-link
          :to="{
            name: 'noticias',
            hash: '#app',
          }"
          class="w-100 ver-mais"
        >
          Ver mais</router-link
        > -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#home {
  #carouselID {
    .carousel-item {
      img {
        width: 100%;
        height: 600px;
        object-fit: cover;
        object-position: 50% 30%;
      }
    }
  }
  .about-us {
    background: #3ef5d01c;
    .row {
      padding: 40px 0px;
    }
  }
  .news {
    padding: 30px 100px;
  }
  .last-pub-title {
    font-weight: 700px;
    border-bottom: 2px solid black;
    margin-bottom: 15px;
    font-size: 1.5em;
    padding-left: 7px;
  }
  .about-us-text {
    font-size: 16px;
  }
  .news-avatar-circle {
    border-radius: 10%;
  }
  .news-avatar {
    width: 100%;
    height: 150px;
    margin: 0 auto;
    object-fit: cover;
    background-color: gray;
  }
  .news-titulo {
    font-weight: 700;
    font-size: 1.35em;
  }
  .news {
    margin-bottom: 20px;
  }
  a.ver-mais:hover,
  .ver-mais {
    font-weight: 700;
    text-decoration: underline;
    font-size: 1.2em;
    padding-left: 15px;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }
}
</style>
