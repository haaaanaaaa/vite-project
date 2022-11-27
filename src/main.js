import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmWL5G4xTen43tzHLW3LRnNNIJpwFgfdU",
  authDomain: "vite-project-63516.firebaseapp.com",
  projectId: "vite-project-63516",
  storageBucket: "vite-project-63516.appspot.com",
  messagingSenderId: "550772645788",
  appId: "1:550772645788:web:74ed7fe469b7ce57bbf259",
  measurementId: "G-B1F03B55WC",
};
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");
