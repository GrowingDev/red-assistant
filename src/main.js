import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./firebase";

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    store.dispatch("fetchUserProfile", user);
  }
});

createApp(App)
  .use(store)
  .use(router)
  .use(auth)
  .mount("#app");
