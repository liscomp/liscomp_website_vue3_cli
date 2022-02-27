<template>
  <div id="login" class="container login-page">
    <h1 class="name text-center">Admin</h1>
    <div class="form">
      <form @submit.prevent="onLogin" class="login-form">
        <label for="inputEmail" class="visually-hidden">Email</label>
        <input
          type="text"
          class="form-control"
          id="inputEmail"
          placeholder="Email"
          v-model="form.email"
        />
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Password"
          v-model="form.password"
        />
        <button type="submit" class="btn btn-success mb-3">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { adminLogin } from "@/firebase";
import { reactive } from "vue";
import { firebaseApp } from "@/firebase";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "AdminLogin",
  setup() {
    const form = reactive({
      email: "",
      password: "",
    });
    const onLogin = async () => {
      await adminLogin({ ...form });
      form.email = "";
      form.password = "";
    };
    const router = useRouter();

    onBeforeMount(() => {
      firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          router.replace("/dataview");
        }
      });
    });
    return { form, onLogin };
  },
};
</script>

<style lang="scss" scoped>
#login {
  .name {
    font-size: 2.5em;
    font-weight: 700;
    color: #036365;
  }
}

@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}
</style>
