<script>
/* import firebase from "firebase"; */
// eslint-disable-next-line no-unused-vars
import { reactive } from "vue";
// eslint-disable-next-line no-unused-vars
import { firebaseApp, getStudent, updateStudent } from "@/firebase";

export default {
  name: "StudentAddImage",
  setup() {
    const form = reactive({
      name: "",
      level: "",
      schorlarship: "",
      abbreviation: "",
      email: "",
      lattes: "",
      college: "",
      imgUrl: "",
    });
    const imageData = reactive({ data: {} });
    const uploadValue = reactive({ value: 0 });
    const onSubmit = async (event) => {
      uploadValue.value = 0;
      imageData.data = event.target.files[0];
      const student = await getStudent(imageData.data.name.split(".")[0]);
      form.name = student.name;
      form.level = student.level;
      form.schorlarship = student.schorlarship;
      form.abbreviation = student.abbreviation;
      form.email = student.email;
      form.lattes = student.lattes;
      form.college = student.college;
      form.imgUrl = "";
      const fileExtension = imageData.data.name.split(".").pop();
      console.log(form.abbreviation);
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
            form.schorlarship = "";
            form.abbreviation = "";
            form.email = "";
            form.lattes = "";
            form.college = "";
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
  <div>
    <div>
      <p>Upload an image to Firebase:</p>
      <input type="file" @change="onSubmit" accept="image/*" multiple />
    </div>
    <div>
      <p>
        Progress: {{ uploadValue.value.toFixed() + "%" }}
        <progress id="progress" :value="uploadValue.value" max="100"></progress>
      </p>
    </div>
  </div>
</template>

<style scoped>
img.preview {
  width: 200px;
}
</style>
