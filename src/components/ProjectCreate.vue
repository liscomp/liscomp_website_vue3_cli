<script>
import { createArticle } from "@/firebase";
/* import firebase from "firebase"; */
import { reactive } from "vue";
import { firebaseApp } from "@/firebase";

export default {
  name: "ArticleCreate",
  methods: {
    previewImage(event) {
      this.uploadValue.value = 0;
      this.imageData.data = event.target.files[0];
    },
  },
  setup() {
    const form = reactive({
      id: "",
      title: "",
      short_title: "",
      periodo: "",
      financiadores: "",
      autores: "",
      edital: "",
      situação: "",
      resumo: "",
      imgUrl: "",
    });
    const imageData = reactive({ data: {} });
    const uploadValue = reactive({ value: 0 });
    const onSubmit = async () => {
      const fileExtension = imageData.data.name.split(".").pop();
      const myNewFile = new File(
        [imageData.data],
        `${form.id}.${fileExtension}`,
        {
          type: imageData.data.type,
        }
      );
      const storageRef = firebaseApp
        .storage()
        .ref(`/projetos/${myNewFile.name}`)
        .put(myNewFile);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          uploadValue.value =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          uploadValue.value = 100;
          storageRef.snapshot.ref.getDownloadURL().then((financiadores) => {
            form.imgUrl = financiadores;
            createArticle(form.id, { ...form });
            form.id = "";
            form.title = "";
            form.short_title = "";
            form.periodo = "";
            form.financiadores = "";
            form.autores = "";
            form.edital = "";
            form.situação = "";
            form.resumo = "";
            form.imgUrl = "";
            imageData.data = {};
            uploadValue.value = 0;
          });
        }
      );
    };
    return { form, imageData, uploadValue, onSubmit };
  },
};
</script>

<template>
  <div class="card card-body">
    <div v-if="uploadValue.value != 0">
      <p>
        Progress: {{ uploadValue.value.toFixed() + "%" }}
        <progress id="progress" :value="uploadValue.value" max="100"></progress>
      </p>
    </div>

    <form @submit.prevent="onSubmit" v-else>
      <label for="identificador" class="fw-bolder form-label">
        Identificador
      </label>
      <div class="input-group mb-3">
        <input
          v-model="form.id"
          type="text"
          class="form-control"
          id="identificador"
          required
        />
      </div>

      <label for="title" class="fw-bolder form-label"> Titulo </label>
      <div class="input-group mb-3">
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="title"
          required
        />
      </div>

      <label for="short_title" class="fw-bolder form-label">
        Título curto
      </label>
      <div class="input-group mb-3">
        <input
          v-model="form.short_title"
          type="text"
          class="form-control"
          id="short_title"
          required
        />
      </div>

      <label for="periodo" class="fw-bolder form-label"> Periodo </label>
      <div class="input-group mb-3">
        <input
          v-model="form.periodo"
          type="text"
          class="form-control"
          id="periodo"
          required
        />
      </div>

      <label for="financiadores" class="fw-bolder form-label">
        Financiadores
      </label>
      <div class="input-group mb-3">
        <input
          v-model="form.financiadores"
          type="text"
          class="form-control"
          id="financiadores"
          required
        />
      </div>

      <label for="autores" class="fw-bolder form-label"> Autores </label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="descricao-autores"
          >Separados por ";"</span
        >
        <input
          v-model="form.autores"
          type="text"
          class="form-control"
          id="autores"
          aria-describedby="descricao-autores"
          required
        />
      </div>

      <label for="edital" class="fw-bolder form-label"> Edital </label>
      <div class="input-group mb-3">
        <input
          v-model="form.edital"
          type="text"
          class="form-control"
          id="edital"
          required
        />
      </div>

      <label for="nomes-situação" class="fw-bolder form-label">
        Situação
      </label>
      <div class="input-group mb-3">
        <input
          v-model="form.situação"
          type="text"
          class="form-control"
          id="nomes-situação"
          required
        />
      </div>

      <label for="resumo" class="fw-bolder form-label"> Resumo </label>
      <div class="input-group mb-3">
        <textarea
          v-model="form.resumo"
          type="text"
          class="form-control"
          id="resumo"
          aria-label="With textarea"
          required
        ></textarea>
      </div>

      <label for="inputImage" class="fw-bolder form-label"> Imagem </label>
      <div class="input-group mb-3">
        <input
          type="file"
          class="form-control"
          id="inputImage"
          @change="previewImage"
          accept="image/*"
          required
        />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Adicionar artigo
      </button>
    </form>
  </div>
</template>

<style scoped>
img.preview {
  width: 200px;
}
</style>
