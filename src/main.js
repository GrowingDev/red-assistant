import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./firebase";
import '@/assets/css/main.scss';

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    store.dispatch("auth/fetchUserProfile", user);
  }
});

createApp(App)
  .use(store)
  .use(router)
  .use(auth)
  .mount("#app");
