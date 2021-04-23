import { createStore } from "vuex";
import router from "../router/index";
import * as fb from "../firebase";
export default createStore({
  state: {
    userProfile: {},
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth
        .signInWithEmailAndPassword(form.email, form.password)
        .catch((error) => {
          console.log(error);
        });
      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      commit("setUserProfile", userProfile.data());
      router.push('/dashboard')
    },
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
      console.log(val);
    },
  },
  modules: {},
});
