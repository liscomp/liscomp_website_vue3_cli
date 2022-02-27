<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getArticle, updateArticle, firebaseApp } from "@/firebase";

export default {
  name: "ArticleEdit",
  methods: {
    previewImage(event) {
      this.uploadValue.value = 0;
      this.imageData.data = event.target.files[0];
      console.log(this.imageData.data);
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const articleId = computed(() => route.params.id);

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
    onMounted(async () => {
      const article = await getArticle(articleId.value);
      form.id = article.id;
      form.title = article.title;
      form.journal = article.journal;
      form.doi = article.doi;
      form.url = article.url;
      form.authors = article.authors;
      form.date = article.date;
      form.topics = article.topics;
      form.abstract = article.abstract;
      form.imgUrl = article.imgUrl;
    });
    const imageData = reactive({ data: null });
    const uploadValue = reactive({ value: 0 });
    const update = async () => {
      window.scrollTo(0, 0);
      if (imageData.data == null) {
        await updateArticle(articleId.value, { ...form });
        router.push("/dataview");
        form.id = "";
        form.title = "";
        form.journal = "";
        form.doi = "";
        form.url = "";
        form.authors = "";
        form.date = "";
        form.topics = "";
        form.abstract = "";
      } else {
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
              updateArticle(form.id, { ...form });
              form.id = "";
              form.title = "";
              form.journal = "";
              form.url = "";
              form.authors = "";
              form.date = "";
              form.topics = "";
              form.abstract = "";
              form.imgUrl = "";
              imageData.data = {};
              uploadValue.value = 0;
              router.push("/dataview");
            });
          }
        );
      }
    };

    return { form, imageData, uploadValue, update };
  },
};
</script>

<template>
  <div class="container mb-4 mt-4">
    <div class="card card-body mt-4">
      <div v-if="uploadValue.value != 0">
        <p>
          Progress: {{ uploadValue.value.toFixed() + "%" }}
          <progress
            id="progress"
            :value="uploadValue.value"
            max="100"
          ></progress>
        </p>
      </div>

      <form @submit.prevent="update" v-else>
        <h3>Editar</h3>
        <label for="identificador" class="form-label"> Identificador </label>
        <div class="input-group mb-3">
          <input
            v-model="form.id"
            type="text"
            class="form-control"
            id="identificador"
            required
          />
        </div>

        <label for="titulo" class="form-label"> Titulo </label>
        <div class="input-group mb-3">
          <input
            v-model="form.title"
            type="text"
            class="form-control"
            id="titulo"
            required
          />
        </div>

        <label for="jornal" class="form-label"> Revista </label>
        <div class="input-group mb-3">
          <input
            v-model="form.journal"
            type="text"
            class="form-control"
            id="jornal"
            required
          />
        </div>

        <label for="doi" class="form-label"> DOI </label>
        <div class="input-group mb-3">
          <input
            v-model="form.doi"
            type="text"
            class="form-control"
            id="doi"
            required
          />
        </div>

        <label for="url" class="form-label"> URL </label>
        <div class="input-group mb-3">
          <input
            v-model="form.url"
            type="url"
            class="form-control"
            id="url"
            required
          />
        </div>

        <label for="autores" class="form-label"> Autores </label>
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

        <label for="data" class="form-label"> Data </label>
        <div class="input-group mb-3">
          <input
            v-model="form.date"
            type="date"
            class="form-control"
            id="data"
            required
          />
        </div>

        <label for="nomes-topicos" class="form-label"> Topicos </label>
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

        <label for="resumo" class="form-label"> Resumo </label>
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
          />
        </div>

        <button type="submit" class="btn btn-success mt-3">
          Update Article
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid #036365;
}
</style>
