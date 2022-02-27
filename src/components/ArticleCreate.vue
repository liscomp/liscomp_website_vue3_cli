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
      journal: "",
      doi: "",
      url: "",
      authors: "",
      date: "",
      topics: "",
      abstract: "",
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
        .ref(`/article/${myNewFile.name}`)
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
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            form.imgUrl = url;
            createArticle(form.id, { ...form });
            form.id = "";
            form.title = "";
            form.journal = "";
            form.doi = "";
            form.url = "";
            form.authors = "";
            form.date = "";
            form.topics = "";
            form.abstract = "";
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

      <label for="titulo" class="fw-bolder form-label"> Titulo </label>
      <div class="input-group mb-3">
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="titulo"
          required
        />
      </div>

      <label for="jornal" class="fw-bolder form-label"> Revista </label>
      <div class="input-group mb-3">
        <input
          v-model="form.journal"
          type="text"
          class="form-control"
          id="jornal"
          required
        />
      </div>

      <label for="doi" class="fw-bolder form-label"> DOI </label>
      <div class="input-group mb-3">
        <input
          v-model="form.doi"
          type="text"
          class="form-control"
          id="doi"
          required
        />
      </div>

      <label for="url" class="fw-bolder form-label"> URL </label>
      <div class="input-group mb-3">
        <input
          v-model="form.url"
          type="url"
          class="form-control"
          id="url"
          required
        />
      </div>

      <label for="autores" class="fw-bolder form-label"> Autores </label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="descricao-autores"
          >Separados por ";"</span
        >
        <input
          v-model="form.authors"
          type="text"
          class="form-control"
          id="autores"
          aria-describedby="descricao-autores"
          required
        />
      </div>

      <label for="data" class="fw-bolder form-label"> Data </label>
      <div class="input-group mb-3">
        <input
          v-model="form.date"
          type="date"
          class="form-control"
          id="data"
          required
        />
      </div>

      <label for="nomes-topicos" class="fw-bolder form-label"> Topicos </label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="descricao-topicos"
          >Separados por ";"</span
        >
        <input
          v-model="form.topics"
          type="text"
          class="form-control"
          id="nomes-topicos"
          aria-describedby="descricao-topicos"
          required
        />
      </div>

      <label for="resumo" class="fw-bolder form-label"> Resumo </label>
      <div class="input-group mb-3">
        <textarea
          v-model="form.abstract"
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
