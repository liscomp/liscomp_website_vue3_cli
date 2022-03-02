<script>
import { createCompany } from "@/firebase";
/* import firebase from "firebase"; */
import { reactive } from "vue";
import { firebaseApp } from "@/firebase";

export default {
  name: "CompanyCreate",
  methods: {
    previewImage(event) {
      this.uploadValue.value = 0;
      this.imageData.data = event.target.files[0];
    },
  },
  setup() {
    const form = reactive({
      name: "",
      acronym: "",
      about: "",
      imgUrl: "",
    });
    const imageData = reactive({ data: {} });
    const uploadValue = reactive({ value: 0 });
    const onSubmit = async () => {
      const fileExtension = imageData.data.name.split(".").pop();
      const myNewFile = new File(
        [imageData.data],
        `${form.acronym}.${fileExtension}`,
        {
          type: imageData.data.type,
        }
      );
      const storageRef = firebaseApp
        .storage()
        .ref(`/company/${myNewFile.acronym}`)
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
            createCompany(form.acronym, { ...form });
            form.name = "";
            form.acronym = "";
            form.about = "";
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
        <progress
          name="progress"
          :value="uploadValue.value"
          max="100"
        ></progress>
      </p>
    </div>

    <form @submit.prevent="onSubmit" v-else>
      <label for="name" class="fw-bolder form-label"> Nome </label>
      <div class="input-group mb-3">
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          name="name"
          required
        />
      </div>

      <label for="acronym" class="fw-bolder form-label"> Sigla </label>
      <div class="input-group mb-3">
        <input
          v-model="form.acronym"
          type="text"
          class="form-control"
          name="acronym"
          required
        />
      </div>

      <label for="about" class="fw-bolder form-label"> Sobre a parceria </label>
      <div class="input-group mb-3">
        <textarea
          v-model="form.about"
          type="text"
          class="form-control"
          name="about"
          aria-label="With textarea"
          required
        ></textarea>
      </div>

      <label for="inputImage" class="fw-bolder form-label"> Imagem </label>
      <div class="input-group mb-3">
        <input
          type="file"
          class="form-control"
          name="inputImage"
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
