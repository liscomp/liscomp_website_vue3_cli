<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  getResearcherPartner,
  updateResearcherPartner,
  firebaseApp,
} from "@/firebase";

export default {
  name: "ResearcherPartnerEdit",
  methods: {
    previewImage(event) {
      this.uploadValue.value = 0;
      this.imageData.data = event.target.files[0];
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const studentId = computed(() => route.params.id);

    const form = reactive({
      name: "",
      abbreviation: "",
      institution: "",
      resume: "",
      email: "",
      lattes: "",
      imgUrl: "",
    });
    onMounted(async () => {
      const student = await getResearcherPartner(studentId.value);
      form.name = student.name;
      form.abbreviation = student.abbreviation;
      form.institution = student.institution;
      form.resume = student.resume;
      form.email = student.email;
      form.lattes = student.lattes;
      form.imgUrl = student.imgUrl;
    });
    const imageData = reactive({ data: null });
    const uploadValue = reactive({ value: 0 });
    const update = async () => {
      window.scrollTo(0, 0);
      if (imageData.data == null) {
        await updateResearcherPartner(studentId.value, { ...form });
        router.push("/dataview");
        form.name = "";
        form.abbreviation = "";
        form.institution = "";
        form.resume = "";
        form.email = "";
        form.lattes = "";
        form.imgUrl = "";
      } else {
        const fileExtension = imageData.data.name.split(".").pop();
        const myNewFile = new File(
          [imageData.data],
          `${form.abbreviation}.${fileExtension}`,
          {
            type: imageData.data.type,
          }
        );
        const storageRef = firebaseApp
          .storage()
          .ref(`/researcherPartner/${myNewFile.name}`)
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
              updateResearcherPartner(form.abbreviation, { ...form });
              form.name = "";
              form.abbreviation = "";
              form.institution = "";
              form.resume = "";
              form.email = "";
              form.lattes = "";
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

      <form @submit.prevent="update" v-else>
        <h3>Editar</h3>
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

        <label for="abbreviation" class="fw-bolder form-label">
          Nome abreviado
        </label>
        <div class="input-group mb-3">
          <input
            v-model="form.abbreviation"
            type="text"
            class="form-control"
            name="abbreviation"
            required
          />
        </div>

        <label for="institution" class="fw-bolder form-label">
          Instituição
        </label>
        <div class="input-group mb-3">
          <input
            v-model="form.institution"
            type="text"
            class="form-control"
            name="institution"
            required
          />
        </div>

        <label for="email" class="fw-bolder form-label"> Email </label>
        <div class="input-group mb-3">
          <input
            v-model="form.email"
            type="text"
            class="form-control"
            name="email"
            required
          />
        </div>

        <label for="lattes" class="fw-bolder form-label"> Lattes </label>
        <div class="input-group mb-3">
          <input
            v-model="form.lattes"
            type="text"
            class="form-control"
            name="lattes"
            required
          />
        </div>

        <label for="resume" class="fw-bolder form-label"> Resumo </label>
        <div class="input-group mb-3">
          <textarea
            v-model="form.resume"
            type="text"
            class="form-control"
            name="resume"
            aria-label="With textarea"
            required
          ></textarea>
        </div>

        <label for="inputImage" class="fw-bolder form-label"> Foto </label>
        <div class="input-group mb-3">
          <input
            type="file"
            class="form-control"
            name="inputImage"
            @change="previewImage"
            accept="image/*"
          />
        </div>

        <button type="submit" class="btn btn-success mt-3">
          Update Parceiro
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
