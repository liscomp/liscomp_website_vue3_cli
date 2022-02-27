<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getProject, updateProject, firebaseApp } from "@/firebase";

export default {
  name: "ProjectEdit",
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
    const projectId = computed(() => route.params.id);

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
    onMounted(async () => {
      const project = await getProject(projectId.value);
      form.id = project.id;
      form.title = project.title;
      form.short_title = project.short_title;
      form.periodo = project.periodo;
      form.financiadores = project.financiadores;
      form.autores = project.autores;
      form.edital = project.edital;
      form.situação = project.situação;
      form.resumo = project.resumo;
      form.imgUrl = project.imgUrl;
    });
    const imageData = reactive({ data: null });
    const uploadValue = reactive({ value: 0 });
    const update = async () => {
      console.log(imageData.data);
      window.scrollTo(0, 0);
      if (imageData.data == null) {
        await updateProject(projectId.value, { ...form });
        router.push("/dataview");
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
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              form.imgUrl = url;
              updateProject(form.id, { ...form });
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
  <div class="container mt-4 mb-4">
    <div class="card card-body">
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
          Editar projeto
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
