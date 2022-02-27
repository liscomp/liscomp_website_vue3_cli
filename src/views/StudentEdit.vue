<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getStudent, updateStudent, firebaseApp } from "@/firebase";

export default {
  name: "StudentEdit",
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
      level: "",
      scholarship: "",
      abbreviation: "",
      email: "",
      lattes: "",
      college: "",
      imgUrl: "",
    });
    onMounted(async () => {
      const student = await getStudent(studentId.value);
      form.name = student.name;
      form.level = student.level;
      form.scholarship = student.scholarship;
      form.abbreviation = student.abbreviation;
      form.email = student.email;
      form.lattes = student.lattes;
      form.college = student.college;
      form.imgUrl = student.imgUrl;
    });
    const imageData = reactive({ data: null });
    const uploadValue = reactive({ value: 0 });
    const update = async () => {
      window.scrollTo(0, 0);
      if (imageData.data == null) {
        await updateStudent(studentId.value, { ...form });
        router.push("/dataview");
        form.name = "";
        form.level = "";
        form.scholarship = "";
        form.abbreviation = "";
        form.email = "";
        form.lattes = "";
        form.college = "";
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
          .ref(`/equipe/${myNewFile.name}`)
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
              updateStudent(form.abbreviation, { ...form });
              form.name = "";
              form.level = "";
              form.scholarship = "";
              form.abbreviation = "";
              form.email = "";
              form.lattes = "";
              form.college = "";
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

        <label for="level" class="fw-bolder form-label"> Nivel </label>
        <div class="input-group mb-3">
          <input
            v-model="form.level"
            type="text"
            class="form-control"
            name="level"
            required
          />
        </div>

        <label for="scholarship" class="fw-bolder form-label"> Bolsa </label>
        <div class="input-group mb-3">
          <input
            v-model="form.scholarship"
            type="text"
            class="form-control"
            name="scholarship"
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

        <label for="college" class="fw-bolder form-label"> Faculdade </label>
        <div class="input-group mb-3">
          <input
            v-model="form.college"
            type="text"
            class="form-control"
            name="college"
            required
          />
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
          Update Student
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
