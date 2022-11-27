<script setup>
import { reactive } from "@vue/reactivity";
import Email from "../input/Email.vue";
import Password from "../input/Password.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const data = reactive({
  email: "",
  password: "",
  passwordReinput: "",
});

const auth = getAuth();
const signUp = () => {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      alert("ユーザー作成に成功しました！");
    })
    .catch((error) => {
      console.log(error);
      alert("ユーザー作成に失敗しました");
    });
};
</script>

<template>
  <div id="app">
    <section class="vh-100">
      <div class="container py-5 vh-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem">
              <div class="card-body p-5 text-center bg-light">
                <h3 class="mb-5">Sign Up</h3>

                <Email id="email" title="Email" v-model="data.email" />
                <Password
                  id="password"
                  title="Password(6文字)"
                  v-model="data.password"
                />
                <Password
                  id="password-reinput"
                  title="Password(再入力)"
                  v-model="data.passwordReinput"
                />

                <button
                  class="btn btn-outline-primary btn-lg btn-block"
                  type="submit"
                  @click="signUp"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
