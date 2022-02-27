<script>
/* import firebase from "firebase"; */
// eslint-disable-next-line no-unused-vars
import { reactive } from "vue";
// eslint-disable-next-line no-unused-vars
import { firebaseApp, getArticle, updateArticle } from "@/firebase";

export default {
  name: "ArticleAddImage",
  setup() {
    const form = reactive({
      id: "",
      title: "",
      journal: "",
      url: "",
      authors: "",
      date: "",
      topics: "",
      abstract: "",
      imgUrl: "",
    });
    const imageData = reactive({ data: {} });
    const uploadValue = reactive({ value: 0 });
    const onSubmit = async (event) => {
      uploadValue.value = 0;
      imageData.data = event.target.files[0];
      const article = await getArticle(imageData.data.name.split(".")[0]);
      form.id = article.id;
      form.title = article.title;
      form.journal = article.journal;
      form.url = article.url;
      form.authors = article.authors;
      form.date = article.date;
      form.topics = article.topics;
      form.abstract = article.abstract;
      form.imgUrl = "";
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
            console.log(url);
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
