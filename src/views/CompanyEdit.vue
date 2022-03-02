<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getCompany, updateCompany, firebaseApp } from "@/firebase";

export default {
  name: "CompanyEdit",
  methods: {
    previewImage(event) {
      this.uploadValue.value = 0;
      this.imageData.data = event.target.files[0];
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const companyId = computed(() => route.params.id);

    const form = reactive({
      name: "",
      acronym: "",
      about: "",
      imgUrl: "",
    });
    onMounted(async () => {
      const company = await getCompany(companyId.value);
      form.name = company.name;
      form.acronym = company.acronym;
      form.about = company.about;
      form.imgUrl = company.imgUrl;
    });
    const imageData = reactive({ data: null });
    const uploadValue = reactive({ value: 0 });
    const update = async () => {
      window.scrollTo(0, 0);
      if (imageData.data == null) {
        await updateCompany(companyId.value, { ...form });
        router.push("/dataview");
        form.name = "";
        form.acronym = "";
        form.about = "";
        form.imgUrl = "";
      } else {
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
          .ref(`/company/${myNewFile.name}`)
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
              updateCompany(form.acronym, { ...form });
              form.name = "";
              form.acronym = "";
              form.about = "";
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

        <label for="about" class="fw-bolder form-label">
          Sobre a parceria
        </label>
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
          Update Company
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
